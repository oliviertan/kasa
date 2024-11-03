import React from "react";
import { useParams } from "react-router-dom";
import  Header from '../../components/header'
import  Footer  from '../../components/footer'
import Logement from "../../components/logement";
function Logements(){
    const idlog=useParams()
    return(
        <main>
            <Header/>
            <Logement id={idlog}/>
            <Footer/>
        </main>
        )
}
export default Logements