var root = document.querySelector(':root'); 


/*
let localcheck_a1 = true; 
let localcheck_a2 = true; 
let localcheck_a3 = true; 
*/

//achievements:
let a_1 = false;
let a_2 = false; 
let a_3 = false; 

//let a_1_check = "false";

//localStorage.setItem("achievement1_complete") = achievementItem1; 

//alert (a_1_check); 

//let a_1_check_initial = localStorage.getItem("a_1_check_stored");
let achievementItem1_initial = localStorage.getItem("achievement1_complete");
let achievementItem2_initial = localStorage.getItem("achievement2_complete");
let achievementItem3_initial = localStorage.getItem("achievement3_complete");

if (achievementItem1_initial === null) {
    localStorage.setItem("achievement1_complete", "false");
}
if (achievementItem2_initial === null) {
    localStorage.setItem("achievement2_complete", "false");
}
if (achievementItem3_initial === null) {
    localStorage.setItem("achievement3_complete", "false");
}

let achievementItem1 = achievementItem1_initial;
let achievementItem2 = achievementItem2_initial;
let achievementItem3 = achievementItem3_initial;

const achievementComplete = getComputedStyle(document.documentElement).getPropertyValue('--achievement_complete_typeColor');
/*
function a() {
        root.style.setProperty('--achievementType2', achievementComplete);
}
a();
*/

function home() {
    window.location.href = 'index.html';
}
function homemin1() {
    window.location.href = '../index.html';
}
function homemin2() {
    window.location.href = '../../index.html';
}

function informational() {
    window.location.href = 'sub_informational/index-sub_informational.html';
}
function informationalmin1() {
    window.location.href = '../sub_informational/index-sub_informational.html';
}
function informationalmin2() {
    window.location.href = '../../sub_informational/index-sub_informational.html';
}

function practical() {
    window.location.href = 'sub_practical/index-sub_practical.html';
}
function practicalmin1() {
    window.location.href = '../sub_practical/index-sub_practical.html';
}
function practicalmin2() {
    window.location.href = '../../sub_practical/index-sub_practical.html';
}

function applications_button() {
    window.location.href ='subsub_apps/index-subsub_apps.html'    
}
function applications_buttonmin1() {
    window.location.href ='../subsub_apps/index-subsub_apps.html'    
}
function applications_buttonmin2() {
    window.location.href ='../../subsub_apps/index-subsub_apps.html'    
}

function mediaPrefs_button() {
    window.location.href ='subsub_mediaPref/index-subsub_mediaPref.html'    
}
function mediaPrefs_buttonmin1() {
    window.location.href ='../subsub_mediaPref/index-subsub_mediaPref.html'    
}
function mediaPrefs_buttonmin2() {
    window.location.href ='../../subsub_mediaPref/index-subsub_mediaPref.html'    
}

function storefront_button() {
    window.location.href ='subsub_storefront/index-subsub_storefront.html'    
}
function storefront_buttonmin1() {
    window.location.href ='../subsub_storefront/index-subsub_storefront.html'    
}
function storefront_buttonmin2() {
    window.location.href ='../../subsub_storefront/index-subsub_storefront.html'    
}

function genMindset_button() {
    window.location.href ='subsub_genMindset/index-subsub_genMindset.html'    
}
function genMindset_buttonmin1() {
    window.location.href ='../subsub_genMindset/index-subsub_genMindset.html'    
}
function genMindset_buttonmin2() {
    window.location.href ='../../subsub_genMindset/index-subsub_genMindset.html'    
}

function primeTime_button() {
    window.location.href ='subsub_primeTime/index-subsub_primeTime.html'    
}
function primeTime_buttonmin1() {
    window.location.href ='../subsub_primeTime/index-subsub_primeTime.html'    
}
function primeTime_buttonmin2() {
    window.location.href ='../../subsub_primeTime/index-subsub_primeTime.html'    
}

function timeManagement_button() {
    window.location.href ='subsub_timeManagement/index-subsub_timeManagement.html'    
}
function timeManagement_buttonmin1() {
    window.location.href ='../subsub_timeManagement/index-subsub_timeManagement.html'    
}
function timeManagement_buttonmin2() {
    window.location.href ='../../subsub_timeManagement/index-subsub_timeManagement.html'    
}



