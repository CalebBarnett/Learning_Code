//GET START TIME
let st = new Date();
console.log("START TIME: ", st);

//****START
//PLACE TEST VARIABLE
let n = 10;

//Place Function

var test = function a1(n) {
	console.log("I'm in");
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
};

//******END******
//Call Function
console.log(test(n));

//a1(n);

//GET END TIME, TOTAL, AND PRINT
let et = new Date();
console.log("END TIME: ", et);

let dt = et - st;
console.log("TOTAL TIME: ", dt);



