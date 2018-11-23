const shortLinkForm = document.getElementById('js-short-link-form');
const shortLinkBtn = document.getElementById('js-short-link-btn');
const shortLinkInput = document.getElementById('js-input-link');


shortLinkForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(shortLinkInput.value);

    
    shortLinkBtn.style.color = 'transparent';
    
    setInterval(()=>{
        shortLinkBtn.innerHTML = 'Copiar';
        shortLinkBtn.style.color = '#fff';
        shortLinkBtn.style.padding = "1.25rem 2.8rem";

    }, 500)
    

})