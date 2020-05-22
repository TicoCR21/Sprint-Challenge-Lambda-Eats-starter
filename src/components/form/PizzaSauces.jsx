import React from "react";
import { sauces } from "../../utils/constants";

function PizzaSauce( props )
{
  return(
    <label className = "pizzaSauces"  htmlFor = { props.id }>
        <input
            type = "radio"
            name = "sauce"
            value = { props.sauce }
            onChange = { props.onChange }     
        />
        <span>{ props.sauce }</span>
    </label>
  )
}

export default function( props )
{
  return( 
    <>
      {
        Object.keys( sauces ).map( sauce => <PizzaSauce
                                                key      = { sauce }
                                                id       = { sauce }
                                                sauce    = { sauces[ sauce ] }
                                                onChange = { props.onChange }
                                              /> )
      }
    </>
  );
}