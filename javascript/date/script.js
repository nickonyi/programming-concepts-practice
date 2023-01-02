let userChoice = prompt("Enter the dates starting from 1st to 31st");
let number = Number(userChoice);
let daysOfWeek = ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday'];
let div = document.querySelector("div");
let para = document.createElement('p');


if (userChoice <= 7) {
    para.textContent = `This day was on ${daysOfWeek[userChoice-1]}`;
    div.appendChild(para);
} else {
    while (userChoice > 7) {
        userChoice = userChoice - 7;
    }

    para.textContent = `This day was on ${daysOfWeek[userChoice-1]}`;
    div.appendChild(para);
}