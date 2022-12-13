const productName = 'Apple';
const goodsQuantaty = 5;
const productCategory = 'fruits';
const productPrice = 2.55;

console.log('Product type is: ' + productCategory);
console.log('Total sum: ' +goodsQuantaty * productPrice);


{
    const productName = 'Arabica';
    const goodsQuantaty = 2;
    const productCategory = 'coffee';
    const productPrice = 3.48;
}

const productNameFromInput = prompt('Please type product name');
const goodsQuantatyFromInput = prompt('Please type product quantaty');
const productCategoryFromInput = prompt('Please type product category');
const productPriceFromInput = prompt('Please type product price');

console.log('productName:', typeof productNameFromInput);
console.log('goodsQuantaty:', typeof goodsQuantatyFromInput);
console.log('productCategory:', typeof productCategoryFromInput);
console.log('productPrice:', typeof productPriceFromInput);

console.log(`We have ${goodsQuantatyFromInput} of ${productNameFromInput} on a total sum: ${goodsQuantatyFromInput*productPriceFromInput} in our warehouse`);

