'use strict'

function renderGalleryItem() {
  var projects = getProjects()
  var galleryItemsHtml = projects.map(function (project) {
    return `<div class="col-md-3 col-sm-6 portfolio-item">
                <a class="portfolio-link" 
                   data-toggle="modal" 
                   onclick='renderGalleryItemModal("${project.id}")'>
                    <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/${project.id}-thumbnail.png" alt="project image">
                </a>
                <div class="portfolio-caption">
                    <h4>${project.name}</h4>
                    <p class="text-muted">${project.desc}</p>
                </div>
            </div>`
  })
  var galleryContainer = document.querySelector('.gallery-row')
  galleryContainer.innerHTML = galleryItemsHtml.join(' ')
}

function renderGalleryItemModal(id) {
  var project = getProjectById(id)
  var modalContentContainerEl = document.querySelector('.modal-body')
  modalContentContainerEl.innerHTML = `
  <h2>${project.name}</h2>
  <p class="item-intro text-muted">${project.title}</p>
  <img class="img-fluid d-block mx-auto" src="img/portfolio/${
    project.id
  }-full.png" alt="project image">
  <p>${project.desc}</p>
  <ul class="list-inline">
    <li>Date: ${project.publishedAt}</li>
    <li>Category: ${renderLables(project.lables)}</li>
  </ul>
  <a href=${project.url} target='_blank' class="btn btn-primary stretched-link">View Project</a>
  <button onclick='onCloseModal()' class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fa fa-times"></i>
      Close Project</button>
  `

  var modalEl = document.querySelector('.portfolio-modal')
  var bodyEl = document.querySelector('body')
  bodyEl.classList.add('modal-open')
  modalEl.style.display = 'block'
  modalEl.classList.add('show')
}

function renderLables(lables){
  return lables.map((lable) => {
    return `<span class="badge badge-pill badge-dark">${lable}</span>`
  }).join(' ')
}

function onCloseModal() {
  var modalEl = document.querySelector('.portfolio-modal')
  modalEl.style.display = 'none'
  modalEl.classList.remove('show')
}

function onPageLoad() {
  renderGalleryItem()
}

function onRedirectToGmail() {
  var subject = document.querySelector('.subject').value
  var text = document.querySelector('.text').value
  var url = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=shaieisenhower1994@gmail.com&su=&${subject}&body=${text}`
  window.open(url)
}
