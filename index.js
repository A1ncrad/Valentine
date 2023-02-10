const envelope = document.getElementById("envelope");
const flip = document.getElementById("flip");
const letter = document.getElementById("letter");

function close(){
	envelope.removeChild(flip);
	envelope.appendChild(flip);
	flip.classList.add("active");
	setTimeout(() => {
		flip.classList.remove("active");
	}, 1);
}

function open(){
	envelope.removeChild(flip);
	envelope.insertBefore(flip, letter);
	letter.classList.add("active");
}

envelope.addEventListener("click", () => {
	if (flip.classList.contains("active") && letter.classList.contains("active")) {
		letter.classList.remove("active");
		setTimeout(close, 500);
	} else {
		flip.classList.add("active");
		setTimeout(open, 500)
	}
})