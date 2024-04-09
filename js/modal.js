const cardOption = Array.from(document.querySelectorAll('.card-option-footer button')).slice(0,2);
const modal = document.getElementById('modal');
const shadow = document.getElementById('shadow');

cardOption.forEach(button => {
    button.addEventListener('click', function(e){
        console.log(e.target)
        modal.style.display = 'flex';
        shadow.style.display = 'block';
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    })
});

const closeModal = document.getElementById('close-modal');

const modalContainer = ()=>{
    modal.style.display = 'none';
    shadow.style.display = 'none';
}
closeModal.addEventListener('click', modalContainer);

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const selectCheckContainer = this.closest('.select-check');
        const form = selectCheckContainer.querySelector('form');
        document.querySelectorAll('.select-check form').forEach(otherForm => {
            if (otherForm !== form) {
                otherForm.style.display = 'none';
                const checkboxId = otherForm.previousElementSibling.querySelector('input[type="checkbox"]').id;
                document.getElementById(checkboxId).checked = false;
            }
        });
        
        if (form) {
            form.style.display = this.checked ? 'flex' : 'none';
        }
    });
});

const inpuText = document.querySelectorAll('input[type="text"]');
inpuText.forEach(input => {
    input.addEventListener('input', function(e){
        let valor = e.target.value;
        valor = valor.replace(/\D/g, '');
        e.target.value = valor;
    })
});

const progress = document.getElementById('progress');
const inputSubmit = document.querySelectorAll('input[type="submit"]');
const support = document.getElementById('support');
const totalProgress = document.getElementById('total-progress');
inputSubmit.forEach(submit => {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const select = this.previousElementSibling;
        const inpuText = select.querySelector('input');
        const inputValue = parseInt(inpuText.value);
        inpuText.setAttribute('value', `${inputValue}`);
        let currentValue = parseInt(progress.value);
        progress.value = currentValue + inputValue;
        
        const formattedValue = progress.value.toLocaleString('es-ES', { maximumFractionDigits: 2 }).replace(/\./g, ',');
        totalProgress.textContent = `$${formattedValue}`;
        modal.style.display = "none";
        support.style.display ="flex";
    })
});

const gotIt = document.getElementById('got-it');
const closeGotIt = ()=>{
    shadow.style.display = "none";
    support.style.display = "none";
}
gotIt.addEventListener('click', closeGotIt);

const menuDesplegable = document.querySelector('.menu-desplegable');
const hamburger = document.querySelector('.hamburger');
const menuOpen = ()=>{
    const img = hamburger.firstElementChild;
    const imgSrc = img.getAttribute('src');
    if(imgSrc !== './images/icon-hamburger.svg'){
        img.setAttribute('src', './images/icon-hamburger.svg');
        menuDesplegable.style.display = "none";
        shadow.style.display = "none";
    }else{
        img.setAttribute('src', './images/icon-close-menu.svg');
        menuDesplegable.style.display = "block";
        shadow.style.display = "block";
    }
}
hamburger.addEventListener('click', menuOpen);