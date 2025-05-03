import $ from "jquery";

export default function toggleLang(){
    

    // Cookies defined and splited
    let cookies = document.cookie.split("; ");

    // Lang defined and search for language on cookies
    let cookieLang = "";
    cookies.forEach(cookie => {
        if (cookie.startsWith("lang=")) {
            cookieLang = cookie;
        }
    });

    // Toggle language
    $('#es').css(cookieLang == "lang=en" ? {'display': 'block'} : {'display': 'none'});
    $('#en').css(cookieLang == "lang=es" ? {'display': 'block'} : {'display': 'none'});

    // Toggle language on cookies
    document.cookie = cookieLang == "lang=es" ? "lang=en" : "lang=es";

}
    
