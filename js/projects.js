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
    liveUrl: "",
    sourceUrl: ""
  },
  {
    name: "Professional Art Printing Data",
    image: "./images/placeholder-professional.png",
    description: "",
    languages: [],
    liveUrl:"",
    sourceUrl:""
  },
  {
    name: "Data Dashboard Healthcare",
    image: "./images/placeholder-availability.png",
    description: "",
    languages: [],
    liveUrl:"",
    sourceUrl:""
  },
  {
    name: "Website Portfolio",
    image: "./images/placeholder-nature.png",
    description: "",
    languages: [],
    liveUrl:"",
    sourceUrl:""
  },
  {
    name: "Professional Art Printing Data",
    image: "./images/placeholder-professional.png",
    description: "",
    languages: [],
    liveUrl:"",
    sourceUrl:""
  },
  {
    name: "Data Dashboard Healthcare",
    image: "./images/placeholder-availability.png",
    description: "",
    languages: [],
    liveUrl:"",
    sourceUrl:""
  },
  {
    name: "Website Portfolio",
    image: "./images/placeholder-nature.png",
    description: "",
    languages: [],
    liveUrl:"",
    sourceUrl:""
  }
]
 
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
    a.classList.add('fs');
    a.classList.add('live-icon');
    a.innerText = 'See Live';
    return a;
  }

  getSourceAnchor() {
    let a = document.createElement('a');
    a.href = this.sourceUrl;
    a.target = '_blank';
    a.classList.add('button');
    a.classList.add('fs');
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
  anchor.href = `openModal(${index})`;
  anchor.innerText = 'See Project';
  return anchor;
}

const project = {
  content: new HtmlContents(),
  urls: new Urls(),
  technologies: new Technologies(),
  getProjectHtml: function (index) {
    let div;
    div = document.createElement('div');
    div.classList.add('project');
    div.classList.add(`project${index}`)
    div.appendChild(this.content.getH2());
    div.appendChild(this.content.getP());
    div.appendChild(this.technologies.getUl());
    div.appendChild(createModalLink(index));
    div.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.95)), url(' + this.urls.imageUrl + ')';
    return div;
  }
}

let projectSection = document.getElementById('projects');
for(let i = 0; i < projectData.length; i++) {
  if(i === 0){
    /* featured project */
  } else {
    project.content = new HtmlContents(projectData[i].name);
    project.urls = new Urls(projectData[i].image);
    projectSection.appendChild(project.getProjectHtml(i));
  }
}
