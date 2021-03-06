/* eslint-disable import/prefer-default-export */
const cookieController = {
  getCookie() {
    const cookieObj = {};
    document.cookie.split(';').forEach((c) => {
      const split = c.split('=');
      if (split[0] && split[1]) {
        cookieObj[split[0].trim()] = split[1].trim();
      }
    });
    return cookieObj;
  },
  validateCookie() {
    return new Promise((resolve, reject) => {
      fetch('../src/model/cookie_validation.php', {
        method: 'POST',
      })
        // eslint-disable-next-line arrow-body-style
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  },
};

export { cookieController };
