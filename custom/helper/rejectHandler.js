/**
 * Utility class for handling common HTTP error responses.
 */
class Reject {
  /**
   * Throws a 400 Bad Request error.
   * @param {string} [message="Bad Request"] - The error message.
   * @throws {Error} - An error object with statusCode and message.
   */
  static badRequest(message = "Bad Request") {
    const error = new Error(message);
    error.statusCode = 400;
    throw error;
  }

  /**
   * Throws a 401 Unauthorized error.
   * @param {string} [message="Unauthorized"] - The error message.
   * @throws {Error} - An error object with statusCode and message.
   */
  static unauthorized(message = "Unauthorized") {
    const error = new Error(message);
    error.statusCode = 401;
    throw error;
  }

  /**
   * Throws a 403 Forbidden error.
   * @param {string} [message="Forbidden"] - The error message.
   * @throws {Error} - An error object with statusCode and message.
   */
  static forbidden(message = "Forbidden") {
    const error = new Error(message);
    error.statusCode = 403;
    throw error;
  }

  /**
   * Throws a 404 Not Found error.
   * @param {string} [message="Not Found"] - The error message.
   * @throws {Error} - An error object with statusCode and message.
   */
  static notFound(message = "Not Found") {
    const error = new Error(message);
    error.statusCode = 404;
    throw error;
  }

  /**
   * Throws a 500 Internal Server Error.
   * @param {string} [message="Internal Server Error"] - The error message.
   * @throws {Error} - An error object with statusCode and message.
   */
  static internalServerError(message = "Internal Server Error") {
    const error = new Error(message);
    error.statusCode = 500;
    throw error;
  }
}

module.exports = Reject;
