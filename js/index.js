const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open')
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})

//FUNCTION FOR USING POINTERS UDEMY SECTION 5 PART 31
// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

// My answer for udemy section 5 part 32 exercise:
// function countUniqueValues(arr){
//   let i = 0;
//   let j = 1;
//   while (i < j) {
//       let uniqueCount = 0;
//       if (arr[i] !== arr[j]) {
//           uniqueCount++
//       }
//   }
// }

// Instructor answer for udemy section 5 part 32 exercise:
// function countUniqueValues(arr) {
//   let i = 0;
//   for (var j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j]
//     }
//   }
//   return i + 1;
// }

// [1, 2, 3, 3, 4, 5, 6, 6, 7]