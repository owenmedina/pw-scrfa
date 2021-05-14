import React from 'react';
import styles from './App.module.scss';
import Header from "./components/Header/Header";
import MainHeading from "./components/Main Heading/MainHeading";
import Sections from "./components/Sections/Sections";
import Info from './components/Info/Info';
import Footer from "./components/Footer";
import Section from './types/Section';
import './index.scss';

import {ReactComponent as DataSVG} from './assets/svg/data.svg';
import {ReactComponent as GeographySVG} from './assets/svg/geography.svg';
import {ReactComponent as ProgramsSVG} from './assets/svg/programs.svg';
import {ReactComponent as FiscalSVG} from './assets/svg/fiscal.svg';

function App() {
  const sections = [new Section(<DataSVG />, 'Data & Research'), new Section(<GeographySVG fill='#35b0cb'/>, 'Geography & Mapping'), new Section(<ProgramsSVG fill="#d2b859"/>, 'Programs & Services'), new Section(<FiscalSVG fill="#35b0cb"/>, 'Legislative Fiscal Impacts')];
  return (
    <div className={styles.App}>
      <Header />
      <MainHeading />
      <Sections sections={sections}/>
      <Info />
      <Footer />
    </div>
  );
}

export default App;
