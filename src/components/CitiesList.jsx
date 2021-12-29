import React from 'react'

const CitiesList = ({cities}) => {
    console.log(cities);

    const citiesList = cities.map((city, index) => {
        
        return (
            <div className="small-card" key={`small_${index}`}>
                <span className="small-card__city">
                    {city.city}
                </span>
                <span className="small-card__temperature">{city.temperature}°</span>
                <span className="icon icon--strips-small"></span>
            </div>
        )
    })

    return (
        <div className="weather-content__small-cards">
            {/* <div className="small-card small-card--shadow">
                <span className="small-card__city">
                    Чебоксары
                </span>
                <span className="small-card__temperature">+17°</span>
                <span className="icon icon--strips-small"></span>
            </div>
            <div className="small-card small-card--empty">
            </div> */}
            
            {citiesList}
        </div>
    )
}

export default CitiesList;
