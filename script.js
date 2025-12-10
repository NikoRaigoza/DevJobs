// const resultadosList = document.querySelector('.resultados__container');

// resultadosList?.addEventListener('click', (event) => {
//     const element = event.target;

//     if (element.classList.contains('resultados__article-btn')) {
//         element.textContent = 'Aplicado!';
//         element.classList.add('is-applied');
//         element.disabled = true;
//         console.log('Aplicado');
//     }
// });

const tecnoSelect = document.querySelector('.filters__list-select');



tecnoSelect.addEventListener('change', (event) => {
    const tecnoValue = event.target.value;

    const tecnoMatched = document.querySelectorAll(`[data-tecnology="${tecnoValue}"]`); 

    if (tecnoValue === tecnoMatched) {
        
    }
})