const nums2 = [2, 4, 6, 8, 10];

// SOME: მინიმუმ ერთი აკმაყოფილებს პირობას
console.log(nums2.some(n => n > 5));     // true
console.log(nums2.some(n => n % 2 !== 0)); // false
console.log(nums2.some(n => n === 4));     // true
console.log(nums2.some(n => n > 100));     // false
console.log(nums2.some(n => n < 3));       // true

// EVERY: ყველა უნდა აკმაყოფილებდეს პირობას
console.log(nums2.every(n => n % 2 === 0)); // true
console.log(nums2.every(n => n > 0));       // true
console.log(nums2.every(n => n < 20));      // true
console.log(nums2.every(n => typeof n === 'number')); // true
console.log(nums2.every(n => n > 5));       // false
