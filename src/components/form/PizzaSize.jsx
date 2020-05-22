import React from "react";
import { sizes } from "../../utils/constants";

export default function( props )
{
  return(
    <>
      {
        <label className = "pizzaSize">
            <select
                onChange = { props.onChange  }
                value    = { props.form.size }
                name     = "size"
            >
                <option value = ""> - Select an Option - </option>
                    
                {
                sizes.map( size => <option key = { size } value = { size } > { size } </option> )
                }
            </select>
        </label>
      }
    </>
  )
}