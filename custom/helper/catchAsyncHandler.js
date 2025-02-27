/**
 * Wraps an asynchronous Express route handler to catch and forward errors.
 *
 * @example
 * // Usage in an Express route
 * app.get('/example', catchAsync(async (req, res, next) => {
 *   const data = await someAsyncOperation();
 *   res.status(200).json({ data });
 * }));
 *
 * @param {Function} fn - The asynchronous route handler function.
 * @returns {Function} - A new function that handles errors and passes them to Express's error-handling middleware.
 */
const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = catchAsync;
