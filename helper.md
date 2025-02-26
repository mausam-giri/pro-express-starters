# Helper Function

### **catchAsync** Wrapper
- To avoid repetitive try-catch blocks in every route, create a helper function:
```js
const catchAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = catchAsync;
```

- Usage
```js
router.get("/bad-request", catchAsync(async (req, res, next) => {
    throw ErrorHandler.badRequest("Invalid request data");
}));

router.get("/async-error", catchAsync(async (req, res, next) => {
    const result = await someAsyncFunction(); // If it fails, catchAsync will handle it
    res.json(result);
}));
```

### Static Class for Error Handling
- To avoid repetitive try-catch blocks in every route, create a helper function:
```js
class ErrorHandler {
    static badRequest(message = "Bad Request") {
        return { statusCode: 400, message };
    }

    static unauthorized(message = "Unauthorized Access") {
        return { statusCode: 401, message };
    }

    static serverError(message = "Internal Server Error") {
        return { statusCode: 500, message };
    }
}

module.exports = ErrorHandler;
```
- Centralized Middleware
```js
const errorMiddleware = (err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;

    if (process.env.NODE_ENV === "development") {
        console.error(`[${statusCode}] ${message}`);
    }

    res.status(statusCode).json({ error: message });
};

module.exports = errorMiddleware;
```

- Usage

```js
router.get("/bad-request", (req, res, next) => {
    next(ErrorHandler.badRequest("Invalid request data"));
});
```

```js
// API routes
app.use("/api", routes);

// Error handler middleware (should be last)
app.use(errorMiddleware);
```
