'use strict';
const info = {
    leftNumber: 0,
    rightNumber: 0,
    sign: "+",
    finalAnswer: 42
};

$("legend").click(function(event){
    event.stopPropagation();
    $(this).parent().toggleClass("clicked");
    switchDisplay();
});

$("h2").click(function(event){
    event.stopPropagation();
    $(".test").slideToggle("slow", function callback(){
    });
});

$("input[type='text']").keypress(function(event){
        if(event.which === 13 && $("#radio-1")["0"].checked){
            let headlineText = $(this).val();
        
            $("h2").text(headlineText);
        }
});

$(".reset-btn").click(function(event){
    event.stopPropagation();
    $("h2").text("Click me again, Please");
    $(".formula").text(" ");
    $(".result").text("Answer Shows Here");
    $(".leftBank").text("0");
});

$("#Math").find("button").not($(".equals")).click(function(){
    let mathInput = $(this).val();
    let updateFormula = $(".formula").text();
    if($(".formula").text()===" "){
        $(".formula").text("");
    } 
    $(".formula").text(updateFormula + mathInput);
});

$(".equals").click(function(){
        info.rightNumber = $(".formula").text();
        doMath();
        showMath();
});

$(".operator").click(function(){
    info.leftNumber = $(".formula").text();
    $(".leftBank").text(info.leftNumber);
    info.leftNumber = info.leftNumber.replace(/\D/g, " ");
    info.leftNumber.trim();
    info.sign = $(this).val();
    $(".formula").text(" ");
});

function doMath(){
    switch(info.sign){
        case "+":
        info.finalAnswer = Number(info.leftNumber) + Number(info.rightNumber);
        break;
        case "-":
        info.finalAnswer = Number(info.leftNumber) - Number(info.rightNumber);
        break;
        case "*":
        info.finalAnswer = Number(info.leftNumber) * Number(info.rightNumber);
        break;
        case "/":
        info.finalAnswer = Number(info.leftNumber) / Number(info.rightNumber);
        break;
        default:
        console.log("help");
    }
    return;
}
    
function showMath(){
    $(".result").text(info.finalAnswer);
    $(".formula").text(info.finalAnswer);
    $(".leftBank").text(info.finalAnswer);
    return;
}

function switchDisplay(){
    if ($(".thumbnail").css("display")==="none") {
        $(".thumbnail").css("display", "block");
    } else {
        $(".thumbnail").css("display", "none");
    }
}
