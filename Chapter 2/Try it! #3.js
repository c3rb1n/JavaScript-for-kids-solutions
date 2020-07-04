// conventional solutions

	// first condition
	let age1 = 11;
	let accompanied1 = true;
	age1 >= 12 || accompanied1 === true; // false || true => true

	// second condition
	let age2 = 12;
	let accompanied2 = true;
	age2 >= 12 || accompanied2 === true; // true || true => true

// solutions with if...else

	// first condition
	let age1 = 11;
	let accompanied1 = true;
	let result1 = null;

	if (age1 >= 12 || accompanied1 === true) {
		result1 = true;
	} else {
		result1 = false;
	}

	// second condition
	let age2 = 12;
	let accompanied2 = true;
	let result2 = null;

	if (age2 >= 12 || accompanied2 === true) {
		result2 = true;
	} else {
		result2 = false;
	}

// solutions with "?"

	// first condition
	let age1 = 11;
	let accompanied1 = true;
	let result1 = age1 >= 12 || accompanied1 === true ? true : false;

	// second condition
	let age2 = 12;
	let accompanied2 = true;
	let result2 = age2 >= 12 || accompanied2 === true ? true : false;