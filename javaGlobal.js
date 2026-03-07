//document.getElementById("demo_ID").innerText = "bla bla lba"; 

//declare variables with "let [a] = [b];"
//declare constnats with 'const [a] = [b];'

//can make a string of variables with statements; copied from W3's page:
    //let a, b, c;  // Declare 3 variables
    //a = 5;        // Assign the value 5 to a
    //b = 6;        // Assign the value 6 to b
    //c = a + b;    // Assign the sum of a and b to c

//"scope" refers to the breadth a value is relevant in...

//conditional statements = 
    //if (condiditon) {} (CAN HAVE MORE NESTED 'IF' STATEMENTS + ELSE + ELSEIF STATEMENTS...)
        //USE "JS Ternary" TO MAKE FOOLPROOF BACKUPS TO COMMANDS?
        //makes use of booleans—"if"s can be true or false... cascades into looping
    //switch (expression) {} (USE IF YOU HAVE MANY ALTERNATIVE CODE BLOCKS IN ONE; POTENTIALLY USEFUL)
        //based conditions, swtiches select one/more code blocks ot be executed... nest all of menu in switch? 
        //allows you to share code across mutliple code blocks
        //allows you to create "default" code—one that runs if no other matches; foolproof js 
        //FROM W3 SCHOOLS: 
            //If multiple cases matches a case value, the first case is selected. 
            //If no matching cases are found, the program continues to the default label.
            //If no default label is found, the program continues to the statement(s) after the switch.

//look into JS Loops for achievement section; JS function expressions; JS scope

//useful to test function functionality by returning a value to the console: 
    //function sayHello() {
      //return "Hello World"; //('RETURN' STATEMENT STOPS REST OF FUNCTION NO MATTER WHAT)
    //}
    //console.log(sayHello());
//function parameters allow you to change values as functions when called (of which are called "arguments");
    //function hello(a,b)
    //let message = hello(5,4) //will make 'a' 5, 'b' 4—code might be wrong but gen. idea is still there 

//OBJECTS: variables (use const[and not let for some reason]) that store both values AND functions; key:value and key:function()
        //you can also create an empty object and add variables later (accessbility funcitonality?)
        //can access object properties with dot notation; 'objectName.propertyName'
            //CAN PICK AT/ACCESS INDIVIDUAL PROPERTIES WITHIN OBJECT; YOU DO NOT** HAVE TO CALL THE WHOLE THING!
        //can nest funcitons within objects as "object methods"




//MAIN GOAL: ALTER CSS VARIABLE USING JAVASCRIPT LOGIC; ACCESSED VIA BUTTON PRESSING 

/*
var root = document.querySelector(':root'); //refering to 'root's (variables)—for some reason, 'const' or 'let' wont declare...
//how does one refer to the variable properly in the css? only refers to HTML...
var JS_waffleSide_open = document.querySelector('--waffleSide_open');

function test () {
    console.log(root);
}
test();



var root2 = window.getComputedStyle(document.body)
console.log( root2.getPropertyValue('--bar') ) // #336699
console.log( root2.getPropertyValue('--baz') ) // calc(2px*2)

function waffle_subMenu_open() {
    //document.getElementById("waffle_subMenu_ID").style.setProperty = ('width', '--waffleSide_open');
    root.style.setProperty = ('--waffleSide', JS_waffleSide_open);
}

//
//COPIED:
var r = document.querySelector(':root');

function myFunction_get() {
  var rs = getComputedStyle(r);
  alert("The value of --primary-bg-color is: " + rs.getPropertyValue('--primary-bg-color'));
}

myFunction_get()

function myFunction_set() {
  r.style.setProperty('--primary-bg-color', 'green');
}

myFunction_set()
//
//

waffle_subMenu_open()

*/ 

//VIDEO TUT:
//refering to CSS variables (the root) 
var root = document.querySelector(':root'); 

//moving around CSS variables
function f_waffleSide_open() {
    root.style.setProperty('--waffleSide', '--waffleSide_open') //do NOT put an equal sign!!!!*******
} 

