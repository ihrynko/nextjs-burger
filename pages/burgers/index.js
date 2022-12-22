import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Burgers.module.css";

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
      {burgers.map((burger) => (
        <Link
          href={`/burgers/${burger.id}`}
          key={burger.id}
          className={styles.burgerCard}
        >
          <div className={styles.imageContainer}>
            <Image
              src={burger.image}
              alt={burger.name}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div>
            <h3>{burger.name}</h3>
            <p>{burger.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
