/* eslint-disable import/prefer-default-export */
export function logoutController() {
  return new Promise((resolve, reject) => {
    fetch('../src/utils/logout.php', {
      method: 'POST',
    })
      // eslint-disable-next-line arrow-body-style
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        resolve(body);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