function f_waffleSide_close() {
    root.style.setProperty('--waffleSide', '--waffleSide_close') //do NOT put an equal sign!!!!*******
} 

/* RUN CHECKS TO CLOSE PARENT MENUS... code below = bugged 
while (root.style('--waffleSide') = root.style('--waffleSide_open')) {
    f_waffleSide_close()
}
*/

function f_accessibilityFull_open () {
    root.style.setProperty('--accessibilityFull', '--accessibilityFull_open')
}

function f_accessibilityFull_closed () {
    root.style.setProperty('--accessibilityFull', '--accessibilityFull_close')
}

/* ACCESSIBILITY BUTTON type size changing */

/* OLD test... its the variable to variable swap that isn't working
function f_typeSizeBody_regular () {
    root.style.setProperty('--typeBodySize', '5000px');
    alert("HELLO");
}
*/ 



/*insert switch to run checks on whether or full accessibility menu is open/not (use to close pop-up)  */

//EVENT LISTENERS: tracking/updating BASED on clicks
// document.getElementById("a_bodyScale_small").addEventListener("click", function() {alert("CLICKED"); });

//TESTING EVENT LISTENERS:
//var a = document.getElementById("a_bodyScale_small")
//a.addEventListener("click", function() {alert("CLICKED"); } ) //gives an alert error but still works? 

//IMPLEMENTING EVENT LISTENERS: 
/*
let bodySmall = document.getElementById("a_bodyScale_small"); 
bodySmall.addEventListener("click", f_typeSizeBody_small())
let bodyRegular = document.getElementById("a_bodyScale_regular"); 
bodyRegular.addEventListener("click", f_typeSizeBody_regular())
*/


/* CONST—getting css variable values; operating JS SEPERATELY from CSS definitions. */ 
const typeBodySize_small = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeSmall'); //document.documentElement refers to root of HTML (for some reason)
const typeBodySize_regular = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeRegular');
const typeBodySize_big = getComputedStyle(document.documentElement).getPropertyValue('--typeBodySizeBig');
const typeTitleSize_small = getComputedStyle(document.documentElement).getPropertyValue('--typeTitleSizeSmall'); //title = not working
const typeTitleSize_regular = getComputedStyle(document.documentElement).getPropertyValue('--typeTitleSizeRegular');
const typeTitleSize_big = getComputedStyle(document.documentElement).getPropertyValue('--typeTtileSizeBig');

function f_typeSizeBody_small () {
    root.style.setProperty('--typeBodySize', typeBodySize_small);
    //alert("small");
}
function f_typeSizeTitle_small () {
    root.style.setProperty('--typeTitleSize', typeTitleSize_small);
}
function f_typeSizeBody_regular () {
    root.style.setProperty('--typeBodySize', typeBodySize_regular);
    //alert("reg");
}
function f_typeSizeTitle_regular () { //this function isn't activating—FIX LATER? 
    root.style.setProperty('--typeTitleSize', typeTitleSize_regular);
    //alert("typeTitleSize_regular")
}
function f_typeSizeBody_big () {
    root.style.setProperty('--typeBodySize', typeBodySize_big);
    root.style.setProperty('--typeTitleSize', typeTitleSize_big);
    //alert("big");
}

const typeBodyContrast_light = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyContrastLight');
const typeBodyContrast_regular = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyContrastRegular');
const typeBodyContrast_bold = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyContrastBold');

function f_typeBodyContrast_light () {
    root.style.setProperty ('--typeBodyContrast', typeBodyContrast_light);
}
function f_typeBodyContrast_regular () {
    root.style.setProperty ('--typeBodyContrast', typeBodyContrast_regular);
}
function f_typeBodyContrast_bold () {
    root.style.setProperty ('--typeBodyContrast', typeBodyContrast_bold);
}

const typeBodyFace_serif = getComputedStyle(document.documentElement).getPropertyValue('--typefaceSerif');
const typeBodyFace_sansSerif = getComputedStyle(document.documentElement).getPropertyValue('--typefaceSansSerif');
const typeBodyFace_friendly = getComputedStyle(document.documentElement).getPropertyValue('--typefaceFriendly');

