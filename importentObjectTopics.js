//   let  product={
//       name: "Iphone  14 Pro ",
//       company:"Apple",
//       price:12500,
//       warranty:"1 year",
//       color:"black"

//   } 
//    it is object it has lot of key value pairs in object all key must unique do duplicate  key in object 

let  product={
    name: "Iphone  14 Pro ",
    company:"Apple",
    price:12500,
    warranty:"1 year",
    color:"black"

} 


Object.keys(product)
//  ['name', 'company', 'price', 'warranty', 'color']

console.log( Object.keys(product))


//  ['name', 'company', 'price', 'warranty', 'color']

console.log( Object.values(product))

//  ['Iphone  14 Pro ', 'Apple', 12500, '1 year', 'black']
console.log( Object.entries(product))


//  [Array(2), Array(2), Array(2), Array(2), Array(2)]0: Array(2)0: "name"1: "Iphone  14 Pro "length: 2[[Prototype]]: Array(0)1: (2) ['company', 'Apple']2: (2) ['price', 12500]3: (2) ['warranty', '1 year']4: (2) ['color', 'black']length: 5[[Prototype]]: Array(0)
// console.log( Object.values(product).length)

