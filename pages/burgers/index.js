export const getStaticProps = async () => {
  const response = await fetch("http://localhost:5000/items");
  const data = await response.json();

  return {
    props: { burgers: data },
  };
};

export default function Burgers({ burgers }) {
  return (
    <div>
      <h1>Our Burgers</h1>
    </div>
  );
}
