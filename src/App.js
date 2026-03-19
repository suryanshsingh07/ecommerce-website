import React, { useState, useEffect } from "react";
import Nav from "./components/nav";
import Rout from "./components/rout";
import Footer from "./components/footer";
import Homeproduct from "./components/home_product";


const App = () =>{
  // add to cart
  const [cart, setCart] = useState([]);
  // Shop page
  const [shop, setShop] = useState(Homeproduct);
  // shop search filter
  const [search, setSearch] = useState('');
  // Shop category filter
  const Filter = (x) =>{
    const catefilter = Homeproduct.filter((product) =>{
      return product.category === x
    })
    setShop(catefilter)
  }
  // shop all products
  const allcatefilter = () =>{
    setShop(Homeproduct)
  }
  // shop search filter function
  useEffect(() => {
    if (search === "") {
      setShop(Homeproduct);
    } else {
      const filteredProducts = Homeproduct.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      setShop(filteredProducts);
    }
  }, [search]);
  // add to cart
  const addtocart = (product) =>{
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if(exist){
      alert("This product is already added in cart.")
    }else{
      setCart([...cart, {...product, qty:1}])
      alert("Product added to cart SUCCESSFULLY!!")
    }
  }

  return(
    <>    
      <Nav search={search} setSearch={setSearch}/>
      <Rout cart={cart} setCart={setCart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
      <Footer/>
    </>

  );
}

export default App