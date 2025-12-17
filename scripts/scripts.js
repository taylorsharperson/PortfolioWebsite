/*
 Student Name: Taylor Sharperson
 File Name: script.js
 Todays Date:04/05/2023
*/


//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

//Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
        var menuicon = document.getElementById("icon");
        if (navlinks.style.display === "block") {
            navlinks.style.display = "none";
                menuicon.style.color = "#2a1f14";
        } else {
            navlinks.style.display = "block";
                menuicon.style.color = "#f6eee4";
        }
}

//Function to display the first answer
function ans1() {
    heading.style.display = "block";
    answer.onclick = "Three so far. Java, C++, and HTML.";
}
 
//Function to display the second answer
function ans2() {
    heading.style.display = "block";
    answer.textContent = "Over 200. I am planning on learning as many as I can.";
}
 
//Function to display the third answer
function ans3() {
    heading.style.display = "block";
    answer.textContent = "I plan to graduate with my bachelors degree and work in cybersecurity.";
} 
 //Function to display the fourth answer
function ans4() {
    heading.style.display = "block";
    answer.textContent = "I have been coding for five years, starting with Java.";
}
 
