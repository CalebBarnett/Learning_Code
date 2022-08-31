let arr = [4,5,6];

var duplicateZeros = function(arr) {
 let size = arr.length;
    for (i=0; i < size; i++) { 
    let v = arr[i];
    console.log("Value: ", v, i);       
		console.log("Swapping ", arr.shift(arr[i]), arr.push(arr[i]));            
        console.log("Current Loop: ", arr);
    } 
    
    console.log("End of Loop", arr);
    return arr;
};

console.log(duplicateZeros(arr));