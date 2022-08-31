nums = [3,2,2,3], val = 3


var removeElement = function(nums, val) {
    for (i = 0; i < nums.length; i++) {
        if(nums[i]===val) {
		  nums.splice(i, 1);
            i--            
        }  
    } nums;
};

console.log(removeElement(nums, val));
/*

var removeElement = function(nums, val) {
	//const l = nums.length;
	//console.log(nums);
    for (i = 0; i < nums.length; i++) {
		
        //console.log("%d Cycle: Using %d in nums, deleting number %d", i, nums[i], val);
        if(nums[i]===val) {
          //console.log("swapping %d with _", nums[i]);
          //nums.splice(i,1);
		  nums[i] = '_';
          //console.log("New array ", nums);
            //return nums;
          
        }
    } return nums.sort();
};

console.log(removeElement(nums, val));
*/