import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './AllProducts.css';
import ShoppingGrid from '../ShoppingGrid/ShoppingGrid';
import productList from '../seed/AllProducts';

/* activePage is for pagination of ShoppingGrid.*/
function AllProducts({location}){
  const params = new URLSearchParams(location.search);
  // const [products,setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const url = "http://localhost:8080/product/all";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);

  //     const result = await axios.get(url);
      
  //     setProducts(result.data);
  //     setIsLoading(false);
  //   };
    
  //   fetchData();
  // },url);

  return(
    <section>
      <ShoppingGrid list={productList} activePage = {params.get("page")} title="ALL PRODUCTS"></ShoppingGrid>
    </section>
  )
}

export default AllProducts;