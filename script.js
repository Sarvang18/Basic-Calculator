const buttons=document.querySelectorAll('button')
const display=document.querySelector('input')
const decimalBTN=document.querySelector('.decimal')

buttons.forEach((btn)=>{
    btn.addEventListener('click',(evt)=>{

        const thatBTN=evt.target.innerText
        if (thatBTN == '='){
            let ans=eval(display.value)
            console.log(ans,typeof(ans));
            display.value=(ans)
        }

        else if(thatBTN == 'X'){
            length=display.value.length
            display.value=display.value.slice(0,length-1)
        }

        else if(thatBTN == 'Clear'){
            display.value=''
            decimalBTN.disabled=false;
        }
        
        else{
            console.log(thatBTN);
            display.value+=thatBTN
        }
        
        let idx=display.value.indexOf('.')
        if(idx != -1){
            
            decimalBTN.disabled=true;
            decimalBTN.style.backgroundColor='#f0f0f0'
            decimalBTN.style.color='#000000'
            decimalBTN.style.border='1px solid black'
        }

    })
})
