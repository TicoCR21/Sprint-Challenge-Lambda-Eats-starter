import styled from "styled-components";

export default styled.div`

    display : flex;

    .logo
    {
        flex-basis : 75%;
        margin-left : 60px;
        font-size : 40px;
        text-transform : uppercase;

        .logoLink
        {
            text-decoration : none;
            color : black;
        }
    }

    .headerLinks
    {
        margin-right : 30px;
        align-self : center;

        .link
        {
            color : black;
            font-size : 25px;
            padding : 15px 60px;
            text-decoration : none;
            border : 3px solid black;
        }

        .link:hover
        {
            color : white;
            background : black;
        }
    }
`;