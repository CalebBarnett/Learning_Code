/*
PUSH() add at end
POP() Removes at end
UNSHIFT() add at beginning
SHIFT() removes at beginning
SPLICE() 
*/
nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//nums1 = [1], m = 1, nums2 = [], n = 0
//nums1 = [0], m = 0, nums2 = [1], n = 1

//const size = arr.length;
//nums1 = nums1.concat(nums2);
//nums1.sort();
//console.log(nums1.sort());

//Expected Output
// 1,2,2,3,4,5

//Get total size of array, m + n
//Check for each n2 in nums2 and see if n2 is  


var merge = function(nums1, m, nums2, n) {
	const size = m + n;
	//console.log("Size is: ", size);
	//nums2 = nums2.sort();
	//nums1 = nums1.sort();
	//console.log("nums1 ", nums1);
	//console.log("nums2 ", nums2);
	for (i = m, j = 0; i < size; i++) {
		//console.log("nums1[i] ", i, nums1[i]);
		//console.log("nums2[j] ", j, nums2[j]);
		nums1[i] = nums2[j];
		//console.log(nums1);
		
		j++;
		//console.log("size after for i ", i);
		//console.log("size after for j ", j);
	} return nums1; 
};
	console.log(merge(nums1, m, nums2, n));		
	//merge(nums1, m, nums2, n);	
	
	/*
		if (nums1[i] === 0) {
				console.log("Shifting")
				nums1.shift();
				console.log("Shifted array ", nums1);
		} else {
				console.log("2 nums1 ", nums1);
				console.log("2 nums2 ", nums2);
			for (n in nums2) {
		     console.log("Working with: n =", nums2[n],"i=", nums1[i], "i+1=", nums1[i + 1]);
			if (nums2[i] < nums1[i]) {
				console.log("Insert ", nums2[n], "Before ", nums1[i]);
			i++;
			} else {
				console.log("Insert ", nums2[n], "After ", nums1[i], "Before ", nums1[i+1]);
			}
			}
		}
	}
};
		
console.log(merge(nums1, m, nums2, n));		
		
		/*
		const index = nums1.indexOf(0);
		console.log("Index of ", index);
		if (index > -1) {
			console.log("Removing 0, at index ", index);
			nums1.splice(index, 1);
			i++;
		}
		
		for (n in nums2) {
		console.log("Working with: n =", nums2[n],"i=", nums1[i], "i+1=", nums1[i + 1]);	
		//for (j = i + 1; j < nums2size; j++) {
			if (nums1[i] === 0) {
				console.log("Shifting")
				nums1.shift();
			    
		} else if (nums2[i] < nums1[i]) {
			console.log("Insert ", nums2[n], "Before ", nums1[i]);
			i++;
		} else {
			console.log("Insert ", nums2[n], "After ", nums1[i], "Before ", nums1[i+1]);
		}	
		}
	}return nums1;
};
console.log(merge(nums1, m, nums2, n));
*/