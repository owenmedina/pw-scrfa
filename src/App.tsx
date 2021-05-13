import React from 'react';
import styles from './App.module.scss';
import Header from "./components/Header/Header";
import MainHeading from "./components/MainHeading";
import Pages from "./components/Pages";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <MainHeading />
      <Pages />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
