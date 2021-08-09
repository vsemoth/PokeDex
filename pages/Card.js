import styles from "../styles/Home.module.css";
import Image from "next/image";

const Card = ({ id }) => {
  console.log(id);
  return (
    <Image
      className={styles.card}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      alt={`pokemon #${id}`}
    />
  );
};

export default Card;
