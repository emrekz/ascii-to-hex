let fromTextLength = 0;
let fromText;
let toResult = [];
let status = 'asciiToHex';

const convert = (status) => {
	document.getElementById("resultLabel").innerHTML = '';
	fromText = document.getElementById("fromText").value;
	fromText = String(fromText);
	fromTextLength = fromText.length;

	if(status === 'asciiToHex'){
		for(let i = 0; i<fromTextLength;i++){
			toResult[i] = fromText.charCodeAt(i).toString(16);
			document.getElementById("resultLabel").innerHTML += '' + toResult[i] + ' ';
		}
	}

	else if(status === 'hexToAscii'){
		let hexAsciiResult = fromText.match(/.{1,2}/g).map((i) => {
			return String.fromCharCode(parseInt(i,16));
		}).join('');
		document.getElementById("resultLabel").innerHTML += '' + hexAsciiResult + ' ';
	}

	document.getElementById("copiedBadge").style.visibility = 'hidden';
	document.getElementById("copiedBadge").style.opacity = '0';
	document.getElementById("copyToClipboardButton").removeAttribute('disabled');
}

const copyToClipboard = () => {
	document.getElementById("resultLabel").select();
    document.execCommand("copy");
    document.getElementById("copiedBadge").style.visibility = 'visible';
    document.getElementById("copiedBadge").style.opacity = '1';
}


const swap = () => {
	if(status === 'asciiToHex'){
		status = 'hexToAscii';
		document.getElementById('fromTextAddon').textContent = 'Hex Code';
		document.getElementById('fromText').placeholder = 'type hex code';
		document.getElementById('toText').textContent = 'ASCII Text';
		document.getElementById('resultLabel').textContent = 'ascii text results';
		document.getElementById('header').textContent = 'Convert Hex Code to ASCII Text';

	}
	else if(status === 'hexToAscii'){
		status = 'asciiToHex';
		document.getElementById('fromTextAddon').textContent = 'ASCII Text';
		document.getElementById('fromText').placeholder = 'type ascii text';
		document.getElementById('toText').textContent = 'Hex Code';
		document.getElementById('resultLabel').textContent = 'hex code results'; 
		document.getElementById('header').textContent = 'Convert ASCII Text to Hex Code';
	}
	else { status = 'hexToAscii' }
}

const clearContent = () => {
	document.getElementById("fromText").value = '';
	document.getElementById("resultLabel").innerHTML = '';
}

document.getElementById("fromText").addEventListener("change", () => {
	document.getElementById("copyToClipboardButton").setAttribute('disabled', '');
	document.getElementById("copiedBadge").style.visibility = 'hidden';
    document.getElementById("copiedBadge").style.opacity = '0';
})