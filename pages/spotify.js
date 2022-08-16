export default function spotifyStuff({ response }) {
  return (
    <div>
      <h2>Genres on spotify</h2>
      <ul>
        {response.genres.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    'https://api.spotify.com/v1/recommendations/available-genre-seeds ',
    {
      headers: {
        // GET NEW AUTH CODE
        Authorization: `Bearer ${process.env.SPOTIFY_AUTH_TOKEN}`,
      },
    }
  ).then((res) => res.json());

  return {
    props: {
      response,
    },
  };
}

// +++++++++++++++++++++++++++ //
// var client_id = '9c5c9c7ea78e44bc993e2fb7dc3bc11e';
// var client_secret = '41ce1f2385f44804b1743c3bfca16d0f';

// var authOptions = {
//   url: 'https://accounts.spotify.com/api/token',
//   headers: {
//     Authorization:
//       'Basic ' + new Buffer(client_id + ':' + client_secret).toString('base64'),
//   },
//   form: {
//     grant_type: 'client_credentials',
//   },
//   json: true,
// };

// request.post(authOptions, function (error, response, body) {
//   if (!error && response.statusCode === 200) {
//     var token = body.access_token;
//   }
// });
