// cookie = a smal text file stored on your computer
// used to remember information about the user
// used for authentication, storing user preferences, tracking, etc
// stored in name=value pairs


setCookie("email","meow@gmail.com",365);

console.log(document.cookie);
deleteCookie("email");
console.log(document.cookie);
function setCookie(name,value,daysToExpire){
    const date=new Date();
    date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
    const expires="expires="+date.toUTCString();
    document.cookie=`${name}=${value};${expires};path=/`;
}


function deleteCookie(name){
    setCookie(name,"",0);
}