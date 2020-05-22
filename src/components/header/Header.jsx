import React from "react";
import { Link } from "react-router-dom";
import Header from "./HeaderStyled";

export default function()
{
  return(
    <Header>
        <h3 className = "logo" > 
          <Link to = "/" className = "logoLink"> Lambda Eats </Link>
        </h3>
        
        <div className = "headerLinks">
            <Link className = "link" to = "/">
                Home
            </Link>
            <Link className = "link" to = "">
                Help
            </Link>
        </div>
    </Header>
  )
}