let ourContainer = document.getElementsByClassName("toggle-container")[0];
let ourButton = document.getElementsByClassName("toggle-button")[0];

ourContainer.addEventListener("click", function(){
  ourButton.classList.toggle('active')
  console.log(ourButton.classList.contains('active'))
})


