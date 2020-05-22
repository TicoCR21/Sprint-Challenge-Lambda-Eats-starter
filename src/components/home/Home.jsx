import React from "react"
import { Link } from "react-router-dom";
import Home, { Services } from "./HomeStyled";

function Service( props )
{
  return(
    <Services>
      <h3>{ props.service }</h3>
      <div className = "serviceImage"></div>
    </Services>
  );
}

export default function()
{
  return(
    <>
        <Home>
            <img src = { require( "../../images/pizza.jpg" ) } alt = "Pizza Background" />

            <div className="headings">
                <h1>Your favofite food, delivered while coding</h1>
                <Link to = "/pizza" className = "link" >Pizza?</Link>
            </div>
        </Home>

        <div className = "otherServices">
          <Service service = "Dominos" />
          <Service service = "Pizza Hut" />
          <Service service = "Papa Johns" />
          <Service service = "Little Caesar" />
          <Service service = "Blaze Pizza" />
          <Service service = "Pizza Loca" />
        </div>
    </>
  )
}