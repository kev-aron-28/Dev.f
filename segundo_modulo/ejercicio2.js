let string = "palabra;nombre cubo,arroz:libro";
let arr = Array.from(string);
let res = arr.filter(el => {
    if(el != " " || el != ";" || el == "," || el != ":"){
        return ;
    }
})


console.log(res);