import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objectVideo) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objectVideo),
  })
    .then(async (serverAnswer) => {
      if (serverAnswer.ok) {
        const answer = await serverAnswer.json();
        return answer;
      }

      throw new Error('Não foi possível consultar os dados');
    });
}

export default {
  create,
};
