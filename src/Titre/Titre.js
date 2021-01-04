import React from "react"
import classes from "./Titre.module.css"

export default function Titre (props){
    return(
        <h3 className={classes.TitreSection}>{props.children}</h3>
    )
}