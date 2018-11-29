const shortLinkForm = document.getElementById('js-short-link-form');
const shortLinkBtn = document.getElementById('js-short-link-btn');
const shortLinkInput = document.getElementById('js-input-link');

const shortLinkClose = document.getElementById('js-input-close');

let copyLinkMode = false;

shortLinkForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (copyLinkMode) {
        copyLink(shortLinkInput);
        return;
    }

    if (isValidLink(shortLinkInput.value)) {

        copyLinkMode = true;
        makeTransparent(shortLinkBtn);
        makeTransparent(shortLinkInput);

        const intervalId = setInterval(() => {
            resetShorBtnStyle(shortLinkBtn, 'Copiar');
            resetShortLinkClose(shortLinkClose)

            resetInputStyle(shortLinkInput, getShorterLink());

            clearInterval(intervalId);

        }, 500);
    }


});


shortLinkClose.addEventListener('click', (event) => {
    copyLinkMode = false;
    resetShorBtnStyle(shortLinkBtn, 'encurtar');
    resetInputStyle(shortLinkInput, '')
    resetShortLinkClose(shortLinkClose)
});







const isValidLink = (link) => link !== undefined && link !== null;

const makeTransparent = (element) => element.style.color = 'transparent';


const resetShorBtnStyle = (btnEl, label) => {
    btnEl.innerHTML = label;
    btnEl.style.color = '#fff';
    btnEl.style.padding = "1.25rem 2.8rem";
};

const resetInputStyle = (inputEl, newLinkValue) => {
    inputEl.style.color = '#fff';
    inputEl.value = newLinkValue;
};

const resetShortLinkClose = (shortLinkClose) => {
    toggleCssClass(shortLinkClose, 'short-form__input-close--shown')
    toggleCssClass(shortLinkClose, 'short-form__input-close--hidden')

}

const toggleCssClass = (element, className) => element.classList.toggle(className);

const getShorterLink = () => {
    const newLink = createLink();
    return `http://chr.dc/${newLink}`
}

const createLink = () => {
    return Math.random().toString(36).substring(7);
};

const copyLink = (shortLinkInput) => {
    shortLinkInput.select();
    document.execCommand('copy')
}