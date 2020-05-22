import React from "react"
import { toppings } from "../../utils/constants";

function Pizzatopping( props )
{
  return(
    <label className = "pizzaToppings" htmlFor = { props.id } >
        <input
            id       = { props.id } 
            type     = "checkbox"
            name     = { props.id }
            checked  = { props.form.toppings[ props.id ] }
            onChange = { props.checkboxChange }
        />
        <span>{ props.topping }</span>
    </label>
  )
}

export default function( props )
{
  return(
    <>
      {
        Object.keys( toppings ).map( topping => <Pizzatopping
                                                    key            = { topping } 
                                                    id             = { topping }
                                                    topping        = { toppings[ topping ] } 
                                                    form           = { props.form } 
                                                    checkboxChange = { props.checkboxChange } 
                                                /> )
      }
    </>
  );
}