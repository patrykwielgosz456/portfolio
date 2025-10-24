const emptyPayload = {
    cvDownload: 0,
    hire: 0
};

function incrementButtonClick(buttonType) {
    if (buttonType !== "hire" && buttonType !== "cvDownload") {
        return;
    }
    let currentCounter = window.localStorage.getItem("counter")
    if (!currentCounter) {
        window.localStorage.setItem("counter", JSON.stringify(emptyPayload))
        currentCounter = emptyPayload;
    } else {
        currentCounter = JSON.parse(currentCounter);
    }
    currentCounter[buttonType] += 1;
    window.localStorage.setItem("counter", JSON.stringify(currentCounter));
    console.log(currentCounter);
}

(() => {
    document.getElementById("navBrochureDownload").addEventListener("click", () => {
        incrementButtonClick("cvDownload");
    })

    document.getElementById("hire").addEventListener("click", () => {
        incrementButtonClick("hire");
    })

    document.addEventListener("DOMContentLoaded", () => {
       document.getElementById("figmaTemplate").style = "display: block;";
    })

    // sprawdzić czy obraz zmienia style. 
    // - pobierasz ID i piszesz .style.
    // - szukasz w internecie jak zmienić style JSem (.style)
    // - zmieniasz display none na display block


})();
