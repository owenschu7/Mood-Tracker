const now = new Date();
const day = now.getDate();
const month = now.getMonth() + 1;

document.getElementById("currentDate").innerHTML = "Todays Date: " + month + "/" + day;