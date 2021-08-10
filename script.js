const imgPlholder = document.querySelector('#img-placeholder');
const imgButtonGenerate = document.querySelector('#img-generate');
const imgButtonSearch = document.querySelector('#img-search');
const imgWish = document.querySelector('#img-wish');

imgButtonGenerate.addEventListener('click', () => {
	fetch('https://picsum.photos/200').then(response => {
		console.log(response.url);
		imgPlholder.src = response.url;
	});
});

imgButtonSearch.addEventListener('click', () => {
	console.log(imgWish.value);
	// fetch('https://picsum.photos/200').then(response => {
	// 	console.log(response.url);
	// 	imgPlholder.src = response.url;
	// });
	fetch(`https://source.unsplash.com/weekly?${imgWish.value}`)
		.then(response => {
			if (!response.ok) throw new Error(response.status);
			console.log(response);
			console.log(response.url);
			imgPlholder.src = response.url;
		})
		.catch(error => "Couldn't load image");
});
