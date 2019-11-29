var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
    //change state
    document.body.className = 'body-state' + state;
    clearInterval(timer);
    countdownNumber = 10;
    document.getElementById('countdown').innerHTML = countdownNumber;
    countdownNumber = countdownNumber;

    if (state == 2) {
        timer = setInterval(function () {
            countdownNumber = countdownNumber -1;
            document.getElementById('countdown').innerHTML = countdownNumber;

            if (countdownNumber <= 0) {
                changeState(3);
            };
        }, 500);
    //change the html element which is 10 inside h1 id-ed 'countdown', to target value 9.
    //countdown으로 id된 h1태그 안의 html엘레멘트인 10의 값을 입력한대로 9 로 바꿔줌
    } else if (state == 3) {
        var success = setTimeout(function () {
            var randomNumber = Math.round(Math.random()*10);
            console.log('randomNumber:', randomNumber)

                //seccess
            if (randomNumber > 5) {
                changeState(4);

            } else {
                changeState(5); // oh no!
            }
        }, 2000);
    };
}