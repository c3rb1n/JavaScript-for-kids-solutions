let randomBodyParts = ["рука", "нога", "шея", "голова"];
let randomAdjectives = ["глупый", "гнилой", "мелкий", "вялый"];
let randomWords = ["кот", "волк", "лев", "жираф", "лось"];
// Выбор случайной части тела из массива randomBodyParts:
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// Выбор случайного прилагательного из массива randomAdjectives:
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// Выбор случайного слова из массива randomWords:
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// Соединяем случайные строки в предложение:
let randomInsult = ["У тебя", randomBodyPart, "словно", randomAdjective, randomWord + "!!!"].join(" ");
randomInsult; // "У тебя рука словно глупый конь!!!"