//moving around CSS variables
function f_waffleSide_open() {
    root.style.setProperty('--waffleSide', '--waffleSide_open'); //do NOT put an equal sign!!!!*******
    root.style.setProperty('--menuDisplay_waffle', 'flex');
    //root.style.setProperty('--waffleSide_transition', '77.5') //trying to transition menus... 
} 

function f_waffleSide_close() {
    root.style.setProperty('--waffleSide', '0px'); //do NOT put an equal sign!!!!*******
    root.style.setProperty('--menuDisplay_waffle', 'none');
    f_achievementClose();
    f_accessibilityFull_close();
    f_navMenu_close();
} 

/* RUN CHECKS TO CLOSE PARENT MENUS... code below = bugged 
while (root.style('--waffleSide') = root.style('--waffleSide_open')) {
    f_waffleSide_close()
}
*/

function f_accessibilityFull_open () {
    const accMenuOpen = getComputedStyle(document.documentElement).getPropertyValue('--accessibilityFull_open'); //document.documentElement refers to root of HTML (for some reason)
    root.style.setProperty('--accessibilityFull', accMenuOpen);
    root.style.setProperty('--menuDisplay', 'grid');
    f_navMenu_close ();
    f_achievementClose();
}

function f_accessibilityFull_close () {
    root.style.setProperty('--accessibilityFull', '0px');
    root.style.setProperty('--menuDisplay', 'none');
}

function f_navMenu_open () {
    root.style.setProperty('--navFull', '--navFull_open');
    root.style.setProperty('--menuDisplay_grid', 'grid');
    f_accessibilityFull_close ();
    f_achievementClose();
}

function f_navMenu_close () {
    root.style.setProperty('--menuDisplay_grid', 'none');
}



                                // BODY CODE

/* CONST—getting css variable values; operating JS SEPERATELY from CSS definitions. */ 
const typeBodySize_small = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeSmall'); //document.documentElement refers to root of HTML (for some reason)
const typeBodySize_regular = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeRegular');
const typeBodySize_big = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeBig');
const typeSubHeadSize_small = getComputedStyle(document.documentElement).getPropertyValue('--type_bodySubHeadSizeSmall'); //title = not working
const typeSubHeadSize_regular = getComputedStyle(document.documentElement).getPropertyValue('--type_bodySubHeadSizeRegular');
const typeSubHeadSize_big = getComputedStyle(document.documentElement).getPropertyValue('--type_bodySubHeadSizeBig');
// mobile:
const typeBodySize_small_min = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeSmall_min'); //document.documentElement refers to root of HTML (for some reason)
const typeBodySize_regular_min = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeRegular_min');
const typeBodySize_big_min = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeBig_min');
const typeSubHeadSize_small_min = getComputedStyle(document.documentElement).getPropertyValue('--type_bodySubHeadSizeSmall_min'); //title = not working
const typeSubHeadSize_regular_min = getComputedStyle(document.documentElement).getPropertyValue('--type_bodySubHeadSizeRegular_min');
const typeSubHeadSize_big_min = getComputedStyle(document.documentElement).getPropertyValue('--type_bodySubHeadSizeBig_min');


function f_typeSizeBody_small () {
    root.style.setProperty('--typeBodySize', typeBodySize_small);
    localStorage.setItem("body", typeBodySize_small);
    root.style.setProperty('--typeBodySize_min', typeBodySize_small_min);
    localStorage.setItem("body_min", typeBodySize_small_min);

    root.style.setProperty('--typeSubHeadSize', typeSubHeadSize_small);
    localStorage.setItem("bodySubHead", typeSubHeadSize_small);
    root.style.setProperty('--typeSubHeadSize_min', typeSubHeadSize_small_min);
    localStorage.setItem("bodySubHead_min", typeSubHeadSize_small_min);
}

