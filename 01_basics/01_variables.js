const accountId = 144553  // cannot change with this keyboard 
let accountEmail = "hansdavsh@gmail.com"  
var accountPassword = "MAWAYSHIguywala@03"
let accountState 

accountCity = "Ranchi" // Prefer not to declare by this type 

// accountId  = "2" // not allowed 

accountEmail = "mawayshi@gmail.com"
accountPassword = "1010101"
accountCity = "Bokaro"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/


console.table([accountId , accountEmail , accountPassword , accountCity , accountState ])