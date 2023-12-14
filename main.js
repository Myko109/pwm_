const toggleDarkMode = document.getElementById("btn-darkmode")
const theme = document.getElementById("dark-mode")
let darkMode = localStorage.getItem("dark-mode-theme");

const enableDarkMode = () => {
    theme.classList.add("dark-theme")
    toggleDarkMode.classList.remove("dark-mode-toggle")
    localStorage.setItem("dark-mode-theme", "enable")
}

const disableDarkMode = () => {
    theme.classList.remove("dark-theme")
    toggleDarkMode.classList.add("dark-mode-toggle")
    localStorage.setItem("dark-mode-theme", "disable")
}

if(darkMode === "enable") {
    enableDarkMode();
}

toggleDarkMode.addEventListener("click", function(){
    // if (localStorage.getItem("dark-mode-theme") == "enable"){
    darkMode = localStorage.getItem("dark-mode-theme");

    if (darkMode === "disable") {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
    
})

// dark mode gak jadi...