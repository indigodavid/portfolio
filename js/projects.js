/* name, description, featured image, technologies, link to live version, link to source. */
class HtmlContents {
  constructor(h1, p) {
    this.h1 = h1;
    this.p = p;
  }
}

class Urls {
  constructor (image, live, source) {
    this.image = image;
    this.live = live;
    this.source = source;
  }
}

class Technologies {
  constructor (techArray) {
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

/* let tech = new Technologies(['html','css','ruby']);
document.querySelector('.content').appendChild(tech.getUl());
 */
