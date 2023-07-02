import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div className="bg-primary w-100 h-100">
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;