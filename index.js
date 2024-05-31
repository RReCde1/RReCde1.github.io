var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tab){
    
    for(tabl of tablinks) {
        
        tabl.classList.remove("active-link");
    }
    for(tabc of tabcontents) {
        tabc.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tab).classList.add("active-tab")
}
