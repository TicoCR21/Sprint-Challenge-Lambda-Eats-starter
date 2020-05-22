import styled from "styled-components";

const Services = styled.div`
    
`;

export default styled.div`

    position : relative;

    img
    {
        width: 100%;
        max-height : 1500px;
    }

    &::after
    {
        position : absolute;
        content : "";
        top: 0;
        left: 0;
        width: 100%;
        height : 100%;
        background : linear-gradient( to bottom, rgba( 0, 0, 0, 0.6 ), rgba( 0, 0, 0, 0.7 ) );
    }

    .headings
    {
        display : flex;
        flex-direction : column;

        position : absolute;
        left : 50%;
        top : 50%;
        transform: translate( -50%, -50% );
        text-align : center;

        z-index : 1;

        h1
        {
            color : white;
            font-size : 40px;
        }

        .link
        {
            color : white;
            text-decoration : none;
            align-self : center;
            font-size : 25px;
            padding: 30px 60px;
            border : 3px solid white;
        }

        .link:hover
        {
            background : white;
            color : black;
        }
    }
`;

export { Services };