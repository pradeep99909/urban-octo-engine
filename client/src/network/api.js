class Api {
  constructor(url) {
    this.url = url;
  }
  async call(path, requestOptions) {
    const data = await fetch(this.url + path, requestOptions);
    const json = await data.json();
    return json;
  }
  getUrl() {
    return this.url;
  }
  async getData(path) {
    const requestOptions = {
      method: "GET",
    };
    const request = await this.call(path, requestOptions);
    return request;
  }
  async postData(path, body) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(body);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    const request = await this.call(path, requestOptions);
    return request;
  }
  async updateDate(path, body) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(body);
    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
    };
    const request = await this.call(path, requestOptions);
    return request;
  }
  async deletData(path) {
    const requestOptions = {
      method: "DELETE",
    };
    const request = await this.call(path, requestOptions);
    return request;
  }
}

export default Api;
