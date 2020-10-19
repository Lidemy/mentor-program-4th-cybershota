/* eslint-disable import/prefer-default-export */
export function addCommentController(data) {
  return new Promise((resolve, reject) => {
    fetch('../src/model/add_comment.php', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      // eslint-disable-next-line arrow-parens
      .then((res) => res.json())
      .then((response) => {
        console.log('Success: ', response);
        resolve(true);
      })
      .catch((error) => {
        console.log('Error: ', error);
        reject(error);
      });
  });
}
