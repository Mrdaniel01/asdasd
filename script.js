function switchSheet(){
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "style.css"){
        theme.href="style_dark.css";
    } else{
        theme.href = "style.css";
    }
}