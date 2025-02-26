# Helper Function

### **catchAsync** Wrapper
- To avoid repetitive try-catch blocks in every route, create a helper function:
```js
const catchAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = catchAsync;

router.get("/bad-request", catchAsync(async (req, res, next) => {
    throw ErrorHandler.badRequest("Invalid request data");
}));
```
