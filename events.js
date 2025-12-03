function onClickButton(){
    alert('М-м-м-м..можно...еще разок?');
}

var counter = 0;

function onClickDiff(el) {
    counter++;
    el.innerHTML = "X " + counter ;
    // el.style.background = "rgba(254, 101, 223, 1)";
    // el.style.color = "rgba(251, 197, 246, 1)"

    el.style.cssText = "color: rgba(251, 197, 246, 1); border-radius: 5px; border: 0; font-size: 20px; background: rgba(254, 101, 223, 1)"
}

function onInput(el2){
    if (el2.value == "hello")
     alert ("И тебе приветик !!! ^^");
    console.log(el2.value);

}

function onHover(){
    alert ('Сашик лавкиии тяяя <33333')
}