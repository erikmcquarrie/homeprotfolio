console.log(`test`)



$(() => {
  const home = () => {
        window.location.replace('https://cheery-choux-3168bb.netlify.app/')
  }
  const bio = () => {
        window.location.replace('https://amazing-kataifi-10194f.netlify.app/')
  }
  const resume = () => {
        window.location.replace('https://jovial-basbousa-b14d5a.netlify.app/')
  }
  const projects = () => {
        window.location.replace('https://graceful-ganache-f07e77.netlify.app/')
  }
  const linkedin = () => {
        window.open('https://www.linkedin.com')
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
      window.open('https://cheery-choux-3168bb.netlify.app/')
    } else if(arrayIndex === 1) {
      window.open('https://jovial-basbousa-b14d5a.netlify.app/')
    } else if(arrayIndex === 2) {
      window.open('https://graceful-ganache-f07e77.netlify.app/')
    } else if(arrayIndex === 3) {
      window.open('https://amazing-kataifi-10194f.netlify.app/')
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
