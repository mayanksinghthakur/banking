'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
console.log(accounts);
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//using the for each to display the each element  in the screen

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` 
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
    
  <div class="movements__value">${mov + '€'}</div>
  </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//to insert our  new element we will use insertAdjecentHTML
//so where we are using the this created tempalte we will generally make a elelment to reflect in the movement div which is saved as a containerMovement

const user = 'Steven Thomas Williams'; //so we generally to calculate the   username means ==>stw
//so here we want to calculate the username by getting the 1 letter of the name in small letter

//here we are using the the lower case method  and using split which will givw us the new array of Steven Thomas Williams and map method will  with the function will give us the starting letter of each letter
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    //so using our for each method we are creating the username and adding it to the object
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join(''); //here we are using join to join our starting letter of each letter  but here as stw
    //here split method returns a new array so we can do map
  });
};
createUsernames(accounts);
console.log(accounts);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];

//slice method we can alice a peace of array  copy of the array will be created
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); //prints from 2 till 3 and 4 will not be printed

console.log(arr.slice(-2)); //-2 is the second last element and returns two element
console.log(arr.slice(-1)); //-1 is the first last element

console.log(arr.slice(1, -2));

///splice method

//splice method will mutatte the arr

// console.log("splice method value ");
// console.log(arr.splice(2));
console.log('original array change by splice');
console.log(arr.splice(-1)); //will remove last element of arr
console.log(arr);

//reverse

arr = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['f', 'g', 'h', 'i', 'j'];

console.log('without changes');
console.log(arr2);
console.log('reverse method also mutate array');
console.log(arr2.reverse());

//concat also dont mutate array

const letters = arr.concat(arr2);

console.log(letters);

//spread does not mutate the variable
console.log(...arr, arr2);

//join method
//Adds all the elements of an array into a string, separated by the specified separator string.
console.log(letters.join('-'));

//////////////////////////////////////////////////////////////////////////////////at
const arr3 = [23, 45, 67, 89];
//before we where doing like this to access certain position array
console.log(arr3[0]);

console.log(arr3.at(0));

console.log(arr3[arr3.length - 1]);

console.log(arr.slice(-1)); //-1 to get the last position of an array

//getting value using at of last array value
console.log(arr3.at(-1));

//assume that negative value are here withdraws and positive values are deposite
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

////////////////////for of loop
//using entries to get the index value
///////////////////////////////////////////////////////////////////////////remember that here first array value is index and 2 is the current array element
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`movement ${i + 1}:you deposited ${movement}`);
  } else {
    console.log(`movement ${i + 1}:you withdrew ${Math.abs(movement)}`); //here Math.abs(movement) will return a only value without the - or +
  }
}

/////////////////////////////////for each loop
//for each
//forEach requires a higher order function which is having a callback function inside it

//here for each function is a higher order function and we are calling a callback function which will call a arr and pass function
console.log('------------for Each----------------');
////////////////////////remember that forEach wil always loop over the full array and it will not be able to stop that
//so remeber that order here will not change for
//first parameter is current array element 2 is index 3 is arr name doesnot matters here
//remember that here first is  current array element 2  is array index
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`movement ${i + 1}:you deposited ${mov}`);
  } else {
    console.log(`movement ${i + 1}:you withdrew ${Math.abs(mov)}`);
  }
});

//each function is called
//0:function(200)
//1:function(450)
//2:function(-400)
//3:function(3000)
//0:function(200)
//0:function(200) etc

/////////////////////////////////////////////////////////////////////////////////forEach with map and sets

//using for each with map
const currencies1 = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Europe'],
  ['GBP', 'PoundSterling'],
]); //here first value is the key and second is the value

currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

//////////////////////////////////////////using for each with set
//here set dont has a key so we will not use a key in the console
const currenciesUnique = new Set(['USD', 'EUR', 'GBP']);
console.log(
  currenciesUnique.forEach(function (value, _, map) {
    console.log(`${value}: ${value}`);
  })
);

////////////////////////////////////////////////////////////////////////////////////dom maupulation using for each method

//so loging in and logging out means that we are changing the opacity of the of main
////////////////////////////////////////////////////////////////////////////////map method in the js will create a new array

const euroToUsd = 1.1;
//new array will be created by map
// const movementUSD=movements.map(function(mov){
//   return mov*euroToUsd
// })

const movementUSD = movements.map(mov => mov * euroToUsd);

console.log(movementUSD);

const movementsDescrition = movements.map(
  (mov, i) =>
    //this is the shortest thing that we are using to write a shortest progrmmae
    `movement ${i + 1}:you ${mov > 0 ? 'diposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
  //here only the difference in the statement is taht we are using the with same statement but the different result so instead of using this we could use the other thing which we generally wants
  // if (mov > 0) {
  //   return `movement ${i + 1}:you deposited ${mov}`
  // } else {
  //   return `movement ${i + 1}:you withdrew ${Math.abs(mov)}`
  // }
);

console.log(movementsDescrition);

///////////////////////////////////////////////////////////filter for elements that satisfy a certain condition.
//remember that we are using a filter method to meet a certain condition and we generally want to cheack a certain condition and we will get the result as a only posotive values
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const withdrawals = movements.filter(function (move) {
  return move < 0;
});

