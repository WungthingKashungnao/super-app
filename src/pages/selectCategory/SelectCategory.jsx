import CategoryCard from "../../components/categoryCard/CategoryCard";
import styles from "./selectCategory.module.css";
import { useContext } from "react";
import { context } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const SelectCategory = () => {
  const { localData, handleDelteCtg, ctgData } = useContext(context);
  const navigate = useNavigate();

  const handleNextPage = () => {
    if (ctgData.length >= 3) {
      console.log("into next page");
      localStorage.setItem("SavedCategories", JSON.stringify(localData)); //saving the selected categories
      navigate("/homePage");
    } else if (ctgData.length < 3) {
      console.log("minimun 3 categories required");
    }
  };

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
        {ctgData.length < 3 && ctgData.length > 0 && (
          <span className={styles.errorMessage}>
            Minimun 3 categories required
          </span>
        )}
      </div>
      {/* selected category options container end */}
      {/* left container end */}
      {/* right container start */}
      <div className={styles.right}>
        <div className={styles.categories}>
          <CategoryCard />
        </div>
        <button className={styles.nextPageBtn} onClick={() => handleNextPage()}>
          Next Page
        </button>
      </div>
      {/* right container end */}
    </div>
  );
};

export default SelectCategory;
