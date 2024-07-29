/* Pargraph show or hide */

const help = document.getElementById('help'),
	  message = document.getElementById('message')

if(help){
	help.addEventListener('click', () =>{
		message.classList.add('show-message')
	})
}
if(message){
	message.addEventListener('click', () =>{
		message.classList.remove('show-message')
	})
}