function f_typeSizeBody_regular () {
    root.style.setProperty('--typeBodySize', typeBodySize_regular);
    localStorage.setItem("body", typeBodySize_regular);
    root.style.setProperty('--typeBodySize_min', typeBodySize_regular_min);
    localStorage.setItem("body_min", typeBodySize_regular_min);

    root.style.setProperty('--typeSubHeadSize', typeSubHeadSize_regular);
    localStorage.setItem("bodySubHead", typeSubHeadSize_small);
    root.style.setProperty('--typeSubHeadSize_min', typeSubHeadSize_regular_min);
    localStorage.setItem("bodySubHead_min", typeSubHeadSize_regular_min);
}

function f_typeSizeBody_big () {
    root.style.setProperty('--typeBodySize', typeBodySize_big);
    localStorage.setItem("body", typeBodySize_big);
    root.style.setProperty('--typeBodySize_min', typeBodySize_big_min);
    localStorage.setItem("body_min", typeBodySize_big_min);

    root.style.setProperty('--typeSubHeadSize', typeSubHeadSize_big);
    localStorage.setItem("bodySubHead", typeSubHeadSize_big);
    root.style.setProperty('--typeSubHeadSize_min', typeSubHeadSize_big_min);
    localStorage.setItem("bodySubHead_min", typeSubHeadSize_big_min);
}

let bodyItem = localStorage.getItem("body"); //GLOBAL NAV: RETRIEVING PREV PARAMETER
root.style.setProperty('--typeBodySize', bodyItem); //GLOBAL NAV: CHANGING TO PARAMETER
let bodyItem_min = localStorage.getItem("body_min"); //GLOBAL NAV: RETRIEVING PREV PARAMETER
root.style.setProperty('--typeBodySize_min', bodyItem_min); //GLOBAL NAV: CHANGING TO PARAMETER
let subHeadItem = localStorage.getItem("bodySubHead"); //GLOBAL NAV: RETRIEVING PREV PARAMETER
root.style.setProperty('--typeSubHeadSize', subHeadItem); //GLOBAL NAV: CHANGING TO PARAMETER
let subHeadItem_min = localStorage.getItem("bodySubHead_min"); //GLOBAL NAV: RETRIEVING PREV PARAMETER
root.style.setProperty('--typeSubHeadSize_min', bodyItem_min); //GLOBAL NAV: CHANGING TO PARAMETER


const typeBodyContrast_light = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyContrastLight');
const typeBodyContrast_regular = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyContrastRegular');
const typeBodyContrast_bold = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyContrastBold');

//ACHIEVEMENT TEXT CHANGES...
const textChange1 = document.getElementById('achievement1_id');

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
//    a_1 = true; 
    function ach_1 () {
        root.style.setProperty('--achievementType1', achievementComplete);
        alert("Achievement: Changed face to bold!"); 
        achievement1_id.textContent = 'Completed!';
    }
//    if (a_1 = true) {
    if ((achievementItem1)!="true") { 
        ach_1();
        localStorage.setItem("achievement1_complete", "true"); 
        achievementItem1_initial = achievementItem1;
        window.location.reload();
    }
