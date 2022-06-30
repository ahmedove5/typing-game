let words = ["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","solo","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"];
let seconds = 30
let randomWords=[]
let countInput = []
let time = document.getElementById("timer")
let input = document.getElementById("input1")
let startBtn = document.getElementById("start")
let wordsPerSecond=document.getElementById("wps")
let para = document.getElementById("text-paragraph")
print = console.log
random = Math.ceil(Math.random()*99)


function myLoop() {         
  setTimeout(function() {   
    console.log(seconds);
    time.textContent = `${seconds}s`
    seconds--;
    if (seconds >= 0) {
      myLoop();
    } 
    if (seconds < 0 ){
        para.style.display ="none"
        input.className = "d-none"
        time.textContent = "Finish"
        startBtn.textContent = "Reload"
        startBtn
        startBtn.addEventListener("click", ()=>{
            window.location.reload()
        })
        let word = countInput.length
        let wps = (word*2)
        wordsPerSecond.innerHTML= `"${Math.ceil(wps)}" Word per Min\n(wpm)\n`
    }
  }, 1000)
}


document.getElementById("start").addEventListener("click",()=>{
    myLoop();
    randomWords=[];
    for (i=0;i<20;i++){
        generatedWords = words[random]
        randomWords.push(generatedWords)
        random = Math.ceil(Math.random()*99)
    } print(randomWords)
    para.innerHTML = randomWords.join(' ')
    input.className = "d-inline"
    input.focus()
    print(para.textContent)
})


input.addEventListener("keydown",(e)=>{
    if (e.keyCode === 32){
        if (input.value.toLowerCase() == randomWords[0]){
            del = randomWords.shift()
            countInput.push(del)
            print(randomWords)
            input.value = ""
            e.preventDefault()
            para.innerHTML = randomWords.join(' ')
            if (randomWords.length == 0){
                for (i=0;i<20;i++){
                    generatedWords = words[random]
                    randomWords.push(generatedWords)
                    random = Math.ceil(Math.random()*99)
                } print(randomWords)
                para.innerHTML = randomWords.join(' ')
                print(para.textContent)
            }
    }}
})