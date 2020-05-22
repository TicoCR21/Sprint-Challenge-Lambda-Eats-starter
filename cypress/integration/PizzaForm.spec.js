describe( "Form Inputs", () =>
{
    it( "can type name", () =>
    {
        cy.visit( "http://localhost:3000/pizza" ).get( "input[ name = 'name' ]" ).
           type( "Dominick" ).type( " Bruno" ).should( "have.value", "Dominick Bruno" );
    } );

    it( "can type email", () =>
    {
        cy.visit( "http://localhost:3000/pizza" ).get( "input[ name = 'email' ]" ).type( "dominick_bruno@lambdaschool.com" )
          .should( "have.value", "dominick_bruno@lambdaschool.com" );
    } );

    it( "can navigate to the site", () =>
    {
        cy.visit( "http://localhost:3000/pizza" ).get( "input[ type = submit ]" ).should( "be.disabled" );
    } )

    // it( "button is disabled", () => 
    // {
    //     cy.get( ".button" ).should( "be.disabled" );
    // } )
} )

describe( "Form Validation", () =>
{
    
} );

describe( "Form Submit", () =>
{
    
} );