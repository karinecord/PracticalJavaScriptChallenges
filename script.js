// 1. Seleciona os elementos do HTML
let input = document.querySelector(".addItem input[type='text']");
let button = document.querySelector(".addItem button");
let listContainer = document.getElementById("listContainer");
const deleteIcon = document.querySelector('.delete-icon');

// fecha o alert ao clicar no X
deleteIcon.addEventListener('click', () => {
  document.querySelector('.alert').style.display = 'none';
});

// 2. Escuta o clique no botão
button.addEventListener('click', () => {

  // 3. Não faz nada se o input estiver vazio
  if (input.value.trim() === "") {
    input.classList.add("error");
    setTimeout(() => input.classList.remove("error"), 2000);
    return;
  }

  // 4. Cria um novo div com a classe "list"
  const newDiv = document.createElement("div");
  newDiv.classList.add("list");

  // cria o checkbox
  const newCheck = document.createElement("input");
  newCheck.type = "checkbox";

  // adiciona o remove
  const newRemoveButton = document.createElement("button");
  newRemoveButton.type = "button";
  newRemoveButton.classList.add("removeButton");
  newRemoveButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M16.25 4.58325L15.7336 12.9375C15.6016 15.0719 15.5357 16.1392 15.0007 16.9065C14.7361 17.2858 14.3956 17.606 14.0006 17.8466C13.2017 18.3333 12.1325 18.3333 9.99392 18.3333C7.8526 18.3333 6.78192 18.3333 5.98254 17.8457C5.58733 17.6047 5.24667 17.2839 4.98223 16.9039C4.4474 16.1354 4.38287 15.0667 4.25384 12.9293L3.75 4.58325" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
    <path d="M2.5 4.58342H17.5M13.3797 4.58342L12.8109 3.40986C12.433 2.6303 12.244 2.24051 11.9181 1.99742C11.8458 1.9435 11.7693 1.89553 11.6892 1.854C11.3283 1.66675 10.8951 1.66675 10.0287 1.66675C9.14067 1.66675 8.69667 1.66675 8.32973 1.86185C8.24842 1.90509 8.17082 1.955 8.09774 2.01106C7.76803 2.264 7.58386 2.66804 7.21551 3.47613L6.71077 4.58342" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
    <path d="M7.91687 13.75V8.75" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
    <path d="M12.0831 13.75V8.75" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
  </svg>`;
  newRemoveButton.addEventListener('click', () => {
    newDiv.remove();
    const alert = document.querySelector('.alert');
    alert.style.display = 'flex';
    setTimeout(() => {
      alert.style.display = 'none';
    }, 3000);
  });

  // cria o label com o texto digitado
  const newLabel = document.createElement("label");
  newLabel.textContent = input.value;

  // coloca checkbox e label dentro do div
  newDiv.appendChild(newCheck);
  newDiv.appendChild(newLabel);
  newDiv.appendChild(newRemoveButton);

  // 5. Insere o novo div dentro do container da lista
  listContainer.appendChild(newDiv);

  // 6. Limpa o input
  input.value = "";
});
