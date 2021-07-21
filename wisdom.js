function filterSwitch() {
  if (filtered.style.display == 'none') {
    filtered.style.display='block';
} else {
  filtered.style.display='none';
  }
}
const cloud = document.getElementById('cloud');
const wisdom1 = document.getElementById('appendMe');
cloud.addEventListener('click', wisdom);

function wisdom() {
    wisdom1.style.display='block';
    console.log('it works a lil');
  }
