const selectLis = document.querySelectorAll('.section-ol li');
const selectButton = document.getElementById('id-btn-env');
const selectSectionEnd = document.querySelector('.section-end');
const selectSectionStart = document.querySelector('.section-start');
const selectSpanSectionEnd = document.getElementById('span-text-add');

for (const iterator of selectLis) {
    iterator.addEventListener('click', selectLiActiva);
};

selectButton.addEventListener('click', selectButtonList);

function selectLiActiva(){
    selectLis.forEach((selectLi) => {
        selectLi.classList.remove('selected');
    });
    this.classList.add('selected');
};

function selectButtonList(){
    const liSelected = document.querySelector('.selected');
    if(!liSelected) return alert("Selecione uma opção de 1 a 5!");
    const selectedLitext = liSelected.textContent;
    selectSectionStart.style.display = 'none';
    selectSectionEnd.style.display = 'flex';
    selectSpanSectionEnd.innerText = `${selectedLitext}`;
};