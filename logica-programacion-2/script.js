let tempC = prompt("Ingresa la temperatura en Celsius");
while(isNaN(parseFloat(tempC)) || tempC === ""){
    alert("Ingresa un número valido!");
    tempC = prompt("Ingresa la temperatura en Celsius");
}
console.log(`La temperatura que ingresaste es ${tempC}°C`)

tempC =  parseFloat(tempC);
let tempK = tempC + 273.15;
let tempF = (tempC * 9/5) + 32;


const body = document.querySelector("body");

const headline = document.createElement("h1")
headline.innerText = "Conversión de Temperaturas";

const textoTempC = document.createElement("h2")
textoTempC.innerText = "Tempertatura en Celsius: " + tempC;
console.log("Tempertatura en Celsius: " + tempC)

const textoTempK = document.createElement("h2")
textoTempK.innerText = "Temperatura en Kelvin: " + tempK;
console.log("Temperatura en Kelvin: " + tempK)


const textoTempF = document.createElement("h2")
textoTempF.innerText = "Temperatura en Fahrenheit: " + tempF;
console.log("Temperatura en Fahrenheit: " + tempF)


body.append(headline,textoTempC, textoTempK, textoTempF)


