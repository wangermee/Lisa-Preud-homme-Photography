import React from "react";
import {Parallax} from "react-parallax";

export default function parallax (props){
    return(
        <Parallax bgImage={props.img}>
            <div style={{height:"400px"}}></div>
        </Parallax>
    )
}