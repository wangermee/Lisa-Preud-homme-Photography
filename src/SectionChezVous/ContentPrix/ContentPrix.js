import React from "react"
import classes from "./ContentPrix.module.css"

export default function ContentPrix (props){
    return(
        <div className={classes.ContentPrix}>
            <p>{props.article}</p>
            <div className={classes.pointille}></div>
            <p>{props.prix} €</p>
        </div>
    )
}