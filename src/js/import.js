document.addEventListener("DOMContentLoaded", function() {
    const darkThemeUrl = "https://crimtane.roxcelic.love/styles.css";
    const lightThemeUrl = "https://crimtane.roxcelic.love/light.css";
    const backgroundUrl = "https://crimtane.roxcelic.love/script.js";
    
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    
    const scriptElement = document.createElement("script");
    
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        linkElement.href = darkThemeUrl;
    } else {
        linkElement.href = lightThemeUrl;
    }

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
    document.head.appendChild(linkElement);
});