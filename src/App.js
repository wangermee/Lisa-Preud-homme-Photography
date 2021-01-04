import React, { Component } from "react";
import "./App.css"
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import SectionAPropos from "./SectionAPropos/SectionAPropos";
import SectionPhotography from "./SectionPhotography/SectionPhotography";
import SectionChezVous from "./SectionChezVous/SectionChezVous";
import SectionContact from "./SectionContact/SectionContact";
import Paral from "./parallax/parallax";
import para1 from "./assets/img/para1.jpg";
import para2 from "./assets/img/para2.jpg";
import para3 from "./assets/img/para3.jpg";



export default class App extends Component{
  render(){
    return (
      <>
      <Header/>
      <NavBar/>
      <Paral img={para1}/>
      <SectionPhotography/>
      <SectionAPropos/>
      <Paral img={para2}/>
      <SectionChezVous/>
      <Paral img={para3}/>
      <SectionContact/>
      
      </>
    )

    
  }

}
