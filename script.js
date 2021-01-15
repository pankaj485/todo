document.querySelector('.addButton').addEventListener('click', (event) => {
	event.preventDefault();

	let inputFromUser = document.querySelector('#newItem').value;
	let p = document.createElement('p');
	p.appendChild(document.createTextNode(inputFromUser));

	let div = document.createElement('div');
	div.classList.add('newItems');

	let addCheckbox = document.createElement('input');
	addCheckbox.name = 'checkBox';
	addCheckbox.type = 'checkbox';
	addCheckbox.classList.add('updateState');

	let image = document.createElement('img');
	image.classList.add('deleteIcon');
	image.src = './delete.svg';

	if (p.innerText.length === 0) {
		alert('NO Task ADDED !');
	} else {
		div.appendChild(image);
		div.appendChild(addCheckbox);
		div.appendChild(p);
		document.querySelector('.listItems').appendChild(div);
		document.querySelector('#newItem').value = '';
	}

	image.addEventListener('click', () => {
		div.parentNode.removeChild(div);
		// div.classList.add('removeNow');
		console.log('removed');
	});
});
