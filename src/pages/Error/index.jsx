import { Link } from 'react-router-dom'
import React from "react";
import  Header from '../../components/header'
import  Footer  from '../../components/footer'
function Erreur() {
    return (
        <main>
            <Header/>
                <div className='div-error'>
                    <h1 className='error-number'>404</h1>
                    <h1>Oups Cette page n'existe pas</h1>
                    <Link className="link" to="/">Retourner sur la page d'accueil</Link>
                </div>
            <Footer/>
        </main>
    )
}
 
export default Erreur