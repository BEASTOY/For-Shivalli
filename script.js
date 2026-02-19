// Smooth scroll
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Modal
function openModal(src){
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "flex";
  modalImg.src = src;
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

// Close modal on outside click
document.getElementById("modal").addEventListener("click", function(e){
  if(e.target.id === "modal"){
    closeModal();
  }
});

// Game
let love = 0;

function increaseLove(){
  love += 10;
  if(love > 100) love = 100;

  document.getElementById("bar").style.width = love + "%";

  const text = document.getElementById("gameText");

  if(love <= 20) text.innerText = "Ayo slow 😭 tap more!";
  else if(love <= 40) text.innerText = "Okay okay… I see you 😏";
  else if(love <= 60) text.innerText = "Damn… you’re getting serious 💗";
  else if(love <= 80) text.innerText = "AYO THAT’S MY GIRL 😭🔥";
  else if(love < 100) text.innerText = "One more… one more 😌💗";
  else text.innerText = "100% LOVE LOCKED 🔒💗 You’re officially mine 😭🔥";
}

// Music toggle
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

musicBtn.addEventListener("click", function(){
  if(!isPlaying){
    bgMusic.play();
    musicBtn.innerText = "⏸ Pause";
    isPlaying = true;
  }else{
    bgMusic.pause();
    musicBtn.innerText = "🎵 Play";
    isPlaying = false;
  }
});
