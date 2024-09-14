document.addEventListener("DOMContentLoaded", function() {
    const darkThemeUrl = "https://crimtane.roxcelic.love/styles.css";
    const lightThemeUrl = "https://crimtane.roxcelic.love/light.css";
    
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
            
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        linkElement.href = darkThemeUrl;
    } else {
        linkElement.href = lightThemeUrl;
    }
            
    document.head.appendChild(linkElement);
});