const projectSection = document.getElementById('projects');
const featuredContent = document.getElementById('featured-content');
const modal = document.getElementById('modal-container');
const closePopup = document.getElementById('modal-close');
const featuredImage = document.getElementById('highlighted-image');

const projectData = [
  {
    name: 'Dasik Band Events Page 2022',
    image: './images/dasik-thumbnail.png',
    description: 'This project contains the information and events for Dasik Band. This project is fully responsive and links to the audio files of the band. It also serves as an SPK to display the band\'s material to stations and specialized media.',
    languages: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    liveUrl: 'https://indigodavid.github.io/dasik-band-events/',
    sourceUrl: 'https://github.com/indigodavid/dasik-band-events',
  },
  {
    name: 'Todo List App',
    image: './images/todolist-thumbnail.png',
    description: 'In this project I built an interactive Todo List Web App with Webpack, HTML, CSS, and JavaScript. This project contains a feature that allow your Todo List to be stored in the local storage to keep track of the tasks even after closing your browser',
    languages: [
      'HTML',
      'CSS',
      'JavaScript',
      'Webpack',
    ],
    liveUrl: 'https://indigodavid.github.io/to-do-list-app/',
    sourceUrl: 'https://github.com/indigodavid/to-do-list-app',
  },
  {
    name: 'Awesome Books App',
    image: './images/awesomebooks-thumbnail.png',
    description: 'This repository contains an web app that allows to add and remove book\'s data using Javascript, taking advantage of ES6 conventions.',
    languages: [
      'HTML',
      'JavaScript',
      'WebPack',
    ],
    liveUrl: 'https://indigodavid.github.io/awesome-books/',
    sourceUrl: 'https://github.com/indigodavid/awesome-books',
  },
  {
    name: 'Personal Portfolio',
    image: './images/portfolio-thumbnail.png',
    description: 'This repository contains an web app that allows to add and remove book\'s data using Javascript, taking advantage of ES6 conventions.',
    languages: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    liveUrl: 'https://indigodavid.github.io/portfolio/',
    sourceUrl: 'https://github.com/indigodavid/portfolio',
  },
];

function getH2(title) {
  const h2 = document.createElement('h2');
  h2.innerText = title;
  return h2;
}

function getP(description) {
  const p = document.createElement('p');
  p.innerText = description;
  return p;
}

function createModalLink(index) {
  const anchor = document.createElement('a');
  anchor.classList.add('button');
  if (index === 0) {
    anchor.classList.add('fs');
    anchor.id = 'featured-link';
  }
  anchor.href = `javascript:openModal(${index})`;
  anchor.innerText = 'See Project';
  return anchor;
}

const project = {
  content: {
    title: '',
    description: '',
  },
  urls: {
    imageUrl: '',
    liveUrl: '',
    sourceUrl: '',
    imageAlt: '',
  },
  technologies: null,
  getProjectHtml(index) {
    const div = document.createElement('div');
    if (index === 0) {
      div.classList.add('content');
      document.getElementById('highlighted-image').src = this.urls.imageUrl;
    } else {
      div.classList.add('project');
      div.classList.add(`project${index}`);
      div.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.95)), url('${this.urls.imageUrl}')`;
    }
    div.appendChild(getH2(this.content.title));
    div.appendChild(getP(this.content.description));
    div.appendChild(this.technologies.getUl());
    div.appendChild(createModalLink(index));
    return div;
  },
};

class Technologies {
  constructor(techArray = ['html', 'bootstrap', 'Ruby']) {
    this.techArray = techArray;
  }

  getUl() {
    const ul = document.createElement('ul');
    let li;
    ul.classList.add('languages');
    for (let i = 0; i < this.techArray.length; i += 1) {
      li = document.createElement('li');
      li.innerHTML = this.techArray[i];
      ul.appendChild(li);
    }
    return ul;
  }
}

function openModal(index) {
  document.getElementById('modal-title').innerHTML = projectData[index].name;
  document.getElementById('modal-languages').innerHTML = '';
  const ulLanguages = new Technologies(projectData[index].languages);
  document.getElementById('modal-languages').appendChild(ulLanguages.getUl());
  document.getElementById('project-image').src = projectData[index].image;
  document.getElementById('modal-description').textContent = projectData[index].description;
  document.getElementById('live-link').href = projectData[index].liveUrl;
  document.getElementById('source-link').href = projectData[index].sourceUrl;
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

for (let i = 0; i < projectData.length; i += 1) {
  project.content.title = projectData[i].name;
  project.content.description = projectData[i].description;
  project.urls.imageUrl = projectData[i].image;
  project.technologies = new Technologies(projectData[i].languages);
  if (i === 0) {
    featuredContent.appendChild(project.getProjectHtml(i));
  } else {
    projectSection.appendChild(project.getProjectHtml(i));
  }
}

closePopup.addEventListener('click', closeModal);
featuredImage.addEventListener('click', openModal);
