var redRoses = new app.singleFlower({
  name: "Red Roses",
  price: 39.95,
  color: "Red",
  img: "images/redRoses.jpg",
  link: "redRose"
});

var rainbowRoses = new app.singleFlower({
  name: "Rainbow Roses",
  price: 29.95,
  color: "orange",
  link: "rainbowRose"
});

var heirloomRoses = new app.singleFlower({
  name: "Heirloom roses",
  price: 19.95,
  img: "images/heirloomRoses.jpg",
  link: "heirloomRose"
});

var tantilalizingTulips = new app.singleFlower({
  name: "Tantalizing Tulips",
  price: 69.99,
  color: 'pink'
});

var fleurdeLis = new app.singleFlower({
  name: "Fleur-de-lis",
  price: 200.00,
  color: 'green'
});

//create array in flowerGroup variable
var flowerGroup = new app.FlowersCollection([
  redRoses, rainbowRoses
]);

var europeanFlowers= new app.FlowersCollection([
  tantilalizingTulips, fleurdeLis
]);

//add heirloomRoses to flowerGroup
flowerGroup.add(heirloomRoses);

//remove redRoses from flowerGroup
flowerGroup.remove(redRoses);

console.log(flowerGroup.toJSON());
console.log(europeanFlowers.toJSON());

// rainbowRoses.set('price', 20);
// console.log(heirloomRoses.toJSON());
// console.log(rainbowRoses.toJSON());
// console.log(redRoses.toJSON());
