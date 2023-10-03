import styles from "./categoryCard.module.css";
import categories from "../../dataSets/Constants";

const CategoryCard = () => {
  return (
    <>
      {categories.map((data) => (
        <div
          key={data.value}
          className={styles.container}
          style={{ backgroundColor: `${data.bgColor}` }}
        >
          <div className={styles.text}>
            <h3>{data.label}</h3>
          </div>
          <div className={styles.img}>
            <img src={data.imgUrl} alt="category img" />
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryCard;
