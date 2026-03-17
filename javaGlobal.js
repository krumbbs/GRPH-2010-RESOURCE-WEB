//achievements:
let a_1 = false; 
let a_1_check = false; 
let achievementItem1 = localStorage.getItem("achievement1_complete"); //GLOBAL ACHIEVEMENTS
//ENSURING changed true value doesn't get overwritten by establishing default value at start
if (achievementItem1!="true") {
    localStorage.setItem("achievement1_complete", "false");
}
let a_2 = false;

const achievementComplete = getComputedStyle(document.documentElement).getPropertyValue('--achievement_complete_typeColor')

function home() {
    window.location.href = 'index.html';
}
function informational() {
    window.location.href = 'sub_informational/index-sub_informational.html';
}
function practical() {
    window.location.href = 'sub_practical/index-sub_practical.html';
}


var root = document.querySelector(':root'); 

//moving around CSS variables
function f_waffleSide_open() {
    root.style.setProperty('--waffleSide', '--waffleSide_open'); //do NOT put an equal sign!!!!*******
    root.style.setProperty('--menuDisplay', 'flex');
    //root.style.setProperty('--waffleSide_transition', '77.5') //trying to transition menus... 
} 

function f_waffleSide_close() {
    root.style.setProperty('--waffleSide', '0px'); //do NOT put an equal sign!!!!*******
    root.style.setProperty('--menuDisplay', 'none');
} 

/* RUN CHECKS TO CLOSE PARENT MENUS... code below = bugged 
while (root.style('--waffleSide') = root.style('--waffleSide_open')) {
    f_waffleSide_close()
}
*/

function f_accessibilityFull_open () {
    root.style.setProperty('--accessibilityFull', '--accessibilityFull_open');
    root.style.setProperty('--menuDisplay', 'grid');
}

function f_accessibilityFull_close () {
    root.style.setProperty('--accessibilityFull', '0px');
    root.style.setProperty('--menuDisplay', 'none');
}

function f_navMenu_open () {
    root.style.setProperty('--navFull', '--navFull_open');
    root.style.setProperty('--menuDisplay_grid', 'grid');
}

function f_navMenu_close () {
    root.style.setProperty('--menuDisplay_grid', 'none');
    
}



                                // BODY CODE

/* CONST—getting css variable values; operating JS SEPERATELY from CSS definitions. */ 
const typeBodySize_small = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeSmall'); //document.documentElement refers to root of HTML (for some reason)
const typeBodySize_regular = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeRegular');
const typeBodySize_big = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeBig');
const typeTitleSize_small = getComputedStyle(document.documentElement).getPropertyValue('--typeTitleSizeSmall'); //title = not working
const typeTitleSize_regular = getComputedStyle(document.documentElement).getPropertyValue('--typeTitleSizeRegular');
const typeTitleSize_big = getComputedStyle(document.documentElement).getPropertyValue('--typeTtileSizeBig');

function f_typeSizeBody_small () {
    root.style.setProperty('--typeBodySize', typeBodySize_small);
    localStorage.setItem("body", typeBodySize_small);
    //alert("small");
}
function f_typeSizeTitle_small () {
    root.style.setProperty('--typeTitleSize', typeTitleSize_small);
}
function f_typeSizeBody_regular () {
    root.style.setProperty('--typeBodySize', typeBodySize_regular);
    localStorage.setItem("body", typeBodySize_regular); //GLOBAL NAV: SETTING PARAMETER TO SET VALUE. USE SAME STRING FOR OTHER VALUES
    //alert("reg");
}
function f_typeSizeTitle_regular () { //this function isn't activating—FIX LATER? 
    root.style.setProperty('--typeTitleSize', typeTitleSize_regular);
    //alert("typeTitleSize_regular")
}
function f_typeSizeBody_big () {
    root.style.setProperty('--typeBodySize', typeBodySize_big);
    root.style.setProperty('--typeTitleSize', typeTitleSize_big);
    localStorage.setItem("body", typeBodySize_big);
    //alert("big");
}

let bodyItem = localStorage.getItem("body"); //GLOBAL NAV: RETRIEVING PREV PARAMETER
root.style.setProperty('--typeBodySize', bodyItem); //GLOBAL NAV: CHANGING TO PARAMETER


const typeBodyContrast_light = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyContrastLight');
const typeBodyContrast_regular = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyContrastRegular');
const typeBodyContrast_bold = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyContrastBold');

function f_typeBodyContrast_light () {
    root.style.setProperty ('--typeBodyContrast', typeBodyContrast_light);
    localStorage.setItem("typeContrast", typeBodyContrast_light);
}
function f_typeBodyContrast_regular () {
    root.style.setProperty ('--typeBodyContrast', typeBodyContrast_regular);
    localStorage.setItem("typeContrast", typeBodyContrast_regular);

}
function f_typeBodyContrast_bold () {
    root.style.setProperty ('--typeBodyContrast', typeBodyContrast_bold);
    localStorage.setItem("typeContrast", typeBodyContrast_bold);
        //achievement functionality—running function with checks to make sure they don't run twice; changes css variable 
    a_1 = true; 
    function ach_1 () {
        root.style.setProperty('--achievementType', achievementComplete);
        alert("Achievement: Changed face to bold!"); 
    }
    if ((achievementItem1)==="false") { 
        //alert ("1");
        if ((a_1_check)===false) {
            //alert ("2");
            if ((a_1)===true) {
                //alert ("3");
                    ach_1 ();
                    localStorage.setItem("achievement1_complete", "true");
                }
            a_1_check = true; 
        }
    }
}

