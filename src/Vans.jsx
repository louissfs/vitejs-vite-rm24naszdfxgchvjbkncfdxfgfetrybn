import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])

    const typeFilter = searchParams.get("type")

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
          <a href={van.video} key={van.id} target="_blank" rel="noopener noreferrer">
                <img className='cars' src={van.imageUrl} />
                <div className="van-info">
                    <h5>{van.name}</h5>
                    <br></br>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
         </a>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
    
   
    return (
        <div className="van-list-container">
            <h1>Explore our options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "Yoga")}
                    className="van-type simple"
                >Yoga</button>
                <button
                    onClick={() => handleFilterChange("type", "Ballet")}
                    className="van-type luxury"
                >Ballet</button>
                <button
                    onClick={() => handleFilterChange("type", "Breakdance")}
                    className="van-type rugged"
                >Break Dance</button>


                <button
                    onClick={() => handleFilterChange("type", "Dance")}
                    className="van-type rugged"
                >Dance</button>






                <button
                    onClick={() => handleFilterChange("type", null)}
                    className="van-type clear-filters"
                >Clear filter</button>

                

            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}






























