import React, { Component } from "react";
import classes from "./Header.module.css";

export default class Header extends Component{
    render(){
        return(
            <header className={classes.Header} >
                <h1>Lisa Preud'homme</h1>
                <div>
                    <h2>Photographe</h2>
                </div>
                
                
            </header>
        )
    }
}