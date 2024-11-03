function Rating(nbr){
    const rates=[1,2,3,4,5]
    return (
        <div className="rating">
          {rates.map((rate) => nbr.nbr>=rate ? (<i key={rate} className="fa-solid fa-star"/>):(<i key={rate} className="fa-regular fa-star"/>))}
        </div>)
}

export default Rating