console.log(withdrawals);

/////////////////////////////////////////////////////////////////reduce we use the reduce method to essentially boil down all the elements in an array to one single value.
//for ex adding all element

//accumulater or acc  is here the first parameter that take all the value saved inside it
//const balance = movements.reduce((acc, curr) => acc + curr, 0); //here 0 is the initial value of  accumulater

// console.log(balance);
//function to calculate the balnce and showing the balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} €`;
};

//calling the function to get the total balance

/////////////////////////////////////////////////////////////////////////chaining of methods
//chaining of the methods means that we generally wants to call defferent methods
//so here we did all three data transformation in only one go in all deposits
console.log(movements);
let euroToUsd1 = 1.1;
//here we performed an operation on the moovements array and we got he addtion of the movements array
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    //here this is cheacking that code here works properly by cheacking values of the array
    console.log(i, arr);
    return mov * euroToUsd1;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

///remeber that we passed movemetns here first but we were not able to access value of interset so to use interset inside the accounts we will pass acc
const calcDisplaySummary = function (acc) {
  const incomes = movements
    .filter(function (mov) {
      return mov > 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements.filter(function () {
    const outcome = movements
      .filter(function (mov) {
        return mov < 0;
      })
      .reduce(function (acc, mov) {
        return acc + mov;
      }, 0);
    labelSumOut.textContent = `${Math.abs(outcome) + '€'}`;
  });
  const interest = acc.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .map(function (diposit) {
      return (diposit * acc.interestRate) / 100;
    })
    //suppose that we are adding only the interest which is only tking the intereset more than 1 or equal to 1
    .filter(function (int, i, arr) {
      console.log(arr);
      return int >= 1;
    })
    .reduce(function (acc, int) {
      return acc + int;
    }, 0);
  labelSumInterest.textContent = `${interest}€`;
};

///////////////////////////////////////////////////////////////////////////find method////////////////////////////
// find method will retrieve the first element of an array and filter method will return all the method of an array and filter method returns new array and find returns only element

const firstWithdraw = movements.find(function (mov) {
  return mov < 0;
});

console.log(firstWithdraw);

console.log(accounts);
//find method generally to find the element if the condition is true
//so we could also find the object inside the method that we want to search in the object and it retur the first element of that object

//here find method will loop over each object and finds same property
const account = accounts.find(function (acc) {
  return acc.owner === 'Jessica Davis';
});

//here this is containing the data
console.log(account);

const updateUI = function (acc) {
  //dispaly movements
  //here we are passing the value of current account movements that we  used to login so  each operation will be done after the login
  displayMovements(acc.movements);
  //dispaly balance
  calcDisplayBalance(acc);
  //dispaly summury
  calcDisplaySummary(acc);
  //balance
};
//////////////////////////////////////////////////////////////////////////////user authentication
// cheacking user pin to show the info
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //prevent form from being submitted and when we clicked login will be reflected in the screen
  e.preventDefault();
  //here we will save the information of accounts into the  currentAccount
  //and here we are cheacking weather the input entered by the user is same as accounts username
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // cheacking value inside the currentAccount
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display ui and welcome message
    labelWelcome.textContent = `welcome back ,${
      currentAccount.owner.split(' ')[0]
    }`; //here [0] will reflect the first element of the current acount
    containerApp.style.opacity = 100;

    //clear input field after logging
    inputLoginUsername.value = inputLoginPin.value = '';
    //for hiding the cursor that reflect in the input box
    inputLoginPin.blur();
    //update ui
    updateUI(currentAccount);
  }
});

//////////////////////////////////////////////////////////////////////////implimenting a transfer to the user/////////////
btnTransfer.addEventListener('click', function (e) {
  //here prevent default is used to prevent working of the form because without this our page will get reload again
  e.preventDefault();
  // this is the value which is recceived from a input and we get a amount
  const amount = Number(inputTransferAmount.value);

  //getting the reciver username of a customer and we are finding the user input and finding the entered data into the acounts array
  const reciverAcc = accounts.find(function (acc) {
    return acc.username === inputTransferTo.value;
  });
  //clearing transfer input box
  inputTransferAmount.value = '';
  inputTransferTo.value = '';

  //cheacking weather a user account is greater than the transferring amount

  //cheacking weather reciver account is there or notby adding ?
  if (
    amount > 0 &&
    reciverAcc &&
    currentAccount.balance >= amount &&
    reciverAcc?.username !== currentAccount.username
  ) {
    //adding a negative amount
    currentAccount.movements.push(-amount);
    //adding a positive amount
    reciverAcc.movements.push(amount);

    //updating ui
    updateUI(currentAccount);
  }
});

//find index method
// find index will return the index of the current element in the array

//closing an account, means to basically just delete that account object from the accounts array.

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value)===currentAccount.pin
  ) {
    //
    const index=accounts.findIndex(function(acc){
      return acc.username===currentAccount.username
    })
    console.log(index);
    /**and splice it at a certain index,which is the index that we're gonna calculate in a second,and we will remove exactly one element, all right?And then the splice method actually mutates */
  //   accounts.splice(index,1)
    
   }
});
