const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
function init() {
  let index = 0 
  
  let body = document.body
  
  body.addEventListener('keydown', function(e) {

    const key = parseInt(e.which||e.detail)
    
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