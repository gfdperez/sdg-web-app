// This array contains all the theme colors of the SDGs
const goalColors = ["#E5243B", "#DDA83A", "#4C9F38", "#C5192D", "#FF3A21", "#26BDE2", "#FCC30B", "#A21942", "#FD6925", "#DD1367", "#FD9D24", "#BF8B2E", "#3F7E44", "#0A97D9", "#56C02B", "#00689D", "#19486A"];
let themeColor;

function changeThemeColor(goalPageID, colorArray){
    /*
        This function changes the theme color of the webpage based on the goal id number
        of the webpage. All of the elements that need to be adjusted in terms color are
        handled in this function. It used the array of color codes initialized on the 
        previous lines
    */
    for (let i = 0; i < colorArray.length; i++) {
        const goalIdentity = `page-goal${i+1}`;
        if(goalPageID == goalIdentity){
            document.querySelector(".goal-number-box").style.border = `5px solid ${colorArray[i]}`;
            document.querySelector(".goal-number-text").style.color = colorArray[i];
            document.querySelector(".complete-name").style.color = colorArray[i];
            document.querySelector(".main-goal-box").style.background = colorArray[i];
            document.querySelector(".prev-btn").style.border = `2px solid ${colorArray[i]}`;
            document.querySelector(".next-btn").style.border = `2px solid ${colorArray[i]}`;
            document.querySelector(".matter-container").style.background = colorArray[i];
            document.querySelector(".can-do-container").style.background = colorArray[i];
            document.querySelector(".spec-target-header-box").style.border = `5px solid ${colorArray[i]}`;
            document.querySelector(".spec-target-header-text").style.color = colorArray[i];
            navigationBtn = document.querySelectorAll(".prev-next-btn-text");
            for (let x = 0; x < navigationBtn.length; x++) {
                navigationBtn[x].style.color = colorArray[i];
            }
            themeColor = colorArray[i];
        }
    }
}

function changeHoverBtnColor(btn, themeColor){
    btn.style.background = themeColor; // This function changes the background color of the object being selected
}

function changeHoverTextColor(text, themeColor){
    text.style.color = themeColor; // This function changes the color of the object being selected
}

// This obtains the ID of the webpage of the corresponding goal
const goalID = document.querySelector(".goal-icon").getAttribute("id");
changeThemeColor(goalID, goalColors);

/* 
    The remaining lines of this script enables the hovering actions of the previous and next buttons on the webpage.
    It changes its design whenever the mouse is on the buttons and returns back to its original state when the mouse
    is off the buttons.
*/
const prevBtn = document.querySelector(".prev-btn");
prevBtn.addEventListener("mouseover", function() {changeHoverBtnColor(prevBtn, themeColor);});
prevBtn.addEventListener("mouseout", function() {changeHoverBtnColor(prevBtn, "#FFFFFF");});

const nextBtn = document.querySelector(".next-btn");
nextBtn.addEventListener("mouseover", function() {changeHoverBtnColor(nextBtn, themeColor);});
nextBtn.addEventListener("mouseout", function() {changeHoverBtnColor(nextBtn, "#FFFFFF");});

const btnText = document.querySelectorAll(".prev-next-btn-text");
for (let y = 0; y < btnText.length; y++) {
    btnText[y].addEventListener("mouseover", function() {changeHoverTextColor(btnText[y], "#FFFFFF");});
}

for (let y = 0; y < btnText.length; y++) {
    btnText[y].addEventListener("mouseout", function() {changeHoverTextColor(btnText[y], themeColor);});
}