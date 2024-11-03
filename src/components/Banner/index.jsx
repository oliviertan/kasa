function Banner({bannerSrc,text}) {
    return (
        <div className='banner'>
            <img src={bannerSrc} alt="banner"></img>
            <h1>{text}</h1>
        </div>

    );
}

export default Banner