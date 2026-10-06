function calculateCost() {

    const projectName =
        document.getElementById("projectName").value.trim() ||
        "Robotics Project";

    const arduino = Number(document.getElementById("arduino").value);
    const ultrasonic = Number(document.getElementById("ultrasonic").value);
    const motor = Number(document.getElementById("motor").value);
    const wheels = Number(document.getElementById("wheels").value);
    const battery = Number(document.getElementById("battery").value);

    const arduinoCost = arduino * 350;
    const ultrasonicCost = ultrasonic * 80;
    const motorCost = motor * 150;
    const wheelsCost = wheels * 100;
    const batteryCost = battery * 120;

    const total =
        arduinoCost +
        ultrasonicCost +
        motorCost +
        wheelsCost +
        batteryCost;

    document.getElementById("result").innerHTML = `
        <h3>${projectName}</h3>

        <div class="cost-line">
            <span>Arduino</span>
            <span>K${arduinoCost}</span>
        </div>

        <div class="cost-line">
            <span>Ultrasonic Sensor</span>
            <span>K${ultrasonicCost}</span>
        </div>

        <div class="cost-line">
            <span>Motor</span>
            <span>K${motorCost}</span>
        </div>

        <div class="cost-line">
            <span>Wheels</span>
            <span>K${wheelsCost}</span>
        </div>

        <div class="cost-line">
            <span>Battery</span>
            <span>K${batteryCost}</span>
        </div>

        <hr>

        <div class="total-line">
            <span>Total Cost</span>
            <span>K${total}</span>
        </div>
    `;
}


function resetCalculator() {

    document.getElementById("projectName").value = "";

    document.getElementById("arduino").value = 1;
    document.getElementById("ultrasonic").value = 1;
    document.getElementById("motor").value = 2;
    document.getElementById("wheels").value = 2;
    document.getElementById("battery").value = 1;

    document.getElementById("result").innerHTML = "";
}


document.getElementById("calculateButton").addEventListener(
    "click",
    calculateCost
);


document.getElementById("resetButton").addEventListener(
    "click",
    resetCalculator
);

document.getElementById("printButton").addEventListener(
    "click",
    function () {
        window.print();
    }
);