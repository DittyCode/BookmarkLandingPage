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
const iconHamburger = document.querySelector('[data-hamburgerImg]');
const nav = document.querySelector('.nav');

const dropMenu = (e) => {
	nav.classList.toggle('drop');
	if (nav.classList.contains('drop')) {
		iconHamburger.setAttribute('src', './../images/icon-close.svg');
		console.log(hamburger.getAttribute('src'));
	} else {
		iconHamburger.setAttribute('src', './../images/icon-hamburger.svg');
	}
};

hamburger.addEventListener('click', (e) => dropMenu(e));

// <<<<<<<<<<<<< Email >>>>>>>>>>>>>

const input = document.querySelector('[data-emailInput]');
const sendEmail = document.querySelector('[data-emailSend]');
const message = document.querySelector('[data-sendMessage]');

const checkValidEmail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email.toLowerCase());
};

const clearMessage = () => setTimeout(() => (message.textContent = ''), 3000);

const sendPersonalEmail = () => {
	const value = input.value;
	if (value) {
		const validate = checkValidEmail(value);
		if (validate) {
			message.textContent = 'Message send into Email';
		} else {
			message.textContent = ' Remember about valid email';
		}
	} else {
		message.textContent = "Input can't be empty.";
	}
	clearMessage();
};

sendEmail.addEventListener('click', sendPersonalEmail);
