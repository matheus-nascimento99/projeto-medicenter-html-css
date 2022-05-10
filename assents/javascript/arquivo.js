window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").syle.display == 'flex'){
            document.querySelector(".menu nav ul").syle.display = 'none';
        }else{
            document.querySelector(".menu nav ul").syle.display = 'flex';
        }
        
    });
};