// Code your solutions in this file

/**
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    // debugger;
  }
  


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
 for (let i = 0; i < gifts.length; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
   // debugger;
}
  
return gifts;
}
  
wrapGifts(gifts);
*/

function writeCards(names) {
    const cards = [];
    for (let i = 0; i < names.length; i++) [
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    ]

    return cards;
}

function countDown(num) {
    let count = num;
    while (count >= 0) {
        console.log(count);
        count--;
    }
}