let contrastItem = localStorage.getItem("typeContrast"); //GLOBAL NAV: RETRIEVING PREV PARAMETER
root.style.setProperty('--typeBodyContrast', contrastItem); //GLOBAL NAV: CHANGING TO PARAMETER

const typeBodyFace_serif = getComputedStyle(document.documentElement).getPropertyValue('--typefaceSerif');
const typeBodyFace_sansSerif = getComputedStyle(document.documentElement).getPropertyValue('--typefaceSansSerif');
const typeBodyFace_friendly = getComputedStyle(document.documentElement).getPropertyValue('--typefaceFriendly');

function f_typeBodyFace_serif () {
    root.style.setProperty ('--typeBodyFace', typeBodyFace_serif);
    root.style.setProperty ('--typeTitleFace', typeBodyFace_serif);
    localStorage.setItem("typeFace", typeBodyFace_serif);
}
function f_typeBodyFace_sansSerif () {
    root.style.setProperty ('--typeBodyFace', typeBodyFace_sansSerif);
    root.style.setProperty ('--typeTitleFace', typeBodyFace_sansSerif);
    localStorage.setItem("typeFace", typeBodyFace_sansSerif);
}
function f_typeBodyFace_friendly () {
    root.style.setProperty ('--typeBodyFace', typeBodyFace_friendly);
    root.style.setProperty ('--typeTitleFace', typeBodyFace_friendly);
    localStorage.setItem("typeFace", typeBodyFace_friendly);
}

let faceItem = localStorage.getItem("typeFace"); //GLOBAL NAV: RETRIEVING PREV PARAMETER
root.style.setProperty('--typeBodyFace', faceItem); //GLOBAL NAV: CHANGING TO PARAMETER
root.style.setProperty('--typeTitleFace', faceItem); //GLOBAL NAV: CHANGING TO PARAMETER



const typeColor_dark = getComputedStyle(document.documentElement).getPropertyValue('--color_dark');
const typeColor_light = getComputedStyle(document.documentElement).getPropertyValue('--color_light');

function f_typeColor_dark () {
    root.style.setProperty ('--typeBodyColor', typeColor_dark);
    root.style.setProperty ('--typeTitleColor', typeColor_dark);
    localStorage.setItem("typeColor", typeColor_dark);
    
}
function f_typeColor_light () {
    root.style.setProperty ('--typeBodyColor', typeColor_light);
    root.style.setProperty ('--typeTitleColor', typeColor_light);
    localStorage.setItem("typeColor", typeColor_light);
}

const slider = document.querySelector('.a_slider input');
slider.addEventListener ('input', () => { //cannot get this to work with a normal function declaration
    const hue = slider.value;
    root.style.setProperty ('--typeBodyColor', `oklch(0.4 0.4 ${hue})`); //IT (doesnt) WORK?? 
    root.style.setProperty ('--typeTitleColor', `oklch(0.4 0.4 ${hue})`);
    localStorage.setItem("typeColor", typeColor_dark); // can look into specifically-changed values later 
})  

let colorItem = localStorage.getItem("typeColor"); //GLOBAL NAV: RETRIEVING PREV PARAMETER
root.style.setProperty('--typeBodyColor', colorItem); //GLOBAL NAV: CHANGING TO PARAMETER
root.style.setProperty('--typeTitleColor', colorItem); //GLOBAL NAV: CHANGING TO PARAMETER

//NOT FUNCTIONAL—highlight code

const highlight_on = getComputedStyle(document.documentElement).getPropertyValue('--highlight_on');
const highlight_off = getComputedStyle(document.documentElement).getPropertyValue('--highlight_off');

function f_highlight_on () {
    root.style.setProperty ('--highlight', highlight_on);
}
function f_highlight_off () {
    root.style.setProperty ('--highlight', highlight_off);
}

                        //WEBSITE CODE

        // LEAVE CONTRAST UNTIL YOU'RE DONE PRINT ASSETS. 

const websiteBackgroundColor_dark = getComputedStyle(document.documentElement).getPropertyValue('--color_dark');
const websiteBackgroundColor_light = getComputedStyle(document.documentElement).getPropertyValue('--color_light');

function f_websiteBackgroundColor_dark () {
    root.style.setProperty ('--websiteBackgroundColor', websiteBackgroundColor_dark);
    localStorage.setItem("bgColor", websiteBackgroundColor_dark); 
}
function f_websiteBackgroundColor_light () {
    root.style.setProperty ('--websiteBackgroundColor', websiteBackgroundColor_light);
    localStorage.setItem("bgColor", websiteBackgroundColor_light); 
}

