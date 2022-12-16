import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fat Burgers | Main page</title>
        <meta name="title" content="Fat Burgers" />
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>
          Welcome to Burger Shop
        </h1>
        <div className={styles.mainImage}>
          <Image
            src="/fatburger.png"
            alt="fat burger"
            width={400}
            height={300}
          />
        </div>
        <p className={styles.text}>
          What is the perfect burger? Fresh lettuce leaf, soft buns, juicy meat.
          You can argue about other components of the filling, because this is a
          matter taste.
        </p>
        <p className={styles.text}>
          There are a couple of other factors that affect appetite: prices,
          quality service, good atmosphere.
        </p>
        <Link href="/burgers/" className={styles.btn}>
          All Burgers
        </Link>
      </div>
    </>
  );
}
