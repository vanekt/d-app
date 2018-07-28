import { apiVersion, getOptions, postOptions, toJson, errorToTransport } from './common';

/**
 * Auth api.
 */
export default class {
  /**
   * @param {string} apiUrl - адрес api-сервера
   * @param {string} version - версия api, например v1
   */
  constructor(apiUrl, version = apiVersion) {
    /**
     * @type {string}
     */
    this.url = apiUrl + '/api/' + version;
  }

  /**
   * User login method
   * @param {string} username - имя пользователя
   * @param {string} password - пароль
   */
  login(username, password) {
    return this.fetch(this.url + '/auth/login', {
      ...postOptions,
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(toJson)
      .catch(errorToTransport);
  }

  /**
   * User logout method
   */
  logout() {
    return this.fetch(this.url + '/auth/logout', getOptions)
      .then(toJson)
      .catch(errorToTransport);
  }
}
