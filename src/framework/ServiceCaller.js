import _ from "lodash";

class ServiceCaller {
  url;
  response;

  constructor(url) {
    this.url = url;
  }

  callService() {
    fetch(this.url)
      .then(res => {
        return res.json();
      })
      .catch(console.log);
  }
}

export default ServiceCaller;
