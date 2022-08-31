arr = [-10,12,-20,-8,15]
//arr = [10,2,5,3]

var checkIfExist = function(arr) {
    arr.sort(function(a,b){return a-b});
    for (i = 0; i < arr.length; i++) {
		for (j = i + 1; j < arr.length; j++) {
			console.log(arr, arr[i], arr[j], arr[j]/2)
			if (arr[i] === arr[j]/2 || arr[j] === arr[i]/2) {
				return true;
			} 
		}
	} return false;
};
console.log(checkIfExist(arr));