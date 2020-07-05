let randomBodyParts = ["рука", "нога", "шея", "голова"];
let randomAdjectives = ["глупая", "гнилая", "мелкая", "вялая"];
let randomAnimalBodyParts = ["хвост", "шерсть", "лапа"];
let randomWords = ["кота", "волка", "льва", "жирафа", "лося"];
// Выбор случайной части тела из массива randomBodyParts:
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// Выбор случайного прилагательного из массива randomAdjectives:
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// Выбор случайной части тела животного из массива randomAnimalBodyParts:
let randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * randomAnimalBodyParts.length)];
// Выбор случайного слова из массива randomWords:
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// Соединяем случайные строки в предложение:
let randomInsult = ["У тебя", 
					randomBodyPart, 
					"ещё более", 
					randomAdjective, 
					"чем", 
					randomAnimalBodyPart, 
					"у", 
					randomWord + 
					"!!!"].join(" ");
randomInsult; // "У тебя шея ещё более гнилая чем шерсть у кота!!!"