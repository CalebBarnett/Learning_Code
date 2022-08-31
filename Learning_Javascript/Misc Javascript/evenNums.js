/**
 * @param {number[]} nums
 * @return {number}
 */

nums = [252]
//nums = [12,345,2,6,7896]



var findNumbers = function(nums) {
	evenNums = [];
    for (i=0; i < nums.length; i++) {
	let x = nums[i].toString().length;
	   if (x % 2 === 0 && x > 1) {
		   evenNums.push(nums[i]);
	   }
   }
   console.log(evenNums.length);
};
findNumbers(nums);
