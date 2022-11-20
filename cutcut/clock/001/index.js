const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setClock() {
  const d = new Date();
  //秒針每秒6度
  let secDeg = d.getSeconds() * 6;
  //分針一分鐘6度 + (每分鐘6度/60秒)度
  let minDeg = d.getMinutes() * 6 + d.getSeconds() * (6 / 60);
  //時針一小時30度 + (每小時30度/60分)度
  let hourDeg = d.getHours() * 30 + d.getMinutes() * (30 / 60);

  //改寫css transform:rotate(deg);
  secondHand.style.transform = `rotate(${secDeg}deg)`;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  requestAnimationFrame(setClock);
}

// setClock();
// setInterval(setClock,1000);

requestAnimationFrame(setClock);