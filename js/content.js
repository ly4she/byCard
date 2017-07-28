fetch('https://gist.githubusercontent.com/Kirit0s/53a9820793c1cdf22a9bfb1b71dbc84d/raw/14c5ee2ff6f9fef5e5dbd19b93c28ec45be32791/db')
.then(response => response.json())
.then(data => {
	data.forEach((element) => {
		let blockToAdd = `<div class="films__item">
			<div class="films__date">
				${element.dateStart}
			</div>
			<div class="films__title">
				${element.title}
			</div>
			<div class="films__image">
				<img src="${element.image}" alt="">
			</div>
			<div class="films__subscribe">
				<button class="films__button">подписаться</button>
			</div>
		</div>`;
		var i = 1;
		document.querySelector('.films').insertAdjacentHTML('beforeend', blockToAdd);
		
	})
})

