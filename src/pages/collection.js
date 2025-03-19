import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext} from '../context/shopcontext'
import { assets } from '../assets/frontend_assets/assets';
import Tittle from "../components/Tittle"
import Productitem from "../components/Productitem"
function Collection() {
  let { products ,search,showsearch} = useContext(Shopcontext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subcategory, setsubcategory] = useState([]);

  const togglecategory = (e) => {
    if (category.includes(e.target.value)) { // if the particular category is present in arr then also clicked  then remove it from the arr 
      setcategory(prev => prev.filter(item => item !== e.target.value));
    }
    else { // if not present then simply include it 
      setcategory(prev => [...prev, e.target.value]);
    }
  }

  // toogle for the subcategory
  const togglesubcategory = (e) => {
    const value = e.target.value;

    setsubcategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };
  // logic for applying the  filter in the app 
  useEffect(() => {
    let filteredProducts = Array.isArray(products) ? [...products] : [];
  
    // Apply search filter if search and showSearch are active
    if (search.trim() && showsearch) {
      filteredProducts = filteredProducts.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  
    // Apply category and subcategory filters
    if (category.length > 0 || subcategory.length > 0) {
      filteredProducts = filteredProducts.filter(item => 
        (category.length === 0 || category.includes(item.category)) &&
        (subcategory.length === 0 || subcategory.includes(item.subCategory))
      );
    }
  
    setFilterProducts(filteredProducts);
  
  }, [category, subcategory, search, showsearch, products]); // Added `products` dependency
  
  // logic for sorting the elements 
  const sortitems = (e) => {
    let sortedProducts = [...filterProducts]; // Create a copy of the current filtered products

    if (e.target.value === 'low-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    else if (e.target.value === 'high-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    else {
      for (let i = sortedProducts.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [sortedProducts[i], sortedProducts[j]] = [sortedProducts[j], sortedProducts[i]];
      }
    }

    setFilterProducts(sortedProducts); // Update state with sorted data
  };

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className="min-w-60 mb-2">
        {/* Toggle Button - Visible only on xs screens */}
        <div className="sm:hidden mb-2">
          <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer">
            Filter Options
            <img
              className={`h-3 ml-2 transition-transform ${showFilter ? 'rotate-90' : ''}`}
              src={assets.dropdown_icon}
              alt="Toggle Filter"
            />
          </p>
        </div>

        {/* Filter Sections - Always Visible on sm and larger */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden sm:block'}`}>
          {/* Category Filter */}
          <div>
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <label className="flex gap-2">
                <input className="w-3" type="checkbox" value="Men" onChange={togglecategory} /> Men
              </label>
              <label className="flex gap-2">
                <input className="w-3" type="checkbox" value="Women" onChange={togglecategory} /> Women
              </label>
              <label className="flex gap-2">
                <input className="w-3" type="checkbox" value="Kids" onChange={togglecategory} /> Kids
              </label>
            </div>
          </div>

          {/* Subcategory Filter */}
          <div className="mt-5">
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <label className="flex gap-2">
                <input className="w-3" type="checkbox" value="Topwear" onChange={togglesubcategory} /> Topwear
              </label>
              <label className="flex gap-2">
                <input className="w-3" type="checkbox" value="Bottomwear" onChange={togglesubcategory} /> Bottomwear
              </label>
              <label className="flex gap-2">
                <input className="w-3" type="checkbox" value="Winterwear" onChange={togglesubcategory} /> Winterwear
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* right side for the collections page  */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Tittle text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select className='border-2 border-gray-300 text-sm px-2' onChange={sortitems}>
            <option value='relevant'>Sort by: Relevant</option>
            <option value='low-high'>Sort by: Low to High</option>
            <option value='high-low'>Sort by: High to Low</option>
          </select>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts?.map((item, index) => (
            <Productitem
              key={item._id}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection