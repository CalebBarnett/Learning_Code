//UNSHIFT adds at the beginning
//PUSH adds at end
//SHIFT removes at beginning
//POP removes at end



let arr = [1,0,2];

var duplicateZeros = function(arr) {
 let size = arr.length;
 console.log(size);
    for (i=0; i < size; i++) { 
    let v = arr[0];
    console.log("V ", v);       
    console.log("I ", i);
        if (v === 0) {
            //arr.pop(v);
            arr.push(7);
			arr.push(7);
            //size+2;
            console.log("0 ", arr);
            } else {
            //arr.pop(v);
            arr.push(v);
            
            console.log("1 ", arr);
            //size++;
        }
        console.log("Looping A ", arr);
        arr.shift();
        console.log("Looping B ", arr);
    } 
    
    console.log("End of Loop", arr);
    return arr;
};

console.log(duplicateZeros(arr));