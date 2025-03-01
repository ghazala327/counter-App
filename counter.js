let count = 0
let saveEl= document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment(){
	count++
	countEl.innerText=count
}
function save(){
	counter=count+" - "
	saveEl.textContent+= counter
	count =0
	countEl.innerText= 0

}