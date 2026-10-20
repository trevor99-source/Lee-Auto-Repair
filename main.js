(function(){
var WA='https://wa.me/27785903232';
var mn=document.getElementById('mn'),bg=document.getElementById('bg');
if(bg&&mn){bg.addEventListener('click',function(){var o=mn.classList.toggle('open');bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Close menu':'Open menu')})}
var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
document.addEventListener('click',function(e){var a=e.target.closest('a[href^="tel:"]');if(a&&window.self!==window.top){e.preventDefault();var w=window.open(a.href,'_blank');if(!w)location.href=a.href}});
var q=document.getElementById('cq');
if(q)q.addEventListener('input',function(){var v=q.value.toLowerCase().trim();document.querySelectorAll('#cl details').forEach(function(d){var m=!v||d.dataset.s.indexOf(v)>-1;d.style.display=m?'':'none';d.open=!!v&&m})});
var f=document.getElementById('cf');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var g=function(i){return document.getElementById(i).value.trim()};
var t='Hi Lee, my name is '+g('n')+'.\nCar: '+(g('c')||'not given')+'\nNeed: '+g('s')+'\nPhone: '+(g('p')||'same as WhatsApp')+'\n'+g('m');
window.location.href=WA+'?text='+encodeURIComponent(t)});
})();
