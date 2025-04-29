//Element
const startbtn=document.querySelector("#startbtn");
const submit=document.querySelector("#submit");
/*const endbtn=document.querySelector("#end");
const speekbtn=document.querySelector("#speak");
const submitbtn=document.querySelector("#submit");*/


//speech recognition
const SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition=new SpeechRecognition();

//sr start
recognition.onstart= function(){
    console.log("Voca active");
};

// sr continuous
recognition.continuous=true;

//sr stop
recognition.onend= function(){
    console.log("Voca deactivated");
};

//sr result
recognition.onresult=function(event){
    let current = event.resultIndex;
    let transcript =event.results[current][0].transcript;
    transcript=transcript.toLowerCase();
    console.log(transcript);
    //readOut(transcript);
    
    if(transcript.includes("hello")){
        readOut("Hello sir");
    }
    
    if(transcript.includes("open youtube")){
        readOut("Opening youtube sir");
        console.log(transcript);
        window.open("https://www.youtube.com/");
    }

    if(transcript.includes("open google")){
        readOut("Opening google sir");
        console.log(transcript);
        window.open("https://www.google.com/");
    }

    if(transcript.includes("open mails")){
        readOut("Opening mails sir");
        console.log(transcript);
        window.open("https://mail.google.com/mail/u/0/#inbox");
    }

    //google search.
    if(transcript.includes("search for")){
        readOut("here's your result");
        let input=transcript.split("");
        input.splice(0,11);
        input.pop();
        input=input.join("").split(" ").join("+");
        window.open('https://www.google.com/search?q='+input,'_blank');
    }


    //youtube search
    if(transcript.includes("play")){
        readOut("here's your result");
        let inputs=transcript.split("");
        inputs.splice(0,4);
        inputs.pop();
        inputs=inputs.join("").split(" ").join("+");
        window.open('https://www.youtube.com/results?search_query='+inputs);
    }


    //form filling
    //name
    if (transcript.startsWith("name")) {
        let input = transcript.slice(4).trim();
        input = input.replace(/[.,!?]$/, "");
        input = input.replace(/\s+/g, " ");
        // Convert each word to Title Case
        input = input.split(" ").map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(" ");
        console.log(input);
        document.getElementById("name").value = input;
    }

    //email
    if(transcript.startsWith("e-mail")){
        let input = transcript.slice(6).trim();
        if (input.endsWith(".")) {
            input = input.slice(0, -1);
        }
        console.log(input);
        document.getElementById("email").value = input;
    }
    
    //message
    if(transcript.startsWith("message")){
        let input = transcript.slice(7).trim();
        console.log(input);
        document.getElementById("message").value = input;
    }

    //submitting form or clicking button
    if(transcript.startsWith("click submit")){
        document.getElementById("submit").click();
    }

    //scrolling
    if(transcript.includes("scroll up")){
        window.scrollBy(0,200);
    }

    if(transcript.includes("scroll down")){
        window.scrollBy(0,-200);
    }

    //time
    if(transcript.includes("what's the time")){
        let data=new Date();
        let hrs = data.getHours();
        let min= data.getMinutes();
        let sec=data.getSeconds();
        readOut("the time is"+hrs+"past"+min+"minutes");
    }

    //date
    if(transcript.includes("what's the date")){
        let data=new Date();
        let date=data.getDate();
        let month=data.getMonth();
        const mon=["January","February","March","April","May","June","July","August","September","October","November","December"];
        let year=data.getFullYear();
        readOut("the date is"+date+mon[month]+year);
    }



    //clicking button by speech.
    //var stopbtn=document.getElementById("end");
    if(transcript.includes("stop")){
        readOut("Deactivating Voca");
        //stopbtn.click();
        recognition.stop();
    }
}

startbtn.addEventListener("click",()=>{
    readOut("Activating Voca");
    recognition.start();
});




/*endbtn.addEventListener("click",()=>{
    recognition.stop();
});*/




//voca speaking

function readOut(message){
    const speech=new SpeechSynthesisUtterance();

    //diffrent voice
    const allvoice = speechSynthesis.getVoices();
    speech.voice= allvoice[6];
    speech.text = message;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    console.log("Speeking out");
}
/*speekbtn.addEventListener("click" ,()=>{
    readOut("hello sir");
});*/
window.onload=function(){
    readOut("  ");
    readOut("Activating Voca");
    recognition.start();
};


// Control functions to pause/resume externally
window.pauseVoca = function () {
    recognition.stop();
};

window.resumeVoca = function () {
    recognition.start();
};