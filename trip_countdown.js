// countdown clock

// Countdown days to NY

// Set countdown so that the clock goes down every 1 second (1000 ms)
setInterval(countdown, 1000);


//Need to compare today's date with travel date
function countdown() {
    // Need today's Date
    //getTime() returns int in milliseconds
    let today = new Date().getTime();

    // Date we leave for NY
    let travel_date = new Date("November 24 2019").getTime();

    // Difference between the two dates in milliseconds
    let time_remaining = (travel_date - today);

    if (time_remaining >= 0) {
    // Display should include days, hours, minutes, seconds
        const SEC = 1000;
        const MIN = 60 * SEC;
        const HR = 60 * MIN;
        const DAY = 24 * HR;

        let days = Math.floor(time_remaining / DAY); //1 day = 60 seconds in a minute * 60 minutes in an hour * 24 hours in a day
        let hours = Math.floor((time_remaining % DAY) / HR);
        let minutes = Math.floor((time_remaining % HR) / MIN);
        let seconds = Math.floor((time_remaining % MIN) / SEC);

        document.getElementById('days').innerHTML = ("0" + days + "d");
        document.getElementById('hours').innerHTML = ("0" + hours + "h");
        document.getElementById('minutes').innerHTML = ("0" + minutes + "m");
        document.getElementById('seconds').innerHTML = ("0" + seconds + "s");
    }
}
