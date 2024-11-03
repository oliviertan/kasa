import React from "react";
import Banner from '../../components/Banner';
import Header from '../../components/header'
import Footer  from '../../components/footer'
import Collapse from '../../components/Collapse'
import imageBanner from '../../images/a_propos_banner.png'
const infoliste= require("../../json/info.json")
function APropos() {

    return (
        <main>
            <Header/>
            <Banner bannerSrc={imageBanner} text=''/>
            <DivCollapse/>
            <Footer/>
        </main>
    )
}
function DivCollapse() {
    return (
        <section className="section_collapse">
            {infoliste.map((collapse, index) => (
                <Collapse
                key={`${collapse.title}-${index}`}
                text={collapse.text}
                title={collapse.title}
                />
            ))}
        </section>
    )
}
export default APropos