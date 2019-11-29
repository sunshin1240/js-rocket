//hey this is invisible single line comment.
/* multiple line comments */
var doCoolStuff =function () {
    var currentClassName = document.getElementById('cool').className;
        //changing class name
        if (currentClassName == 'cool') {
            document.getElementById('cool').className = 'cool red';
        } else {
            document.getElementById('cool').className = 'cool';
        }
}

var imStudying = function (name) {
    alert("I'm studying: " +name);
}

var cellphone = {
                make: 'iPhone',
                type: 'X',
                color: 'Silver',
                isTurnedOn: false,
                year: 2018,
                accessories: [
                'Case',
                'Protective Film',
                'Charger',
                'Cable'
                ],
                turnOn: function () {
                    this.isTurnedOn = true;
                },
                callMe: function () {
                    alert('Hello?');
                },
                switchPhone: function (isOn) {
                    console.log('Turn cellphone '+isOn);
                    if (isOn == true) {
                        this.isTurnedOn = true;
                    } else {
                        this.isTurnedOn = false;
                    }
                }
            };


            console.log("We're gonna launch the rocket!");