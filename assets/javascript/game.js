$(document).ready(function () {
    function randomNumber() {
        let number = Math.floor((Math.random() * 101) + 19);
        console.log(number);
        $('#RandomNumber').text(number);
        //the above code will generate the random number and place it in the div
    }
    //creating a random number for each button
    let num1 = Math.floor(Math.random() * 11 + 1)
    let num2 = Math.floor(Math.random() * 11 + 1)
    let num3 = Math.floor(Math.random() * 11 + 1)
    let num4 = Math.floor(Math.random() * 11 + 1)

    //counting wins and losss
    let wins = 0;
    let losses = 0;

    //total for all clicks
    let totalscore = 0;

    //below are the click events for each button type
    $('#one').on('click', function () {
        let uservalue = num1;
        console.log(num1);
        totalscore = totalscore + num1;
        $('#totalscore').text(totalscore);

    })

    $('#two').on('click', function () {
        let uservalue = num2;
        console.log(num2);
        totalscore = totalscore + num2;
        $('#totalscore').text(totalscore);
    })

    $('#three').on('click', function () {
        let uservalue = num3;
        console.log(num3);
        totalscore = totalscore + num3;
        $('#totalscore').text(totalscore);

    })

    $('#four').on('click', function () {
        let uservalue = num4;
        console.log(num4);
        totalscore = totalscore + num3;
        $('#totalscore').text(totalscore);

    })

    randomNumber();
})

