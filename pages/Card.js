import styles from "../styles/Home.module.css";

const Card = ({ id }) => {
    console.log(id)
    return (
        <img className={styles.card} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
    );
}
 
export default Card;