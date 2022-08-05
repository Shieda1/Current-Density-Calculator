// https://calculator.swiftutors.com/current-density-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const currentDensityRadio = document.getElementById('currentDensityRadio');
const currentRadio = document.getElementById('currentRadio');
const areaRadio = document.getElementById('areaRadio');

let currentDensity;
let current = v1;
let area = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

currentDensityRadio.addEventListener('click', function() {
  variable1.textContent = '(I) Current (amps)';
  variable2.textContent = '(A) Area (m²)';
  current = v1;
  area = v2;
  result.textContent = '';
});

currentRadio.addEventListener('click', function() {
  variable1.textContent = '(J) Current Density (amps/m²)';
  variable2.textContent = '(A) Area (m²)';
  currentDensity = v1;
  area = v2;
  result.textContent = '';
});

areaRadio.addEventListener('click', function() {
  variable1.textContent = '(J) Current Density (amps/m²)';
  variable2.textContent = '(I) Current (amps)';
  currentDensity = v1;
  current = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(currentDensityRadio.checked)
    result.textContent = `Current Density = ${computeCurrentDensity().toFixed(2)} amps/m²`;

  else if(currentRadio.checked)
    result.textContent = `Current = ${computeCurrent().toFixed(2)} amps`;

  else if(areaRadio.checked)
    result.textContent = `Area = ${computeArea().toFixed(2)} m²`;
})

// calculation

function computeCurrentDensity() {
  return Number(current.value) / Number(area.value);
}

function computeCurrent() {
  return Number(currentDensity.value) * Number(area.value);
}

function computeArea() {
  return Number(current.value) / Number(currentDensity.value);
}