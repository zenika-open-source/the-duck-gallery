const gallery = document.getElementById("gallery");
const count = document.getElementById("count");
const loading = document.getElementsByClassName("loading");

function createContainer() {
	const container = document.createElement("div");
	container.setAttribute("class", "duck");
	gallery.appendChild(container);
	return container;
}

function addDuckImage(container, contributor) {
	const duck = document.createElement("img");
	duck.setAttribute("src", `./ducks/${contributor.username}.png`);
	duck.setAttribute("width", "300");
	duck.setAttribute("height", "300");
	duck.setAttribute("loading", "lazy");
	duck.setAttribute("alt", contributor.username);
	container.appendChild(duck);
}

function addContributorInfo(container, contributor) {
	const contributorName = document.createElement("a");
	contributorName.setAttribute(
		"href",
		`https://github.com/${contributor.username}`,
	);
	contributorName.setAttribute("aria-label", contributor.username);
	contributorName.setAttribute("target", "NEW");
	contributorName.append(contributor.username);
	container.appendChild(contributorName);

	const contributorMessage = document.createElement("div");
	contributorMessage.setAttribute("class", "message");
	contributorMessage.append(contributor.message);
	container.appendChild(contributorMessage);
}

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

/* global contributors */
count.innerText = contributors.length;

shuffle(contributors);

for (const contributor of contributors) {
	const container = createContainer();
	addDuckImage(container, contributor);
	addContributorInfo(container, contributor);
}

loading[0].remove();
