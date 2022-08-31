//***PLACE TEST VARIABLES HERE***
//nums = [252]
nums = [-7,-3,2,3,11]



//GET START TIME
let st = new Date();

//***PLACE ALGO HERE***
var sortedSquares = function(nums) {
	nArray = [];
    for (i=0; i < nums.length; i++) {
	let x = Math.pow(nums[i],2);
	nArray.push(x); 
   } 
   nArray = nArray.sort(function(a, b){return b-a});
   console.log("A ", nArray);
};

//Call Variable or function
sortedSquares(nums);

//GET END TIME, TOTAL, AND PRINT
let et = new Date();
let diffTime = et - st;
console.log("Time: ", diffTime);
