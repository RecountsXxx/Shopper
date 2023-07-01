import '../scss/Categories.css';
import ProductCard from "../Components/ProductCard";
import React, {useState, useEffect, createRef} from 'react';

const Laptops = () => {
    const productsListRef = createRef();
    const [isChecked, setIsChecked] = useState(false);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/laptops')
            .then((response) => response.json())
            .then((laptops) => {
                setProducts(laptops.products);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setIsChecked(checked);

        if (checked) {
            setSelectedBrands((prevSelectedBrands) => [...prevSelectedBrands, value]);
        } else {
            setSelectedBrands((prevSelectedBrands) => prevSelectedBrands.filter((brand) => brand !== value));
        }
    };

    const array = Object.values(products).flat();

    const filteredProducts = array.filter((product) => {
        if (selectedBrands.length === 0) {
            return true;
        } else {
            return selectedBrands.includes(product.brand);
        }
    });

    var brands = new Set();

    array.map((element,index)=>{
        brands.add(element.brand);
    });
    brands = Array.from(brands);
    return (
        <div className="container-grid bg-light">
            <div className="container-filter">
                <div>
                    <h3 className="text-dark mt-2">Brands</h3>
                    {brands.map((product, index) => (
                        <div className="form-check" key={index}>
                            <input className="form-check-input" type="checkbox" value={product} id={`defaultCheck${index}`} onChange={handleCheckboxChange}/>
                            <label className="form-check-label" htmlFor={`defaultCheck${index}`}>
                                {product}
                            </label>
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className="text-dark mt-2">Price</h3>
                    <input type="text" className="input-group-text mt-2" placeholder="From 0.00" />
                    <input type="text" className="input-group-text mt-2" placeholder="To 100000.0" />
                </div>
            </div>
            <div className="container mt-2" id="products-list" ref={productsListRef}>
                {filteredProducts.map((product, index) => (
                    <ProductCard
                        key={index}
                        title={product.title}
                        description={product.description}
                        price={product.price + '$'}
                        brand={product.brand}
                        rating={product.rating}
                        src={product.thumbnail}
                    />
                ))}
            </div>
        </div>
    );
};

export default Laptops;