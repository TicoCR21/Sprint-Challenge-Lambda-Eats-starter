import React from "react"

export default function( props )
{
  return(
    <>
        <div className = "formInput" >
            <span>{ props.title }</span>
            <input 
                type        = { props.type        }
                placeholder = { props.placeholder }
                name        = { props.name        }
                value       = { props.value       }
                onChange    = { props.onChange    }
            />
        </div>
    </>
  )
}