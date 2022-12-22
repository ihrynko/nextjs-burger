import Head from "next/head";

export default function Reviews({ reviews }) {
  return (
    <>
      <Head>
        <title>Fat Burgers</title>
        <meta name="title" content="Fat Burgers" />
      </Head>
      <div>
        <h1>Reviews</h1>
        <div className="reviews">
          {reviews.length &&
            reviews.slice(0, 20).map((review) => {
              return (
                <div key={review.id} className="review">
                  {review.id}) {review.body.slice(0, 90)}...
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  return {
    props: {
      reviews: data.slice(0, 20),
    },
  };
}
