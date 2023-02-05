const currentTime = () => {
    const clockTime = document.querySelector(".clock-time");
    const markingHours = document.querySelector(".marking-Hours");
    const markingMinute = document.querySelector(".marking-minute");
    const markingSeconds = document.querySelector(".marking-seconds");

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;

    const ssDegrees3 = (hh /12) * 360;
    markingHours.style.transform = `rotate(${ssDegrees3}deg)`;

    const ssDegrees = (ss / 60) * 360;
    markingSeconds.style.transform = `rotate(${ssDegrees}deg)`;

    const ssDegrees2 = (mm /60) * 360;
    markingMinute.style.transform = `rotate(${ssDegrees2}deg)`;

    let time = `${hh}:${mm}`;
    clockTime.innerText = time;
};

currentTime();
setInterval(currentTime, 1000);
