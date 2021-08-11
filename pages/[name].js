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
  console.log(pokemon.abilities.map((ability) => ability.ability.name));
  return (
    <div className={styles.container}>
      <Head>
        <title>Hi {pokemon.name}</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image
            src={`https://raw.githubusercontent.com/ZeChrales/PogoAssets/master/pokemon_icons/pokemon_icon_${pokemon.id
              .toString()
              .padStart(3, "0")}_00.png`}
            width={300}
            height={300}
            alt={pokemon.name}
            placeholder="blur"
            blurDataURL={`https://raw.githubusercontent.com/ZeChrales/PogoAssets/master/pokemon_icons/pokemon_icon_${pokemon.id
              .toString()
              .padStart(3, "0")}_00.png`}
          />
          {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
          <Image
            src={pokemon.sprites.front_default}
            priority={true}
            width={160}
            height={160}
            alt={pokemon.name}
          />
        </h1>
        <div className={styles.grid}>
          <table className="table tableBordered">
            <thead>
              <th className="th id">ID:</th>
              <th className="th weight">Weight:</th>
              <th className="th pn">Pokemon:</th>
              <th className="th pt">Type:</th>
              <th className="th pa">Abilities:</th>
            </thead>
            <tbody>
              <td>{pokemon.id}</td>
              <td>{pokemon.weight}</td>
              <td>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</td>
              <td>{pokemon.types.map((el) => el.type.name[0].toUpperCase() + el.type.name.slice(1))}</td>
              <td>
                {pokemon.abilities.map(
                  (ability) => ability.ability.name[0].toUpperCase() + ability.ability.name.slice(1) + `, `
                )}
              </td>
            </tbody>
          </table>
        </div>
        <div className={styles.grid}>
          <Image
            src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            width={800}
            height={800}
            alt={pokemon.name}
            placeholder="blur"
            blurDataURL={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
          />
        </div>
      </main>
    </div>
  );
};

export default Details;
