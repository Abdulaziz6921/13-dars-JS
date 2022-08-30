//1) concat-arraylani bog'laydi
let arr1 = ["Ali", "Adi", "Katya"];
let arr2 = ["Doe", "John", "Smith"];
let sumArr = arr1.concat(arr2);
console.log(sumArr);

//2) constructor- array prototipini yaratgan funksiyani qaytaradi: yani array uchun constructor shuni qaytaradi: function Array(){[native code]}

let cars = ["Malibu", "Orlando", "Equinox"];
let text = cars.constructor;
console.log(text);

//3) copywithin - array elementlarini arrayning ichidagi boshqa joyga kuchiradi

let cars2 = ["Malibu", "Orlando", "Equinox", "Trailblazer"];
cars2.copyWithin(2, 0, 2);
console.log(cars2);

//4) entries - array obyektining indeksi bilan birga qaytaradi

let colors = ["red", "blue", "green", "white"];
let a = colors.entries();

for (let key of a) {
  console.log(key);
}

// 5) every - har bir array elementlari uchun funksiyani chiqarib beradi
// every metodi true qayataradi agarda funksiya barcha elementlarga true qaytarsa
// every metodi flase qayataradi agarda funksiya bitta elementga false qaytarsa

let ages = [32, 33, 16, 40];
let age = ages.every(checkAge);
function checkAge(age) {
  return age > 18;
}
console.log(age);

// 6) fill - arrayning belgilangan elementini tuldiradi
let countries = ["China", "Chili", "UAE", "Turkey"];
// countries.fill("UZB");
// console.log(countries);

countries.fill("UZB", 2, 4);
console.log(countries);

// 7) filter- funksiya testidan utgan barcha elementlar bilan tuldirilgan yangi array yaratadi

let ages2 = [32, 33, 16, 40];
let result = ages2.filter(checkAge_2);
function checkAge_2(age) {
  return age >= 17;
}
console.log(result);

// 8) find - funksiya testidan utgan birinchi elementni qaytaradi
// 9) findIndex - funksiya testidan utgan birinchi elementni indeksini qaytaradi
let guests = [3, 10, 18, 19, 20];
let output = guests.find(checkAge_3);
let index = guests.findIndex(checkAge_3);
function checkAge_3(age) {
  return age > 18;
}
console.log(output);
console.log(index);
