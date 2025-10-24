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
        window.addEventListener("keydown", (event) => {
            if (event.key === "q") {
                document.getElementById("figmaTemplate").style = "display: block;";
            } else if (event.key === "f") {
                document.getElementById("figmaTemplate").style = "display: none;";
            } else if (event.key === "j") {
                const currentOpacity = Number(window.getComputedStyle(document.getElementById("figmaTemplate")).opacity);
                if (currentOpacity >= 0.1) {
                    document.getElementById("figmaTemplate").style.opacity = currentOpacity - 0.1;
                }
            } else if (event.key === "m") {
                const currentOpacity = Number(window.getComputedStyle(document.getElementById("figmaTemplate")).opacity);
                if (currentOpacity <= 0.9) {
                    document.getElementById("figmaTemplate").style.opacity = currentOpacity + 0.1;
                }
            }
        })
    })

    // sprawdzić czy obraz zmienia style. 
    // - pobierasz ID i piszesz .style.
    // - szukasz w internecie jak zmienić style JSem (.style)
    // - zmieniasz display none na display block


})();
