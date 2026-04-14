var root = document.querySelector(':root'); 



//achievements:
let a_1 = false;
let a_2 = false; 
let a_3 = false; 


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

const typeBodySizeColumn_small = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeSmall-column'); //document.documentElement refers to root of HTML (for some reason)
const typeBodySizeColumn_regular = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeRegular-column');
const typeBodySizeColumn_big = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeBig-column');

const typeBodyLinkSize_small = getComputedStyle(document.documentElement).getPropertyValue('--typeLinkSizeSmall'); 
const typeBodyLinkSize_regular = getComputedStyle(document.documentElement).getPropertyValue('--typeLinkSizeRegular');
const typeBodyLinkSize_big = getComputedStyle(document.documentElement).getPropertyValue('--typeLinkSizeBig');
//leading and indents; 
const typeBodyIndent_small = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyIndentSmall'); 
const typeBodyIndent_regular = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyIndentRegular');
const typeBodyIndent_big = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyIndentBig');

const typeBodyLeading_small = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyLeadingSmall'); 
const typeBodyLeading_regular = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyLeadingRegular');
const typeBodyLeading_big = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyLeadingBig');

const typeBodyLeadingColumn_small = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyLeadingSmall-column'); 
const typeBodyLeadingColumn_regular = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyLeadingRegular-column');
const typeBodyLeadingColumn_big = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyLeadingBig-column');

const typeSubHeadLeading_small = getComputedStyle(document.documentElement).getPropertyValue('--typeSubHeadLeadingSmall'); 
const typeSubHeadLeading_regular = getComputedStyle(document.documentElement).getPropertyValue('--typeSubHeadLeadingRegular'); 
const typeSubHeadLeading_big = getComputedStyle(document.documentElement).getPropertyValue('--typeSubHeadLeadingBig'); 


// mobile:


const typeBodySize_small_min = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeSmall_min'); //document.documentElement refers to root of HTML (for some reason)
const typeBodySize_regular_min = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeRegular_min');
const typeBodySize_big_min = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeBig_min');

const typeSubHeadSize_small_min = getComputedStyle(document.documentElement).getPropertyValue('--type_bodySubHeadSizeSmall_min'); //title = not working
const typeSubHeadSize_regular_min = getComputedStyle(document.documentElement).getPropertyValue('--type_bodySubHeadSizeRegular_min');
const typeSubHeadSize_big_min = getComputedStyle(document.documentElement).getPropertyValue('--type_bodySubHeadSizeBig_min');

const typeBodySizeColumn_small_min = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeSmall-column_min'); 
const typeBodySizeColumn_regular_min = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeRegular-column_min');
const typeBodySizeColumn_big_min = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeBig-column_min');
//leading and indents; 
const typeBodyIndent_small_min = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyIndentSmall_min'); 
const typeBodyIndent_regular_min = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyIndentRegular_min');
const typeBodyIndent_big_min = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyIndentBig_min');

const typeBodyLeading_small_min = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyLeadingSmall_min'); 
const typeBodyLeading_regular_min = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyLeadingRegular_min');
const typeBodyLeading_big_min = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyLeadingBig_min');

const typeBodyLeadingColumn_small_min = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyLeadingSmall-column_min'); 
const typeBodyLeadingColumn_regular_min = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyLeadingRegular-column_min');
const typeBodyLeadingColumn_big_min = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyLeadingBig-column_min');

const typeSubHeadLeading_small_min = getComputedStyle(document.documentElement).getPropertyValue('--typeSubHeadLeadingSmall_min'); 
const typeSubHeadLeading_regular_min = getComputedStyle(document.documentElement).getPropertyValue('--typeSubHeadLeadingRegular_min'); 
const typeSubHeadLeading_big_min = getComputedStyle(document.documentElement).getPropertyValue('--typeSubHeadLeadingBig_min'); 

const typeBodyLinkSize_small_min = getComputedStyle(document.documentElement).getPropertyValue('--typeLinkSizeSmall_min'); 
const typeBodyLinkSize_regular_min = getComputedStyle(document.documentElement).getPropertyValue('--typeLinkSizeRegular_min');
const typeBodyLinkSize_big_min = getComputedStyle(document.documentElement).getPropertyValue('--typeLinkSizeBig_min');


