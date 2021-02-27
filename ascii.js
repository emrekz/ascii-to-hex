let asciiTextLength = 0;
let asciiText;
let hexResult = [];
const convert = () => {
	document.getElementById("resultLabel").innerHTML = '';
	asciiText = document.getElementById("asciiText").value;
	asciiText = String(asciiText);
	asciiTextLength = asciiText.length;
	for(let i = 0; i<asciiTextLength;i++){
		hexResult[i] = asciiText.charCodeAt(i).toString(16);
		document.getElementById("resultLabel").innerHTML += '' + hexResult[i] + ' ';
	}
	document.getElementById("copiedBadge").style.visibility = 'hidden';
	document.getElementById("copiedBadge").style.opacity = '0';
	document.getElementById("copyToClipboardButton").removeAttribute('disabled');
}

const copyToClipboard = () => {
	document.getElementById("resultLabel").select();
    document.execCommand("copy");
    //document.getElementById("copyToClipboardButton").className = 'btn btn-success'; 
    document.getElementById("copiedBadge").style.visibility = 'visible';
    document.getElementById("copiedBadge").style.opacity = '1';
}

document.getElementById("asciiText").addEventListener("change", () => {
	document.getElementById("copyToClipboardButton").setAttribute('disabled', '');
	document.getElementById("copiedBadge").style.visibility = 'hidden';
    document.getElementById("copiedBadge").style.opacity = '0';
})