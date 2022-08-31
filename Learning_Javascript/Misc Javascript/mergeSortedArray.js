/*
PUSH() add at end
POP() Removes at end
UNSHIFT() add at beginning
SHIFT() removes at beginning
SPLICE() 
*/
//nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//nums1 = [1], m = 1, nums2 = [], n = 0
//nums1 = [0], m = 0, nums2 = [1], n = 1

nums1 = [-10,-10,-9,-9,-9,-8,-8,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-4,-4,-4,-3,-3,-2,-2,-1,-1,0,1,1,1,2,2,2,3,3,3,4,5,5,6,6,6,6,7,7,7,7,8,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
m = 55;
nums2 = [-10,-10,-9,-9,-9,-9,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9]
n = 99;

//console.log(nums1.length);
//console.log(nums2.length);
	//nums1 = nums1.filter((n) => {return n != 0});
	//nums2 = nums2.filter((n) => {return n != 0});
//console.log(nums1.length);
//console.log(nums2.length);
var merge = function(nums1, m, nums2, n) {
	for (i = 0; i < n; i++) {
		nums1[i+m] = nums2[i];
	} 
	nums1.filter((n) => {return n !== 0});
    return nums1.sort(function(a, b){return a-b}); 
};
console.log(merge(nums1, m, nums2, n));		
