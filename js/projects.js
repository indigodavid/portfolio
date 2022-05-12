const projectData=[
  {
    name: "Multi-Post Stories",
    image: "./images/featured-project.png ",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    languages: [
      "html",
      "css",
      "bootstap",
      "Ruby"
    ],
    liveUrl: "https://indigodavid.github.io/portfolio/",
    sourceUrl: "https://github.com/indigodavid/portfolio"
  },
  {
    name: "Professional Art Printing Data",
    image: "./images/placeholder-professional.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      "html",
      "bootstap",
      "Ruby"
    ],
    liveUrl: "https://indigodavid.github.io/portfolio/",
    sourceUrl: "https://github.com/indigodavid/portfolio"
  },
  {
    name: "Data Dashboard Healthcare",
    image: "./images/placeholder-availability.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      "html",
      "bootstap",
      "Ruby"
    ],
    liveUrl: "https://indigodavid.github.io/portfolio/",
    sourceUrl: "https://github.com/indigodavid/portfolio"
  },
  {
    name: "Website Portfolio",
    image: "./images/placeholder-nature.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      "html",
      "bootstap",
      "Ruby"
    ],
    liveUrl: "https://indigodavid.github.io/portfolio/",
    sourceUrl: "https://github.com/indigodavid/portfolio"
  },
  {
    name: "Professional Art Printing Data",
    image: "./images/placeholder-professional.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      "html",
      "bootstap",
      "Ruby"
    ],
    liveUrl: "https://indigodavid.github.io/portfolio/",
    sourceUrl: "https://github.com/indigodavid/portfolio"
  },
  {
    name: "Data Dashboard Healthcare",
    image: "./images/placeholder-availability.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      "html",
      "bootstap",
      "Ruby"
    ],
    liveUrl: "https://indigodavid.github.io/portfolio/",
    sourceUrl: "https://github.com/indigodavid/portfolio"
  },
  {
    name: "Website Portfolio",
    image: "./images/placeholder-nature.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      "html",
      "bootstap",
      "Ruby"
    ],
    liveUrl: "https://indigodavid.github.io/portfolio/",
    sourceUrl: "https://github.com/indigodavid/portfolio"
  }
];
 
 class HtmlContents {

  constructor(
    title = 'Website Portfolio', 
    description = `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard` 
    ) {
    this.title = title;
    this.description = description;
  }
  
  getH2() {
    let h2 = document.createElement('h2');
    h2.innerText = this.title;
    return h2;
  }
  getP() {
    let p = document.createElement('p');
    p.innerText = this.description;
    return p;
  }
}

class Urls {
  constructor (
    imageUrl = './images/placeholder-availability.png',  
    liveUrl = 'https://indigodavid.github.io/portfolio/', 
    sourceUrl = 'https://github.com/indigodavid/portfolio',
    imageAlt = 'Project preview') {
    this.imageUrl = imageUrl;
    this.liveUrl = liveUrl;
    this.sourceUrl = sourceUrl;
    this.imageAlt = imageAlt;
  }

  getImg() {
    let img = document.createElement('img');
    img.src = this.imageUrl;
    img.alt = this.imageAlt;
    return img;
  }
  
  getLiveAnchor() {
    let a = document.createElement('a');
    a.href = this.liveUrl;
    a.target = '_blank';
    a.classList.add('button');
    a.classList.add('live-icon');
    a.innerText = 'See Live';
    return a;
  }

  getSourceAnchor() {
    let a = document.createElement('a');
    a.href = this.sourceUrl;
    a.target = '_blank';
    a.classList.add('button');
    a.classList.add('source-icon');
    a.innerText = 'See Source';
    return a;
  }
}

class Technologies {
  constructor (techArray = ['html', 'bootstrap', 'Ruby']) {
    this.techArray = techArray;
  }
  getUl () {
    let ul = document.createElement('ul');
    let li;
    ul.classList.add('languages');
    for(let i = 0; i < this.techArray.length; i++){
      li = document.createElement('li');
      li.innerHTML = this.techArray[i];
      ul.appendChild(li);
    }
    return ul;
  }
}

function createModalLink(index){
  let anchor = document.createElement('a');
  anchor.classList.add('button');
  if (index === 0) {
    anchor.classList.add('fs');
  }
  anchor.href = `javascript:openModal(${index})`;
  anchor.innerText = 'See Project';
  return anchor;
}

let project = {
  content: null,
  urls: null,
  technologies: null,
  getProjectHtml: function (index) {
    let div;
    div = document.createElement('div');
    if(index === 0){
      div.classList.add('content');
      document.getElementById('highlighted-image').src = this.urls.imageUrl;
    } else {
      div.classList.add('project');
      div.classList.add(`project${index}`);
      div.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.95)), url(' + this.urls.imageUrl + ')';
    }
    div.appendChild(this.content.getH2());
    div.appendChild(this.content.getP());
    div.appendChild(this.technologies.getUl());
    div.appendChild(createModalLink(index));
    return div;
  }
}

const projectSection = document.getElementById('projects');
const featuredContent = document.getElementById('featured-content');
for(let i = 0; i < projectData.length; i++) {
  project.content = new HtmlContents(projectData[i].name, projectData[i].description);
  project.urls = new Urls(projectData[i].image);
  project.technologies = new Technologies(projectData[i].languages);
  if(i === 0){
    featuredContent.appendChild(project.getProjectHtml(i));
  } else {
    projectSection.appendChild(project.getProjectHtml(i));
  }
}

const modal = document.getElementById('modal-container');
const popup = document.getElementById('modal');
const closePopup = document.getElementById('modal-close');

function openModal(index) {
  document.getElementById('modal-title').innerHTML = projectData[index].name;
  document.getElementById('modal-languages').innerHTML = '';
  let ulLanguages = new Technologies(projectData[index].languages);
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

closePopup.addEventListener('click', closeModal);
