let cookieValue;

document.cookie = 'view = 1; Max-Age=3600000; path=/; secure';
window.onload = function(){
    if (document.cookie.length >= 0){
        let cookieSplit = document.cookie.split(';');
        let cookieName = "view=";
        cookieValue = "";
        for (i=0;i<cookieSplit.length;i++){
            if(cookieSplit[i].indexOf(cookieName) != -1){
                cookieValue = cookieSplit[i].substring(cookieName.length + cookieSplit[i].indexOf(cookieName), cookieSplit[i].length);
                cookieValue = parseInt(cookieValue);
                cookieValue++;
            }
            return cookieValue
        }
        
    };
    
}
console.log(document.cookie);
    





