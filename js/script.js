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