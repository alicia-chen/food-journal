import React from "react"
import "../styles/Card.css"
import mangoImg from "../images/mango-crepe.jpg"

function Card(props) {
    return(
        <div className="card"> 
            <div className="cardTop">
                <h4>01-25-19</h4>
            </div>
            <div className="cardBottom">
                <img className="cardImage"
                    src={mangoImg}
                    alt="mango crepe"
                />
            </div>  
        </div>
    )
}

export default Card;