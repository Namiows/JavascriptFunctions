//README FIRST

function compareTrue(aboolean, bboolean) {
  if (aboolean === true && bboolean === true) {
    return true
  }else{
    return false;
  }
}

function calcArea(base, height) {
  let result = (base * height) / 2;

  return result;
}

function splitSentence(word) {
  let text = word.split(' ',5)
  return text;
}

function concatName(numbers) {
  let concatenado = '';
  for (let i = 0; i < numbers.length; i += 1) {
    concatenado = numbers[numbers.length-1] +", "+ numbers[0];
  }
  return concatenado;
}

function footballPoints(wins, ties) {
  let pontosTotais = wins * 3 + ties;
  return pontosTotais
}

function highestCount(numbers) {
	let highNum = numbers[0];
	let repeticao = 0;
	for (let i = 0; i < numbers.length; i += 1) {
	  if (numbers[i] > highNum) {
		highNum = numbers[i];
	  }
	}
	for (let i = 0; i < numbers.length; i += 1) {
	  if (highNum == numbers[i]) {
		repeticao += 1;
	  }
	}
	  return repeticao;
  }

function catAndMouse(mouse) {
  let distanciaC1 = Math.abs(mouse - cat1);
  let distanciaC2 = Math.abs(mouse - cat2);
  let msg;
  if (mouse) {
    if (distanciaC1 > distanciaC2) {
      msg = "cat2";
    } else if (distanciaC2 > distanciaC1) {
      msg = "cat1";
    } else {
      msg = "os gatos trombam e o rato foge";
    }
  }
  return msg;
}

function fizzBuzz(numbers) {
  let result = [];
  for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] % 3 == 0 && numbers[i] % 5 == 0){
      result[i] = "fizzBuzz"
    }else if (numbers[i] % 5 == 0){
      result[i] = "buzz";
    }else if (numbers[i] % 3 == 0) {
      result[i] = "fizz";
    }else if (numbers[i] % 5 != 0 && numbers[i] % 3 != 0) {
      result[i] = "bug!";
    }
  }
  return result;
}

function encode(word) {
  let newLetter = "";
  for ( let i = 0; i < word.length; i = i + 1) {
    switch (word[i]) {
      case 'a':
        newLetter = newLetter + '1';
        break;
      case 'e':
        newLetter = newLetter + '2';
        break;
      case 'i':
        newLetter = newLetter + '3';
        break;
      case 'o':
        newLetter = newLetter + '4';
        break;
      case 'u':
        newLetter = newLetter + '5';
        break;
      default:
        newLetter = newLetter + word[i];
    }
  }
  return newLetter;
}

function decode(word) {
  let newLetter = "";
  for ( let i = 0; i < word.length; i = i + 1) {
    switch (word[i]) {
      case '1':
        newLetter = newLetter + 'a';
        break;
      case '2':
        newLetter = newLetter + 'e';
        break;
      case '3':
        newLetter = newLetter + 'i';
        break;
      case '4':
        newLetter = newLetter + 'o';
        break;
      case '5':
        newLetter = newLetter + 'u';
        break;
      default:
        newLetter = newLetter + word[i];
    }
  }
  return newLetter;
}

function techList(list, item) {
  if (list.length === 0) {
    return 'Vazio!';
  }
  let nameTech = [];
  let sortedList = list.sort();
  for (let i = 0; i < sortedList.length; i += 1) {
    nameTech[i] = {
      name: item,
      tech: sortedList[i],
    };
  }
  return nameTech;
}

function timesCount(list) {
  let howManyTimes = {};
  for (let i in list) {
    if (list[i] in howManyTimes) {
      howManyTimes[list[i]] += 1;
    } else {
      howManyTimes[list[i]] = 1;
    }
  }
  let result = howManyTimesResult(howManyTimes);
  return result;
}

function checkNumbers(numbers) {
  let test = timesCount(numbers);
  if (test) {
    return true;
  }
  for (let i in numbers) {
    if (numbers[i] > 9 || numbers[i] < 0) {
      return true;
    }
  }
  return false;
}

function generatePhoneNumber(n) {
  let result = '';
  if (n.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else if (checkNumbers(n)) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    result = `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
  }
  return result;
}

function triangleCheck(a, b, c) {
  let result = false;
  let condA = (a < (b + c)) && (a > Math.abs(b - c));
  let condB = (b < (a + c)) && (b > Math.abs(a - c));
  let condC = (c < (b + a)) && (c > Math.abs(b - a));

  if (condA && condB && condC) {
    result = true;
  }
  return result;
}

function hydrate(string) {
  let numbers = string.replace(/\D/g, '');
  let soma = 0;
  let msg = '';
  for (let i = 0; i < numbers.length; i += 1) {
    soma += parseInt(numbers[i], 10);
  }
  if (soma === 1) {
    msg = '1 copo de água';
  } else if (soma > 1) {
    msg = `${soma} copos de água`;
  }
  return msg;
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
