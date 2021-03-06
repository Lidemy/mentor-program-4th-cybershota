/* eslint-disable import/prefer-default-export */
export function loginController(data) {
  return new Promise((resolve, reject) => {
    fetch('../src/model/login.php', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      // eslint-disable-next-line arrow-body-style
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        if (response.ok === false) {
          reject(response);
        } else {
          console.log('Server Response: ', response);
          resolve(response);
        }
      })
      .catch((error) => {
        console.log('Server Error', error);
        reject(error);
      });
  });
}
