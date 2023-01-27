var hours = 0;
var mins = 0;
var seconds = 0;

$('#start').click(function () {
    startTimer();
});

$('#stop').click(function () {
    clearTimeout(timex);
});

$('#reset').click(function () {
    resetTime();
});

function resetTime() {
    hours = 0; mins = 5; seconds = 55;
    printTime();
}

function printTime() {
    // Visualization
    if (hours < 10) {
        $("#hours").text('0' + hours + ':')
    } else $("#hours").text(hours + ':');
    if (mins < 10) {
        $("#mins").text('0' + mins + ':');
    }
    else $("#mins").text(mins + ':');
    if (seconds < 10) {
        $("#seconds").text('0' + seconds);
    } else {
        $("#seconds").text(seconds);
    }    
}

function startTimer() {
    timex = setTimeout(function () {
        // calculate timer
        seconds--;
        if (seconds < 0) {
            seconds = 59; mins--;
            if (mins < 0) {
                mins = 59; hours--;
            }
        }

        if (hours < 0) {
            // stop timer
            hours = 0; mins = 0; seconds = 0;
            clearTimeout(timex);
        }
        else {
            startTimer();
        }
        printTime();
    }, 1000);
}

resetTime();
printTime();
