import React from "react";
import { useHistory } from "react-router-dom";
import { Container, PizzaBuild, PlaceOrder } from "./PizzaFormStyled";

import PizzaInput from "./PizzaInput";
import PizzaSize from "./PizzaSize";
import PizzaSauces from "./PizzaSauces";
import PizzaToppings from "./PizzaToppings";

function Top()
{
    return(
        <>
            <h3>Build Your Own Pizza</h3>
            <img src = { require( "../../images/pizza.jpg" ) } alt = "Pizza Background" />
            <h2>Build Your Own Pizza</h2>
        </>
    );
}

function BuildPizzaHeader( props )
{
    return(
        <>
            <h4> { props.header } </h4>
            <p className = "errorMessage"> { props.error } </p> 
        </>
    );
}

export default function( props )
{
    const history = useHistory();

    const onSubmit = e => 
    {
        e.preventDefault();
        history.push( "/order" );
    };

    return(
        <Container>

            <Top />
            <form onSubmit = { onSubmit } >
                <PizzaBuild>
                    <BuildPizzaHeader header = "Personal Information" error = "" />

                    <p className = "errorMessage">{ props.errors.name }</p>       
                    <PizzaInput title = "Name: " type = "text" placeholder = "Enter Full Name" name = "name" value = { props.form.name } onChange = { props.onChange } />
                    
                    <p className = "errorMessage">{ props.errors.email }</p>   
                    <PizzaInput title = "Email: " type = "email" placeholder = "Enter Email" name = "email" value = { props.form.email } onChange = { props.onChange } />
                </PizzaBuild>

                <PizzaBuild>
                    <BuildPizzaHeader header = "Choice of Size" error = { props.errors.size } />
                    <PizzaSize form = { props.form } onChange = { props.onChange } />
                </PizzaBuild>

                <PizzaBuild>
                    <BuildPizzaHeader header = "Choice of Sauce" error = { props.errors.sauce } />
                    <PizzaSauces onChange = { props.onChange } />
                </PizzaBuild>

                <PizzaBuild>
                    <BuildPizzaHeader header = "Add Toppings - up to 10" error = "" />
                    <PizzaToppings form = { props.form } checkboxChange = { props.checkboxChange } />
                </PizzaBuild>

                <PizzaBuild>
                    <BuildPizzaHeader header = "Special Instructions" error = "" />   
                    <PizzaInput title = "Any? " type = "text" placeholder = "Enter Additional Instructions" name = "specialInstructions" value = { props.form.specialInstructions } onChange = { props.onChange } />
                </PizzaBuild>

                <PlaceOrder>
                    <input type = "number" value = { props.form.number } name = "number" onChange = { props.onChange } step = "1" min = "1" />
                    <input type = "submit" value = "Submit Order" disabled = { props.submit } className = "button" />
                </PlaceOrder>

            </form>
        </Container>
    );
}