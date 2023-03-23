// settings
let baseTheme = 'white';

let baseRoundMD = 1.0;
let baseRoundLG = 1.5;
let baseRoundXL = 2.5;
let bgGray200 = "229 231 235";
let bgGray50 = "249 250 251";
let bgIndigo600 = "79 70 229";


function insertCSS(){
    // round
    document.styleSheets[0].insertRule(`
        .rounded-md {
            border-radius: ${baseRoundMD}rem!important;
        }
    `);

    document.styleSheets[0].insertRule(`
        .rounded-lg {
            border-radius: ${baseRoundLG}rem!important;
        }
    `);

    document.styleSheets[0].insertRule(`
        .rounded-xl {
            border-radius: ${baseRoundXL}rem!important;
        }
    `); 

    // colors
    document.styleSheets[0].insertRule(`
        .bg-gray-200 {
            background-color: rgb(${bgGray200} / var(--tw-bg-opacity))!important;
        }
    `); 

    document.styleSheets[0].insertRule(`
        .bg-gray-50 {
            background-color: rgb(${bgGray50} / var(--tw-bg-opacity))!important;
        }
    `); 

    document.styleSheets[0].insertRule(`
        .bg-indigo-600 {
            background-color: rgb(${bgIndigo600} / var(--tw-bg-opacity))!important;
        }
    `); 

    /*
    document.styleSheets[0].insertRule(`
        .lg\:hover\:text-indigo-600:hover {
            background-color: rgb(${bgIndigo600} / var(--tw-bg-opacity))!important;
        }
    `);
    */ 

}

function customBaseTheme(){
    if(baseTheme == "dark"){
        localStorage.setItem("theme", "dark");
        document.querySelector("html").classList.add("dark");
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#374151");
    }
    else{
        if(localStorage.getItem('theme')=="dark") document.querySelector("html").className = '';
        localStorage.setItem("theme", "white");
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#f9fafb");
    }
}


// popup events
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "switchTheme") {
        baseTheme = baseTheme === "dark" ? "light" : "dark";
        customBaseTheme();
    }
});


// Start
console.log("GJ theme enable");
document.getElementsByClassName("flex items-center lg:mr-5")[0].outerHTML = ""; // delete theme switch

customBaseTheme()
insertCSS();