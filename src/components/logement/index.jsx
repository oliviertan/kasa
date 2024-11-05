import Collapse from '../Collapse'
import Tags from '../Tags'
import Gallery from '../Galllery';
import Rating from '../Rating';
import Host from '../Host';
const logementsliste=require("../../json/logements.json")

function Logement(id){
    const logement=getLogement(id.id.id);
    return(
        <section className='section_logement'>
            <Gallery Slides={logement.pictures}/>
            <div className='logement_info'>
                <div className='info'>
                    <div className='title_and_tags'>
                        <div>
                            <h1>{logement.title}</h1>
                            <p>{logement.location}</p>
                        </div>
                        <Tags logement={logement}/>
                    </div>
                    <div className='host_and_ratings'>
                        <Host name={logement.host.name} picture={logement.host.picture}/>
                        <Rating nbr={logement.rating}/>
                    </div>
                </div>
                <div className='div_collapses'>
                    <Collapse title={'Description'} text={logement.description}/>
                    <Collapse title={'équipements'} equipements={logement.equipments}/>
                </div>
            </div>
        </section>
        )
}
function getLogement(logementId){
    for(let i=0;i<logementsliste.length;i++){
        if(logementsliste[i].id==logementId){
            return logementsliste[i];
        } 
    }

}
export default Logement