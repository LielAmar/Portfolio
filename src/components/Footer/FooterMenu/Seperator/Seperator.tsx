import styles from "./Seperator.module.css";

interface props {}

const Seperator: React.FC<props> = () => {
  return (
    <div className={ styles.seperator }>
    </div>
  );
}

export default Seperator;
