//SNSシェアボタン,ページトップボタンにバグあり。要修正



const nowURL = window.location.href;
const content = document.querySelector('.content');
const contentHeader = () => {
	fetch('/common-tags/header.html')
	.then(response => {
		return response.text();
	})
	.then(data => {
		content.insertAdjacentHTML('beforebegin', data);
	})
	.then(() => {
		const headerMenuBtn = document.querySelector('.headerMenuBtn');
		const headerMenu = document.querySelector('#headerMenu');
		headerMenuBtn.addEventListener('click', () => {
			headerMenuBtn.classList.toggle('headerMenuBtnOpen');
			headerMenu.classList.toggle('headerMenuOpen');
		});
		document.addEventListener('click', (e) => {
			if(!e.target.closest('.headerMenuBtn') && !e.target.closest('#headerMenu')){
				headerMenuBtn.classList.remove('headerMenuBtnOpen');
				headerMenu.classList.remove('headerMenuOpen')
			}
		});
		const share = document.querySelector('.share');
		const shareMenuBtn = document.querySelector('.shareMenuBtn');
		const shareMenu = document.querySelector('.shareMenu');
		shareMenuBtn.addEventListener('click', () => {
			shareMenu.classList.toggle('shareMenuOpen');
		});
		document.addEventListener('click', (e) => {
			if(!e.target.closest('.shareMenuBtn') && !e.target.closest('.shareMenu')){
				shareMenu.classList.remove('shareMenuOpen');
			}
		});
	})
}
const contentFooter = () => {
	fetch('/common-tags/footer.html')
	.then(response => {
		return response.text();
	})
	.then(data => {
		content.insertAdjacentHTML('afterend', data);
	})
}
contentHeader();
contentFooter();

const getScrollPercent = () => {
	const scrolled = window.scrollY;
	const pageHeight = document.documentElement.scrollHeight;
	const viewHeight = document.documentElement.clientHeight;
	const percentage = scrolled / (pageHeight - viewHeight) * 100;
	document.querySelector('.progressBar').style.width = `${percentage}%`;
}
window.addEventListener('scroll', getScrollPercent);

const popularArticle = [1, 0];
const newArticle = 3;
const refinement = document.querySelectorAll(`.articleCardConteiner`);
for(let i = 0; i < refinement.length; i++){
	if(refinement[i].id === 'allArticle'){
		const articleCardConteiner = document.querySelector(`#${refinement[i].id}`);
		for(let i = 0; i < article.length; i++){
				const {title, date, categories, image, pass} = article[i];
				const content = 
				`<article class="articleCard">
					<a href="${pass}">
					<img src="${image}" alt="ヘッダー画像" onerror="this.src='/image/no-image.png'" width="100" height="100" class="articleCard_img">
					<p class="articleCard_title">${title}</p>
					<p class="articleCard_day">${date}</p>
					</a>
				</article>`;
				articleCardConteiner.insertAdjacentHTML('beforeend', content);
		};
	}else if(refinement[i].id === 'popularArticle'){
		const articleCardConteiner = document.querySelector(`#${refinement[i].id}`);
		for(let i = 0; i < popularArticle.length; i++){
				const {title, date, categories, image, pass} = article[popularArticle[i]];
				const content = 
				`<article class="articleCard">
					<a href="${pass}">
					<img src="${image}" alt="ヘッダー画像" onerror="this.src='/image/no-image.png'" width="100" height="100" class="articleCard_img">
					<p class="articleCard_title">${title}</p>
					<p class="articleCard_day">${date}</p>
					</a>
				</article>`;
				articleCardConteiner.insertAdjacentHTML('beforeend', content);
		};
	}else if(refinement[i].id === 'newArticle'){
		const articleCardConteiner = document.querySelector(`#${refinement[i].id}`);
		const articleNewer = article.slice().sort((a,b) => {return a.date < b.date ? 1 : -1;});
		for(let i = 0; i < newArticle; i++){
				const {title, date, categories, image, pass} = articleNewer[i];
				const content = 
				`<article class="articleCard">
					<a href="${pass}">
					<img src="${image}" alt="ヘッダー画像" onerror="this.src='/image/no-image.png'" width="100" height="100" class="articleCard_img">
					<p class="articleCard_title">${title}</p>
					<p class="articleCard_day">${date}</p>
					</a>
				</article>`;
				articleCardConteiner.insertAdjacentHTML('beforeend', content);
		};
	}
}