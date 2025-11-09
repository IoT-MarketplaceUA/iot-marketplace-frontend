import React from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import ShopByCategories from '../ShopByCategories/ShopByCategories';
import Banner_Two from '../Banner_Two/Banner_Two';


const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Banner />
      <ShopByCategories />
      <Banner_Two />
    </div>
  );
};

export default App;
