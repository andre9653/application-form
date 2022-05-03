/* eslint-disable no-undef */
function selectOption() {
  const buttons = document.querySelectorAll('.container button');
  const select = document.querySelector('select');
  const textArea = document.querySelector('textarea');
  buttons.forEach((button) => {
    button.addEventListener('click', ({ target }) => {
      const storage = JSON.parse(localStorage.forms);
      const keyForm = target.parentNode.classList[1];
      const selected = document.querySelector('.selected');
      if (selected) selected.classList.remove('selected');
      storage[keyForm] = target.innerText;
      localStorage.forms = JSON.stringify(storage, 2);
      target.classList.toggle('selected');
    });
  });
  select.addEventListener('click', ({ target }) => {
    const storage = JSON.parse(localStorage.forms);
    const keyForm = target.parentNode.classList[1];
    storage[keyForm] = target.value;
    localStorage.forms = JSON.stringify(storage, 2);
  });
  textArea.addEventListener('keyup', ({ target }) => {
    const storage = JSON.parse(localStorage.forms);
    const keyForm = target.parentNode.classList[1];
    const textValue = document.querySelector('textarea').value;
    const count = document.querySelector('.count');
    count.innerText = textValue.length;
    storage[keyForm] = textValue;
    localStorage.forms = JSON.stringify(storage, 2);
  });
}

// eslint-disable-next-line no-undef
const formsObject = {
  pergunta1: '',
  pergunta2: '',
  pergunta3: '',
  pergunta4: '',
};

window.onload = () => {
  if (!localStorage.forms) localStorage.setItem('forms', JSON.stringify(formsObject, 2));
  selectOption();
};
