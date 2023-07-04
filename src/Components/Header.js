import '../scss/Header.css';
import logo from '../assets/Logo.svg';
import search from '../assets/search_icon.svg';
import backet from '../assets/backet.svg';
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import ProductList from "./ProductList"

export default function Header() {
        const search_cont = useRef(null);
        const [searchText, setSearchText] = useState('');
        const [results, setSearchResults] = useState([]);

        const handleInputChange = (event) => {
            setSearchText(event.target.value);
        };

        const handleSearch = async (searchText) => {
            if (searchText.length > 0) {
                fetch(`https://dummyjson.com/products/search?q=${searchText}`)
                    .then((response) => response.json())
                    .then((smartphones) => {
                        setSearchResults(smartphones.products);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            else if(searchText.length == 0) {
                handleSearch("404 Not Found");
            }
        }

        useEffect(() => {
            handleSearch(searchText);
        }, [searchText]);

        const handleSubmit = (event) => {
            event.preventDefault();
            handleSearch(searchText);
        };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-column">
            <div className="container-fluid">
                <img className="navbar-brand" src={logo} alt="Logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <form className="d-flex search-form" onSubmit={handleSubmit}>
                        <input className="form-control border-search" type="search" placeholder="Search" aria-label="Search for products" value={searchText} onChange={handleInputChange}
                        />
                        <button className="search-btn" id="search-btn" type="submit">
                            <img src={search} alt="Search" />
                        </button>
                    </form>
                </div>
            </div>
            {results.length > 0 && (
                <div className="search-results" ref={search_cont} >
                    <ul>
                        {results.map((result,index) => (
                            <li className="list-unstyled mt-3 border-black border-3 border rounded">
                                <div className="ms-3 w-75 h-100">
                                    <div key={result.id} className="justify-content-center d-flex flex-column">
                                        <div>
                                            <h4>{result.title}</h4>
                                            <h4>Category: {result.category}</h4>
                                        </div>
                                        <h6>Description: {result.description}</h6>
                                        <h3 className="text-success">Price: {result.price}</h3>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="catagories-container">
                <button className="categories-link">
                    <Link className="link-color" to='/smartphones'>Smarthones</Link>
                </button>
                <button className="categories-link">
                    <Link className="link-color" to='/furniture'>Furniture</Link>
                </button>
                <button className="categories-link">
                    <Link className="link-color" to='/skincare'>Skincare</Link>
                </button>
                <button className="categories-link">
                    <Link className="link-color" to='/laptops'>Laptops</Link>
                </button>
            </div>
        </nav>
    );
}