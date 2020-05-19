var modal = document.getElementById('myModal');
var btn1 = document.getElementById("Btn1");
var btn2 = document.getElementById("Btn2");
var btn3 = document.getElementById("Btn3");                                        
var video1 = document.getElementById("video-1");
var video2 = document.getElementById("video-2");
var video3 = document.getElementById("video-3");
                                    
var span = document.getElementsByClassName("close")[0];  



btn1.onclick = function() {
    modal.style.display = "block";
    video1.style.display = "block";
    video2.style.display = "none";
    video3.style.display = "none";
}
btn2.onclick = function(){
    modal.style.display = "block";
    video2.style.display = "block";
    video1.style.display = "none";
    video3.style.display = "none";
}
btn3.onclick = function(){
    modal.style.display = "block";
    video3.style.display = "block";
    video1.style.display = "none";
    video2.style.display = "none";
}

span.onclick = function() {
    modal.style.display = "none";
}

// close
window.onclick = function(event) {
    
    if (event.target == modal) {
        modal.style.display = "none";
        video1.empty();
    }
}
