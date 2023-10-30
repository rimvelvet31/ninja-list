// Used to determine how many HTML pages to create based on data
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// Runs for each path, so this will run 10 times since there are 10 paths
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>Username: {ninja.username}</p>
      <p>Email: {ninja.email}</p>
      <p>Website: {ninja.website}</p>
      <p>Address: {ninja.address.city}</p>
    </div>
  );
};

export default Details;
