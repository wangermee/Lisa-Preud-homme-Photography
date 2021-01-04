import React from "react"
import Titre from "../Titre/Titre"
import classes from "./SectionAPropos.module.css"
import Portrait from "../assets/img/SectionAPropos/portrait.png"
import Expo from "../assets/img/SectionAPropos/expo.png"

export default function SectionAPropos (){
    return(
        <>
        <section className={classes.sectionAPropos}>
            <Titre>A propos</Titre>
            <div className={classes.content}>
                <div>
                    <img src={Portrait} alt="portrait lisa preud'homme" />
                </div>
                <article>
                    <div className={classes.contentFR}>
                        <p>J’ai toujours eu un pied dans la réalité et tout le reste ailleurs, dans un univers dark et mélancolique. Une partie de moi a toujours pensé que les créatures fantastiques, les villes imaginaires et les aptitudes magiques avaient existé ou existent en secret quelque part. Je tente de m’approprier ces visions, comme s’il s’agissait de souvenirs.</p>
                        <p>Mon travail s’articule autour d’éléments réels déformés à la prise de vue par des moyens naturels ou bien passés dans un processus de post-production numérique et physique.</p>
                        <p>J'ai étudié le cinéma, la photographie et le traitement documentaire des images. Je travaille actuellement à la création de contenu audiovisuel et à la gestion documentaire dans un atelier d'artistes. Je suis toujours à la recherche d’opportunités pour montrer mon travail et exposer.</p>
                    </div>
                    <div className={classes.contentEN}>
                        <p>I always had one foot in reality and everything else elsewhere, in a dark and melancholic universe. Part of me always thought that fantastic creatures, imaginary cities and magical abilities had existed or exist in secret somewhere. I try to appropriate these visions, as if they were memories. My work revolves around real elements distorted in the shooting by natural means or passed in a process of digital and physical post-production.  I studied cinema, photography and documentary image processing. I am currently working on audiovisual content creation and document management in an artists' studio. I am always looking for opportunities to show my work and exhibit.</p>
                    </div>
                </article>
            </div>
            <div className={classes.CV}>
                <div>
                    <img src={Expo} alt="stand expo" />
                </div>
                <article>
                    <div className={classes.Expositions}>
                        <h4>Expositions</h4>
                        <p>2019 Foire Puls’Art, Théâtre des Quinconces, Le Mans</p>
                        <p>2018 Expo personnelle, Darkitude, Café Custine, Paris 18</p>
                        <p>2016 Foire Envie d’Art, Maison de Gascogne, Auch</p>
                        <p>2016 Expo personnelle, Nuées et reflets, l’Ami Pierre, Paris 11</p>
                        <p>2014 Expo personnelle, Bric à Brac, Paris 11</p>
                        <p>2014 Expo personnelle, B.58, Paris 9</p>
                    </div>
                    <div className={classes.Formations}>
                        <h4>Formations</h4>
                        <p>2019 Matte Painting, Video Design Formation, Paris 20e</p>
                        <p>2016 Tournage, montage et postproduction avec un reflex, INA Expert, Bry s/Marne</p>
                        <p>2011 Licence Pro Traitement documentaire des fonds iconographiques, IUT Nancy-Charlemagne</p>
                        <p>2006 CAP Photo, Studio M, Montpellier</p>
                        <p>2004 Licence Art du Spectacle option cinéma, Université Paul Valéry, Montpellier</p>
                        <p>2000 BAC L option Audiovisuel, Lycée Le Garros, Auch</p>
                    </div>
                </article>

            </div>
        </section>
        
        </>
    )
}