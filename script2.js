function go(page){
    document.querySelectorAll("section").forEach(sec=>{
        sec.classList.remove("active");
    });
    document.getElementById(page).classList.add("active");
}

let waterCount = 0;

function addWater(){
    waterCount++;
    document.getElementById("water").innerText = waterCount;
}
setInterval(() => {
    alert("💧 Reminder: Drink Water!");
}, 60000); // 1 minute

function calculate(){

    let name = document.getElementById("name").value;
    let height = document.getElementById("height").value / 100;
    let weight = document.getElementById("weight").value;

    let bmi = (weight / (height * height)).toFixed(1);

    let score = 0;

    if(bmi > 25) score++;
    if(document.getElementById("thyroid").checked) score++;
    if(document.getElementById("hairloss").checked) score++;
    if(document.getElementById("acne").checked) score++;
    if(document.getElementById("irregular").checked) score+=2;
    if(document.getElementById("facialhair").checked) score++;
let warning = "";

if(score <=2){
    risk = "Low";
    warning = "You are safe. Maintain healthy lifestyle 💚";
}
else if(score <=4){
    risk = "Moderate";
    warning = "Risk detected. Monitor your health regularly ⚠️";
}
else{
    risk = "High";
    warning = "⚠️ High risk detected. This is not a medical diagnosis. Please consult a doctor.";
}

document.getElementById("warningMsg").innerText = warning;

    document.getElementById("welcome").innerText = "Hello " + name;
    document.getElementById("bmi").innerText = bmi;
    document.getElementById("risk").innerText = risk;

    go("dashboard");
}

function predictCycle(){
    let date = new Date(document.getElementById("date").value);
    date.setDate(date.getDate() + 28);
    document.getElementById("next").innerText =
        "Next Period: " + date.toDateString();
}
function restartApp(){
    location.reload();
}
