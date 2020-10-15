/* eslint-disable import/prefer-default-export */
export function getCommentsController() {
  return new Promise((resolve, reject) => {
    fetch('../src/model/comments.php', {
      method: 'GET',
    })
      // eslint-disable-next-line arrow-body-style
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data.comments);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
