let ourContainer = document.getElementsByClassName("toggle-container")[0];
let ourButton = document.getElementsByClassName("toggle-button")[0];
const pageBody = document.getElementsByTagName('body')[0]

var darkMode = ourButton.classList.contains('active')

ourContainer.addEventListener("click", () => {
  ourButton.classList.toggle('active')
  if(!darkMode){
    darkMode = true
  } else{
    darkMode = false
  }
  console.log(darkMode)
})




function changeTheme() {
  if (darkMode){
    pageBody.classList.add('dark-bg')
  }else{
    pageBody.classList.remove('dark-bg')
  }
}

ourContainer.addEventListener("click", changeTheme
)