
function upDateHover(previewPic){
 document.getElementById('image').innerHTML = previewPic.alt;
 document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";  
}

function upDateFocus(previewPic){
 document.getElementById('image').innerHTML = previewPic.alt;
 document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

window.onload = function(){
 currentImages = document.querySelectorAll("img.preview");
 for (var i=0; i < currentImages.length; i++){
  currentImages[i].setAttribute("tabindex", "0");
 }
}


function unDoHover(){
  document.getElementById('image').innerHTML='Hover over an image below to display here.';
  document.getElementById('image').style.backgroundImage = "url('')"; 
}

function unDoFocus(){
  document.getElementById('image').innerHTML='Hover over an image below to display here.';
  document.getElementById('image').style.backgroundImage = "url('')"; 
}