function f_typeSizeBody_small () {
    root.style.setProperty('--typeBodySize', typeBodySize_small);
    localStorage.setItem("body", typeBodySize_small);
    root.style.setProperty('--typeBodySize_min', typeBodySize_small_min);
    localStorage.setItem("body_min", typeBodySize_small_min);

    root.style.setProperty('--typeSubHeadSize', typeSubHeadSize_small);
    localStorage.setItem("bodySubHead", typeSubHeadSize_small);
    root.style.setProperty('--typeSubHeadSize_min', typeSubHeadSize_small_min);
    localStorage.setItem("bodySubHead_min", typeSubHeadSize_small_min);

    root.style.setProperty('--typeBodySize-column', typeBodySizeColumn_small);
    localStorage.setItem("bodyColumn", typeBodySizeColumn_small);
    root.style.setProperty('--typeBodySize-column_min', typeBodySizeColumn_small_min);
    localStorage.setItem("bodyColumn_min", typeBodySizeColumn_small_min);

    root.style.setProperty('--typeLinkSize', typeBodyLinkSize_small);
    localStorage.setItem("typeLink", typeBodyLinkSize_small);
    root.style.setProperty('--typeLinkSize_min', typeBodyLinkSize_small_min);
    localStorage.setItem("typeLink_min", typeBodyLinkSize_small_min);
        //leading and indents: 
    root.style.setProperty('--typeBodyIndent', typeBodyIndent_small);
    localStorage.setItem("bodyIndent", typeBodyIndent_small);
    root.style.setProperty('--typeBodyIndent_min', typeBodyIndent_small_min);
    localStorage.setItem("bodyIndent_min", typeBodyIndent_small_min);

    root.style.setProperty('--typeBodyLeading', typeBodyLeading_small);
    localStorage.setItem("bodyLeading", typeBodyLeading_small);
    root.style.setProperty('--typeBodyLeading_min', typeBodyLeading_small_min);
    localStorage.setItem("bodyLeading_min", typeBodyLeading_small_min);

    root.style.setProperty('--typeBodyLeading-column', typeBodyLeadingColumn_small);
    localStorage.setItem("bodyLeadingColumn", typeBodyLeadingColumn_small);
    root.style.setProperty('--typeBodyLeading-column_min', typeBodyLeadingColumn_small_min);
    localStorage.setItem("bodyLeadingColumn_min", typeBodyLeadingColumn_small_min);

    root.style.setProperty('--typeSubHeadLeading', typeSubHeadLeading_small);
    localStorage.setItem("subHeadLeading", typeSubHeadLeading_small);
    root.style.setProperty('--typeSubHeadLeading_min', typeSubHeadLeading_small_min);
    localStorage.setItem("subHeadLeading_min", typeSubHeadLeading_small_min);
    
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

    root.style.setProperty('--typeBodySize-column', typeBodySizeColumn_regular);
    localStorage.setItem("bodyColumn", typeBodySizeColumn_regular);
    root.style.setProperty('--typeBodySize-column_min', typeBodySizeColumn_regular_min);
    localStorage.setItem("bodyColumn_min", typeBodySizeColumn_regular_min);

    root.style.setProperty('--typeLinkSize', typeBodyLinkSize_regular);
    localStorage.setItem("typeLink", typeBodyLinkSize_regular);
    root.style.setProperty('--typeLinkSize_min', typeBodyLinkSize_regular_min);
    localStorage.setItem("typeLink_min", typeBodyLinkSize_regular_min)
        //leading and indents: 
    root.style.setProperty('--typeBodyIndent', typeBodyIndent_regular);
    localStorage.setItem("bodyIndent", typeBodyIndent_regular);
    root.style.setProperty('--typeBodyIndent_min', typeBodyIndent_regular_min);
    localStorage.setItem("bodyIndent_min", typeBodyIndent_regular_min);

    root.style.setProperty('--typeBodyLeading', typeBodyLeading_regular);
    localStorage.setItem("bodyLeading", typeBodyLeading_regular);
    root.style.setProperty('--typeBodyLeading_min', typeBodyLeading_regular_min);
    localStorage.setItem("bodyLeading", typeBodyLeading_regular_min);

    root.style.setProperty('--typeBodyLeading-column', typeBodyLeadingColumn_regular);
    localStorage.setItem("bodyLeadingColumn", typeBodyLeadingColumn_regular);
    root.style.setProperty('--typeBodyLeading-column_min', typeBodyLeadingColumn_regular_min);
    localStorage.setItem("bodyLeadingColumn_min", typeBodyLeadingColumn_regular_min);

    root.style.setProperty('--typeSubHeadLeading', typeSubHeadLeading_regular);
    localStorage.setItem("subHeadLeading", typeSubHeadLeading_regular);
    root.style.setProperty('--typeSubHeadLeading_min', typeSubHeadLeading_regular_min);
    localStorage.setItem("subHeadLeading_min", typeSubHeadLeading_regular_min);

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

    root.style.setProperty('--typeBodySize-column', typeBodySizeColumn_big);
    localStorage.setItem("bodyColumn", typeBodySizeColumn_big);
    root.style.setProperty('--typeBodySize-column_min', typeBodySizeColumn_big_min);
    localStorage.setItem("bodyColumn_min", typeBodySizeColumn_big_min);

    root.style.setProperty('--typeLinkSize', typeBodyLinkSize_big);
    localStorage.setItem("typeLink", typeBodyLinkSize_big);
    root.style.setProperty('--typeLinkSize_min', typeBodyLinkSize_big_min);
    localStorage.setItem("typeLink_min", typeBodyLinkSize_big_min)
        //leading and indents: 
    root.style.setProperty('--typeBodyIndent', typeBodyIndent_big);
    localStorage.setItem("bodyIndent", typeBodyIndent_big);
    root.style.setProperty('--typeBodyIndent_min', typeBodyIndent_big_min);
    localStorage.setItem("bodyIndent_min", typeBodyIndent_big_min);

    root.style.setProperty('--typeBodyLeading', typeBodyLeading_big);
    localStorage.setItem("bodyLeading", typeBodyLeading_big);
    root.style.setProperty('--typeBodyLeading_min', typeBodyLeading_big_min);
    localStorage.setItem("bodyLeading_min", typeBodyLeading_big_min);

    root.style.setProperty('--typeBodyLeading-column', typeBodyLeadingColumn_big);
    localStorage.setItem("bodyLeadingColumn", typeBodyLeadingColumn_big);
    root.style.setProperty('--typeBodyLeading-column_min', typeBodyLeadingColumn_big_min);
    localStorage.setItem("bodyLeadingColumn_min", typeBodyLeadingColumn_big_min);

    root.style.setProperty('--typeSubHeadLeading', typeSubHeadLeading_big);
    localStorage.setItem("subHeadLeading", typeSubHeadLeading_big);
    root.style.setProperty('--typeSubHeadLeading_min', typeSubHeadLeading_big_min);
    localStorage.setItem("subHeadLeading_min", typeSubHeadLeading_big_min);
    
}

