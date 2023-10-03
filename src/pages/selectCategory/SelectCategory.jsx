import CategoryCard from "../../components/categoryCard/CategoryCard";
import styles from "./selectCategory.module.css";
import { useContext } from "react";
import { context } from "../../context/AppContext";
const SelectCategory = () => {
  const { handleDelteCtg, localData } = useContext(context);

  return (
    <div className={styles.container}>
      {/* left container start */}
      <div className={styles.left}>
        <h1>Super App</h1>
        <p>
          Choose your <br /> entertainment <br /> category
        </p>

        {/* selected category options container start */}
        <div className={styles.selectedoptionsContainer}>
          {localData &&
            localData.map((data) => (
              <button className={styles.selectedCategories} key={data.value}>
                {data.label}{" "}
                <span
                  onClick={() => handleDelteCtg(data)}
                  className={styles.deleteBtn}
                >
                  X
                </span>
              </button>
            ))}
        </div>
      </div>
      {/* selected category options container end */}
      {/* left container end */}
      {/* right container start */}
      <div className={styles.right}>
        <div className={styles.categories}>
          <CategoryCard />
        </div>
        <button className={styles.nextPageBtn}>Next Page</button>
      </div>
      {/* right container end */}
    </div>
  );
};

export default SelectCategory;
