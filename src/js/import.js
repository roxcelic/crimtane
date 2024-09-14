document.addEventListener("DOMContentLoaded", function() {
    const darkThemeUrl = "https://roxcelic.github.io/crimtane/styles.css";
    const lightThemeUrl = "https://roxcelic.github.io/crimtane/light.css";
    
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
            
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        linkElement.href = darkThemeUrl;
    } else {
        linkElement.href = lightThemeUrl;
    }
            
    document.head.appendChild(linkElement);
});