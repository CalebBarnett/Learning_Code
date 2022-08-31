let size = 'ABC';

function getTime() {
	let d = new Date();
	return d;
}

let startTime = getTime();
console.log("START TIME: ", startTime);

for (i = 0; i < size.length; i++) {
	console.log(i);
}

let endTime = getTime();
console.log("  END TIME: ", endTime);

let diffTime = endTime - startTime;

console.log("Byte Size: ", Buffer.byteSize(size, 'utf8'));
console.log("Value is: ", size);
console.log("Buffer Length: ", Buffer.byteLength(size, 'utf8'));
console.log("Size is: ", size.length);
console.log("Difference is: ", diffTime);
