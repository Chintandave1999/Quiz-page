const firstque = document.getElementById("que");
const options = document.getElementById("opt");
const next = document.getElementById("nxt");
const starter = document.getElementById('start');
const mainpage = document.getElementById("main");
const score = document.querySelector(".score");
const confirm = document.getElementById("confirm");
const answer = document.getElementById("ans");
const timeleft1 = document.getElementById("timeleft");

let allque = [
    {
        que: "( 1 ) Which is not valid data type in javascript ?",
        option1: "Undefined",
        option2: "Boolean",
        option3: "Float",
        option4: "Number",
        ans: "Float",
        fans: "c",
    },

    {
        que: " ( 2 ) Which type of language is javasript ?",
        option1: "Programming",
        option2: "Scripting",
        option3: "Markup",
        option4: "None of the above",
        ans: "Scripting",
        fans: "b",

    },

    {
        que: "( 3 ) Originl Name of javascipt is ?",
        option1: "Mocha",
        option2: "Livescript",
        option3: "Escript",
        option4: "Javascript",
        ans: "Mocha",
        fans: "a",

    },

    {
        que: "( 4 ) Which one is Ternary Operator ?",
        option1: "?*",
        option2: "?:",
        option3: ">?",
        option4: "<",
        ans: "?:",
        fans: "b",

    },

    {
        que: "( 5 ) Who develop react.js ?",
        option1: "Apple",
        option2: "Facebook",
        option3: "Twitter",
        option4: "Google",
        ans: "Facebook",
        fans: "b",

    },

    {
        que: "( 6 ) Who is father of react.js ?",
        option1: "Jordan mike",
        option2: "Jordan walke",
        option3: "Nile",
        option4: "Nike john",
        ans: "Jordan walke",
        fans: "b",

    },

    {
        que: "( 7 ) Everything in react is ?",
        option1: "Components",
        option2: "Model",
        option3: "Method",
        option4: "Package",
        ans: "Components",
        fans: "a",

    },

    {
        que: "( 8 ) What is state in react ?",
        option1: "A permenant storage",
        option2: "Internal storage of component",
        option3: "Both A and B",
        option4: "None of the above",
        ans: "Internal storage of component",
        fans: "b",

    },

    {
        que: "( 9 ) Must API for every ReactJs component ?",
        option1: "Seinitialcomponent",
        option2: "Rendercomponent",
        option3: "render",
        option4: "All of the above",
        ans: "Rendercomponent",
        fans: "b",

    },
    {
        que: "( 10 ) Father of AngualrJs ?",
        option1: "Igor Minor",
        option2: "Misko Hevery",
        option3: "Brad Green",
        option4: "Gausling",
        ans: "Misko Hevery",
        fans: "b",

    },
    /*{
        que:"( 11 ) Which sign is used as prefix for the built-in objects in AngularJs  ?",
        option1:"$",
        option2:"#",
        option3: "@",
        option4: "*",
        ans:"$",
        fans:"a",

    }*/
    {
        que: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        ans: "",
        fans: "",

    }
]


let currentque = parseInt(0);
let finalscore = 0;





let str = starter.addEventListener("click", startquiz);
function startquiz() {
    starter.style.opacity = "0%";
    mainpage.style.opacity = "100%";
    return queans(currentque);

}

confirm.addEventListener("click", check);
function check() {
    //console.log(answer.value);
    //answer.value = "";
    answer.setAttribute("readonly","true");
    
    if (allque[currentque].fans == answer.value) {
        finalscore++;
        score.innerHTML = finalscore;
        answer.value = "";
        
        
        //console.log(finalscore);
    }
}

let timechange;
const queans = function rotation(currentque) {
    firstque.innerHTML = allque[currentque].que;
    const test2 = Object.values(allque[currentque]).slice(1, 5);

    let list = "";
    let abc = ["A", "B", "C", "D"];

    test2.forEach((element, index) => { list += `( ${abc[index]} )` + " " + " " + element + '</br>' });
    options.innerHTML = list;
    
    testend();
    t=16;
    //clearInterval(timechange);
    //console.log(currentque);
    if (currentque ==10) {
        
        starter.style.opacity = "100%";
        mainpage.style.opacity = "0%";
        starter.innerText = `Your Score is ${finalscore}`;
        starter.removeEventListener("click", startquiz)
    

    }
    

}



let testend=function(){

    let t=11;
    timechange = setInterval(abc = () => {
   //t >= 0 ? t-- : t;
   t--;
   t==0? clearInterval(timechange):t;
   //t>0? t-- : clearInterval(timechange);
   timeleft1.innerText = t;

    if(t==0){
     answer.value = "";
     answer.removeAttribute("readonly","true");
    currentque++;
    queans(currentque);
    t=11;
    if (allque[currentque].fans == answer.value) {
        finalscore++;
        score.innerHTML = finalscore;
        answer.value = "";
    }

   }

}, 1000);}



/**next.addEventListener("click", newque);
function newque() {
    currentque++;
    answer.value = "";
    
    if (currentque < 10) {
        queans(currentque);
        clearInterval(timechange);
        //t=16;
    

    } else {
        starter.style.opacity = "100%";
        mainpage.style.opacity = "0%";
        starter.innerText = `Your Score is ${finalscore}`;
        starter.removeEventListener("click", startquiz)
    }


}**/






