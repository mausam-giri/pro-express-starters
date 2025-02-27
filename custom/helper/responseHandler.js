/**
 * Utility class for handling common HTTP success responses.
 */
class Response {
  /**
   * Sends a 200 OK response with a success message and optional data.
   * @param {import('express').Response} res - The Express response object.
   * @param {object} [result] - The data to be sent in the response.
   * @param {string} [message="Success"] - The success message.
   * @returns {import('express').Response} - The Express response object.
   */
  static success(res, result, message = "Success") {
    return res.status(200).json({ message, result });
  }

  /**
   * Sends a 201 Created response with a success message and optional data.
   * @param {import('express').Response} res - The Express response object.
   * @param {object} [result] - The data to be sent in the response.
   * @param {string} [message="Created"] - The success message.
   * @returns {import('express').Response} - The Express response object.
   */
  static created(res, result, message = "Created") {
    return res.status(201).json({ message, result });
  }

  /**
   * Sends a 204 No Content response.
   * @param {import('express').Response} res - The Express response object.
   * @returns {import('express').Response} - The Express response object.
   */
  static noContent(res) {
    return res.status(204).send();
  }
}

module.exports = Response;
