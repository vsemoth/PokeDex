import styles from "../styles/Home.module.css";
import Image from "next/image";

const Card = ({ id }) => {
  return (
    <Image
      className={styles.image}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      width={100}
      height={100}
      alt={`pokemon #${id}`}
      placeholder="blur"
      blurDataURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
    />
  );
};

export default Card;
