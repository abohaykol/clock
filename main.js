let changeColor = document.querySelector(".changeColor");

changeColor.onclick = () => {
  document.body.classList.toggle("darktheme");
};
function updateTimer() {
  let date = new Date();
  let hours = date.getHours();
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  let minutes = date.getMinutes().toString().padStart(2, 0);
  let seconds = date.getSeconds().toString().padStart(2, 0);
  let meridiem = hours >= 12 ? "PM" : "AM";
  const time = `${hours}:${minutes}:${seconds} ${meridiem} `;
  document.querySelector(".clock").textContent = time;
}
setInterval(updateTimer, 100);

// let array = [2, 4, 6, 8, 10];

// array.forEach(double);
// array.forEach(sum);

// function double(element, index, array) {
//   array[index] = element * 2;
// }

// function sum(element) {
//   console.log(element);
// }

// try {
//   let username = window.prompt("what's your name?");
//   if (username == "") {
//     throw new Error("you need to input characters");
//   }
//   console.log(username);
// } catch (error) {
//   console.error(error);
// }

// console.log("you have reached the end");

// let li = document.createElement("li");

// li.innerText = "hello world";

// document.body.append(li);
// li.setAttribute("class", "font-size");

// if (li.classList.contains("font-size")) {
//   console.log("yes");
// } else {
//   console.log("no");
// }
// li.remove();
// let errorEl = document.getElementById("error-el");
// let submit = document.getElementById("submit");
// submit.addEventListener("click", () => {
//   try {
//     let usernameEl = document.getElementById("username-el");
//     if (usernameEl.value == "") {
//       throw "you need to type something";
//     }
//     if (usernameEl.value < 5) {
//       throw "number is too low";
//     } else if (usernameEl.value > 10) {
//       throw "number is too high";
//     } else if (isNaN(usernameEl.value)) {
//       throw "input isn't a number";
//     } else {
//       errorEl.innerHTML = "";
//     }
//   } catch (err) {
//     errorEl.innerText = err;
//   } finally {
//     document.getElementById("username-el").value = "";
//   }
// });
