let friends = [];

function adicionar() {
    let friendInput = document.getElementById('nome-amigo');
    if(friendInput.value ==''){
        alert('Não é permitido um campo vazio, necessita ser realizado o informe do nome do amigo.');
        return;
    }
    if(friends.includes(friendInput.value)){
        alert('Nome já encontra-se presente na lista')
        return
    }
    let list = document.getElementById('lista-amigos');
    friends.push(friendInput.value.trim());
    if (list.textContent === '') {
        list.textContent = friendInput.value.trim();
    } else {
        list.textContent += ', ' + friendInput.value.trim();
    }
    friendInput.value = '';
    refreshList();
    refreshSort();
}

function sortear() {
    if(friends.length < 4){
        alert('Necessário pelo menos quatro usuários inseridos');
        return;
    }
    embaralha(friends);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < friends.length - 1; i++) {
        sorteio.innerHTML += friends[i] + '--->' + friends[i + 1] + '<br>';
    }
    sorteio.innerHTML += friends[friends.length - 1] + '--->' + friends[0] + '<br>';
}

function embaralha(lista) {
    for (let index = lista.length - 1; index > 0; index--) {
        const indiceAleatorio = Math.floor(Math.random() * (index + 1));
        [lista[index], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[index]];
    }
}

function deleteFriend(index){
    friends.splice(index, 1);
    refreshList();
    refreshSort();
}

function refreshSort(){
    let sort = document.getElementById('lista-sorteio');
    sort.innerHTML = '';
}

function refreshList(){
    let list = document.getElementById('lista-amigos');
    list.innerHTML = '';
    for (let i = 0; i < friends.length; i++){
        let paragrafo = document.createElement('p');
        paragrafo.textContent = friends[i];

        paragrafo.addEventListener('click', function(){
            deleteFriend(i);
        });
        list.appendChild(paragrafo);
    }
}
