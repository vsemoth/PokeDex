import Head from "next/head";
import styles from "../styles/Home.module.css";
import Pokemon from "../components/Pokemon";

export default function Home({ pokeURL }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon Index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the online <a href="/">Pokedex</a>
        </h1>

        <p className={styles.description}>
          <em>A Full Pokemon PokeDex</em>
        </p>

        <div className={styles.grid} key={pokeURL.map(poke => poke.name)}>
          <Pokemon pokeURL = {pokeURL} />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118`
  );

  const data = await res.json();

  return {
    props: {
      pokeURL: data.results.map((object) => object),
    },
  }
}
