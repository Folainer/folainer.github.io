document.body.innerHTML += playIcon;
let statusGame = false;
let x, y, scoreboard, board, boll, timer, sec, timerFync, moverFync;

document.querySelector('.playIcon').onclick = startGame;
document.onkeydown = e => {if (e.which == 13 && statusGame == false) {startGame()
    if (document.body.firstChild == document.querySelector('.endWindow')) {
        document.querySelector('.endWindow').remove();
    }
}};

function startGame() {
    statusGame = true;
    try{document.querySelector('.svg1').style.display = 'none';}
    catch{};
    scoreboard = document.createElement('p');
    scoreboard.classList.add('scoreboard');
    document.body.append(scoreboard);
    scoreboard.innerHTML = '0';
    board = document.createElement('div');
    board.classList.add('board');
    document.body.append(board);
    document.onmousemove = alignBoard;
    boll = document.createElement('div');
    boll.classList.add('boll');
    document.body.append(boll);
    callTimer();
}

function alignBoard(e) {
    if (e.clientX >= document.querySelector('.board').clientWidth/2 && e.clientX <= window.innerWidth - document.querySelector('.board').clientWidth/2) {
        document.querySelector('.board').style.left = e.clientX+'px';
    } else if (e.clientX < document.querySelector('.board').clientWidth/2 ) {
        document.querySelector('.board').style.left = document.querySelector('.board').clientWidth/2+'px';
    } else {
        document.querySelector('.board').style.left = window.innerWidth - document.querySelector('.board').clientWidth/2+'px';
    }
    x = e.clientX;
    y = e.clientY;
}

function callTimer() {
    timer = document.createElement('p');
    timer.classList.add('timer');
    document.body.append(timer);
    timer.innerHTML = 3;
    sec = 2;
    timerFync = setInterval(function() {
        if (sec > 0) {
            timer.innerHTML = sec;
            sec--;
        } else {
            clearInterval(timerFync);
            timer.remove();
            moverFync = setInterval(moveBoll, 1000/60);   
        }
    }, 1000);
}

let angle = Math.ceil(Math.random()*360);
function randAngle() {
    if (angle == 180 || angle == 90 || angle == 0 || angle == 270){
        angle = Math.ceil(Math.random()*360);
        randAngle();
    }
}
randAngle();
const speed = 15;
let coordX, coordY, speedX, speedY;
updateSpeed();

function updateSpeed() {
    speedX = +(Math.cos((angle/180)*Math.PI)*speed).toFixed(2);
    speedY = +(Math.sin((angle/180)*Math.PI)*speed).toFixed(2);
}
function moveBoll() {
    coordX = document.querySelector('.boll').offsetLeft; 
    coordY = document.querySelector('.boll').offsetTop;
    document.querySelector('.boll').style.left = coordX + speedX + 'px';
    document.querySelector('.boll').style.top = coordY + speedY + 'px';
    if (coordY < 30) {
        if (angle == 270) {
            angle -= 180;
             updateSpeed();
        } else 
        if (angle > 270 && angle < 360) {
            angle = 360 - angle;
            updateSpeed();
        } else
        if (angle < 270 && angle > 180) {
            angle = -360 - angle + 720;
            updateSpeed();
        }
    }
    if (coordX <= - 2*speedX) {
        if (angle == 180) {
            angle -= 180;
            updateSpeed();
        } else
        if (angle < 270 && angle > 180) {
            angle = 180 - angle +360;
            updateSpeed();
        } else
        if (angle < 180 && angle > 90) {
            angle = -angle - 180 +360;
            updateSpeed();
        }
    }
    if (coordX >= window.innerWidth - 2*speedX) {
        if (angle == 0) {
            angle += 180;
            updateSpeed();
        } else
        if (angle < 90 && angle > 0) {
            angle = -angle + 180;
            updateSpeed();
        } else
        if (angle < 360 && angle > 270) {
            angle = 180 - angle + 360;
            updateSpeed();
        }
    }
    if (coordY >= window.innerHeight - 2*speedY - 10) {
        if (coordX + 60>= x && coordX <= x+document.querySelector('.board').clientWidth -40 && document.querySelector('.boll').offsetTop <= window.innerHeight-10) {
            if (angle == 90) {
                angle += 180;
                updateSpeed();
                scoreboard.innerHTML = +scoreboard.innerHTML +1;
            } else
            if (angle > 0 && angle < 90) {
                angle = 360 - angle;
                updateSpeed();
                scoreboard.innerHTML = +scoreboard.innerHTML +1;
            } else 
            if (angle >90 && angle < 180) {
                angle = 450-(90 + angle);
                updateSpeed();
                scoreboard.innerHTML = +scoreboard.innerHTML +1;
            }
        } else {
            clearInterval(moverFync);
            document.onmousemove = null;
            deleteElements();
            openWindow();
            statusGame = false;
        }
    }
}
function deleteElements() {
    if (document.body.hasChildNodes()) {
        document.body.firstChild.remove();
        deleteElements();
    }
}

function openWindow() {
    let endWindow = document.createElement('div');
    endWindow.classList.add('endWindow');
    document.body.append(endWindow);
    let again = document.createElement('div');
    again.classList.add('again');
    endWindow.append(again);
    again.innerHTML = retry;
    let score = document.createElement('p');
    score.classList.add('score');
    endWindow.append(score);
    score.innerHTML = 'РАХУНОК\n'+scoreboard.innerHTML;
    again.onclick = () => {
        startGame();
        endWindow.remove();
    };
}
