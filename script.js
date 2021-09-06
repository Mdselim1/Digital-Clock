

const timeDate = () => {

    const maindate = new Date();
    let hour = maindate.getHours();
    const minute = maindate.getMinutes();
    const second = maindate.getSeconds();
    let session = document.getElementById('session');

    if (hour >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    };

    if (hour > 12) {
        hour = hour - 12;
    };

    document.getElementById('hours').innerHTML = hour;
    document.getElementById('minutes').innerHTML = minute;
    document.getElementById('seconds').innerHTML = second;

}

setInterval(timeDate, 10);
