import { apiVersion, getOptions, postOptions, toJson } from './common';

export default class {
  constructor(apiUrl, version = apiVersion) {
    this.url = apiUrl + '/api/' + version;
  }

  login(data) {
    return this.fetch(this.url + '/auth/login', {
      ...postOptions,
      body: JSON.stringify({
        login: data.username,
        password: data.password
      })
    })
      .then(toJson)
      .catch(errorToTransport);
  }

  logout() {
    return this.fetch(this.url + '/auth/logout', getOptions)
      .then(toJson)
      .catch(errorToTransport);
  }
}
