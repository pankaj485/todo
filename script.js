document.querySelector('.addButton').addEventListener('click', (event) => {
	event.preventDefault();

	let inputFromUser = document.querySelector('#newItem').value;
	let p = document.createElement('p');
	p.appendChild(document.createTextNode(inputFromUser));

	let div = document.createElement('div');
	div.classList.add('newItems');

	let addCheckbox = document.createElement('input');
	addCheckbox.type = 'checkbox';
	addCheckbox.classList.add('updateState');

	if (p.innerText.length === 0) {
		alert('NO Task ADDED !');
	} else {
		div.appendChild(addCheckbox);
		div.appendChild(p);
		document.querySelector('.listItems').appendChild(div);
		document.querySelector('#newItem').value = '';
	}
});
