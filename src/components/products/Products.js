import React from "react";

function Products({items}) {
    return(
        <div>
            <h1 className='product-title'>Produkter</h1>
            <div className='wrapper'>{items}</div>
        </div>
    )
}

export default Products;