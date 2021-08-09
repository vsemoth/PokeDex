import Link from "next/link";
import Card from "../pages/Card";
import styles from "../styles/Home.module.css";

const Pokemon = ({ pokeURL }) => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <ul className="list-inline">
            {pokeURL.map((res, i) => (
              <li className="list-inline-item" key={i}>
                <Link href={`/${res.name.toString()}`}>
                  <a>
                    <Card id={i + 1} />
                    <br />
                    <span className="name">{res.name}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
};

export default Pokemon;
