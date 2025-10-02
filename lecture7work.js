// First Exercise
btn.onclick = function CreatMulti() {
    let input = Number(window.prompt("Select a Number"))
    for (let i = 0; i < 11; i++) {
        let item = document.createElement("li")
        item.innerText = `${input} * ${i} = ${input * i}`
        document.getElementById("ul").appendChild(item)
        
    }
}

//Second Exercise

//Random Button
function RandomColor() {
   return '#' + ( Math.floor(Math.random() * 2000000));
}
function changeAllColor() {
    let buttons = document.querySelectorAll ('#colorchange button')
    buttons.forEach(button => {
        button.style.color = RandomColor()
    });
}
document.getElementById('random').onclick = changeAllColor


//Reset Button
function resetButton() {
    let originalcolor = ['red', 'green', 'blue', 'orange', 'purple']
    let buttons = document.querySelectorAll ('#colorchange button')
    buttons.forEach((button, original) => {
        button.style.color = originalcolor[original];
    });
}
document.getElementById('reset').onclick = resetButton;
