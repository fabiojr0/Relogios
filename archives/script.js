setInterval(digital, 1000)
function digital(){
  let agora = new Date()
  let hora = agora.getHours()
  let min = agora.getMinutes()
  let seg = agora.getSeconds()
  hora += 1 //Convertendo para o meu horário
  min = igualar(min)
  seg = igualar(seg)
  let digital = window.document.querySelector('div.digital')
  digital.innerHTML = `<strong>${hora}:${min}:${seg}</strong>`
}
function igualar(num){
  if(num < 10){
    num = '0' + num
  } 
  return num
}
digital()


const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sg = document.querySelector('#sc');

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sg.style.transform = `rotateZ(${ss}deg)`;
})
    