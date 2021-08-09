import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=898"
  );

  const data = await res.json();

  const paths = data.results.map((pokemon) => {
    return {
      params: { name: pokemon.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const name = context.params.name;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

const Details = ({ pokemon }) => {
  return (
    <>
      <Head>
        <title>Hi {pokemon.name}</title>
      </Head>
      <section>
        <div className={styles.container}>
          <h1>
            <Image
              src={`https://raw.githubusercontent.com/ZeChrales/PogoAssets/master/pokemon_icons/pokemon_icon_${pokemon.id
                .toString()
                .padStart(3, "0")}_00.png`}
                priority={true}
              width={300}
              height={300}
              alt={pokemon.name}
            />
            {pokemon.name}
            <Image
              src={pokemon.sprites.front_default}
              priority={true}
              width={160}
              height={160}
              alt={pokemon.name}
            />
          </h1>
          <Image
            src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            priority={true}
            width={800}
            height={800}
            alt={pokemon.name}
          />
        </div>
      </section>
    </>
  );
};

export default Details;
