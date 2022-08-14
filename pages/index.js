export default function Home() {
  let fakeData;

  const getData = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
      const data = await res.json();
      fakeData = [...data];
    } catch (err) {
      console.log(err);
    }
    console.log(fakeData);
  };

  return (
    <div>
      <p>Hello from the app</p>
      <button onClick={getData}>Get data</button>
    </div>
  );
}
