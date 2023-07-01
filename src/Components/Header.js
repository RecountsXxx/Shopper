import '../scss/Header.css';
import logo from '../assets/Logo.svg';
import search from '../assets/search_icon.svg';
import backet from '../assets/backet.svg';
import {Link} from "react-router-dom";

export default function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-column">
            <div className="container-fluid">
                <img className="navbar-brand" src={logo}></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between"  id="navbarSupportedContent">
                    <form className="d-flex search-form">
                        <input className="form-control border-search" type="search" placeholder="Search" aria-label="Search for products"/>
                        <button className="search-btn" id="search-btn">
                            <img src={search}/>
                        </button>
                    </form>

                    <button onClick={backet_btn_click} className='backet-btn' id="backet-btn">
                        <label>Backet</label>
                        <img src={backet}/>
                    </button>
                </div>
            </div>
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

    )
};

var backet_btn_click = () =>{
    alert("nice");
}