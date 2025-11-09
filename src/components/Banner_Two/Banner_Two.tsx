import React from "react";
import styles from "./Banner_Two.module.css";
import shopIcon from "./shopIcon.svg";
import diagonalLine from "./diagonalLine.svg";
import diagonalLine_two from "./diagonalLine_two.svg";

const Banner: React.FC = () => {
  return (
    <section className={styles.banner}>
          <div className={styles.bannerContainer}>
              <img src={diagonalLine} alt="Diagonal line" className={styles.diagonalLine} />
              <img src={diagonalLine_two} alt="Diagonal line" className={styles.diagonalLine_two} />
        <h1 className={styles.title}>Lorem ipsum eget magna orci</h1>

        <button className={styles.shopButton}>
  Try now
  <img src={shopIcon} alt="Shop icon" className={styles.shopIcon} />
</button>
      </div>
    </section>
  );
};

export default Banner;
