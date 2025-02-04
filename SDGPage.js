function origSrcDisplay(iconBtn, origSrc){
    iconBtn.src = origSrc; // This function converts the asset source of the image back to its original one
}

function hoverSrcDisplay(iconBtn, hoverSrc){
    iconBtn.src = hoverSrc; // This function converts the asset source of the image to its an image that is for hovering interactions
}

function changeBorder(iconBtn, color){
    /*
        This function is for mouse hover interactions on the SDG icons. 
        This is for the icon buttons. When the mouse pointer is on the icon button,
        it adds a border on the image, while when the mouse pointer
        is off the button, it turns back into its original state. This gives
        an idea to the user that the element s/he hovering on are clickable
        buttons.
    */
    if (iconBtn.classList.contains(color)) {
        iconBtn.classList.remove(color);
    } else {
        iconBtn.classList.add(color);
    }
}

// Border Class, and Directory Links of Original and Hovering Source Assets intended for Goal 1
const borderGoal1 = "goal1-border";
const origSrcGoal1 = "Assets/SDG Icons/Goal-01.png";
const hoverSrcGoal1 = "Assets/SDG Icons Inverted/Inv-Goal-01.png";

/*
    This activates the hovering function of the icon button of Goal 1.
    When the mouse pointer is on it, it will change the original icon with its inverted version +
    an additional border. When the mouse pointer is out of it, it will return back to its original
    state. The same thing happens for the rest of the SDG icons.
*/
const iconBtnGoal1 = document.getElementById("id-icon-goal1");
iconBtnGoal1.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnGoal1, hoverSrcGoal1); changeBorder(iconBtnGoal1, borderGoal1);});
iconBtnGoal1.addEventListener("mouseout", function() {origSrcDisplay(iconBtnGoal1, origSrcGoal1); changeBorder(iconBtnGoal1, borderGoal1);});

// Border Class, and Directory Links of Original and Hovering Source Assets intended for Goal 2
const borderGoal2 = "goal2-border";
const origSrcGoal2 = "Assets/SDG Icons/Goal-02.png";
const hoverSrcGoal2 = "Assets/SDG Icons Inverted/Inv-Goal-02.png";

// This activates the hovering function of the icon button of Goal 2.
const iconBtnGoal2 = document.getElementById("id-icon-goal2");
iconBtnGoal2.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnGoal2, hoverSrcGoal2); changeBorder(iconBtnGoal2, borderGoal2);});
iconBtnGoal2.addEventListener("mouseout", function() {origSrcDisplay(iconBtnGoal2, origSrcGoal2); changeBorder(iconBtnGoal2, borderGoal2);});

// Border Class, and Directory Links of Original and Hovering Source Assets intended for Goal 3
const borderGoal3 = "goal3-border";
const origSrcGoal3 = "Assets/SDG Icons/Goal-03.png";
const hoverSrcGoal3 = "Assets/SDG Icons Inverted/Inv-Goal-03.png";

// This activates the hovering function of the icon button of Goal 3
const iconBtnGoal3 = document.getElementById("id-icon-goal3");
iconBtnGoal3.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnGoal3, hoverSrcGoal3); changeBorder(iconBtnGoal3, borderGoal3);});
iconBtnGoal3.addEventListener("mouseout", function() {origSrcDisplay(iconBtnGoal3, origSrcGoal3); changeBorder(iconBtnGoal3, borderGoal3);});

// Border Class, and Directory Links of Original and Hovering Source Assets intended for Goal 4
const borderGoal4 = "goal4-border";
const origSrcGoal4 = "Assets/SDG Icons/Goal-04.png";
const hoverSrcGoal4 = "Assets/SDG Icons Inverted/Inv-Goal-04.png";

// This activates the hovering function of the icon button of Goal 4
const iconBtnGoal4 = document.getElementById("id-icon-goal4");
iconBtnGoal4.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnGoal4, hoverSrcGoal4); changeBorder(iconBtnGoal4, borderGoal4);});
iconBtnGoal4.addEventListener("mouseout", function() {origSrcDisplay(iconBtnGoal4, origSrcGoal4); changeBorder(iconBtnGoal4, borderGoal4);});

// Border Class, and Directory Links of Original and Hovering Source Assets intended for Goal 5
const borderGoal5 = "goal5-border";
const origSrcGoal5 = "Assets/SDG Icons/Goal-05.png";
const hoverSrcGoal5 = "Assets/SDG Icons Inverted/Inv-Goal-05.png";

// This activates the hovering function of the icon button of Goal 5
const iconBtnGoal5 = document.getElementById("id-icon-goal5");
iconBtnGoal5.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnGoal5, hoverSrcGoal5); changeBorder(iconBtnGoal5, borderGoal5);});
iconBtnGoal5.addEventListener("mouseout", function() {origSrcDisplay(iconBtnGoal5, origSrcGoal5); changeBorder(iconBtnGoal5, borderGoal5);});

