const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'a', 'b']

function init() {
  let index = 0 
  
  let body = document.body
  
  body.addEventListener('keydown', function(e) {
    console.log(e.key)
 
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