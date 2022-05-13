const projectSection = document.getElementById('projects');
const featuredContent = document.getElementById('featured-content');
const modal = document.getElementById('modal-container');
const closePopup = document.getElementById('modal-close');
const featuredImage = document.getElementById('highlighted-image');

const projectData = [
  {
    name: 'Multi-Post Stories',
    image: './images/featured-project.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    languages: [
      'html',
      'css',
      'bootstap',
      'Ruby',
    ],
    liveUrl: 'https://indigodavid.github.io/portfolio/',
    sourceUrl: 'https://github.com/indigodavid/portfolio',
  },
  {
    name: 'Professional Art Printing Data',
    image: './images/placeholder-professional.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    languages: [
      'html',
      'bootstap',
      'Ruby',
    ],
    liveUrl: 'https://indigodavid.github.io/portfolio/',
    sourceUrl: 'https://github.com/indigodavid/portfolio',
  },
  {
    name: 'Data Dashboard Healthcare',
    image: './images/placeholder-availability.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    languages: [
      'html',
      'bootstap',
      'Ruby',
    ],
    liveUrl: 'https://indigodavid.github.io/portfolio/',
    sourceUrl: 'https://github.com/indigodavid/portfolio',
  },
  {
    name: 'Website Portfolio',
    image: './images/placeholder-nature.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    languages: [
      'html',
      'bootstap',
      'Ruby',
    ],
    liveUrl: 'https://indigodavid.github.io/portfolio/',
    sourceUrl: 'https://github.com/indigodavid/portfolio',
  },
  {
    name: 'Professional Art Printing Data',
    image: './images/placeholder-professional.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    languages: [
      'html',
      'bootstap',
      'Ruby',
    ],
    liveUrl: 'https://indigodavid.github.io/portfolio/',
    sourceUrl: 'https://github.com/indigodavid/portfolio',
  },
  {
    name: 'Data Dashboard Healthcare',
    image: './images/placeholder-availability.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    languages: [
      'html',
      'bootstap',
      'Ruby',
    ],
    liveUrl: 'https://indigodavid.github.io/portfolio/',
    sourceUrl: 'https://github.com/indigodavid/portfolio',
  },
  {
    name: 'Website Portfolio',
    image: './images/placeholder-nature.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    languages: [
      'html',
      'bootstap',
      'Ruby',
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
