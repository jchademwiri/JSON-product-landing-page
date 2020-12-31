const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');

const renderDetails = async () => {
	const res = await fetch('http://localhost:3000/products/' + id);
	const product = await res.json();
	// let template = '';
	let template = `
       
        <h2 class="title p-5">${product.name}</h2>
        <img src="data/${product.image}" alt="${product.name}">
        <p class ="p-5">${product.description}</p>
        <p class ="p-5">Waranty: ${product.waranty}</p>
        <p class ="p-5">Price : R ${product.price}</p>
		
        `;
	container.innerHTML = template;
};

window.addEventListener('DOMContentLoaded', () => renderDetails());
