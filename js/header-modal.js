function hide() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
  };

function showText () {
  let headerText;
  if(window.innerWidth<1026){
   headerText = "Check delivery";     
 } else {
   headerText = "We're focusing on London to start with, please enter your post code here to see if you're within our delivery zone!";
 }
 document.querySelector(".header_text").innerHTML = headerText;
}
window.addEventListener('resize', showText);




