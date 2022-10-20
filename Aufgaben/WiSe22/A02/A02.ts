namespace A02 {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        document.addEventListener("mousemove", setInfoBox);
        window.addEventListener("click", function() {

            document.querySelector("body").addEventListener("click", logInfo);
            document.querySelector("div0").addEventListener("click", logInfo);
            document.querySelector("div1").addEventListener("click", logInfo);

            document.querySelector("body").addEventListener("keyup", logInfo);
            document.querySelector("div0").addEventListener("keyup", logInfo);
            document.querySelector("div1").addEventListener("keyup", logInfo);
        })
    }
    function setInfoBox(): void {


    }
    function logInfo(): void {

    }

}