const slider_bg = document.querySelector('.bg_slider input');
slider_bg.addEventListener ('input', () => {
    const hue = slider_bg.value;
    root.style.setProperty ('--websiteBackgroundColor', `oklch(0.45 0.1 ${hue})`);
    localStorage.setItem("bgColor", websiteBackgroundColor_light); // can look into specifically-changed values later 
})  

let bgColorItem = localStorage.getItem("bgColor"); //GLOBAL NAV: RETRIEVING PREV PARAMETER
root.style.setProperty('--websiteBackgroundColor', bgColorItem); //GLOBAL NAV: CHANGING TO PARAMETER

const websiteBackgroundContrast_regular = getComputedStyle(document.documentElement).getPropertyValue('--color_light');
const websiteBackgroundColor_low = getComputedStyle(document.documentElement).getPropertyValue('--websiteBackgroundImage_on');
const colorWhite = "white";
const colorBlack = "black"

function f_websiteContrast_high () {
    root.style.setProperty ('--websiteBackgroundColor', colorWhite)
    root.style.setProperty ('--websiteBackgroundImage', 0);
    root.style.setProperty ('--typeTitleColor', colorBlack);
    root.style.setProperty ('--typeBodyColor', colorBlack);
    root.style.setProperty ('--backdrop', 0);
    localStorage.setItem("bgContrast1", colorWhite); 
    localStorage.setItem("bgContrast2", 0);
    localStorage.setItem("bgContrast3", colorBlack);
    localStorage.setItem("bgContrast4", colorBlack);
    localStorage.setItem("bgContrast5", 0);
}

function f_websiteContrast_regular () {
    root.style.setProperty ('--websiteBackgroundColor', websiteBackgroundContrast_regular)
    root.style.setProperty ('--websiteBackgroundImage', 0);
    root.style.setProperty ('--typeTitleColor', typeColor_dark);
    root.style.setProperty ('--typeBodyColor', typeColor_dark);
    root.style.setProperty ('--backdrop', 0);
    localStorage.setItem("bgContrast1", websiteBackgroundContrast_regular); 
    localStorage.setItem("bgContrast2", 0);
    localStorage.setItem("bgContrast3", typeColor_dark);
    localStorage.setItem("bgContrast4", typeColor_dark);
    localStorage.setItem("bgContrast5", 0);
}

function f_websiteContrast_low () {
    root.style.setProperty ('--websiteBackgroundImage', websiteBackgroundColor_low);
    root.style.setProperty ('--typeTitleColor', typeColor_dark);
    root.style.setProperty ('--typeBodyColor', typeColor_dark);
    root.style.setProperty ('--backdrop', colorWhite);
    localStorage.setItem("bgContrast1", colorWhite);
    localStorage.setItem("bgContrast2", websiteBackgroundColor_low); 
    localStorage.setItem("bgContrast3", typeColor_dark);
    localStorage.setItem("bgContrast4", typeColor_dark);
    localStorage.setItem("bgContrast5", colorWhite);
}

let bgContrast1Item = localStorage.getItem("bgContrast1"); //GLOBAL NAV: RETRIEVING PREV PARAMETER
let bgContrast2Item = localStorage.getItem("bgContrast2"); //GLOBAL NAV: RETRIEVING PREV PARAMETER
let bgContrast3Item = localStorage.getItem("bgContrast3"); //GLOBAL NAV: RETRIEVING PREV PARAMETER
let bgContrast4Item = localStorage.getItem("bgContrast4"); //GLOBAL NAV: RETRIEVING PREV PARAMETER
let bgContrast5Item = localStorage.getItem("bgContrast5"); //GLOBAL NAV: RETRIEVING PREV PARAMETER
root.style.setProperty('--websiteBackgroundColor', bgContrast1Item); //GLOBAL NAV: CHANGING TO PARAMETER
root.style.setProperty('--websiteBackgroundImage', bgContrast2Item); //GLOBAL NAV: CHANGING TO PARAMETER
root.style.setProperty('--typeTitleColor', bgContrast3Item); //GLOBAL NAV: CHANGING TO PARAMETER
root.style.setProperty('--typeBodyColor', bgContrast4Item); //GLOBAL NAV: CHANGING TO PARAMETER
root.style.setProperty('--backdrop', bgContrast5Item); //GLOBAL NAV: CHANGING TO PARAMETER


        //TTS LATER.

                        //ACHIEVEMENT SECTION (LATER)—GLOBAL VARIABLE IMPLEMENTATION 
// make funciton to toggle achievements on 
// store variable value from achievements in the while loop 
// run checks to see if while loop is true 

const achievementOpen = getComputedStyle(document.documentElement).getPropertyValue('--achievementMenu_display_open');

function f_achievementOpen() {
    root.style.setProperty('--achievementMenu_display', achievementOpen);
}

function f_achievementClose() {
    root.style.setProperty('--achievementMenu_display', "none");
}

//global achievement typesetting (achievement menu)
if ((achievementItem1)==="true") {
    function ach_1_check () {
        root.style.setProperty('--achievementType', achievementComplete);
    }
    ach_1_check();
}