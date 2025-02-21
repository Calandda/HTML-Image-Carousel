const imageCarousel = document.querySelector('.imageCarousel');

imageCarousel.addEventListener('click',(e)=>{
    currentAction = e.target.className;
    moveImageCarousel(currentAction);
});

function moveImageCarousel(currentAction){
    IMAGE_AMOUNT = 3;
    let CURRENT_AMOUNT;
    if(currentAction === 'pBack' || currentAction === 'pNext'){
        if(currentAction === 'pBack'){
            CURRENT_AMOUNT = getLessAmount(IMAGE_AMOUNT, imageCarousel.dataset.id);
        } else if(currentAction === 'pNext'){
            CURRENT_AMOUNT = getMoreAmount(IMAGE_AMOUNT, imageCarousel.dataset.id);
        }
        const  temp = document.querySelector('.imageCarousel'+imageCarousel.dataset.id);
        temp.style.display = 'none';
        const tempBack = document.querySelector('.imageCarousel'+ CURRENT_AMOUNT);
        tempBack.style.display = 'flex';
        const radioButton = document.querySelector('.radioButton'+CURRENT_AMOUNT);
        radioButton.checked = true;
        imageCarousel.dataset.id = CURRENT_AMOUNT;
    } 
}

function addRadioButton(){
    IMAGE_AMOUNT = 3;
    const divRadioButtons = document.querySelector('.divRadioButton');
    const imageCarousel = document.querySelector('.imageCarousel');
    for(let i = 1;i <= IMAGE_AMOUNT;i++){
        const divRadioButton = document.createElement('input');
        divRadioButton.setAttribute("type","radio");
        divRadioButton.classList.add('radioButton'+i);
        divRadioButton.name = 'divRadioButtons';
        if(i === 1){
            divRadioButton.checked = true;
        };
        divRadioButton.addEventListener('click',(e)=>{
            const tempRemove = document.querySelector('.imageCarousel'+imageCarousel.dataset.id);
            tempRemove.style.display = 'none';
            const temp = document.querySelector('.imageCarousel'+i);
            temp.style.display = 'flex';
            imageCarousel.dataset.id = i;
        });
        divRadioButtons.appendChild(divRadioButton);
    };
}

function getLessAmount(maxAmount,currentAmount){
    adjustedAmount = currentAmount - 1;
    if(adjustedAmount <= 0){
        adjustedAmount = maxAmount;
    }
    return(adjustedAmount);
}

function getMoreAmount(maxAmount,currentAmount){
    adjustedAmount = (parseInt(currentAmount)+1);
    if(adjustedAmount > maxAmount){
        adjustedAmount = adjustedAmount % maxAmount;
    }
    return(adjustedAmount);
}

addRadioButton();
setInterval(()=>{moveImageCarousel('pNext')},5000);