let bodyItem = localStorage.getItem("body"); 
root.style.setProperty('--typeBodySize', bodyItem); 
let bodyItem_min = localStorage.getItem("body_min"); 
root.style.setProperty('--typeBodySize_min', bodyItem_min); 

let subHeadItem = localStorage.getItem("bodySubHead"); 
root.style.setProperty('--typeSubHeadSize', subHeadItem);
let subHeadItem_min = localStorage.getItem("bodySubHead_min");
root.style.setProperty('--typeSubHeadSize_min', bodyItem_min);

let bodyColumnItem = localStorage.getItem("bodyColumn"); 
root.style.setProperty('--typeBodySize-column', bodyColumnItem); 
let bodyColumnItem_min = localStorage.getItem("bodyColumn_min"); 
root.style.setProperty('--typeBodySize-column_min', bodyColumnItem_min); 

let linkItem = localStorage.getItem("typeLink"); 
root.style.setProperty('--typeLinkSize', linkItem); 
let linkItem_min = localStorage.getItem("typeLink_min"); 
root.style.setProperty('--typeLinkSize_min', linkItem_min); 
    //leading and indents: 
let bodyIndentItem = localStorage.getItem("bodyIndent"); 
root.style.setProperty('--typeBodyIndent', bodyIndentItem); 
let bodyIndentItem_min = localStorage.getItem("bodyIndent_min"); 
root.style.setProperty('--typeBodyIndent_min', bodyIndentItem_min); 

let bodyLeadingItem = localStorage.getItem("bodyLeading"); 
root.style.setProperty('--typeBodyLeading', bodyLeadingItem); 
let bodyLeadingItem_min = localStorage.getItem("bodyLeading_min"); 
root.style.setProperty('--typeBodyLeading_min', bodyLeadingItem_min); 

