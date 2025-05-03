import { useEffect } from "react";
import $ from "jquery";

export default function getLanguage() {
    // Get language from cookies


    useEffect(() => {


        // Cookies defined and splited
        let cookies = document.cookie.split("; ");

        // Lang defined and search for language on cookies
        let cookieLang = "";
        cookies.forEach(cookie => {
            if (cookie.startsWith("lang=")) {
                cookieLang = cookie;
            }
        });

        // If there is not language, one is assigned
        if (!cookieLang) {
            const language = navigator.language;
            cookieLang = language.includes("es") ? "lang=es" : "lang=en";
            document.cookie = cookieLang;
        }

        // Show the correct language
        if (cookieLang == "lang=es") {
            $('#es').css({'display':'block'});
        } else {
            $('#en').css({'display':'block'});
        }
    });
}