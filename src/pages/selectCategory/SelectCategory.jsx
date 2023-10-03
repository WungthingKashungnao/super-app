import CategoryCard from "../../components/categoryCard/CategoryCard";
import styles from "./selectCategory.module.css";

const SelectCategory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div className={styles.categories}>
          <CategoryCard />
        </div>
        <button>Next Page</button>
      </div>
    </div>
  );
};

export default SelectCategory;
