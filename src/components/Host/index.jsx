function Host({name,picture}){
    return (
        <div className="host">
          <h3>{name}</h3>
          <img src={picture} alt={name}/>
        </div>)
}

export default Host
