# Frontend Mentor - Interactive rating component solution

Esta é uma solução para o [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). 
Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Layout do projeto em tela de Desktop/Notebook/Tablet/Mobile.

<div align="center">

  <img src="https://github.com/HumbertoFox/repository/assets/126817628/60592ab0-382e-4279-a9e8-16cd5ad8cd0f" width="400px"/>

</div>

### O que aprendi

```Js
function selectButtonList(){
    const liSelected = document.querySelector('.selected');
    if(!liSelected) return alert("Selecione uma opção de 1 a 5!");
    const selectedLitext = liSelected.textContent;
    selectSectionStart.style.display = 'none';
    selectSectionEnd.style.display = 'flex';
    selectSpanSectionEnd.innerText = `${selectedLitext}`;
};
```

### Construído com

- Marcação semântica HTML5
- Propriedades personalizadas CSS
- Caixa flexível
- Js

## Desenvolvido em:

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="30px"/>
</div>
