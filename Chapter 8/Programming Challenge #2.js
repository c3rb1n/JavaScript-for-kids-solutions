// Function declaration
function areArraysSame1(array1, array2) {
	if (array1.length !== array2.length) {
		return false;
	} else {
		for (let i = 0; i < array1.length; i++) {
			if (array1[i] !== array2[i]) {
				return false;
			}
		}
		return true;
	}
}

// Function expression
let areArraysSame2 = function(array1, array2) {
	if (array1.length !== array2.length) {
		return false;
	} else {
		for (let i = 0; i < array1.length; i++) {
			if (array1[i] !== array2[i]) {
				return false;
			}
		}
		return true;
	}
}

// Arrow function
let areArraysSame3 = (array1, array2) => {
	if (array1.length !== array2.length) {
		return false;
	} else {
		for (let i = 0; i < array1.length; i++) {
			if (array1[i] !== array2[i]) {
				return false;
			}
		}
		return true;
	}
}

console.log(areArraysSame1([1, 2, 3], [4, 5, 6])); // false
console.log(areArraysSame1([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysSame1([1, 2, 3], [1, 2, 3, 4])); // false

console.log(areArraysSame2([1, 2, 3], [4, 5, 6])); // false
console.log(areArraysSame2([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysSame2([1, 2, 3], [1, 2, 3, 4])); // false

console.log(areArraysSame3([1, 2, 3], [4, 5, 6])); // false
console.log(areArraysSame3([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysSame3([1, 2, 3], [1, 2, 3, 4])); // false