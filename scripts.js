$("#date").click(function () {
    $("#byDate").slideToggle();
    $("#sortdown1").toggleClass("flip");
});

$("#docType").click(function () {
    $("#byDocType").slideToggle();
    $("#sortdown2").toggleClass("flip");
});

$("#location").click(function () {
    $("#byLocation").slideToggle();
    $("#sortdown3").toggleClass("flip");
});

$("#people").click(function () {
    $("#byPeople").slideToggle();
    $("#sortdown4").toggleClass("flip");
});

$("#inputArea").focus(function () {
    if (!document.URL.includes("search.html")) {
        location.href = "search.html";
    } else {

    }
});

function focusOnInput() {
    $("#input_area").focus();
}

var generalLinks = $(".nav_item");
for (let i = 0; i < generalLinks.length; i++) {
    const selectedLinks = generalLinks[i];

    selectedLinks.onclick = function () {
        console.log(this)
        
        for (let j = 0; j < generalLinks.length; j++) {
            generalLinks[j].classList.remove("nav-active");

        }
        this.classList.add("nav-active")
    }

};



