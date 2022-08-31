/**
 * @param {number[]} arr
 * @return {boolean}
 */

//
//arr = [0,3,2,1]
//
//arr = [2,1]

//arr = [1,2,3,4,0]

//arr = [1,2,2,3,2,1]
//FALSE
//arr = [0,1,2,1,2]
//FALSE
//arr = [1,7,9,5,4,1,2]
//TRUE
//arr = [0,1,2,3,4,8,9,10,11,12,11]
//FALSE
arr = [14,82,89,84,79,70,70,68,67,66,63,60,58,54,44,43,32,28,26,25,22,15,13,12,10,8,7,5,4,3]


var validMountainArray = function(arr) {
    const l = arr.length;
    let i = 0;
    let k = 0;
    
    console.log("THIS IS THE START LENGTH IS %d AND I = %d AND ARRAY is ", l, i, arr)
        
    while (i+1 < l && arr[i] < arr[i+1]) {
        if (arr[i] > k) {
            k = arr[i]
    }
        console.log("1.1 i = %d, i+1 = %d, arr[i] = %d, arr[i+1] = %d, k = %d ", i, i+1, arr[i], arr[i+1], k);
        i++;
        //console.log("1.2 i = %d, i+1 = %d, arr[i] = %d, arr[i+1] = %d ", i, i+1, arr[i], arr[i+1]);
    }
    
    if (i === 0 || i === l-1) {
        
        console.log("THIS IS THE IF ", i);
        return false;
    } else if (arr[i] === arr[i+1]) {
    	console.log("TERMINATE");
    	return false;
    }
    
    while (i+1 < l && arr[i] > arr[i+1]) {
        console.log("2.1 i = %d, i+1 = %d, arr[i] = %d, arr[i+1] = %d, k = %d ", i, i+1, arr[i], arr[i+1], k);
        i++;
        //console.log("2.2 i = %d, i+1 = %d, arr[i] = %d, arr[i+1] = %d ", i, i+1, arr[i], arr[i+1]);
    }
    
    if (k === arr[i+1] || arr[i] < arr[i+1]) {
    	console.log("TERMINATE AT 2 ", k) 
    	return false;
    	} else if (arr[i] === arr[i+1]) {
    	return false;
    	}
        //i == l-1;
        return true;
        console.log("THIS IS THE END ", i)
        
        
};
console.log(validMountainArray(arr));