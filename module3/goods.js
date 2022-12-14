{
  const productName = "Apple";
  const goodsQuantity = 5;
  const productCategory = "fruits";
  const productPrice = 2.55;

  console.log("Product type is: " + productCategory);
  console.log("Total sum: " + goodsQuantity * productPrice);
}

{
  const productName = "Arabica";
  const goodsQuantity = 2;
  const productCategory = "coffee";
  const productPrice = 3.48;
}

const productName = prompt("Please type product name");
const goodsQuantity = prompt("Please type product Quantity");
const productCategory = prompt("Please type product category");
const productPrice = prompt("Please type product price");

console.log("productName:", typeof productName);
console.log("goodsQuantity:", typeof goodsQuantity);
console.log("productCategory:", typeof productCategory);
console.log("productPrice:", typeof productPrice);

console.log(
  `We have ${goodsQuantity} of ${productName} on a total sum: ${
    goodsQuantity * productPrice
  } in our warehouse`
);
