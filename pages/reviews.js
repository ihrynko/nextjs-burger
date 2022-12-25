import Head from "next/head";

export default function Reviews({ reviews }) {
  return (
    <>
      <Head>
        <title>Fat Burgers</title>
        <meta name="title" content="Fat Burgers" />
      </Head>
      <div>
        <h1>Отзывы клиентов</h1>
        <div className="reviews">
          {reviews.length &&
            reviews.map((res) => {
              return (
                <div key={res.id} className="review">
                  {res.id}) {`${res.body.slice(0, 90)}...`}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();

  return {
    props: {
      reviews: data.slice(0, 20),
    },
  };
}
