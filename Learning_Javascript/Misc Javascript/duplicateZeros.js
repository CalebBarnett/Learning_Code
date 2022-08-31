/*
PUSH() add at end
POP() Removes at end
UNSHIFT() add at beginning
SHIFT() removes at beginning
SPLICE() 
*/


//arr = [1,0,2,3,0,4,5,0]
arr = [1,2,3]

const size = arr.length;
for (i = 0; i < size; i++) {
	if (arr[i] === 0) {
		arr.splice(i, 1, 0, 0)
		arr.pop();
		i++
	} 
} console.log(arr);