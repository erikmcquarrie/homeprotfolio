console.log(`test`)



$(() => {
  const home = () => {
        window.location.replace('file:///Users/erik/portfolio/home.html')
  }
  const bio = () => {
        window.location.replace('/Users/erik/portfolio/bio.html')
  }
  const resume = () => {
        window.location.replace('/Users/erik/portfolio/resume.html')
  }
  const projects = () => {
        window.location.replace('/Users/erik/portfolio/projects.html')
  }
  const linkedin = () => {
        window.location.replace('https://www.linkedin.com')
  }


  const buttonArray = ['Home', 'Resume', 'Projects', 'Bio', 'LinkedIn']
  let arrayIndex = 0
  $('.array').text(buttonArray[arrayIndex])


  const changeButtonLeft = () => {
    if(arrayIndex > 0){
      arrayIndex--
    }
    else if(arrayIndex === 0){
      arrayIndex = 4
    }
    $('.array').empty()
    $('.array').text(buttonArray[arrayIndex])
  }
  const changeButtonRight = () => {
    if(arrayIndex === 4){
      arrayIndex = 0
    }
    else if(arrayIndex < 4){
      arrayIndex++
    }
    $('.array').empty()
    $('.array').text(buttonArray[arrayIndex])
  }
  const link = () => {
    //found change window/page on stackoverflow
    //https://stackoverflow.com/questions/16959476/how-to-go-to-a-url-using-jquery
    if(arrayIndex === 0) {
      window.open('file:///Users/erik/portfolio/home.html')
    } else if(arrayIndex === 1) {
      window.open('file:///Users/erik/portfolio/resume.html')
    } else if(arrayIndex === 2) {
      window.open('file:///Users/erik/portfolio/projects.html')
    } else if(arrayIndex === 3) {
      window.open('file:///Users/erik/portfolio/bio.html')
    } else if(arrayIndex === 4) {
      window.open('https://www.linkedin.com')
    }
  }

  $('.left').on("click", changeButtonLeft)
  $('.right').on("click", changeButtonRight)
  $('.array').on("click", link)
  $('.bhome').on("click", home)
  $('.bio').on("click", bio)
  $('.resume').on("click", resume)
  $('.projects').on("click", projects)
  $('.linkedin').on("click", linkedin)
})
