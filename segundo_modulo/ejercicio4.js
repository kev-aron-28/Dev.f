// const simplify = str => {
//     let strArr = str.split(" ");
//     return strArr.map(el => {
//         if(el.length >= 4){
//             return `${el[0]}-${el.length - 2}-${el[el.length - 1]}`;
//         } else {
//             return el;
//         }
//     }).join(" ");
// }


const simplify = str => str.split(" ").map(el => el.length >= 4 ? `${el[0]}-${el.length - 2}-${el[el.length - 1]}` : el).join(" ");
console.log(simplify("hola soy kevin palabra"));
