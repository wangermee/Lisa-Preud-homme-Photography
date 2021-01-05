import React from "react";
import classes from "./ContentCV.module.css"


export default function ContentCV (props){
    return(
        <>
        <p className={classes.ContentCV}><spam>{props.nom}</spam>, {props.lieu}</p>
        </>
    )
}