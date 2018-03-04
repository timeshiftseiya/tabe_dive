const setAuthorizeData = {
  setHeader: () => {
    const data =  { "access-token": sessionStorage.accessToken,
      "token-type": "Bearer",
      "client": sessionStorage.client,
      "expiry": sessionStorage.expiry,
      "uid": sessionStorage.uid
    }
    return data
  },
  setAccessToken: (res) => {
    sessionStorage.setItem('accessToken', res.headers["access-token"]);
    sessionStorage.setItem('client', res.headers.client);
    sessionStorage.setItem('token-type', res.headers["token-type"]);
    sessionStorage.setItem('expiry', res.headers.expiry);
    sessionStorage.setItem('uid', res.headers.uid);
  }
}

export default setAuthorizeData