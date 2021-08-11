import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

const About = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About PokeDex | Online Pokedex</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Online Pokedex -- About PokeDex</h1>
        <Image
          src={props.data1?.sprites.front_default}
          width={120}
          height={120}
        />
        <div className={styles.grid}>
          <h1>More information...</h1>
          <div className={styles.grid}>
          <h5>
            The online Pokedex is composed of data from different API sources.
            The Sprites come from the same api as the main Pokemon data, the
            feature image comes from another api and the 3D image is obtained
            from a Git repository. Credit to PokeAPI for availing their
            resources. This PokeDex was developed by ID Web's Lwandile Rozani,
            the chief engineer at ID Webs Market, using Next.js - a React based
            framework for web artisans.
          </h5>
          </div>
            <Image
              src={props.data2?.sprites.front_default}
              width={120}
              height={120}
            />
            <Image
              src={props.data3?.sprites.front_default}
              width={120}
              height={120}
            />
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps(data1, data2, data3) {
  const res_1 = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
  data1 = await res_1.json();
  const res_2 = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
  data2 = await res_2.json();
  const res_3 = await fetch("https://pokeapi.co/api/v2/pokemon/mew");
  data3 = await res_3.json();

  return {
    props: {
      data1,
      data2,
      data3,
    },
  };
}

export default About;
