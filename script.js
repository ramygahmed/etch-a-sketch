let i = 0;
let x = 0;

const container = document.getElementById("container")
const settings = document.getElementById("settings");
const colors = document.getElementById('colors');

// let redColor = document.createElement('button');
// let greenColor = document.createElement('button');
// let blueColor = document.createElement('button');
// let rgbColor = document.createElement('button');
// redColor.style.backgroundColor = 'red';
// greenColor.style.backgroundColor = 'green';
// blueColor.style.backgroundColor = 'blue';
// rgbColor.style.backgroundColor = 'linear-gradient(90deg, rgba(180,58,58,1) 0%, rgba(185,182,45,1) 22%, rgba(43,253,29,1) 50%, rgba(54,246,252,1) 81%, rgba(69,80,252,1) 100%);'

// colors.appendChild(redColor)
// colors.appendChild(greenColor)
// colors.appendChild(blueColor)
// colors.appendChild(rgbColor)

let colorBtn = colors.querySelectorAll('button')
colorBtn.forEach(element => {
    element.style.width = '20px';
    element.style.height = '20px';
});

let eraser = document.createElement('button');
eraser.textContent = 'Eraser';
settings.appendChild(eraser)

let coloring = document.createElement('button');
coloring.textContent = 'Paint';
settings.appendChild(coloring)

let reset = document.createElement('button');
reset.textContent = 'Reset';
settings.appendChild(reset)

settings.style.width = '500px'
const settingBtn = settings.querySelectorAll('button');
settingBtn.forEach(element => {
    element.style.padding = '10px';
    element.style.margin = '10px';
    element.style.width = '33%'

});


let slider = document.getElementById("myRange");
let output = document.createElement("h3");
let sliderContainer = document.getElementById('slider');
sliderContainer.appendChild(output);
sliderContainer.style.display = 'flex';
sliderContainer.style.flexDirection = 'column';
sliderContainer.style.alignItems = 'center';
output.textContent = `Grid Size = ${slider.value} x ${slider.value}`; // Display the default slider value
let boxNum= slider.value
slider.oninput = function() {
    output.textContent = `Grid Size = ${this.value} x ${this.value}`
    createDivs(this.value)
    boxNum = this.value;
}
createDivs(boxNum)
const containerDivs = document.getElementById("container").children;
i = 0; x = 0;
reset.addEventListener('click',e=>{
    container.innerHTML = '';
    createDivs(slider.value);
});


coloring.addEventListener('click',e=>{
    colorDivs('purple');
});

eraser.addEventListener('click',e=>{
    colorDivs('white');
});



function colorDivs(color){
    i = 0;
    while(i<boxNum*boxNum){
        containerDivs[i].addEventListener('mouseenter',function(e){
        e.target.style.backgroundColor = color;
        })
    i++;}
}
function createDivs(boxNum){
    container.innerHTML = "";
    let x = 0;
    let i = 0;
    while (x<boxNum){ //loop to create divs based on number of boxes
        while (i<boxNum) {
            let newDiv = document.createElement('div');
            newDiv.style.backgroundColor = "white";
            newDiv.style.width = `${500/boxNum}px`;
            newDiv.style.height = `${500/boxNum}px`;
            container.appendChild(newDiv);
            i++;
    }
    x++;
    i=0;
    }
}