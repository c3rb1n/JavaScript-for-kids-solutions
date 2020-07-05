let randomBodyParts = ["глаз", "нос", "череп"];
let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
let randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// Выбор случайной части тела из массива randomBodyParts:
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)]; // замена "3" на "randomBodyParts.length"
// Выбор случайного прилагательного из массива randomAdjectives:
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)]; // замена "3" на "randomAdjectives.length"
// Выбор случайного слова из массива randomWords:
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]; // замена "5" на "randomWords.length"
// Соединяем случайные строки в предложение:
let randomInsult = ["У тебя", randomBodyPart, "словно", randomAdjective, randomWord + "!!!"].join(" "); // замена выражения после оператора присваивания на массив элементов с методом ".join(" ")"
randomInsult; // "У тебя нос словно дурацкая выдра!!!"