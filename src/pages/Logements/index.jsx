import React from "react";
import { useParams } from "react-router-dom";
import  Header from '../../components/header'
import  Footer  from '../../components/footer'
import Logement from "../../components/logement";   
import Erreur from "../Error";
const logementsliste=require("../../json/logements.json")
function Logements(){
    const idlog=useParams();
    const loading=logementsliste.find((logement)=> logement.id==idlog.id)
    if (loading==null){
        return(<Erreur/>)
    }
    return(
        <main>
            <Header/>
            <Logement id={idlog}/>
            <Footer/>
        </main>
        )
}
export default Logements