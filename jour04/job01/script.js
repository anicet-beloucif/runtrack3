function enesprit() {
fetch('expression.txt')
  .then(response => response.text())
  .then(data => {
    
  	console.log(data);
      citation.innerHTML = data
    });}