import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accueil from './pages/accueil'
import APropos from './pages/A_propos'
import Erreur from './pages/Error'
import Logements from './pages/Logements'
import "./App.css"
// On ajoute nos pages
function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/A_propos" element={<APropos />}/>
        <Route path='*' element={<Erreur/>}/>
        <Route path="/logements/:id" element={<Logements />} />
      </Routes>
    </Router>
  );
}
export default App;

