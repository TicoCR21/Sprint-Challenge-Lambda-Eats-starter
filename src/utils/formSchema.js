import * as yup from "yup";

export default yup.object().shape( 
{
    name : yup.string().trim().min( 2, "Name Must Be Atleast 2 Letters" ).required( "Name Must Be Provided" ),
    sauce : yup.string().required( "Required" ),
    email : yup.string().email( "Enter Correct Email Format" ).required( "Email Must Be Provided" ),
    size : yup.string().required( "Must Select Pizza Size" ),
    specialInstructions : yup.string(),
    number : yup.string()
} );