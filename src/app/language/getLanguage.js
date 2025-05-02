import { useEffect } from "react";
import $ from "jquery";

export default function getLanguage(){
    useEffect(() => {
        if(!document.cookie){
            const language = navigator.language;
            document.cookie = language.startsWith("es") ? "es" : "en";
        }
        
        if(document.cookie == "es"){
            $('#es').show();
        }else{
            $('#en').show();
        }

    })
}