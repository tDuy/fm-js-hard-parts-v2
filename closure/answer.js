// CHALLENGE 1
function createFunction() {
	return () => console.log('hello')
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
	return () => console.log(input)
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


function addByX(x) {
  return (input) => input + x
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// const x1 = addByTwo(1); // => should return 3
// const x2 = addByTwo(2); // => should return 4
// const x3 = addByTwo(3); // => should return 5
// console.log(x1,x2,x3);

// const addByThree = addByX(3);
// const y1 = addByThree(1); // => should return 4
// const y2 = addByThree(2); // => should return 5
// console.log(y1,y2);

// const addByFour = addByX(4);
// const z1 = addByFour(4); // => should return 8
// const z2 = addByFour(5); // => should return 9
// console.log(z1, z2);

// CHALLENGE 4
function once(func) {
	let result;
  let isCalled = false;
  
  return (params) => {
    if (isCalled) return result;
    
    result = func(params);
    isCalled =true;
    return result;
  }
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
	let counter = count;
  
  return (...args) => {
    counter--;
    if (counter === 0) {
      func(args);
    }
  }
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait) {
	
}


// CHALLENGE 7
function rollCall(names) {
	let index = 0;
  
  return () => {
    if (index === names.length) {
      console.log("Everyone accounted for");
      return;
    }
    
    console.log(names[index]);
    index++;
  }
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
	const result = {};
  return (param) => {
    if (param === magicWord) {
      return result;
    }
    
    const res = func(param);
    result[param] = res;
    return res;
  }
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
	let index = -1;
  return () => {
    index++;
    if (index > array.length - 1) {
      index = 0;
    }
    
    return array[index];
  }
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
function defineFirstArg(func, arg) {
	return (param) => func(arg, param);
}

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
	return (...args) => {
    const d = new Date();
    const result = func(args);
    return { [d.getTime()]: result };
  }
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {
	const keywords = {};
  return (...args) => {
    if (args.length === 1) {
      let result = args[0];
      for (const property in keywords) {
        result = result.replaceAll(property, keywords[property]);
      }
      return result;
    } else if (args.length === 2) {
      keywords[args[0]] = args[1];
    }
  }
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {
	let data = secret;
  return {
    getSecret: () => data,
    setSecret: (x) => { data = x ;}
  }
}

// /*** Uncomment these to check your work! ***/
// const obj = createSecretHolder(5)
// console.log(obj.getSecret()) // => returns 5
// obj.setSecret(2)
// console.log(obj.getSecret()) // => returns 2


// CHALLENGE 14
function callTimes() {
	let counter = 0;
  return () => ++counter;
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// let x1 = myNewFunc1(); // => 1
// let x2 = myNewFunc1(); // => 2
// let y1 = myNewFunc2(); // => 1
// let y2 = myNewFunc2(); // => 2
// console.log(x1, x2)
// console.log(y1, y2)


// CHALLENGE 15
function roulette(num) {
	let counter = 0;
  return () => {
    counter++;
    if (counter < num) return 'spin';
    if (counter === num) return 'win';
    return "pick a number to play again";
  }
}

// /*** Uncomment these to check your work! ***/
// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'


// CHALLENGE 16
function average() {
	const values = [];
  let currentAverage = 0;
  return (num) => {
    if (num === undefined) return currentAverage;
    values.push(num);
    currentAverage = values.reduce((total, cur) => {
      total += cur
      return total;
    }, 0) / values.length;
    return currentAverage;
  }
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  const tests = arrOfTests;
  return (funcToTest) => {
    for (const [input, output] of tests) {
      const result = funcToTest (input);
      if (result !== output) return false;
    }
    return true;
  }
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
function makeHistory(limit) {
	const history = [];
  return (str) => {
    if (str === "undo") {
      if (history.length === 0) return "nothing to undo";
      const action = history.pop();
      return `${action} undone`;
    } else {
      history.push(str);
      if (history.length > limit) history.shift();
      return `${str} done`;
    }
    
  }
}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'


// CHALLENGE 19
function blackjack(array) {
	const cards = array;
  
  return (x1, x2) => {
    let total = 0;
    return () => {
      if (total > 21) return "you are done!";
      if (total === 0) {
        total += x1 + x2;
        return total;
      }
      if (cards.length > 0) {  
      	total += cards.shift();
        if (total > 21) return 'bust';
        return total;
      }
    }
  }
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
