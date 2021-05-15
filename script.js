let link = document.getElementById("link");
let colors = document.getElementById("color");

link.addEventListener('input', updateLink);
colors.addEventListener('input', updateValue);

function updateLink() {
  let linkValue = document.getElementById("link").value;
  document.getElementById('applePC').src = linkValue;
  document.getElementById('iPad').src = linkValue;
  document.getElementById('iPhone').src = linkValue;
}

function updateValue() {
  let colorsValue = document.getElementById("color").value;
  document.querySelector('.bg').style.background = colorsValue;
  let cr = document.querySelectorAll('p');
  if(colorsValue == 'black' || colorsValue == '#000' || colorsValue == '#000000') {
    for(var i=0; i <= cr.length; i++) {
      document.querySelectorAll('p')[i].style.color = '#fff';
    }
  }
  else {
    for(var i=0; i <= cr.length; i++) {
      document.querySelectorAll('p')[i].style.color = '#000';
    }
  }
}