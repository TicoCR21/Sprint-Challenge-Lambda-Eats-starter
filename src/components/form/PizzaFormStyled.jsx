import styled from "styled-components";

const Container = styled.div`
    
    width: 80%;
    margin: 0 auto;

    h3
    {
        text-align : center;
        font-size : 70px;
    }

    img
    {
        width : 100%;
    }

    h2
    {
        font-size : 80px;
    }
`;

const PizzaBuild = styled.div`
    h4
    {
        color : white;
        background : black;
        font-size : 45px;
        padding: 40px;
    }
    
    .errorMessage
    {
        font-size : 30px;
        color : red;
    }

    .pizzaSize select
    {
        width : 30%;
        height : 40px;
        font-size : 30px;
    }

    .pizzaSauces
    {
        display : flex;
        margin : 15px 0;
        input
        {
            align-self : center;
            width : 30px;
            height : 30px;
        }

        span
        {
            font-size : 30px;
        }
    }

    .pizzaToppings
    {
        display : inline-block;
        width : 40%;
        margin : 15px 0;

        input
        {
            width : 30px;
            height : 30px;
        }

        span
        {
            font-size : 30px;
        }
    }

    .formInput
    {
        span
        {
            display : inline-block;
            width : 100px;
            font-size : 30px;
            margin-right : 20px;
        }

        input
        {
            text-align : center;
            width: 70%;
            height : 50px;
            font-size : 30px;
        }

        margin-bottom : 100px;
    }
`;

const PlaceOrder = styled.div`

    height : 100px;
    margin-bottom : 30px;
    input
    {
        margin-right : 20px;
        height : 40px;
        width : 100px;
        font-size : 25px;
        text-align : center;
    }

    input[ type = submit ]
    {
        background : black;
        color: white;
        height : 50px;
        width : 40%;
        cursor: pointer;
    }
`;

export { Container, PizzaBuild, PlaceOrder };