// Border Class, and Directory Links of Original and Hovering Source Assets intended for Goal 6
const borderGoal6 = "goal6-border";
const origSrcGoal6 = "Assets/SDG Icons/Goal-06.png";
const hoverSrcGoal6 = "Assets/SDG Icons Inverted/Inv-Goal-06.png";

// This activates the hovering function of the icon button of Goal 6
const iconBtnGoal6 = document.getElementById("id-icon-goal6");
iconBtnGoal6.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnGoal6, hoverSrcGoal6); changeBorder(iconBtnGoal6, borderGoal6);});
iconBtnGoal6.addEventListener("mouseout", function() {origSrcDisplay(iconBtnGoal6, origSrcGoal6); changeBorder(iconBtnGoal6, borderGoal6);});

// Border Class, and Directory Links of Original and Hovering Source Assets intended for Goal 7
const borderGoal7 = "goal7-border";
const origSrcGoal7 = "Assets/SDG Icons/Goal-07.png";
const hoverSrcGoal7 = "Assets/SDG Icons Inverted/Inv-Goal-07.png";

// This activates the hovering function of the icon button of Goal 7
const iconBtnGoal7 = document.getElementById("id-icon-goal7");
iconBtnGoal7.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnGoal7, hoverSrcGoal7); changeBorder(iconBtnGoal7, borderGoal7);});
iconBtnGoal7.addEventListener("mouseout", function() {origSrcDisplay(iconBtnGoal7, origSrcGoal7); changeBorder(iconBtnGoal7, borderGoal7);});

// Border Class, and Directory Links of Original and Hovering Source Assets intended for Goal 8
const borderGoal8 = "goal8-border";
const origSrcGoal8 = "Assets/SDG Icons/Goal-08.png";
const hoverSrcGoal8 = "Assets/SDG Icons Inverted/Inv-Goal-08.png";

// This activates the hovering function of the icon button of Goal 8
const iconBtnGoal8 = document.getElementById("id-icon-goal8");
iconBtnGoal8.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnGoal8, hoverSrcGoal8); changeBorder(iconBtnGoal8, borderGoal8);});
iconBtnGoal8.addEventListener("mouseout", function() {origSrcDisplay(iconBtnGoal8, origSrcGoal8); changeBorder(iconBtnGoal8, borderGoal8);});

// Border Class, and Directory Links of Original and Hovering Source Assets intended for Goal 9
const borderGoal9 = "goal9-border";
const origSrcGoal9 = "Assets/SDG Icons/Goal-09.png";
const hoverSrcGoal9 = "Assets/SDG Icons Inverted/Inv-Goal-09.png";

// This activates the hovering function of the icon button of Goal 9
const iconBtnGoal9 = document.getElementById("id-icon-goal9");
iconBtnGoal9.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnGoal9, hoverSrcGoal9); changeBorder(iconBtnGoal9, borderGoal9);});
iconBtnGoal9.addEventListener("mouseout", function() {origSrcDisplay(iconBtnGoal9, origSrcGoal9); changeBorder(iconBtnGoal9, borderGoal9);});

// Border Class, and Directory Links of Original and Hovering Source Assets intended for Goal 10
const borderGoal10 = "goal10-border";
const origSrcGoal10 = "Assets/SDG Icons/Goal-10.png";
const hoverSrcGoal10 = "Assets/SDG Icons Inverted/Inv-Goal-10.png";

// This activates the hovering function of the icon button of Goal 10
const iconBtnGoal10 = document.getElementById("id-icon-goal10");
iconBtnGoal10.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnGoal10, hoverSrcGoal10); changeBorder(iconBtnGoal10, borderGoal10);});
iconBtnGoal10.addEventListener("mouseout", function() {origSrcDisplay(iconBtnGoal10, origSrcGoal10); changeBorder(iconBtnGoal10, borderGoal10);});

// Border Class, and Directory Links of Original and Hovering Source Assets intended for Goal 11
const borderGoal11 = "goal11-border";
const origSrcGoal11 = "Assets/SDG Icons/Goal-11.png";
const hoverSrcGoal11 = "Assets/SDG Icons Inverted/Inv-Goal-11.png";

// This activates the hovering function of the icon button of Goal 11
const iconBtnGoal11 = document.getElementById("id-icon-goal11");
iconBtnGoal11.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnGoal11, hoverSrcGoal11); changeBorder(iconBtnGoal11, borderGoal11);});
iconBtnGoal11.addEventListener("mouseout", function() {origSrcDisplay(iconBtnGoal11, origSrcGoal11); changeBorder(iconBtnGoal11, borderGoal11);});

