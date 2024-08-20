function addToTextArea(key.selector){
    const textArea=document.qureyselector('selector');
    if(textArea){
        if(key==='Backspace'){
            textArea.value=textArea.value.slice(0,-1);
        }else if(key==='Enter'){
            textArea.value=textArea.value.toUpperCase();
        }
        else{
            textArea.value+=key
        }
    }
}


const remoteButton=document.querySelector('.remote-btn');
let clickCount=0;
remoteButton.addEventListener('click',()=>{
    if(clickCount===1){
        handleRemoteClick();
    }else if(clickCount===2){
        handleRemoteDOubleClick();
        clickCount=0;
    }setTimeout(()=>{
        clickCount=0;
    },300);                                                                      
})


function focusPreviousTextArea(){
    const previousTextArea=document.querySelector('.to-mail');
    if(previousTextArea){
        typingInSubject=false;
        previousTextArea.focus();
    }
}

function focusNextTextArea(){
    const nextTextArea=document.querySelector('.subject');
    if( nextTextArea){
        typingInSubject=True;
        nextTextArea.focus();
    }
}


function undoFromTextArea(){
    const textArea=document.querySelector('.subject');
    if(nextTextArea){
        typingInSubject=true;
        nextTextArea.focus;
    }
}

function startTraversal(){
    clearInterval(intervalId);
    clearTimeout(inactivityTimeoutId);
    updateHighlight();
    intervalId=setInterval(()=>{
        currentKeyImdex=(currentKeyImdex+1)%keys.length;
        updateHighlight();
        intervalId=setInterval(()=>{
            currentKeyImdex=(currentKeyImdex+1)%keys.length;
            updateHighlight();

        },500)
    })
}



function handleRemoteClick



handleRemoteClick(){
    clearTimerout(clickCount);
    clickTimeout=setTimeout(() => {
        clearInterval(intervalId);
        selectedKey=keys[currentKeyImdex].textContent.trim();
        if (selected)
    }, 300);
}


const keys=dcoument.querySlecetorAll('.key');
let currentKeyIndex=0;
let intervalId;
let selectedKey='';
let clickTimeoutId;
let typingInSubject=false;
let inactivityTimeoutId;


const shiftKey=dcoument.querySelector(.'shiftkeys');
shiftKeys