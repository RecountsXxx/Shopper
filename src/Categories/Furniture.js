import {Component} from "react";
import '../scss/Categories.css';
import ProductCard from "../Components/ProductCard";

class Furniture extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        fetch('https://dummyjson.com/products/category/furniture')
            .then((response) => response.json())
            .then((Furniture) => {
                this.setState({ products: Furniture.products });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { products } = this.state;
        var array = Object.values(products);

        return (
            <div className="container-grid bg-light">
                <div className="container-filter">
                    <h3 className="text-dark mt-2">Brands</h3>{
                    array.flat().map((product, index) => (
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                {product.brand}
                            </label>
                        </div>
                    ))}
                    <h3 className="text-dark mt-2">Price</h3>
                    <input type="text" className="input-group-text mt-2" placeholder="From 0.00"/>
                    <input type="text" className="input-group-text mt-2" placeholder="To 100000.0"/>
                </div>
                <div className="container">
                    {
                        array.flat().map((product, index) => (
                            <ProductCard
                                key={index}
                                title={product.title}
                                description = {product.description}
                                price = {product.price + "$"}
                                brand = {product.brand}
                                rating = {product.rating}
                                src={product.thumbnail}
                            />
                        ))}
                </div>
            </div>

        );
    }
}

export  default Furniture;