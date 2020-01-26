
const button = $("button");
const pa = $("#answer");    
const pd = $("#demonstration");

let textM = new Demonstration(".text() can set a new text or return one:", "this text has been changed!");
let htmlM = new Demonstration(".html() returns the element's html or set a new one!", "<button>I'm a button now, click me!</button>");
let attrM = new Demonstration(".attr() returns the attr of the first element or set attr's for all matched elements: ", { style: "color: red"});    
let cssM = new Demonstration(".css() sets a new property ", { color: "blue"});    
let valM = new Demonstration(".val() get or set a value from an input:","Choose an option form the toggle down:");  
let addClassM = new Demonstration(".addClass() sets a new class for the element:","tester");  
let removeClassM = new Demonstration(".removeClass() removes a class for the element:","tester");
let toggleClassM = new Demonstration(".toggleClass() toggle classes for the element:","tester");


//========================================//
/*
    buttonHandler
*/
//========================================//
function Demonstration(pa, pd){
    this.pa = pa;
    this.pd = pd;
    }


export default function buttonHandler(){
    /* 
                this function will listen to the 7 buttons, 
                Each button will demonstrate a different JQuery Method!
                We will start with the .text()  
            */
           button.each(function( i ) {
            $( this ).on("click", ()=>{
                if($( this ).hasClass("btn1")){
                    pa.text(textM.pa);
                    pd.text(textM.pd);
                }
                else if($( this ).hasClass("btn2")){
                    pa.text(htmlM.pa);
                    pd.html(htmlM.pd);
                }
                else if($( this ).hasClass("btn3")){
                    pd.html("<p>I added a new style attribute with the color Red!</p>");
                    pa.text(attrM.pa);
                    pd.attr(attrM.pd);
                }
                else if($( this ).hasClass("btn4")){
                    pa.text(cssM.pa);
                    pd.css(cssM.pd);
                }
                else if($( this ).hasClass("btn5")){
                    pa.text(valM.pa);   
                    pd.text(valM.pd);
                    $('#inpt').val("A new value has been set!");
                    $('select').on("change", ()=>{
                        pd.text($('select').val());
                    })
                }
                else if($( this ).hasClass("btn6")){
                    pa.text(addClassM.pa);
                    pd.addClass(addClassM.pd);
                }
                else if($( this ).hasClass("btn7")){
                    pa.text(removeClassM.pa);
                    pd.removeClass(removeClassM.pd);
                }
                else if($( this ).hasClass("btn8")){
                    pa.text(toggleClassM.pa);
                    pd.toggleClass(toggleClassM.pd);
                }
            });
    });

}