let bodyLeadingColumnItem = localStorage.getItem("bodyLeadingColumn"); 
root.style.setProperty('--typeBodyLeading-column', bodyLeadingColumnItem); 
let bodyLeadingColumnItem_min = localStorage.getItem("bodyLeading_min"); 
root.style.setProperty('--typeBodyLeading-column_min', bodyLeadingColumnItem_min); 

let subHeadLeadingItem = localStorage.getItem("subHeadLeading"); 
root.style.setProperty('--typeSubHeadLeading', subHeadLeadingItem); 
let subHeadLeadingItem_min = localStorage.getItem("subHeadLeading_min"); 
root.style.setProperty('--typeSubHeadLeading_min', subHeadLeadingItem_min); 



//TEXT CONTRAST

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

//check for grey bg: 

function f_typeColor_dark () {
    const websiteBG = getComputedStyle(document.documentElement).getPropertyValue('--websiteBackgroundColor');
    
    if (websiteBG == 'grey') {
        root.style.setProperty ('--typeBodyColor', typeColor_dark);
        root.style.setProperty ('--typeTitleColor', typeColor_dark);
        localStorage.setItem("typeColor", typeColor_dark);
        }
    else {
        root.style.setProperty ('--typeBodyColor', typeColor_dark);
        root.style.setProperty ('--typeTitleColor', typeColor_dark);
        localStorage.setItem("typeColor", typeColor_dark);
        root.style.setProperty ('--websiteBackgroundColor', websiteBackgroundColor_light);
        localStorage.setItem("bgColor", websiteBackgroundColor_light); 
        }
    }