function f_typeBodyFace_serif () {
    root.style.setProperty ('--typeBodyFace', typeBodyFace_serif);
    root.style.setProperty ('--typeTitleFace', typeBodyFace_serif);

}
function f_typeBodyFace_sansSerif () {
    root.style.setProperty ('--typeBodyFace', typeBodyFace_sansSerif);
    root.style.setProperty ('--typeTitleFace', typeBodyFace_sansSerif);
}
function f_typeBodyFace_friendly () {
    root.style.setProperty ('--typeBodyFace', typeBodyFace_friendly);
    root.style.setProperty ('--typeTitleFace', typeBodyFace_friendly);
}

//COLOR RANGE SELECTING—video tutorial https://www.youtube.com/watch?v=EQuT-CdJ2sE

// for some reason, this is breaking the other code
/*
const slider = document.querySelector(document.getElementById('a_bodyColor_slider') input); //picking slider html
const sliderRoot = document.querySelector(':root'); //picking css variable 

sliderRoot.addEventListener("input", function () {
    const hue = slider.value; 
    sliderRoot.style.setProperty('--color_dark', 'red');
} )
*/

//'querySelector' returns FIRST element that matches first css value—that's why its not detecting from html... 

/*
let slider = document.getElementById('a_bodyColor_slider');
let sliderValue = slider.value; 

alert(sliderValue); //slider itself is null... because it's an element, not a value... so how to you call a value?

*/

/*
let slider = document.getElementById("a_bodyColor_slider_range"); //this code is running properly

slider.oninput = function() { ////breaks here 
    alert(slider); 
    root.style.setProperty('--typeBodyColor', 'red');
}
*/ 

/*
slider.addEventListener("input", function () {
    const hue = slider.value; 
    root.style.setProperty('color_dark', 'red')
})
*/ 

//CRITIQUE FROM DREW: add an 'eventListener'—oninput breaks as document loads as it isn't told to keep watching
    //out for change-in-value; thats what 'eventListener' is for

/*

let slider = document.getElementById("a_bodyColor_slider_range");

slider.addEventListener("input", function() {
    const hue = this.value; 
    alert(value);
    root.style.setProperty('--typeBodyColor', 'green');
})

*/

//COPIED FROM W3:
/*
var slider = document.getElementById("a_bodyColor_slider_range");
var output = getComputedStyle(document.documentElement).getPropertyValue('--typeBodyColor');

slider.addEventListener("input", function() {
  output.innerHTML = this.value;
})
*/ 
//Copied agian + edited w/ video:
/*
const slider = document.querySelector('.test1 input');

slider.addEventListener ('input', function () {
    const hue = slider.value 
    root.style.setProperty ('--typeBodyColor', `oklch(0.2276 0.1 ${hue})`)
})  
*/ 

const typeColor_dark = getComputedStyle(document.documentElement).getPropertyValue('--color_dark');
const typeColor_light = getComputedStyle(document.documentElement).getPropertyValue('--color_light');

function f_typeColor_dark () {
    root.style.setProperty ('--typeBodyColor', typeColor_dark);
    root.style.setProperty ('--typeTitleColor', typeColor_dark);
}

function f_typeColor_light () {
    root.style.setProperty ('--typeBodyColor', typeColor_light);
    root.style.setProperty ('--typeTitleColor', typeColor_light);
}

const slider = document.querySelector('.a_slider input');
 
slider.addEventListener ('input', () => {
    const hue = slider.value;
    root.style.setProperty ('--typeBodyColor', `oklch(0.2276 0.4 ${hue})`); //IT (doesnt) WORK?? 
    root.style.setProperty ('--typeTitleColor', `oklch(0.2276 0.4 ${hue})`);
})  

const highlight_on = getComputedStyle(document.documentElement).getPropertyValue('--highlight_on');
const highlight_off = getComputedStyle(document.documentElement).getPropertyValue('--highlight_off');

function f_highlight_on () {
    root.style.setProperty ('--highlight', highlight_on);
}
function f_highlight_off () {
    root.style.setProperty ('--highlight', highlight_off);
}