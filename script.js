fetch('https://api.aladhan.com/v1/timingsByCity?country=SY&city=Halab')
  .then(res => res.json())
  .then(res => Tony(res));

let Div = document.getElementById('root');

const fajr=document.getElementById("fajr")
const dahr=document.getElementById("dahr")
const asr=document.getElementById("asr")
const maghrib=document.getElementById("maghrib")
const asha=document.getElementById("asha")

function Tony(res) {

       console.log(res.data.timings)
       fajr.innerHTML=(res.data.timings.Fajr)
       dahr.innerHTML=(res.data.timings.Dhuhr)
       asr.innerHTML=(res.data.timings.Asr)
       maghrib.innerHTML=(res.data.timings.Maghrib)
       asha.innerHTML=(res.data.timings.Isha)
}

