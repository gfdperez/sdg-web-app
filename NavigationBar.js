function hoverButton(btnType){
    /*
        This function is for mouse hover interactions on the navigation bar. 
        This is for the text buttons. When the mouse pointer is on the button,
        it turns its color into a darker shade, while when the mouse pointer
        is off the button, it turns back into its original color. This gives
        an idea to the user that the element s/he hovering on are clickable
        buttons.

    */
    for (let i = 0; i < btnType.length; i++) {
        btnType[i].addEventListener("mouseover", function(){
            btnType[i].style.color = "#02558B";
        })
    }
    
    for (let i = 0; i < btnType.length; i++) {
        btnType[i].addEventListener("mouseout", function(){
            btnType[i].style.color = "#009DDA";
        })
    }
}

const naviBarBtn = document.querySelectorAll(".navi-bar-button-text");
hoverButton(naviBarBtn); // Function invocation using the navigation bar buttons as parameters

const dmBtn = document.querySelectorAll(".drop-menu-text");
hoverButton(dmBtn); // Function invocation using the drop down menu buttons as parameters

function origSrcDisplay(iconBtn, origSrc){
    iconBtn.src = origSrc; // This function converts the asset source of the image back to its original one
}

function hoverSrcDisplay(iconBtn, hoverSrc){
    iconBtn.src = hoverSrc; // This function converts the asset source of the image to its an image that is for hovering interactions
}

// Directory Link of Original and Hovering Source Assets intended for Facebook Logo Button
const origSrcFB = "Assets/fb_logo.png";
const hoverSrcFB = "Assets/fb_logo_dark.png";

/* 
    The next elements enables the hover function of the Facebook Logo Button.
    When the mouse is on the button, it replaces the image of logo into its
    darker version, while when the mouse is off the button, it turns back into
    it original state. The same thing goes for the twitter and instagram buttons
*/
const iconBtnFB = document.getElementById("fb-logo");
iconBtnFB.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnFB, hoverSrcFB);});
iconBtnFB.addEventListener("mouseout", function() {origSrcDisplay(iconBtnFB, origSrcFB);});

// Directory Link of Original and Hovering Source Assets intended for Twitter Logo Button
const origSrcTwitter = "Assets/twitter_logo.png";
const hoverSrcTwitter = "Assets/twitter_logo_dark.png";

// The next elements enables the hover function of the Twitter Logo Button.
const iconBtnTwitter = document.getElementById("twitter-logo");
iconBtnTwitter.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnTwitter, hoverSrcTwitter);});
iconBtnTwitter.addEventListener("mouseout", function() {origSrcDisplay(iconBtnTwitter, origSrcTwitter);});

// Directory Link of Original and Hovering Source Assets intended for Instagram Logo Button
const origSrcIG = "Assets/ig_logo.png";
const hoverSrcIG = "Assets/ig_logo_dark.png";

// The next elements enables the hover function of the Instagram Logo Button.
const iconBtnIG = document.getElementById("ig-logo");
iconBtnIG.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnIG, hoverSrcIG);});
iconBtnIG.addEventListener("mouseout", function() {origSrcDisplay(iconBtnIG, origSrcIG);});


function revealDropDownMenu() {
    /*
        This function is a complementary function for an Event Listener function
        When the user clicks SDG navigation bar button, another set of buttons
        displayed as a drop down menu is displayed on the webpage. If the drop
        down menu is displayed, the next click of the user on the button will hide
        the drop down menu again.
    */
    if (dropDownMenu.classList.contains("reveal")) {
      dropDownMenu.classList.remove("reveal");
    } else {
      dropDownMenu.classList.add("reveal");
    }
}

const sdgBtn = document.querySelector(".sdg-button"); // Selects the SDG navigation bar button
const dropDownMenu = document.querySelector(".drop-menu-container"); // Selects the container of the drop down menu

// Implementation of an Event Listener to the SDG navigation bar button and invocation of revealDropDownMenu()
sdgBtn.addEventListener("click", revealDropDownMenu); 

