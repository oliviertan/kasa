import React from "react";
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import  Header from '../../components/header'
import  Footer  from '../../components/footer'
import imageBanner from '../../images/banner_accueil.png'
const logementsliste= require("../../json/logements.json")
function Accueil() {
  return (
        <main>
            <Header/>
            <Banner bannerSrc={imageBanner} text='Chez vous,partout et ailleurs'/>
            <DivCard/>
            <Footer/>
        </main>
    )
}
function DivCard() {
    return (
        <div className="div_cards">
            {logementsliste.slice(0,6).map((logements, index) => (
                <Card
                    key={`${logements.name}-${index}`}
                    imageSrc={logements.cover}
                    title={logements.title}
                    id={logements.id}
                />
            ))}
        </div>
    )
}
export default Accueil