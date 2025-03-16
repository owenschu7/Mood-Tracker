const now = new Date();
const day = now.getDate();
const month = now.getMonth() + 1;

document.getElementById("currentDate").innerHTML = "Todays Date: " + month + "/" + day;


// stores each answer to questions 1-10 
const dataArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];



function submit() {
    
    //group 1
    const radio1 = document.querySelectorAll('input[name="group1"')

    for (let i = 0; i < 5; i++) {

        if (radio1[i].checked) {
            //set the value of i to the ith index of dataArray
            dataArray[0] = i + 1;
        }
    }

    //group 2
    const radio2 = document.querySelectorAll('input[name="group2"')

    for (let i = 0; i < 5; i++) {

        if (radio2[i].checked) {
            //set the value of i to the ith index of dataArray
            dataArray[1] = i + 1;
        }
    }

    //group 3
    const radio3 = document.querySelectorAll('input[name="group3"')

    for (let i = 0; i < 5; i++) {

        if (radio3[i].checked) {
            //set the value of i to the ith index of dataArray
            dataArray[2] = i + 1;
        }
    }

    //group 4
    const radio4 = document.querySelectorAll('input[name="group4"')

    for (let i = 0; i < 5; i++) {

        if (radio4[i].checked) {
            //set the value of i to the ith index of dataArray
            dataArray[3] = i + 1;
        }
    }

    //group 5
    const radio5 = document.querySelectorAll('input[name="group5"')

    for (let i = 0; i < 5; i++) {

        if (radio5[i].checked) {
            //set the value of i to the ith index of dataArray
            dataArray[4] = i + 1;
        }
    }

    //group 6
    const radio6 = document.querySelectorAll('input[name="group6"')

    for (let i = 0; i < 5; i++) {

        if (radio6[i].checked) {
            //set the value of i to the ith index of dataArray
            dataArray[5] = i + 1;
        }
    }

    //group 7
    const radio7 = document.querySelectorAll('input[name="group7"')

    for (let i = 0; i < 5; i++) {

        if (radio7[i].checked) {
            //set the value of i to the ith index of dataArray
            dataArray[6] = i + 1;
        }
    }

    //group 8
    const radio8 = document.querySelectorAll('input[name="group8"')

    for (let i = 0; i < 5; i++) {

        if (radio8[i].checked) {
            //set the value of i to the ith index of dataArray
            dataArray[7] = i + 1;
        }
    }

    //group 9
    const radio9 = document.querySelectorAll('input[name="group9"')

    for (let i = 0; i < 5; i++) {

        if (radio9[i].checked) {
            //set the value of i to the ith index of dataArray
            dataArray[8] = i + 1;
        }
    }

    //group 10
    const radio10 = document.querySelectorAll('input[name="group10"')

    for (let i = 0; i < 5; i++) {

        if (radio10[i].checked) {
            //set the value of i to the ith index of dataArray
            dataArray[9] = i + 1;
        }
    }

    console.log(dataArray);
}

