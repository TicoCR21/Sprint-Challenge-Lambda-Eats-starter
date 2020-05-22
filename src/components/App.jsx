import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom"; 

import Header from "./header/Header";
import Home from "./home/Home";
import PizzaForm from "./form/PizzaForm";
import initialForm from "../utils/constants";

import formSchema from "../utils/formSchema";
import * as yup from "yup";

import { initialErrors } from "../utils/constants";

export default function() 
{
  const [ form, setForm ] = useState( initialForm );

  const [ submit, setSubmit ] = useState( false );
  const [ errors, setErrors ] = useState( initialErrors )
  
  const onChange = e => 
  {
    const name = e.target.name;
    const value = e.target.value;

    yup.reach( formSchema, name )
       .validate( value )
       .then( response => setErrors( { ...errors, [ name ] : "" } ) )
       .catch( response => setErrors( { ...errors, [ name ] : response.errors[ 0 ] } ) );


    setForm( { ...form, [ e.target.name ] : e.target.value } );
  }

  const checkboxChange = e => { setForm( { ...form, toppings : { ...form.toppings, [ e.target.name ] : e.target.checked } } ); }

  const onSubmit = e => 
  {
   e.preventDefault();
   console.log( form );
  };

  useEffect( () => {
    formSchema.isValid( form )
      .then( validForm => setSubmit( !validForm ) )
  }, [ form ] );

  return (
    <>
      <BrowserRouter>
        <Header />

        <Switch>
          
          <Route path = "/pizza">
            <PizzaForm 
              form           = { form           }
              submit         = { submit         }
              errors         = { errors         } 
              onChange       = { onChange       } 
              onSubmit       = { onSubmit       } 
              checkboxChange = { checkboxChange } 
            />
          </Route>

          <Route path = "/order" exact>
            <div>
              <h2> Name:  { form.name                } </h2>
              <h2> Email: { form.email               } </h2>
              <h2> Size:  { form.size                } </h2>
              <h2> Sauce: { form.sauce               } </h2>
              <h2> Instructions: { form.specialInstructions } </h2>

              <br/>
              <h2>Toppings Below</h2>
              { Object.keys( form[ "toppings" ] ).filter( topping => { return form.toppings[  topping  ]  === true } ) }

            </div>
          </Route>

          <Route path = "/" exact>
            <Home />
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  );
}