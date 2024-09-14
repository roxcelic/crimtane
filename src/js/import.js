document.addEventListener("DOMContentLoaded", function() {
    const darkThemeUrl = "https://style.roxcelic.love/styles.css";
    const lightThemeUrl = "https://style.roxcelic.love/light.css";
    
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
            
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        linkElement.href = darkThemeUrl;
    } else {
        linkElement.href = lightThemeUrl;
    }
            
    document.head.appendChild(linkElement);
});