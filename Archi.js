
// Link of background music - set 'null' if you don't want to play background music
var bgMusicURL = './Apna-Bana-Le---Bhediya(iTunesMp3).mp3';
var bgMusicControls = true;

// Page load
window.onload = function() {
    if (bgMusicURL) {
        var audio = new Audio(bgMusicURL);
        audio.controls = bgMusicControls;
        document.body.appendChild(audio);
        audio.play();
    }
};





document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".image");
    var index = 0;
  
    function showNextImage() {
      // Hide the current image
      images[index].style.display = "none";
      // Move to the next image
      index = (index + 1) % images.length;
      // Show the next image
      images[index].style.display = "block";
    }
  
    // Show the first image initially
    images[index].style.display = "block";
  
    // Automatically switch images every 3 seconds (adjust as needed)
    setInterval(showNextImage, 1000);
  });
  