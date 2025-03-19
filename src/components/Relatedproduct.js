import { Shopcontext } from "../context/shopcontext";
import { useContext, useState, useEffect } from "react";
import React from "react";
import Productitem from "./Productitem";
import Tittle from "./Tittle";
import { Link } from "react-router"; // Fixed import

function Relatedproduct({ category, subCategory }) {
  const { products } = useContext(Shopcontext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]); // Added category and subCategory

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Tittle text1={"RELATED"} text2={"PRODUCTS"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item) => ( 
            <Productitem  key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
}

export default Relatedproduct;
