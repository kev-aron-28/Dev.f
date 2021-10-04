
let arr = []; 

for(let i = 1; i <= 100; i++){
    arr.push(i);
}


const fizz = arr => {
    let dv5 = [];
    let dv3 = [];
    let dvBoth = [];
    let nonDv = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 5 == 0 && arr[i] % 3 == 0){
            dvBoth.push(arr[i]);
            console.log(`buzz ${arr[i]}`)
        } else if(arr[i] % 3 == 0 && arr[i] % 5 != 0){
            dv3.push(arr[i]);
            console.log(`Fizz ${arr[i]}`);
        } else if(arr[i] % 3 != 0 && arr[i] % 5 == 0){
            dv5.push(arr[i]);
            console.log(`FizzBuzz: ${arr[i]}` );
        } else {
            nonDv.push(arr[i]);
        }
    }

    console.log(`Divisibles 3: ${dv3}`);
    console.log(`Divisibles 5: ${dv5}`);
    console.log(`Divisibles ambos: ${dvBoth}`);
    console.log(`Divisibles ninguno: ${nonDv}`);
}


fizz(arr);