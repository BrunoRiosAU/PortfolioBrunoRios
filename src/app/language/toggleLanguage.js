import $ from "jquery";

export default function toggleLang(){
    // Toggle language
    $('#es').toggle();
    $('#en').toggle();

    // Cookies defined and splited
    let cookies = document.cookie.split("; ");

    // Lang defined and search for language on cookies
    let cookieLang = "";
    cookies.forEach(cookie => {
        if (cookie.startsWith("lang=")) {
            cookieLang = cookie;
        }
    });

    // Toggle language on cookies
    document.cookie = cookieLang == "lang=es" ? "lang=en" : "lang=es";

}
    
