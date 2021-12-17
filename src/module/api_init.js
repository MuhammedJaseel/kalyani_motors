import axios from "axios";

const baseApi = "http://agtest.escvpn.com/api/plan/1";

async function apiInitGet(api) {
  await axios
    .get(baseApi)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  await axios
    .get(baseApi)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  await axios
    .get(baseApi)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  await axios
    .get(baseApi)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  await axios
    .get(baseApi)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return 0;
}

async function apiInitPost(api) {
  return 0;
}

async function apiInitPut(api) {
  return 0;
}

async function apiInitDelete(api) {
  return 0;
}

export { apiInitDelete, apiInitGet, apiInitPost, apiInitPut };
