function ready(e){"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e)}ready((function(){const e=document.getElementById("nav-button");e.addEventListener("click",(function(){e.classList.toggle("active")}));const t=document.querySelector(".header__nav");function o(e){return e*(Math.PI/180)}window.onscroll=()=>{document.body.scrollTop>=200||document.documentElement.scrollTop>=200?t.classList.add("scrolled"):t.classList.remove("scrolled")},new Typewriter("#typewriter",{strings:["Outdoor Furniture","Grills & Outdoor Kitchens","Fireplaces, Gas Logs & Wood Stoves","Get Started Today"],autoStart:!0,delay:75,loop:!0}),navigator.geolocation.getCurrentPosition((function(e){for(var t,n,r,a,s,l,d,i,c=e.coords.latitude,h=e.coords.longitude,u=[{name:"Winston Salem",phone:"(336)-760-1766",phoneLink:"tel:+1-336-760-1766",address:"1500 Hanes Mall Blvd, Winston-Salem, NC 27103",href:"https://www.google.com/search?q=casual+furniture+world+winston+salem",lat:36.07007,lng:-80.33271},{name:"Greensboro",phone:"(336)-252-2640",phoneLink:"tel:+1-336-252-2640",address:"3809 Lawndale Dr, Greensboro, NC 27455",href:"https://www.google.com/search?q=casual+furniture+world+greensboro",lat:36.12056,lng:-79.83115},{name:"Myrtle Beach",phone:"(843)-272-1376",phoneLink:"tel:+1-843-272-1376",address:"2500 Hwy 17 S, North Myrtle Beach, SC 29582",href:"https://www.google.com/search?q=casual+furniture+world+myrtle+beach",lat:33.80839,lng:-78.71382}],m=null,g=1/0,w=0;w<u.length;w++){var y=u[w],p=(t=c,n=h,r=y.lat,a=y.lng,void 0,s=void 0,l=void 0,d=void 0,i=void 0,void 0,3958.8,s=o(r-t),l=o(a-n),d=Math.sin(s/2)*Math.sin(s/2)+Math.cos(o(t))*Math.cos(o(r))*Math.sin(l/2)*Math.sin(l/2),i=2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d)),3958.8*i);p<g&&(m=y,g=p)}var v=document.getElementById("location"),M=document.querySelector(".distance"),f=document.querySelector(".address"),L=document.querySelector(".phone");v.innerHTML="Nearest store: "+m.name,M.innerHTML="Distance: "+g.toFixed(2)+" miles away",M.href=m.href,f.innerHTML="Address: "+m.address,f.href=m.href,L.innerHTML="Phone: "+m.phone,L.href=m.phoneLink}))}));
//# sourceMappingURL=script.js.map