import React from 'react';
import Header from '../../components/Header/Header';
import {BannerList, PremiumBoutiques} from "./const"
import Slider from '../../components/Slide/Slide';
import Offers from '../../components/Offers/Offers';
import ProductList from './components/ProductList';

function Home() {
  return (
    <div>
       <Header/>
       <Offers/>
       <Slider bannerList={BannerList} />
       <ProductList PremiumBoutiques={PremiumBoutiques}/>
    </div>
  )
}

export default Home;

