function toggleNav(){document.querySelector('.navlinks')?.classList.toggle('open')}
function goBack(){if(history.length>1)history.back();else location.href='home.html'}
function toggleBots(){document.getElementById('bots')?.classList.toggle('open')}
const gallery=['hero.jpg','projects.jpg','about.jpg','green.jpg','gallery5.jpg'];let gi=0;
function nextPhoto(){gi=(gi+1)%gallery.length;const im=document.getElementById('galleryPhoto');if(im){im.src=gallery[gi];document.getElementById('galleryCount').textContent=`PHOTO ${gi+1} / ${gallery.length}`}}
function prevPhoto(){gi=(gi-1+gallery.length)%gallery.length;const im=document.getElementById('galleryPhoto');if(im){im.src=gallery[gi];document.getElementById('galleryCount').textContent=`PHOTO ${gi+1} / ${gallery.length}`}}
function openLight(src){const l=document.getElementById('lightbox');if(l){l.classList.add('open');l.querySelector('img').src=src}}
function closeLight(){document.getElementById('lightbox')?.classList.remove('open')}
function year(){document.querySelectorAll('.year').forEach(x=>x.textContent=new Date().getFullYear())}
document.addEventListener('DOMContentLoaded',year);
