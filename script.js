//your code here
let likeness = document.getElementById("likeness");
let show = document.getElementById("show");



likeness.addEventListener("input",()=>{
	show.textContent = likeness.value;
})
