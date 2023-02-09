const screens = document.querySelectorAll('section');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const id = button.getAttribute('data-goto');
    goToScreen(id);
  })
})

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'vrai') {
      button.style.backgroundColor = button.style.outlineColor = '#2D58F3';
      button.style.color = 'white';
    } else if (button.id === 'faux') {
      button.style.backgroundColor = button.style.outlineColor = '#F26C46';
      button.style.color = 'white';
    }
  });
});

function goToScreen(id) {
  screens.forEach((screen) => {
     if (screen.id === id) {
       screen.classList.add('is-visible');
     } else {
       screen.classList.remove('is-visible');
     }
  })
}

function Popindice() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
function Popindice2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}
function Popindice3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
}

function playAudio(Name) { 
  Name.play(); 
} 

function pauseAudio(Name) { 
  Name.pause(); 
} 
 