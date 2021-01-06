import classes from "./SectionChezVous.module.css"
import React, { Component } from "react"
import Titre from "../Titre/Titre"
import ContentPrix from "./ContentPrix/ContentPrix"
import photo1 from "../assets/img/SectionChezVous/1_ChezVous.png"
import photo2 from "../assets/img/SectionChezVous/2_ChezVous.png"
import photo3 from "../assets/img/SectionChezVous/3_ChezVous.png"
import photo4 from "../assets/img/SectionChezVous/4_ChezVous.png"
import photo5 from "../assets/img/SectionChezVous/5_ChezVous.png"


export default class SectionChezVous extends Component{
    state={
        tirages:[
            {id:1,article:"50x50 cm",prix:"200"},
            {id:2,article:"40x50 cm",prix:"170"},
            {id:3,article:"40x40 cm",prix:"150"},
            {id:4,article:"30x30 cm",prix:"100"}
        ],
        petitsCadres:[
            {id:1,article:"7x7 cm",prix:"20"},
            {id:2,article:"les 3",prix:"50"}
        ],
        petitesCartes:[
            {id:1,article:"7x7 cm",prix:"10"},
            {id:2,article:"les 3",prix:"25"}
        ]
    }
    render(){
        return (
            <section className={classes.SectionChezVous}>
                <Titre>chez vous</Titre>
                <div className={classes.content}>
                    <p>Toutes les images présentes sur le site sont à la vente dans une limite de 30 exemplaires tous formats confondus.</p>
                    <p>Les tirages sont signés et numérotés et sont produits sous mon contrôle sur du papier Hahnemühle Fine Art Photo Rag 308g, quelque soit le format demandé.</p>
                    <p>Vous pouvez me contacter via le formulaire en bas de page pour me faire part de vos souhaits (visuel, format, quantité).</p>
                    <p>Je vous répondrai dans les plus brefs délais.</p>
                </div>
                <article>
                    <h4>Formats et Tarifs</h4>
                    <div>
                        <h5>Tirages</h5>
                        {this.state.tirages.map(items=>(<ContentPrix key={items.id}{...items}/>))}
                    </div>
                    <div>
                        <h5>Petits cadres</h5>
                        {this.state.petitsCadres.map(items=>(<ContentPrix key={items.id}{...items}/>))}
                    </div>
                    <div>
                        <h5>Petites cartes</h5>
                        {this.state.petitesCartes.map(items=>(<ContentPrix key={items.id}{...items}/>))}
                    </div>
                </article>
                <div className={classes.gallerie}>
                    <div>
                        <img src={photo1} alt="exemple decrotion 1"/>
                        <img src={photo2} alt="exemple decrotion 2"/>
                    </div>
                    <div>
                        <img src={photo3} alt="exemple decrotion 3"/>
                        <img src={photo4} alt="exemple decrotion 4"/>
                        <img src={photo5} alt="exemple decrotion 5"/>
                    </div>
                </div>
            </section>
            
        )

    }

}