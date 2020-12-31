const container = document.querySelector('.products');
const renderProducts = async () => {
	let url = 'http://localhost:3000/products';

	const res = await fetch(url);

	const products = await res.json();
	console.log(products);

	let template = '';
	products.forEach((product) => {
		template += `
        <div class="product">
		<a class ="p-5" href="/details.html">
			<h2 class="title p-5">${product.name}</h2>
		</a>
		
		<img src="data/${product.image}" alt="${product.name}">
		
		<p class ="p-5">${product.description.slice(0, 100)}</p>
		
        <p class ="p-5">${product.waranty}</p>
        <p class ="p-5">R ${product.price}</p>
		<a class ="details-link" href="/details.html?id=${product.id}"> read more...</a>
		</div>
        `;
	});
	container.innerHTML = template;
};

window.addEventListener('DOMContentLoaded', () => renderProducts());
