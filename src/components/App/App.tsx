import React from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import ShopByCategories from '../ShopByCategories/ShopByCategories';
import Banner_Two from '../Banner_Two/Banner_Two';
import PopularProducts from '../Popular_products/PopularProducts';


const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Banner />
      <ShopByCategories />
      <Banner_Two />
      <PopularProducts />
    </div>
  );
};

export default App;
