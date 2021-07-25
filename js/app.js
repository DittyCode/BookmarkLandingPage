const links = [...document.querySelectorAll('[data-featuresLink]')];
const linksStatus = document.querySelector('[data-featuresStatus]');

// <<<<<<<<<<<<<<< PROGRESS BAR >>>>>>>>>>>>>>>
const progress = {
	0: {
		left: 0,
		width: 33.3,
	},
	1: {
		left: 33.3,
		width: 33.3,
	},
	2: {
		left: 66.3,
		width: 33.3,
	},
};

const indexOfLink = (target) => links.indexOf(target);

const progressData = (index) => progress[index];

const activeLink = ({ target }) => {
	const index = indexOfLink(target);
	progressBar(progressData(index));
};

const progressBar = ({ left, width }) => {
	linksStatus.style.left = `${left}%`;
	linksStatus.style.width = `${width}%`;
};

links.forEach((link) => link.addEventListener('click', (e) => activeLink(e)));

progressBar(progress[0]);

// <<<<<<<<<<<<< HAMBURGER >>>>>>>>>>>>>>>>

const hamburger = document.querySelector('[data-hamburger]');
const nav = document.querySelector('.nav');

const dropMenu = (e) => {
	nav.classList.toggle('drop');
};

hamburger.addEventListener('click', (e) => dropMenu(e));
