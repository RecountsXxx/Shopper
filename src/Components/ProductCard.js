import {Component} from "react";
import '../scss/ProductCard.css'
export default function ProductCard(args){
        return (
            <div className="card">
                <img src={args.src} className="card-img-thumbnail" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{args.title}</h5>
                        <p className="card-text">{args.description}</p>
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <a href="#" className="btn btn-success pe-5 ps-5">To card</a>
                            <h5 className="card-text text-success">Price: {args.price}</h5>
                        </div>
                    </div>
            </div>
        );
}