import React, { useRef } from "react";
import styles from "./PopularProducts.module.css";
import Bag from "./svg/Bag.svg";
import ArrowLeftIcon from "./svg/left.svg";
import ArrowRightIcon from "./svg/rigth.svg";

const products = [
  {
    category: "Smart home",
    oldPrice: 89.99,
    newPrice: 69.99,
    isNew: true,
    isHit: true
  },
  {
    category: "Wearables",
    oldPrice: 120.0,
    newPrice: 99.0,
    isNew: true,
    isHit: false
  },
  {
    category: "Sensors",
    oldPrice: 45.5,
    newPrice: 35.0,
    isNew: true,
    isHit: false
  },
  {
    category: "Security",
    oldPrice: 150.0,
    newPrice: 119.99,
    isNew: true,
    isHit: true
  },
  {
    category: "Lighting",
    oldPrice: 60.0,
    newPrice: 39.99,
    isNew: true,
    isHit: false
  },
  {
    category: "Energy",
    oldPrice: 110.0,
    newPrice: 85.0,
    isNew: true,
    isHit: false
  },
  {
    category: "Health",
    oldPrice: 75.0,
    newPrice: 59.99,
    isNew: false,
    isHit: false
  },
  {
    category: "Robotics",
    oldPrice: 200.0,
    newPrice: 159.99,
    isNew: true,
    isHit: false
  }
];

const PopularProducts: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className={styles.categories}>
      <div className={styles.container_categories}>
        <h2 className={styles.heading}>POPULAR PRODUCTS</h2>

        <div className={styles.carouselWrapper}>
          <div className={styles.carousel} ref={carouselRef}>
            {products.map((product, index) => (
              <div className={styles.card} key={index}>
                {product.isNew && <div className={styles.badgeNew}>New</div>}
                {product.isHit && <div className={styles.badgeHit}>Hit</div>}
                <div className={styles.image}>
                  <img
                    src={`/src/components/ShopByCategories/foto/foto.png`}
                    alt={product.category}
                  />
                </div>
                <div className={styles.p_b}>
                  <p className={styles.categoryName}>{product.category}</p>
                  <p className={styles.productCount}>Lorem ipsum dolor sit amet consectetur.</p>
                  <div className={styles.price_shop}>
                    <p className={styles.newPrice}>{product.newPrice} Є</p>
                    <p className={styles.oldPrice}>{product.oldPrice} Є</p>
                    <button className={styles.shopButton}>
                      <img src={Bag} alt="Bag icon" className={styles.shopIcon} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className={styles.arrowLeft} onClick={scrollLeft}>
            <img src={ArrowLeftIcon} alt="Left arrow" />
          </button>

          <button className={styles.arrowRight} onClick={scrollRight}>
            <img src={ArrowRightIcon} alt="Right arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
