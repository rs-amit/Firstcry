import React,{useEffect, useState} from 'react'
import {ProductsData } from "../../redux/const"
import Header from '../../components/Header/Header'
import Banner from './component/Banner'
import ProductList from './component/ProductList';
import { useLocation } from "react-router-dom";



function Products() {
  const [Products, setProducts] = useState([])
  const {state} = useLocation();

  useEffect(()=>{
   const selectedCategory =  ProductsData.find((productCategory)=>productCategory.category.toLowerCase() ===  state.data.category.toLowerCase())
   setProducts(selectedCategory)
  },[state.data.category])

  return (
    <div>
      <Header/>
      <Banner bannerImg = {Products?.bannerImg} bgColor = {Products?.bgColor}/>
      <ProductList products = {Products.products}/>
    </div>
  )
}

export default Products
