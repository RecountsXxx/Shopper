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
                        console.log(results);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            else if(searchText.length == 0) {
                handleSearch("nixera");
            }
        }

        useEffect(() => {
            handleSearch(searchText);
        }, [searchText]);

        const handleSubmit = (event) => {
            event.preventDefault();
            handleSearch(searchText);
        };

        const handleBasketButtonClick = () => {
            alert('nice');
        };
        console.log(results.length);
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

                    <button onClick={handleBasketButtonClick} className="backet-btn" id="backet-btn">
                        <label>Backet</label>
                        <img src={backet} alt="Basket" />
                    </button>
                </div>
            </div>
            {results.length > 0 && (
                <div className="search-results" ref={search_cont} >
                    <ul>
                        {results.map((result,index) => (
                            <li>
                                <div className="bg-primary w-100 h-100">
                                    <div key={result.id}>
                                        <h3>{result.title}</h3>
                                        <p>{result.description}</p>
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
                <button className="categories-link">
                    <Link className="link-color" to='/Smartphones'>Smarthones</Link>
                </button>
                <button className="categories-link">
                    <Link className="link-color" to='/Smartphones'>Smarthones</Link>
                </button>
                <button className="categories-link">
                    <Link className="link-color" to='/Smartphones'>Smarthones</Link>
                </button>
            </div>
        </nav>
    );
}