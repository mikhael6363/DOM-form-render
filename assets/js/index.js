'use strict';

/*
  Задание:
  0. Создать массив в глоб. переменной, к которому будем обращаться
  1. При каждой отправке формы -> пушить значение input в массив.
  2. Очищать инпут при каждом сабмите формы.
  3. Рендерить (отображать) на странице, то что было введено в форму.
  4. Валидация значения в инпуте при сабмите формы.
  5. Кнопка удаления у li - удаляет элемент со страницы и его значение из массива.
*/

const state = [];
const form = document.getElementById('root-form');
const list = document.getElementById('root-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const {
    target,
    target: {
      todo: { value },
    },
  } = e;
  const inputValidValue = value.trim();
  if (inputValidValue) {
    state.push(inputValidValue);
    list.append(createListElement(inputValidValue));
  }
  target.reset();
});

function createListElement(inputValue) {
  const li = document.createElement('li');
  const liContent = document.createTextNode(inputValue);

  li.append(liContent, createDeleteBtn(deleteHandler.bind(li), inputValue));
  return li;
}

function createDeleteBtn(onDelete, inputValue) {
  const btn = document.createElement('button');
  btn.dataset.value = inputValue;
  btn.append(document.createTextNode('X'));
  btn.addEventListener('click', onDelete);
  return btn;
}

function deleteHandler({
  target: {
    dataset: { value },
  },
}) {
  this.remove();
  state.splice(state.indexOf(value), 1);
}
