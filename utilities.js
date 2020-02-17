function convertTime(timestamp) {
	let d = new Date(timestamp*1000).toLocaleDateString("is-IS");
	let t = new Date(timestamp*1000).toLocaleTimeString("is-IS");
	let time = d + ' - ' + t;
	return time;
}

function processMoneyArguments(amount, type, symbol) {
	type = type.toLowerCase();
	if (type === 'k') {
		if (symbol) {
			let argArray = amount.split(symbol);
			let decimal = parseInt(argArray[1].replace(/[^a-zA-Z0-9]/g, '')) * 1000;
			let main = parseInt(argArray[0].replace(/[^a-zA-Z0-9]/g, '')) * 1000;
			return (main+decimal);
		}
		else {
			let cleanedArg = parseInt(amount.replace(/[^a-zA-Z0-9]/g, ''));
			return cleanedArg*1000;
		}
	}
	else if (type === 'm') {
		if (symbol) {
			let argArray = amount.split(symbol);
			let decimal = parseInt(argArray[1].replace(/[^a-zA-Z0-9]/g, '')) * 100000;
			let main = parseInt(argArray[0].replace(/[^a-zA-Z0-9]/g, '')) * 1000000;
			return (main+decimal);
		}
		else {
			let cleanedArg = parseInt(amount.replace(/[^a-zA-Z0-9]/g, ''));
			return cleanedArg*1000000;
		}
	}
	else if (type === 'b') {
		if (symbol) {
			let argArray = amount.split(symbol);
			let decimal = parseInt(argArray[1].replace(/[^a-zA-Z0-9]/g, '')) * 1000000;
			let main = parseInt(argArray[0].replace(/[^a-zA-Z0-9]/g, '')) * 1000000000;
			return (main+decimal);
		}
		else {
			let cleanedArg = parseInt(amount.replace(/[^a-zA-Z0-9]/g, ''));
			return cleanedArg*1000000000;
		}
	}
}

function processMoneyAmount(arg1, arg2) {
	if (arg2) {
		if (arg2 == 'k') {
			if (arg1.includes(".")) {
				return processMoneyArguments(arg1, 'k', '.');
			}
			else if (arg1.includes(",")) {
				return processMoneyArguments(arg1, 'k', ',');
			}
			else {
				return processMoneyArguments(arg1, 'k');
			}
		}
		else if (arg2 == 'm') {
			if (arg1.includes(".")) {
				return processMoneyArguments(arg1, 'm', '.');
			}
			else if (arg1.includes(",")) {
				return processMoneyArguments(arg1, 'm', ',');
			}
			else {
				return processMoneyArguments(arg1, 'm');
			}
		}
		else if (arg2 == 'mil') {
			if (arg1.includes(".")) {
				return processMoneyArguments(arg1, 'm', '.');
			}
			else if (arg1.includes(",")) {
				return processMoneyArguments(arg1, 'm', ',');
			}
			else {
				return processMoneyArguments(arg1, 'm');
			}
		}
		else if (arg2 == 'b') {
			if (arg1.includes(".")) {
				return processMoneyArguments(arg1, 'b', '.');
			}
			else if (arg1.includes(",")) {
				return processMoneyArguments(arg1, 'b', ',');
			}
			else {
				return processMoneyArguments(arg1, 'b');
			}
		}
		else if (arg2 == 'bil') {
			if (arg1.includes(".")) {
				return processMoneyArguments(arg1, 'b', '.');
			}
			else if (arg1.includes(",")) {
				return processMoneyArguments(arg1, 'b', ',');
			}
			else {
				return processMoneyArguments(arg1, 'b');
			}
		}
	}
	else {
		if (arg1[arg1.length-1] == 'k') {
			let argSubstring = arg1.substring(0, arg1.length-1);
			if (argSubstring.includes(".")) {
				return processMoneyArguments(argSubstring, 'k', '.');
			}
			else if (argSubstring.includes(",")) {
				return processMoneyArguments(argSubstring, 'k', ',');
			}
			else {
				return processMoneyArguments(argSubstring, 'k');
			}
		}
		else if (arg1[arg1.length-1] == 'm') {
			let argSubstring = arg1.substring(0, arg1.length-1);
			if (argSubstring.includes(".")) {
				return processMoneyArguments(argSubstring, 'm', '.');
			}
			else if (argSubstring.includes(",")) {
				return processMoneyArguments(argSubstring, 'm', ',');
			}
			else {
				return processMoneyArguments(argSubstring, 'm');
			}
		}
		else if (arg1.substring(arg1.length, arg1.length-3) == 'mil') {
			let argSubstring = arg1.substring(0, arg1.length-3);
			if (argSubstring.includes(".")) {
				return processMoneyArguments(argSubstring, 'm', '.');
			}
			else if (argSubstring.includes(",")) {
				return processMoneyArguments(argSubstring, 'm', ',');
			}
			else {
				return processMoneyArguments(argSubstring, 'm');
			}
		}
		else if (arg1.substring(arg1.length, arg1.length-3) == 'bil') {
			let argSubstring = arg1.substring(0, arg1.length-3);
			if (argSubstring.includes(".")) {
				return processMoneyArguments(argSubstring, 'b', '.');
			}
			else if (argSubstring.includes(",")) {
				return processMoneyArguments(argSubstring, 'b', ',');
			}
			else {
				return processMoneyArguments(argSubstring, 'b');
			}
		}
		else if (arg1[arg1.length-1] == 'b') {
			let argSubstring = arg1.substring(0, arg1.length-1);
			if (argSubstring.includes(".")) {
				return processMoneyArguments(argSubstring, 'b', '.');
			}
			else if (argSubstring.includes(",")) {
				return processMoneyArguments(argSubstring, 'b', ',');
			}
			else {
				return processMoneyArguments(argSubstring, 'b');
			}
		}
		else {
			return parseInt(arg1.replace(/[^a-zA-Z0-9]/g, ''));
		}
	}
};

function searchForAlias (obj, alias) {
	let result;
	Object.keys(obj).forEach(function (commandInner){
		if (commands[commandInner].aliases.includes(alias)) {
			return result = commands[commandInner].name;
		}
		else {
			return undefined;
		}
	})
	return result;
}