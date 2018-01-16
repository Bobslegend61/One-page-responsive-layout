let anchors = document.querySelectorAll("#desktop div a");
let navAnchors = document.querySelectorAll("#mobile li");
let contactHeight = document.getElementById("contact-form").offsetTop - document.getElementById("desktop").clientHeight,
    aboutHeight = document.getElementById("about-us").offsetTop - document.getElementById("desktop").clientHeight,
    servicesHeight = document.getElementById("our-services").offsetTop - document.getElementById("desktop").clientHeight;
function makeGrey(which) {
    which.forEach(anchor => {
        anchor.style.backgroundColor = "#333";
    });
}

window.addEventListener("load", e => {
    anchors[0].style.backgroundColor = "#454545";
    navAnchors[0].style.backgroundColor = "#454545";
})

window.addEventListener("scroll", e => {
    let windowScrollTopHeight = e.target.scrollingElement.scrollTop;
    if(e.target.scrollingElement.clientWidth >= 700 ) {
       if(windowScrollTopHeight >= 0 && windowScrollTopHeight < aboutHeight) {
           makeGrey(anchors);
           anchors[0].style.backgroundColor = "#454545";
       }else if(windowScrollTopHeight >= aboutHeight && windowScrollTopHeight < servicesHeight) {
            makeGrey(anchors);
            anchors[1].style.backgroundColor = "#454545";
       }else if(windowScrollTopHeight >= servicesHeight && windowScrollTopHeight < contactHeight) {
            makeGrey(anchors);
            anchors[2].style.backgroundColor = "#454545";
       }else if(windowScrollTopHeight >= contactHeight) {
            makeGrey(anchors);
            anchors[3].style.backgroundColor = "#454545";
       }
    }else {
        if(windowScrollTopHeight >= 0 && windowScrollTopHeight < document.getElementById("about-us").offsetTop) {
            makeGrey(navAnchors);
            navAnchors[0].style.backgroundColor = "#454545";
        }else if(windowScrollTopHeight >= document.getElementById("about-us").offsetTop && windowScrollTopHeight < document.getElementById("our-services").offsetTop ) {
             makeGrey(navAnchors);
             navAnchors[1].style.backgroundColor = "#454545";
        }else if(windowScrollTopHeight >= document.getElementById("our-services").offsetTop  && windowScrollTopHeight < document.getElementById("contact-form").offsetTop) {
             makeGrey(navAnchors);
             navAnchors[2].style.backgroundColor = "#454545";
        }else if(windowScrollTopHeight >= document.getElementById("contact-form").offsetTop) {
             makeGrey(navAnchors);
             navAnchors[3].style.backgroundColor = "#454545";
        }
    }

    if(windowScrollTopHeight > 10) {
        document.querySelector("img.arrow").style.display = "block";
    }else {
        document.querySelector("img.arrow").style.display = "none";
    }
});

document.querySelector("img.arrow").addEventListener("click", () => {
    window.scroll({
        top: 0,
        left:0,
        behavior: "smooth"
    })
})

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

navAnchors.forEach(selector => {
    selector.addEventListener("click", e => {
        e.preventDefault();
        let text = e.target.innerText;
        switch(text) {
            case "Homepage":
                window.scroll({
                    top: document.getElementById("landing-page").offsetTop,
                    left: 0,
                    behavior: "smooth"
                });
            break;
            case "About Us":
                window.scroll({
                    top: document.getElementById("about-us").offsetTop,
                    left: 0,
                    behavior: "smooth"
                });
            break;
            case "Services":
                window.scroll({
                    top: document.getElementById("our-services").offsetTop,
                    left: 0,
                    behavior: "smooth"
                });
            break;
            case "Contact":
                window.scroll({
                    top: document.getElementById("contact-form").offsetTop,
                    left: 0,
                    behavior: "smooth"
                });
            break;
            default:
        }
        document.querySelector("#mobile ul").style.height = 0;
    })
});

document.querySelector("#mobile > div").addEventListener("click", () => {
    if(document.querySelector("#mobile ul").style.height < "199px") {
        document.querySelector("#mobile ul").style.height = "199px";
    }else {
        document.querySelector("#mobile ul").style.height = 0;
    }
});