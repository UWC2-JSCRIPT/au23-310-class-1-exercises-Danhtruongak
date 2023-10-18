/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
const areaOfPizza_13In = Math.PI * (13/2)**2;
const totalArea_13In = areaOfPizza_13In.toFixed(2);
console.log(`The area of 13" pizza = ${totalArea_13In} sq inches`);

const areaOfPizza_17In = Math.PI * (17/2)**2;
const totalArea_17In = areaOfPizza_17In.toFixed(2);
console.log(`The area of 17" pizza = ${totalArea_17In} sq inches`);

// 2. What is the cost per square inch of each pizza?
const priceOf_13In =16.99;
const costPerSquareIn_13In = (priceOf_13In/areaOfPizza_13In);
const total_13In = costPerSquareIn_13In.toFixed(2);

console.log(`Cost per square inch of 13" pizza is $ ${total_13In}`);

const priceOf_17In = 19.99;
const costPerSquareIn_17In = (priceOf_17In/areaOfPizza_17In);
const total_17In = costPerSquareIn_17In.toFixed(2);

console.log(`Cost per square inch of 17" pizza is $ ${total_17In}`);


// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

const cards = ['ace',2,3,4,5,6,7,8,9,10,'jack','queen','king']
    const random = cards[Math.floor(Math.random()*cards.length)]
    console.log(`this is a random card drawing : ${random}`);
    
// 4. Draw 3 cards and use Math to determine the highest
// card
const draw1 = Math.floor(Math.random()*10)+3;
const draw2 = Math.floor(Math.random()*10)+3;
const draw3 = Math.floor(Math.random()*10)+3;
console.log(`Drawing 1: ${draw1}`);
console.log(`Drawing 2: ${draw2}`);
console.log(`Drawing 3: ${draw3}`);

const allDraws = [draw1,draw2,draw3];
   const maxNum = Math.max.apply(Math,(allDraws)); 
   console.log(`The max number is : ${maxNum}`);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

const firstName = 'Danh';
const lastName = 'Truong';
const address = '16619 Larch Way';
const city = 'Lynnwood';
const state = 'WA';
const zip = '98037';

const addressBlock = `${firstName} ${lastName}\n${address}\n${city}, ${state} ${zip}`;
console.log(addressBlock);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
const extractFirstName = firstName.slice(0,firstName.length);
console.log(`This is the result from the firstname : ${extractFirstName}`);

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDay = new Date(2020,1,1);
/*converted new date in millisecond*/
const millisecondsStartDay = startDay.getTime();


const endDay = new Date(2020,4,1);
/*converted new date in millisecond*/
const millisecondEndDay = endDay.getTime();


/*find the mid point between 2 days in milliseconds */
const milliSecondMidpoint = (millisecondEndDay - millisecondsStartDay)/2;

/*find middle day and time in millisecond*/
const middleDate = millisecondsStartDay + milliSecondMidpoint;

/*converted middle day into string */
const midDayResult = new Date(middleDate).toString();
console.log(midDayResult);


