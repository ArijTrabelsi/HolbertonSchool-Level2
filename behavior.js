document.addEventListener("DOMContentLoaded", function(event) {
    
    window.addEventListener('scroll', function(){
        const header = document.querySelector('header');
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        if (thumbnailElement.className == "") {
            thumbnailElement.className = "small";
        }    
        else {
            thumbnailElement.className = "";
        }  
    });
});