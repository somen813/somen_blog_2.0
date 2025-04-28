const nowURL = window.location.href;
//headerのスクリプト
const content = document.querySelector('.content');
const contentHeader =
`<header class="header">
	<p class="siteLogo">
		<a href="/index.html">
			<img src="/image/logo-transparent.png" alt="そうめんの部屋" class="logo-img" width="500" height="150">
		</a>
	</p>
	<button type="button" class="headerMenuBtn">
		<div class="lineBox">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</button>
	<nav id="headerMenu">
		<div id="headerMenuList">
			<ul class="backgroundAnimation">
				<li><a href="/pjsk/index.html">プロセカ</a></li>
				<li><a href="/blak/index.html">ブルアカ</a></li>
				<li><a href="/rvc/index.html">RVC</a></li>
				<li><a href="/gadget/index.html">ガジェット・PC</a></li>
				<li><a href="/other/index.html">その他</a></li>
			</ul>
		</div>
		<ul class="noticeContact backgroundAnimation">
			<li><a href="/info/index.html">お知らせ</a></li>
			<li><a href="/introduction/index.html">自己紹介</a></li>
			<li><a href="/contact/index.html">お問い合わせ</a></li>
		</ul>
	</nav>
</header>
<div class="progressBar"></div>
<div class="share">
	<button type="button" class="shareMenuBtn"><i class="fa-solid fa-arrow-up-from-bracket"></i></button>
	<div class="shareMenu">
		<div class="shareSns shareX">
			<a href="https://x.com/share?url=${nowURL}" rel="nofollow noopener" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
		</div>
		<div class="shareSns shareFacebook">
			<a href="http://www.facebook.com/share.php?u=${nowURL}" rel="nofollow noopener" target="_blank"><i class="fa-brands fa-facebook"></i></a>
		</div>
		<div class="shareSns shareLine">
			<a href="https://social-plugins.line.me/lineit/share?url=${nowURL}" rel="nofollow noopener" target="_blank"><img src="/image/LINE_Brand_icon.png" alt="LINE"></a>
		</div>
	</div>
</div>
`;
//footerのスクリプト
const contentFooter = 
`<footer class="footer">
  <ul class="site-map">
    <li><a href="/info/index.html">お知らせ</a></li>
    <li><a href="/contact/index.html">お問い合わせ</a></li>
  </ul>
  <p class="footerTitle">
    <a href="/index.html"><img src="/image/logo-transparent.png" alt="そうめんの部屋" width="500" height="150"  class="footerTitle"></a>
  </p>
</footer>
<div class="scrollTop">
  <a href="#top" class="scroll-top"><i class="fa-solid fa-angles-up"></i></a>
</div>`;
content.insertAdjacentHTML('beforebegin', contentHeader);
content.insertAdjacentHTML('afterend', contentFooter);

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
console.log(article.slice().filter(item => item.categories === 'その他'));
console.log(article.slice().filter(item => item.categories === '道具箱'));



// 固定ヘッダー（固定しない場合は = 0）
headerHeight = 8;
// イージング関数（easeOutQuart）
function scrollToPos(position) {
	const startPos = window.scrollY;
	const distance = Math.min(position - startPos, document.documentElement.scrollHeight - window.innerHeight - startPos);
	const duration = 500; // スクロールにかかる時間（ミリ秒）
	let startTime;
	function easeInOutCubic(x) {
		return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
	}

	function animation(currentTime) {
		if (startTime === undefined) {
			startTime = currentTime;
		}
		const timeElapsed = currentTime - startTime;
		const x = timeElapsed / duration;
		const scrollPos = startPos + distance * easeInOutCubic(x);
		window.scrollTo(0, scrollPos);
		if (timeElapsed < duration) {
			requestAnimationFrame(animation);
		} else {
			window.scrollTo(0, position);
		}
	}
	requestAnimationFrame(animation);
}
// 遅延読み込み解除
function removeLazyLoad() {
	const targets = document.querySelectorAll('[data-src]');
	for (const target of targets) {
		target.setAttribute('src', target.getAttribute('data-src'));
		target.addEventListener('load', () => {
			target.removeAttribute('data-src');
		});
	}
}
// ページ内のスムーススクロール
for (const link of document.querySelectorAll('a[href*="#"]')) {
	link.addEventListener('click', (e) => {
		const hash = e.currentTarget.hash;
		const target = document.getElementById(hash.slice(1));

		// ページトップへ("#"と"#top"）
		if (!hash || hash === '#top') {
			e.preventDefault();
			scrollToPos(1); // iOSのChromeで固定ヘッダーが動くバグがあるため0ではなく1に

		// アンカーへ
		} else if (target) {
			e.preventDefault();
			removeLazyLoad();
			const position = target.getBoundingClientRect().top + window.scrollY - headerHeight;
			scrollToPos(position);

			// URLにハッシュを含める
			history.pushState(null, '', hash);
		}
	});
};
// 別ページ遷移後のスムーススクロール
const urlHash = window.location.hash;
if (urlHash) {
	const target = document.getElementById(urlHash.slice(1));
	if (target) {
		// ページトップから開始（ブラウザ差異を考慮して併用）
		history.replaceState(null, '', window.location.pathname);
		window.scrollTo(0, 0);

		removeLazyLoad();
		window.addEventListener("load", () => {
			const position = target.getBoundingClientRect().top + window.scrollY - headerHeight;
			scrollToPos(position);

			// ハッシュを再設定
			history.replaceState(null, '', window.location.pathname + urlHash);
		});
	}
};