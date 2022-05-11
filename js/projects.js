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
    imageAlt = 'Project preview', 
    liveUrl = 'https://indigodavid.github.io/portfolio/', 
    sourceUrl = 'https://github.com/indigodavid/portfolio') {
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

const projects = [];

const project = {
  content: new HtmlContents(),
  urls: new Urls(),
  technologies: new Technologies(),
  getProjectHtml: function () {
    let div;
    div = document.createElement('div');
    div.classList.add('project');
    div.appendChild(this.content.getH2());
    div.appendChild(this.content.getP());
    div.appendChild(this.technologies.getUl());
    return div;
  }
}

projects.push(project);

let test = document.getElementById('projects');
let aux = projects[0].getProjectHtml();
aux.classList.add('project3');
aux.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.95)), url(' + projects[0].urls.imageUrl + ')';
test.appendChild(aux);

/* console.log(projects[0].getProjectHtml()); */