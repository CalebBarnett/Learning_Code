/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
nums = [2,7,11,15];
target = 9;

/*
nums.forEach(myFunction);

function myFunction(x) {
	console.log("in myFunction with ", x);
};

*/


 
var twoSum = function(nums, target) {

    for (i=0; i < nums.length; i++) {
        let t = target;
		let x = nums[i];
		let y = t - nums[i];
		let z = i + 1;
		console.log("T = ", t, "X = ", x, "Y = ", y, "Z = ", nums[z]);
		
		if (nums.includes(y)) {
			console.log("Ding Ding, Winner Winner", t, x, y, z);
			//console.log("T = ", t, "X = ", x, "Y = ", z);
		}
        
		
    }
};

twoSum(nums, target);