function f_typeColor_light () {
    const websiteBG = getComputedStyle(document.documentElement).getPropertyValue('--websiteBackgroundColor');
    
    if (websiteBG == 'grey') {
        root.style.setProperty ('--typeBodyColor', typeColor_light);
        root.style.setProperty ('--typeTitleColor', typeColor_light);
        localStorage.setItem("typeColor", typeColor_light);
    }
    else {
        root.style.setProperty ('--typeBodyColor', typeColor_light);
        root.style.setProperty ('--typeTitleColor', typeColor_light);
        localStorage.setItem("typeColor", typeColor_light);
        root.style.setProperty ('--websiteBackgroundColor', websiteBackgroundColor_dark);
        localStorage.setItem("bgColor", websiteBackgroundColor_dark);    
    }

//      a_3 = true; 
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
slider.addEventListener ('input', () => { //cannot get this to work with a normal function declaration... for some reason?
    const hue = slider.value;
    root.style.setProperty ('--typeBodyColor', `oklch(0.6 0.6 ${hue})`); 
    root.style.setProperty ('--typeTitleColor', `oklch(0.6 0.6 ${hue})`);
    localStorage.setItem("typeColor", typeColor_dark); 
})  

let colorItem = localStorage.getItem("typeColor"); //GLOBAL NAV: RETRIEVING PREV PARAMETER
root.style.setProperty('--typeBodyColor', colorItem); //GLOBAL NAV: CHANGING TO PARAMETER
root.style.setProperty('--typeTitleColor', colorItem); //GLOBAL NAV: CHANGING TO PARAMETER

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
const websiteBackgroundColor_low = "grey";
const colorWhite = "white";
const colorBlack = "black";






                //imgs
const rootImgs = getComputedStyle(root);

//attack IDs to each img element then change them directly through JS
const landing1 = document.getElementById("landing1"); 
const landing1_1 = "assets/landing1_1.png";
const landing1_2 = "assets/landing1_2.png";
const landing1_3 = "assets/landing1_3.png";

const apps1 = document.getElementById("apps1"); 
const apps1_1 = "../../assets/apps1_1.png";
const apps1_2 = "../../assets/apps1_2.png";
const apps1_3 = "../../assets/apps1_3.png";
const apps2 = document.getElementById("apps2"); 
const apps2_1 = "../../assets/apps2_1.png";
const apps2_2 = "../../assets/apps2_2.png";
const apps2_3 = "../../assets/apps2_3.png";
const apps3 = document.getElementById("apps3"); 
const apps3_1 = "../../assets/apps3_1.png";
const apps3_2 = "../../assets/apps3_2.png";
const apps3_3 = "../../assets/apps3_3.png";

const mediaPref1 = document.getElementById("mediaPref1"); 
const mediaPref1_1 = "../../assets/mediaPref1_1.png";
const mediaPref1_2 = "../../assets/mediaPref1_2.png";
const mediaPref1_3 = "../../assets/mediaPref1_3.png";

const primeTime1 = document.getElementById("primeTime1"); 
const primeTime1_1 = "../../assets/primeTime1_1.png";
const primeTime1_2 = "../../assets/primeTime1_2.png";
const primeTime1_3 = "../../assets/primeTime1_3.png";
const primeTime2 = document.getElementById("primeTime2"); 
const primeTime2_1 = "../../assets/primeTime2_1.png";
const primeTime2_2 = "../../assets/primeTime2_2.png";
const primeTime2_3 = "../../assets/primeTime2_3.png";

const storefront1 = document.getElementById("storefront1"); 
const storefront1_1 = "../../assets/storefront1_1.png";
const storefront1_2 = "../../assets/storefront1_2.png";
const storefront1_3 = "../../assets/storefront1_3.png";
const storefront2 = document.getElementById("storefront2"); 
const storefront2_1 = "../../assets/storefront2_1.png";
const storefront2_2 = "../../assets/storefront2_2.png";
const storefront2_3 = "../../assets/storefront2_3.png";
const storefront3 = document.getElementById("storefront3"); 
const storefront3_1 = "../../assets/storefront3_1.png";
const storefront3_2 = "../../assets/storefront3_2.png";
const storefront3_3 = "../../assets/storefront3_3.png";

const timeManagement1 = document.getElementById("timeManagement1"); 
const timeManagement1_1 = "../../assets/timeManagement1_1.png";
const timeManagement1_2 = "../../assets/timeManagement1_2.png";
const timeManagement1_3 = "../../assets/timeManagement1_3.png";
const timeManagement2 = document.getElementById("timeManagement2"); 
const timeManagement2_1 = "../../assets/timeManagement2_1.png";
const timeManagement2_2 = "../../assets/timeManagement2_2.png";
const timeManagement2_3 = "../../assets/timeManagement2_3.png";
const timeManagement3 = document.getElementById("timeManagement3"); 
const timeManagement3_1 = "../../assets/timeManagement3_1.png";
const timeManagement3_2 = "../../assets/timeManagement3_2.png";
const timeManagement3_3 = "../../assets/timeManagement3_3.png";
const timeManagement4 = document.getElementById("timeManagement4"); 
const timeManagement4_1 = "../../assets/timeManagement4_1.png";
const timeManagement4_2 = "../../assets/timeManagement4_2.png";
const timeManagement4_3 = "../../assets/timeManagement4_3.png";

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

    
    //images
    if (landing1) {
        landing1.src = landing1_3;
        localStorage.setItem("landing1_s", landing1_3);        
    }
    
    if (apps1) {
        apps1.src = apps1_3;
        localStorage.setItem("apps1_s", apps1_3);
    }
    if (apps2) {
        apps2.src = apps2_3;
        localStorage.setItem("apps2_s", apps2_3);
    }
    if (apps3) {
        apps3.src = apps3_3;
        localStorage.setItem("apps3_s", apps3_3);
    }

    if (mediaPref1) {
        mediaPref1.src = mediaPref1_3;
        localStorage.setItem("mediaPref1_s", mediaPref1_3);
    }

    if (primeTime1) {
        primeTime1.src = primeTime1_3;
        localStorage.setItem("primeTime1_s", primeTime1_3);
    }
    if (primeTime2) {
        primeTime2.src = primeTime2_3;
        localStorage.setItem("primeTime2_s", primeTime2_3);
    }

    if (storefront1) {
        storefront1.src = storefront1_3;
        localStorage.setItem("storefront1_s", storefront1_3);
    }
    if (storefront2) {
        storefront2.src = storefront2_3;
        localStorage.setItem("storefront2_s", storefront2_3);
    }
    if (storefront3) {
        storefront3.src = storefront3_3;
        localStorage.setItem("storefront3_s", storefront3_3);
    }

    if (timeManagement1) {
        timeManagement1.src = timeManagement1_3;
        localStorage.setItem("timeManagement1_s", timeManagement1_3);
    }
    if (timeManagement2) {
        timeManagement2.src = timeManagement2_3;
        localStorage.setItem("timeManagement2_s", timeManagement2_3);
    }
    if (timeManagement3) {
        timeManagement3.src = timeManagement3_3;
        localStorage.setItem("timeManagement3_s", timeManagement3_3);
    }
    if (timeManagement4) {
        timeManagement4.src = timeManagement4_3;
        localStorage.setItem("timeManagement4_s", timeManagement4_3);
    }
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


    //images
    if (landing1) {
        landing1.src = landing1_1;
        localStorage.setItem("landing1_s", landing1_1);
    }
    
    if (apps1) {
        apps1.src = apps1_1;
        localStorage.setItem("apps1_s", apps1_1);
    }
    if (apps2) {
        apps2.src = apps2_1;
        localStorage.setItem("apps2_s", apps2_1);
    }
    if (apps3) {
        apps3.src = apps3_1;
        localStorage.setItem("apps3_s", apps3_1);
    }

    if (mediaPref1) {
        mediaPref1.src = mediaPref1_1;
        localStorage.setItem("mediaPref1_s", mediaPref1_1);
    }

    if (primeTime1) {
        primeTime1.src = primeTime1_1;
        localStorage.setItem("primeTime1_s", primeTime1_1);
    }
    if (primeTime2) {
        primeTime2.src = primeTime2_1;
        localStorage.setItem("primeTime2_s", primeTime2_1);
    }

    if (storefront1) {
        storefront1.src = storefront1_1;
        localStorage.setItem("storefront1_s", storefront1_1);
    }
    if (storefront2) {
        storefront2.src = storefront2_1;
        localStorage.setItem("storefront2_s", storefront2_1);
    }
    if (storefront3) {
        storefront3.src = storefront3_1;
        localStorage.setItem("storefront3_s", storefront3_1);
    }

    if (timeManagement1) {
        timeManagement1.src = timeManagement1_1;
        localStorage.setItem("timeManagement1_s", timeManagement1_1);
    }
    if (timeManagement2) {
        timeManagement2.src = timeManagement2_1;
        localStorage.setItem("timeManagement2_s", timeManagement2_1);
    }
    if (timeManagement3) {
        timeManagement3.src = timeManagement3_1;
        localStorage.setItem("timeManagement3_s", timeManagement3_1);
    }
    if (timeManagement4) {
        timeManagement4.src = timeManagement4_1;
        localStorage.setItem("timeManagement4_s", timeManagement4_1);
    }
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


    //images
    if (landing1) {
        landing1.src = landing1_2;
        localStorage.setItem("landing1_s", landing1_2);
    }
    
    if (apps1) {
        apps1.src = apps1_2;
        localStorage.setItem("apps1_s", apps1_2);
    }
    if (apps2) {
        apps2.src = apps2_2;
        localStorage.setItem("apps2_s", apps2_2);
    }
    if (apps3) {
        apps3.src = apps3_2;
        localStorage.setItem("apps3_s", apps3_2);
    }

    if (mediaPref1) {
        mediaPref1.src = mediaPref1_2;
        localStorage.setItem("mediaPref1_s", mediaPref1_2);
    }

    if (primeTime1) {
        primeTime1.src = primeTime1_2;
        localStorage.setItem("primeTime1_s", primeTime1_2);
    }
    if (primeTime2) {
        primeTime2.src = primeTime2_2;
        localStorage.setItem("primeTime2_s", primeTime2_2);
    }

    if (storefront1) {
        storefront1.src = storefront1_2;
        localStorage.setItem("storefront1_s", storefront1_2);
    }
    if (storefront2) {
        storefront2.src = storefront2_2;
        localStorage.setItem("storefront2_s", storefront2_2);
    }
    if (storefront3) {
        storefront3.src = storefront3_2;
        localStorage.setItem("storefront3_s", storefront3_2);
    }

    if (timeManagement1) {
        timeManagement1.src = timeManagement1_2;
        localStorage.setItem("timeManagement1_s", timeManagement1_2);
    }
    if (timeManagement2) {
        timeManagement2.src = timeManagement2_2;
        localStorage.setItem("timeManagement2_s", timeManagement2_2);
    }
    if (timeManagement3) {
        timeManagement3.src = timeManagement3_2;
        localStorage.setItem("timeManagement3_s", timeManagement3_2);
    }
    if (timeManagement4) {
        timeManagement4.src = timeManagement4_2;
        localStorage.setItem("timeManagement4_s", timeManagement4_2);
    }


    
    
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



//imgs... defaults

const landing1_default = localStorage.getItem("landing1_s") ?? landing1_1; // ?? is an operator that responds to null values; so this is running a null check
localStorage.setItem ("landing1_s", landing1_default);

const apps1_default = localStorage.getItem("apps1_s") ?? apps1_1; 
localStorage.setItem ("apps1_s", apps1_default);
const apps2_default = localStorage.getItem("apps2_s") ?? apps2_1; 
localStorage.setItem ("apps2_s", apps2_default);
const apps3_default = localStorage.getItem("apps3_s") ?? apps3_1; 
localStorage.setItem ("apps3_s", apps3_default);

const mediaPref1_default = localStorage.getItem("mediaPref1_s") ?? mediaPref1_1; 
localStorage.setItem ("mediaPref1_s", mediaPref1_default);

const primeTime1_default = localStorage.getItem("primeTime1_s") ?? primeTime1_1; 
localStorage.setItem ("primeTime1_s", primeTime1_default);
const primeTime2_default = localStorage.getItem("primeTime2_s") ?? primeTime2_1; 
localStorage.setItem ("primeTime2_s", primeTime2_default);

const storefront1_default = localStorage.getItem("storefront1_s") ?? storefront1_1; 
localStorage.setItem ("storefront1_s", storefront1_default);
const storefront2_default = localStorage.getItem("storefront2_s") ?? storefront2_1; 
localStorage.setItem ("storefront2_s", storefront2_default);
const storefront3_default = localStorage.getItem("storefront3_s") ?? storefront3_1; 
localStorage.setItem ("storefront3_s", storefront3_default);

const timeManagement1_default = localStorage.getItem("timeManagement1_s") ?? timeManagement1_1; 
localStorage.setItem ("timeManagement1_s", timeManagement1_default);
const timeManagement2_default = localStorage.getItem("timeManagement2_s") ?? timeManagement2_1; 
localStorage.setItem ("timeManagement2_s", timeManagement2_default);
const timeManagement3_default = localStorage.getItem("timeManagement3_s") ?? timeManagement3_1; 
localStorage.setItem ("timeManagement3_s", timeManagement3_default);
const timeManagement4_default = localStorage.getItem("timeManagement4_s") ?? timeManagement4_1; 
localStorage.setItem ("timeManagement4_s", timeManagement4_default);



//imgs... setting

if (landing1) { //'if' only triggers when condition is true... so if element does not exist, then statement gets skipped over.
    let landing1Item = localStorage.getItem("landing1_s");
    landing1.src = landing1Item;
}

if (apps1) {
    let apps1Item = localStorage.getItem("apps1_s");
    apps1.src = apps1Item;
}
if (apps2) {
    let apps2Item = localStorage.getItem("apps2_s");
    apps2.src = apps2Item;
}
if (apps3) {
    let apps3Item = localStorage.getItem("apps3_s");
    apps3.src = apps3Item;    
}

if (mediaPref1) {
    let mediaPref1Item = localStorage.getItem("mediaPref1_s");
    mediaPref1.src = mediaPref1Item;
}

if (primeTime1) {
    let primeTime1Item = localStorage.getItem("primeTime1_s");
    primeTime1.src = primeTime1Item;
}
if (primeTime2) {
    let primeTime2Item = localStorage.getItem("primeTime2_s");
    primeTime2.src = primeTime2Item;
}

if (storefront1) {
    let storefront1Item = localStorage.getItem("storefront1_s");
    storefront1.src = storefront1Item;
}
if (storefront2) {
    let storefront2Item = localStorage.getItem("storefront2_s");
    storefront2.src = storefront2Item;
}
if (storefront3) {
    let storefront3Item = localStorage.getItem("storefront3_s");
    storefront3.src = storefront3Item;
}

if (timeManagement1) {
    let timeManagement1Item = localStorage.getItem("timeManagement1_s");
    timeManagement1.src = timeManagement1Item;    
}
if (timeManagement2) {
    let timeManagement2Item = localStorage.getItem("timeManagement2_s");
    timeManagement2.src = timeManagement2Item;    
}
if (timeManagement3) {
    let timeManagement3Item = localStorage.getItem("timeManagement3_s");
    timeManagement3.src = timeManagement3Item;
}
if (timeManagement4) {
    let timeManagement4Item = localStorage.getItem("timeManagement4_s");
    timeManagement4.src = timeManagement4Item;   
}



                    //ACHIEVEMENT SETTING...


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