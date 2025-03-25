import React, { useState } from 'react';
import ProductItem from "./ProductItem";
function ProductList({items}) {
    const [category, setCategory] = useState('All');
    const [filterCategory, setFilterCategory] = useState(['All','Gibson','Fender','Gretsch']);
    return (
        <>
            <div className="d-flex flex-row justify-center m-b-10 ">
                {
                    filterCategory.map((value,index) => (
                        <button className={value == category ? 'btn active' : 'btn' } key={index} onClick={() => setCategory(value)}>
                            {value}
                        </button>
                    ))
                }
            </div>

            <div className="d-flex flex-row  justify-center flex-wrap ">
                {   items.map((product,index) => (
                        product.category == category || category == 'All' ?
                            <ProductItem key={index} product={product} />
                        : ''
                    ))
                }
            </div>
        </>
    );
}
export default ProductList;