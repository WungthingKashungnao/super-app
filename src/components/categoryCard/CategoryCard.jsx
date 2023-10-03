import styles from "./categoryCard.module.css";
import categories from "../../dataSets/Constants";
import { useContext } from "react";
import { context } from "../../context/AppContext";
const CategoryCard = () => {
  const { handleCtgData } = useContext(context);

  return (
    <>
      {categories.map((data) => (
        <div
          key={data.value}
          className={styles.container}
          style={{
            backgroundColor: `${data.bgColor}`,
            border: `${data.isSelected && "5px solid #11B800"} `,
          }}
          onClick={() => handleCtgData(data)}
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