// Border Class, and Directory Links of Original and Hovering Source Assets intended for Goal 12
const borderGoal12 = "goal12-border";
const origSrcGoal12 = "Assets/SDG Icons/Goal-12.png";
const hoverSrcGoal12 = "Assets/SDG Icons Inverted/Inv-Goal-12.png";

// This activates the hovering function of the icon button of Goal 12
const iconBtnGoal12 = document.getElementById("id-icon-goal12");
iconBtnGoal12.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnGoal12, hoverSrcGoal12); changeBorder(iconBtnGoal12, borderGoal12);});
iconBtnGoal12.addEventListener("mouseout", function() {origSrcDisplay(iconBtnGoal12, origSrcGoal12); changeBorder(iconBtnGoal12, borderGoal12);});

// Border Class, and Directory Links of Original and Hovering Source Assets intended for Goal 13
const borderGoal13 = "goal13-border";
const origSrcGoal13 = "Assets/SDG Icons/Goal-13.png";
const hoverSrcGoal13 = "Assets/SDG Icons Inverted/Inv-Goal-13.png";

// This activates the hovering function of the icon button of Goal 13
const iconBtnGoal13 = document.getElementById("id-icon-goal13");
iconBtnGoal13.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnGoal13, hoverSrcGoal13); changeBorder(iconBtnGoal13, borderGoal13);});
iconBtnGoal13.addEventListener("mouseout", function() {origSrcDisplay(iconBtnGoal13, origSrcGoal13); changeBorder(iconBtnGoal13, borderGoal13);});

// Border Class, and Directory Links of Original and Hovering Source Assets intended for Goal 14
const borderGoal14 = "goal14-border";
const origSrcGoal14 = "Assets/SDG Icons/Goal-14.png";
const hoverSrcGoal14 = "Assets/SDG Icons Inverted/Inv-Goal-14.png";

// This activates the hovering function of the icon button of Goal 14
const iconBtnGoal14 = document.getElementById("id-icon-goal14");
iconBtnGoal14.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnGoal14, hoverSrcGoal14); changeBorder(iconBtnGoal14, borderGoal14);});
iconBtnGoal14.addEventListener("mouseout", function() {origSrcDisplay(iconBtnGoal14, origSrcGoal14); changeBorder(iconBtnGoal14, borderGoal14);});

// Border Class, and Directory Links of Original and Hovering Source Assets intended for Goal 15
const borderGoal15 = "goal15-border";
const origSrcGoal15 = "Assets/SDG Icons/Goal-15.png";
const hoverSrcGoal15 = "Assets/SDG Icons Inverted/Inv-Goal-15.png";

// This activates the hovering function of the icon button of Goal 15
const iconBtnGoal15 = document.getElementById("id-icon-goal15");
iconBtnGoal15.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnGoal15, hoverSrcGoal15); changeBorder(iconBtnGoal15, borderGoal15);});
iconBtnGoal15.addEventListener("mouseout", function() {origSrcDisplay(iconBtnGoal15, origSrcGoal15); changeBorder(iconBtnGoal15, borderGoal15);});

// Border Class, and Directory Links of Original and Hovering Source Assets intended for Goal 16
const borderGoal16 = "goal16-border";
const origSrcGoal16 = "Assets/SDG Icons/Goal-16.png";
const hoverSrcGoal16 = "Assets/SDG Icons Inverted/Inv-Goal-16.png";

// This activates the hovering function of the icon button of Goal 16
const iconBtnGoal16 = document.getElementById("id-icon-goal16");
iconBtnGoal16.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnGoal16, hoverSrcGoal16); changeBorder(iconBtnGoal16, borderGoal16);});
iconBtnGoal16.addEventListener("mouseout", function() {origSrcDisplay(iconBtnGoal16, origSrcGoal16); changeBorder(iconBtnGoal16, borderGoal16);});

// Border Class, and Directory Links of Original and Hovering Source Assets intended for Goal 17
const borderGoal17 = "goal17-border";
const origSrcGoal17 = "Assets/SDG Icons/Goal-17.png";
const hoverSrcGoal17 = "Assets/SDG Icons Inverted/Inv-Goal-17.png";

// This activates the hovering function of the icon button of Goal 17
const iconBtnGoal17 = document.getElementById("id-icon-goal17");
iconBtnGoal17.addEventListener("mouseover", function() {hoverSrcDisplay(iconBtnGoal17, hoverSrcGoal17); changeBorder(iconBtnGoal17, borderGoal17);});
iconBtnGoal17.addEventListener("mouseout", function() {origSrcDisplay(iconBtnGoal17, origSrcGoal17); changeBorder(iconBtnGoal17, borderGoal17);});
