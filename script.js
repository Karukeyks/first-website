document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("open-letter-btn").addEventListener("click", function() {
        openLetter();
    });
});

function openLetter() {
    var letterContent = `
        <p>Hi My Habibi</p>
        <p>ehe happy valentine's dayyy Yannaaaaa!!</p>
        <p>I hope you're doing quite well today. Hope you recover soon, okay?</p>
        <p>I just want to say that I am most thankful to be accompanied by you throughout the months we've shared; you become the most important person in my life right now. I can't express rn how i deeply appreciate your existence in my life, you were the person that gave me hope that I once more can love indefinitely and unconditionally. you were the person who made me realise that its more worth to wait to a person you truly desire to be with, with the rest of my life. 
        I am very thankful for you for giving me so much love like you're the only one who made me feel this way kjuhdasasd. Please don't get tired of me, okay? If you do, then you can rest by my side. 
        I know that you don't like promises pero I PROMISE you this that you're the only person I would cherish and love, where I would hangout with and spend my days remaining in this world above. you are my most adored and loved individual and you know it. you are my sayang(love in indonesia), my padangat(love in bicol) and will always be my queen. as you've seen every side of me, and continue to figure out most of our attitudes and habits please be patient. also, don't worry much abt me okayy, i'm taking care of myself (I'm trying ToT), fixing myself and creating the better me than before. hehe always remember that every time I woke up, fell asleep and get home, you're the first person to comes up to my mind. I really love you myhoneybunchsugarplum and I hope we spend this lifetime happy together and create a lot of wonderful memories to cherish when we get old. you were my home and my life. it would be sad if i'm homeless and lifeless without you (grabe ang corny ko JHASFDHJGFASGD). i love you, Arianna Angela Credo, mahal na mahal kita, <33
    
    
    ps. sorry if i cant get you something rn huhuhu. Eto lang keri for now, i hope you like this letter kahit virtual lang :3
    
    
    </p>
    `;
    
    document.getElementById("letter-content").innerHTML = letterContent;
    document.getElementById("flowers").style.display = "block";
}

window.onload = function() {
    var backgroundAudio=document.getElementById("bgAudio");
    backgroundAudio.volume=0.2
;
    }

    

