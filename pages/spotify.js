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
        Authorization: `Bearer `,
      },
    }
  ).then((res) => res.json());

  return {
    props: {
      response,
    },
  };
}
