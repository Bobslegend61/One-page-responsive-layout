let anchors = document.querySelectorAll("#desktop div a");
let contactHeight = document.getElementById("contact-form").offsetTop - document.getElementById("desktop").clientHeight,
    aboutHeight = document.getElementById("about-us").offsetTop - document.getElementById("desktop").clientHeight,
    homepageHeight = document.getElementById("landing-page").offsetTop,
    servicesHeight = document.getElementById("our-services").offsetTop - document.getElementById("desktop").clientHeight;
function makeGrey() {
    anchors.forEach(anchor => {
        anchor.style.backgroundColor = "#333";
    });
}

window.addEventListener("load", e => {
    anchors[0].style.backgroundColor = "#454545";
})

window.addEventListener("scroll", e => {
    if(e.target.scrollingElement.clientWidth >= 700 ) {
        let windowScrollTopHeight = e.target.scrollingElement.scrollTop;
       if(windowScrollTopHeight >= 0 && windowScrollTopHeight < aboutHeight) {
           makeGrey();
           anchors[0].style.backgroundColor = "#454545";
       }else if(windowScrollTopHeight >= aboutHeight && windowScrollTopHeight < servicesHeight) {
            makeGrey();
            anchors[1].style.backgroundColor = "#454545";
       }else if(windowScrollTopHeight >= servicesHeight && windowScrollTopHeight < contactHeight) {
            makeGrey(windowScrollTopHeight >= servicesHeight && windowScrollTopHeight < contactHeight);
            anchors[2].style.backgroundColor = "#454545";
       }else if(windowScrollTopHeight >= contactHeight) {
            makeGrey();
            anchors[3].style.backgroundColor = "#454545";
       }
    }
});

anchors.forEach(selector => {
    selector.addEventListener("click", e => {
        e.preventDefault();
        let text = e.target.innerText;
        switch(text) {
            case "Homepage":
                window.scroll({
                    top: document.getElementById("landing-page").offsetTop - document.getElementById("desktop").clientHeight,
                    left: 0,
                    behavior: "smooth"
                });
            break;
            case "About Us":
                window.scroll({
                    top: document.getElementById("about-us").offsetTop - document.getElementById("desktop").clientHeight,
                    left: 0,
                    behavior: "smooth"
                });
            break;
            case "Services":
                window.scroll({
                    top: document.getElementById("our-services").offsetTop - document.getElementById("desktop").clientHeight,
                    left: 0,
                    behavior: "smooth"
                });
            break;
            case "Contact":
                window.scroll({
                    top: document.getElementById("contact-form").offsetTop - document.getElementById("desktop").clientHeight,
                    left: 0,
                    behavior: "smooth"
                });
            break;
            default:
        }
    })
});