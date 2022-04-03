setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    // 12hrs = 360degree
    // 1hr = 30degree
    //for hour hnd
    // 1hr = 30 deg + m/2

    // 60min = 30deg
    // 1min= 1/2 deg

    // 60min = 360deg
    // 1min 6 deg
    //for min hand
    // m minutes = 6*m deg

    // 60sec = 360deg
    // 1sec = 6deg
    //for second hand
    // s second = s * 6deg


    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);