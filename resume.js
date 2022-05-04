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
        window.open('https://www.linkedin.com')
  }



  $('.bhome').on("click", home)
  $('.bio').on("click", bio)
  $('.resume').on("click", resume)
  $('.projects').on("click", projects)
  $('.linkedin').on("click", linkedin)
})
