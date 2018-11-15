const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0 
  
  let body = document.body
  
  body.addEventListener('keydown', function(e) {
    console.log(e.detail)
    console.log(e.which)
    console.log(e.location)
    const key = parseInt(e.key)
    
    if (key === code[index]) {
      index++;
      
      if (index === code.length) {
        alert('Konami Code baby!');
        index = 0;
      }
    } else {
      index = 0;
    }
  })
}