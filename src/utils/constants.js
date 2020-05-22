const initialForm = 
{
    name     : "",
    email    : "",
    size     : "",
    sauce    : "",
    number   : "1",

    toppings : 
      {
        pepperoni   : false,
        sausage     : false,
        bacon       : false,
        italian     : false,
        chicken     : false,
        onions      : false,
        pepper      : false,
        tomato      : false,
        olives      : false,
        garlic      : false,
        artichoke   : false,
        threeCheese : false,
        pineapple   : false,
        extraCheese : false
      },

    specialInstructions : ""
};

const initialErrors =
{
  name  : "",
  email : "",
  size  : "",
  sauce : ""
};

const sizes =
[
  "Small",
  "Medium",
  "Large",
  "X-Large"
];

const sauces =
{
  original : "Original Red"    ,
  garlic   : "Garlic Ranch"    ,
  bbq      : "BBQ Sauce"       ,
  spinach  : "Spinach Alfredo" ,      
};

const toppings =
{
  pepperoni   : "Pepperoni"            ,
  sausage     : "Sausage"              ,
  bacon       : "Canadian Bacon"       ,
  italian     : "Spicy Italian Sausge" ,
  chicken     : "Grilled Chicken"      ,
  onions      : "Onions"               ,
  pepper      : "Green Pepper"         ,
  tomato      : "Diced Tomatoes"       ,
  olives      : "Black Olives"         ,
  garlic      : "Roasted Garlic"       ,
  artichoke   : "Artichoke Hearts"     ,
  threeCheese : "Three Cheese"         ,
  pineapple   : "Pineapple"            ,
  extraCheese : "Extra Cheese"         
};

export default initialForm;
export { initialErrors, sizes, sauces, toppings };