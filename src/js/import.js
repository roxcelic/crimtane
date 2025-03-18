document.addEventListener("DOMContentLoaded", function() {
    const darkThemeUrl = "https://crimtane.roxcelic.love/styles.css";
    const lightThemeUrl = "https://crimtane.roxcelic.love/light.css";
    const backgroundUrl = "https://crimtane.roxcelic.love/script.js";

    const background = document.currentScript.getAttribute('background');
    
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        linkElement.href = darkThemeUrl;
    } else {
        linkElement.href = lightThemeUrl;
    }

    if (background != "false") {
        const scriptElement = document.createElement("script");
        // setting up the background config
        scriptElement.src = backgroundUrl
            scriptElement.setAttribute("speed", 10);
            scriptElement.setAttribute("loop", 300);
            scriptElement.setAttribute("amount", 150);
            scriptElement.setAttribute("distance", 2);
            scriptElement.setAttribute("penThickness", 1);
            scriptElement.setAttribute("reset", "false");
            scriptElement.setAttribute("resetTime", 1000);
            scriptElement.setAttribute("backgroundColor", "black");
            scriptElement.setAttribute("penColor", "rgb(105, 0, 46)");
            scriptElement.setAttribute("center", "false");
            scriptElement.setAttribute("name", "ah");
    
        document.head.appendChild(scriptElement);
    }
    
    document.head.appendChild(linkElement);
});
