import $ from "jquery";

export default function toggleLang(){
    $('#es').toggle();
    $('#en').toggle();

    document.cookie = document.cookie == "es" ? "en" : "es";
}
    
