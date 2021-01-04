
import React, { Component } from "react";
import classes from "./NavBar.module.css";
import NavLink from "./NavLink/NavLink"


export default class NavBar extends Component {
    state={
        link:[
            {id:1, l:"Photographies", p:"/"},
            {id:2, l:"A propos", p:"/"},
            {id:3, l:"Chez Vous", p:"/"},
            {id:4, l:"Contact", p:"/"},
        ]

    }


    render (){
        return (
            <section className={classes.NavBar}>
                <div className={classes.Wrap}>
                    {this.state.link.map(link=>(<NavLink key={link.id} {...link} />))}
                </div>
            </section>
        )
    }
}