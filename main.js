const gallery = document.getElementById('gallery');
const count = document.getElementById('count')
const loading = document.getElementsByClassName('loading')

function createContainer() {
  const container = document.createElement('div');
  container.setAttribute('class', 'duck');
  gallery.appendChild(container);
  return container;
}

function addDuckImage(container, contributor) {
  const duck = document.createElement('img');
  duck.setAttribute('src', `./ducks/${contributor}.png`);
  duck.setAttribute('width', '300');
  duck.setAttribute('height', '300');
  duck.setAttribute('loading', 'lazy');
  duck.setAttribute('alt', contributor);
  container.appendChild(duck);
}

function addContributorInfo(container, contributor) {
  const contributorInfo = document.createElement('a');
  contributorInfo.setAttribute('href', `https://github.com/${contributor}`);
  contributorInfo.setAttribute('aria-label', contributor);
  contributorInfo.setAttribute('target', 'NEW');
  contributorInfo.append(contributor);
  container.appendChild(contributorInfo);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

count.innerText = contributors.length;

shuffle(contributors);

for (const contributor of contributors) {
  const container = createContainer();
  addDuckImage(container, contributor);
  addContributorInfo(container, contributor);
}

loading[0].remove()