//    }        
    else {
//        alert ("achievement already claimed");
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

//ACHIVEMENT...
// const textChange3 = document.getElementById('achievement3_id');


function f_typeColor_dark () {
    root.style.setProperty ('--typeBodyColor', typeColor_dark);
    root.style.setProperty ('--typeTitleColor', typeColor_dark);
    localStorage.setItem("typeColor", typeColor_dark);
    root.style.setProperty ('--websiteBackgroundColor', websiteBackgroundColor_light);
    localStorage.setItem("bgColor", websiteBackgroundColor_light); 
}
function f_typeColor_light () {
    root.style.setProperty ('--typeBodyColor', typeColor_light);
    root.style.setProperty ('--typeTitleColor', typeColor_light);
    localStorage.setItem("typeColor", typeColor_light);
    root.style.setProperty ('--websiteBackgroundColor', websiteBackgroundColor_dark);
    localStorage.setItem("bgColor", websiteBackgroundColor_dark); 
//    a_3 = true; 
    function ach_3 () {
        root.style.setProperty('--achievementType3', achievementComplete);
        alert("Achievement: Changed type color to light!"); 
        achievement3_id.textContent = 'Completed!';
    }
//    if (a_3 = true) {
        if ((achievementItem3)!="true") { //three === is for boolean; two == is for 'equality' (not necessarily numberical; can be any value)
            ach_3 ();
            localStorage.setItem("achievement3_complete", "true"); //do a network test** for website...
            achievementItem3_initial = achievementItem3;
            window.location.reload();
        }
//    }        
    else {
//        alert ("achievement already claimed");
    }
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

// //NOT FUNCTIONAL—highlight code

// const highlight_on = getComputedStyle(document.documentElement).getPropertyValue('--highlight_on');
// const highlight_off = getComputedStyle(document.documentElement).getPropertyValue('--highlight_off');

// function f_highlight_on () {
//     root.style.setProperty ('--highlight', highlight_on);
// }
// function f_highlight_off () {
//     root.style.setProperty ('--highlight', highlight_off);
// }

                        //WEBSITE CODE

        // LEAVE CONTRAST UNTIL YOU'RE DONE PRINT ASSETS. 

const websiteBackgroundColor_dark = getComputedStyle(document.documentElement).getPropertyValue('--color_dark');
const websiteBackgroundColor_light = getComputedStyle(document.documentElement).getPropertyValue('--color_light');

function f_websiteBackgroundColor_dark () {
    root.style.setProperty ('--websiteBackgroundColor', websiteBackgroundColor_dark);
    localStorage.setItem("bgColor", websiteBackgroundColor_dark); 
    f_typeColor_light();
}
function f_websiteBackgroundColor_light () {
    root.style.setProperty ('--websiteBackgroundColor', websiteBackgroundColor_light);
    localStorage.setItem("bgColor", websiteBackgroundColor_light); 
    f_typeColor_dark();
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
// const websiteBackgroundColor_low = getComputedStyle(document.documentElement).getPropertyValue('--websiteBackgroundImage');
const websiteBackgroundColor_low = "grey"
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
    root.style.setProperty ('--websiteBackgroundColor', websiteBackgroundColor_low);
    root.style.setProperty ('--websiteBackgroundImage', 0);
    root.style.setProperty ('--typeTitleColor', typeColor_light);
    root.style.setProperty ('--typeBodyColor', typeColor_light);
    root.style.setProperty ('--backdrop', 0);
    localStorage.setItem("bgContrast1", websiteBackgroundColor_low); 
    localStorage.setItem("bgContrast2", 0);
    localStorage.setItem("bgContrast3", typeColor_light);
    localStorage.setItem("bgContrast4", typeColor_light);
    localStorage.setItem("bgContrast5", 0);
// a_2 = true; 
    function ach_2 () {
        root.style.setProperty('--achievementType2', achievementComplete);
        alert("Achievement: Set website contrast to low!"); 
        achievement2_id.textContent = 'Completed!';
    }
    // if (a_2 = true) {
        if ((achievementItem2)!="true") { //three === is for boolean; two == is for 'equality' (not necessarily numberical; can be any value)
            ach_2 ();
            localStorage.setItem("achievement2_complete", "true"); //do a network test** for website...
            achievementItem2_initial = achievementItem2;
            window.location.reload();
        }
//    }        
    else {
//        alert ("achievement already claimed");
    }

    
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



const achievementOpen = getComputedStyle(document.documentElement).getPropertyValue('--achievementMenu_display_open');

function f_achievementOpen() {
    root.style.setProperty('--achievementMenu_display', achievementOpen);
    f_accessibilityFull_close();
    f_navMenu_close();
}

function f_achievementClose() {
    root.style.setProperty('--achievementMenu_display', "none");
}

//global achievement typesetting (achievement menu)
if ((achievementItem1)==="true") {
    function ach_1_check () {
        root.style.setProperty('--achievementType1', achievementComplete);
        achievement1_id.textContent = '!Completed';
    }
    ach_1_check();
}

if ((achievementItem2)==="true") {
    function ach_2_check () {
        root.style.setProperty('--achievementType2', achievementComplete);
        achievement2_id.textContent = '!Completed';
    }
    ach_2_check();
}

if ((achievementItem3)==="true") {
    function ach_3_check () {
        root.style.setProperty('--achievementType3', achievementComplete);
        achievement3_id.textContent = '!Completed';
    }
    ach_3_check();
}