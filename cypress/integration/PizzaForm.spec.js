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

    it( "check size", () => 
    {
        cy.visit( "http://localhost:3000/pizza" ).get( "input[ type = checkbox ]" ).check();
    } );

    it( "select sauce", () => 
    {
        cy.visit( "http://localhost:3000/pizza" ).get( "input[ type = radio ]" ).check( [ "BBQ Sauce", "Original Red" ] ).should( "be.checked" );
    } );


    it( "check toppings", () => 
    {
        cy.visit( "http://localhost:3000/pizza" ).get( "input[ type = checkbox ]" ).check();
    } );
} )

describe( "Form Submit", () =>
{
    it( "can submit", () => 
    {
        cy.visit( "http://localhost:3000/pizza" )
          .get( "input[ name = 'name' ]" ).type( "Dominick Bruno" )
          .get( "input[ name = 'email' ]" ).type( "domick_bruno@lambdaschool.com" )
          .get( "select[ name = 'size' ]" ).select( "X-Large" )
          .get( "input[ type = radio ]" ).check( "Original Red" )
          .get( "input[ type = checkbox ]" ).first().check()
          .get( "input[ type = submit ]" ).should( "not.be.disabled" )
    } );
} );