// console.log('%c HI', 'color: firebrick')


const createImages = ((dogArray) => {
   dogArray.forEach((element) => {
      const container = document.getElementById(`dog-image-container`)
      const image = document.createElement(`img`)
      image.src=element
      container.appendChild(image)
   })
})


fetch("https://dog.ceo/api/breeds/image/random/4")
.then(resp => resp.json())
.then(json => {
   dogs = json.message
   createImages(dogs)
})

fetch('https://dog.ceo/api/breeds/list/all')
.then(resp => resp.json())
.then(json => breeds = json.message)
.then(info => console.log(breeds))