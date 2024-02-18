const USE_AN_ARRAY_TO_STORE_A_COLLECTION_OF_DATA = () => {
  //assign the array at least 5 elements
  //must contain at least 1 STRING, 1 NUMBER, and 1 BOOLEAN
  let yourArray = ["sam", 72, true, "donald", "duck"]; // Change this line
  console.log(yourArray);
};
// USE_AN_ARRAY_TO_STORE_A_COLLECTION_OF_DATA();

const ACCESS_AN_ARRAYS_CONTENTS_USING_BRACKET_NOTATION = () => {
  let myArray = ["a", "b", "c", "d"];
  // Only change code below this line
  myArray[1] = "teststring";
  // Only change code above this line
  console.log(myArray);
};
// ACCESS_AN_ARRAYS_CONTENTS_USING_BRACKET_NOTATION();

const ADD_ITEMS_TO_AN_ARRAY_WITH_PUSH_AND_UNSHIFT = () => {
  function mixedNumbers(arr) {
    // Only change code below this line
    arr.push(7, "VIII", 9);
    arr.unshift("I", 2, "three");
    // Only change code above this line
    return arr;
  }

  console.log(mixedNumbers(["IV", 5, "six"]));
};
// ADD_ITEMS_TO_AN_ARRAY_WITH_PUSH_AND_UNSHIFT();

const REMOVE_ITEMS_FROM_AN_ARRAY_WITH_POP_AND_SHIFT = () => {
  function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }

  console.log(popShift(["challenge", "is", "not", "complete"]));
};
// REMOVE_ITEMS_FROM_AN_ARRAY_WITH_POP_AND_SHIFT();

const REMOVE_ITEMS_USING_SPLICE = () => {
  //splice can take up to 3 params, onlly tallking about first two
  // 1st param is the starting index of the removal
  // 2nd param is the number of index to delete starting at the first param index
  const EXAMPLE_ONE = () => {
    let array = ["today", "was", "not", "so", "great"];
    array.splice(2, 2);
    console.log(array);
  };
  EXAMPLE_ONE();

  //splice() also can return a new array containing those removed elements
  const EXAMPLE_TWO = () => {
    let array = ["I", "am ", "feeling", "reallly", "happy"];
    let newArrayFromRemovedElements = array.splice(2, 3);
    console.log(array);
    console.log(newArrayFromRemovedElements);
  };
  EXAMPLE_TWO();

  //remove elements fromaarr so that it only contains elements that sum to 10
  const arr = [2, 4, 5, 1, 7, 5, 2, 1];
  const REAL_EXAMPLE = (theSplice) => {
    // const arr = [2, 4, 5, 1, 7, 5, 2, 1];
    // Only change code below this line
    // arr.splice(1, 4);
    theSplice;
    //create a function to sum up the remaining elements
    // use aa return statment so I can console log the function while passing arr.splice as an argument

    let sum = 0;

    for (let i = 0; i < arr.length; i += 1) {
      // for as long as "i" is less the length of the array in indexes, perform i = i + 1
      //this takes every item in the array and adds it to the "sum" variable
      sum += arr[i];
    }
    return sum;

    // Only change code above this line
  };
  let result = REAL_EXAMPLE(arr.splice(1, 4));
  console.log(result);
};
// REMOVE_ITEMS_USING_SPLICE();

const ADD_ITEMS_USING_SPLICE = () => {
  //third param can have more than one element
  //element or elements in third parameter will add to that array in that current position
  const CONTAINED_EXAMPLE = () => {
    const numbers = [10, 11, 12, 12, 15];
    const startIndex = 3;
    const amountToDelete = 1;

    numbers.splice(startIndex, amountToDelete, 13, 14);
    //will remove that second 12 and add 13, and 14 to the array
    console.log(numbers);
  };
  CONTAINED_EXAMPLE();
  function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    // Only change code above this line
    return arr;
  }

  console.log(
    htmlColorNames([
      "DarkGoldenRod",
      "WhiteSmoke",
      "LavenderBlush",
      "PaleTurquoise",
      "FireBrick",
    ])
  );
};
// ADD_ITEMS_USING_SPLICE();

const COPY_ARRAY_ITEMS_USING_SLICE = () => {
  //slice takes a coppy of the array with 2 parameters
  // - first one is the index at which to begin extraction
  // - second one is the index at which to stop extraction (does not include this one that it lands on)
  //this leaves the original array untouched while returning a new array with the elements that were targeted
  const EXAMPLE_ONE = () => {
    let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];
    let todaysWeather = weatherConditions.slice(1, 3);
    console.log(todaysWeather);
  };
  EXAMPLE_ONE();

  const EXAMPLE_TWO = () => {
    function forecast(arr) {
      // Only change code below this line
      let arrayCopy = arr.slice(2, 4);

      return arrayCopy; //returning the new array with removed target elements which is stored as the variable arrayCopy
    }

    // Only change code above this line
    //when the console log calls the forecast function, it will return arr(in this case arr =["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"]).slice(2, 4)
    console.log(
      forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
    );
  };
  EXAMPLE_TWO();
};
// COPY_ARRAY_ITEMS_USING_SLICE();

const COPY_AN_ARRAY_WITH_SPREAD_OPERATOR = () => {
  function copyMachine(arr, num) {
    let newArr = []; //init empty array that we will push the other arrays in
    while (num >= 1) {
      //while num is greater than or equal to 1 execute code below then decrement. when num hits zero it will return the newArr which will contain the copied arrays inside it

      // Only change code below this line
      newArr.push([...arr]);
      // Only change code above this line
      num--;
    }
    return newArr;
  }

  console.log(copyMachine([true, false, true], 2));
};
// COPY_AN_ARRAY_WITH_SPREAD_OPERATOR();

const COMBINE_ARRAYS_WITH_THE_SPREAD_OPERATOR = () => {
  //spread operator also has the ability to insert all the elements of one array into another, at any index
  let thisArray = ["sage", "rosemary", "parsley", "thyme"];
  let thatArray = ["basil", "cilantro", ...thisArray, "coriander"];
  console.log(thatArray);

  function spreadOut() {
    let fragment = ["to", "code"];
    let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
    return sentence;
  }
  console.log(spreadOut());
};
// COMBINE_ARRAYS_WITH_THE_SPREAD_OPERATOR();

const CHECK_FOR_THE_PRESENCE_OF_AN_ELEMENT_WITH_INDEXOF = () => {
  //use indexof() to check if an element exists in arr.
  const EXAMPLE_ONE = (...args) => {
    //using rest parameter because I don't know how many params are being passed
    let fruits = ["apples", "pears", "oranges", "peaches", "pears"];
    let newArr = []; // init empty array that I will push the values from the indexOf() method

    let someAmountOfArgs = [...args];
    // using the spread operator to create a new array called "someAmountOfArgs" containing all elements passed as arguments to the EXAMPLE_ONE function

    for (let i = 0; i < someAmountOfArgs.length; i++) {
      //using forLoop to iterate through the someAmountOfArgs array
      // let x = fruits.indexOf(i); // i was very close i should've done someAmountofArgs[i] because indexOf() takes an element as a parameter and someAmountofArgs stores an array of an unknown amount of elements
      let positionInFruitArray = fruits.indexOf(someAmountOfArgs[i]);

      if (positionInFruitArray >= 0) {
        positionInFruitArray = true;
      } else {
        positionInFruitArray = false;
      }

      newArr.push([someAmountOfArgs[i], positionInFruitArray]);
    }

    return newArr;
    //return newArr means that the result of the EXAMPLE_ONE function is the array "newArr"
    // when I can EXAMPLE_ONE("oranges", "pears", "dates"), the function processes the input arguments and performs the fruits.indexOf() operations, then populates the "newArr" array with the push method and then returns this array to log the result
  };

  let result = EXAMPLE_ONE("oranges", "pears", "dates");
  console.log(result);

  /*****/
  /*****/
  /****MAIN EXAMPLE****/
  /*****/
  /*****/

  //defined a function, quick check
  //takes an array and elementss as parameters
  //modify func so that it returns true if the passed element exists on the array, and false if it does not
  function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) >= 0) {
      return true;
    } else {
      return false;
    }
    // Only change code above this line
  }

  console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
};
// CHECK_FOR_THE_PRESENCE_OF_AN_ELEMENT_WITH_INDEXOF();

const ITERATE_THROUGH_ALL_AN_ARRAYS_ITEMS_USING_FOR_LOOPS = () => {
  //using for loop for best control over iterating through an array
  const EXAMPLE_ONE = () => {
    function greaterThanTen(arr) {
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        //1st we initilize i as 0, and for as long as "i" is less than arr.length which is the number of elements in that array, we will increment i which will move to the next position or index of the array
        if (arr[i] > 10) {
          newArr.push(arr[i]);
          //if arr @ index "i" is greater than 10, push that arr @ index "i" into the newArr array
        }
      }
      return newArr;
      //will return newArr consisting of elements whose numbers are greater than 10 from the passed array argument in the function call below
    }

    let exOneAnswer = greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
    console.log(exOneAnswer);
  };
  EXAMPLE_ONE();

  /*****/
  /*****/
  /****MAIN EXAMPLE****/
  /*****/
  /*****/

  //defined a function filtered array
  //takes arr which is a nested array as a param
  //also takes elem as 2nd param
  //elem represents an element that may or may not be present on one or more of the nested sub array
  //modify function using for loop to return a filtered version of the array that was passed as an argument so that there are no sub arrays that don't have the element specified
  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      //creating for loop to loop through the number of elements in arr param
      if (arr[i].indexOf(elem) === -1) {
        //if whatever index we're on in the iterations has a value of -1 through using the indexOf() method performed on elements of that sub array, that current iteration that satifies the condition... push that sub array into new array

        newArr.push(arr[i]);
        //this should push the first two arrays because the .indexOf() method performed on arr[0] and arr[1] will have a -1 index position since 18 doesn't exist in the array
      }
    }
    // Only change code above this line
    return newArr;
  }

  console.log(
    filteredArray(
      [
        [10, 8, 3],
        [14, 6, 23],
        [3, 18, 6],
      ],
      18
    )
  );
};
// ITERATE_THROUGH_ALL_AN_ARRAYS_ITEMS_USING_FOR_LOOPS();

const CREATE_COMPLEX_MULTIDIMENSIONAL_ARRAYS = () => {
  const EXAMPLE_ONE = () => {
    let nestedArray = [
      ["deep"],
      [["deeper"], ["deeper"]],
      [[["deepest"], ["deepest"]], [[["deepest-est?"]]]],
    ];
    //console log deepest-est using bracket notation
    console.log(nestedArray[2][1][0]);
  };
  EXAMPLE_ONE();

  //modify the array so that...
  //third level has deep
  //fourth level has deeper
  //fifth level has deepest
  let myNestedArray = [
    // Only change code below this line
    ["unshift", false, 1, 2, 3, "complex", "nested"],
    ["loop", "shift", 6, 7, 1000, "method", ["deep", false, true]],
    [
      "concat",
      false,
      true,
      "spread",
      "array",
      [
        ["deeper", true, "slicey"],
        ["iterate", 1.3849, 7, "8.4876"],
        [["deepest"]],
      ],
    ],
    ["mutate", 1327.98, "splice", "slice", "push"],
    ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth"],
    // Only change code above this line
  ];
  console.log(myNestedArray[2][5][2][0]);
};
// CREATE_COMPLEX_MULTIDIMENSIONAL_ARRAYS();

const ADD_KEY_VALUE_PAIRS_TO_JAVASCRIPT_OBJECTS = () => {
  //objects are just key-value pairs
  //objects are pieces of data values mapped to unique identifies call properties (keys)
  const EXAMPLES = () => {
    const tekkenCharacter = {
      player: "Hwoarang",
      fightingStyle: "Tae Kwon Doe",
      human: true,
    };

    //code above defines a tekken character that has three properties (player, fightStyle, human)
    //i can add property origin by assigning "origin" to the object using dot or bracket notation

    //using dot notation
    tekkenCharacter.origin = "South Korea";

    //using bracket notation
    tekkenCharacter["hair colour"] = "dyed orange"; //bracket notation good when prop is more than one word

    //I can also declare a const and have the name of the prop stored in it and use bracket notation with the const variable in it
    const eyes = "eye colour";
    tekkenCharacter[eyes] = "brown";

    console.log(tekkenCharacter);

    //A foods object has been created with three entries. Using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.
    const foods = {
      apples: 25,
      oranges: 32,
      plums: 28,
    };

    // Only change code below this line
    foods.bananas = 13;
    foods.grapes = 35;
    foods.strawberries = 27;
    // Only change code above this line

    console.log(foods);
  };
  EXAMPLES();
};
ADD_KEY_VALUE_PAIRS_TO_JAVASCRIPT_OBJECTS();

const MODIFY_AN_OBJECT_NESTED_WITHIN_AN_OBJECT = () => {
  let userActivity = {
    id: 23894201352,
    date: "January 1, 2017",
    data: {
      totalUsers: 51,
      online: 42,
    },
  };

  // Only change code below this line
  userActivity["data"]["online"] = 45;
  // Only change code above this line

  console.log(userActivity);
};
MODIFY_AN_OBJECT_NESTED_WITHIN_AN_OBJECT();

const ACCESS_PROPERTY_NAMES_WITH_BRACKET_NOTATION = () => {
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27,
  };

  function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem];
    // Only change code above this line
  }

  console.log(checkInventory("apples"));
};
ACCESS_PROPERTY_NAMES_WITH_BRACKET_NOTATION();

const USE_DELETE_KEYWORD_TO_REMOVE_OBJECT_PROPERTIES = () => {
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27,
  };

  // Only change code below this line
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;

  // Only change code above this line

  console.log(foods);
};
USE_DELETE_KEYWORD_TO_REMOVE_OBJECT_PROPERTIES();

const CHECK_IF_AN_OBJECT_HAS_A_PROPERTY = () => {
  let users = {
    Alan: {
      age: 27,
      online: true,
    },
    Jeff: {
      age: 32,
      online: true,
    },
    Sarah: {
      age: 48,
      online: true,
    },
    Ryan: {
      age: 19,
      online: true,
    },
  };

  function isEveryoneHere(userObj) {
    // Only change code below this line
    if (
      userObj.hasOwnProperty("Alan") &&
      userObj.hasOwnProperty("Jeff") &&
      userObj.hasOwnProperty("Sarah") &&
      userObj.hasOwnProperty("Ryan")
    ) {
      return true;
    } else {
      return false;
    }
    // Only change code above this line
  }
  console.log(isEveryoneHere(users));
};
CHECK_IF_AN_OBJECT_HAS_A_PROPERTY();

const ITERATE_THROUGH_THE_KEYS_OF_AN_OBJECT_WITH_FOR_IN_LOOP = () => {
  //use for..in loop to iterate through ALL the keys of an object
  const EXAMPLE_FOR_IN_LOOP = () => {
    const refrigerator = {
      milk: 1,
      eggs: 12,
    };
    for (const food in refrigerator) {
      //"food" refers to the keys "milk" and "eggs"
      console.log(food, refrigerator[food]);
      //REMEMBER: order is irrelevant in objects
    }
    //defined variable food in the loop head
    //the variable was set to each of object's key on eaach iteration
    //this results in each food's name being printed to console
  };
  EXAMPLE_FOR_IN_LOOP();

  //defined a function countOnline that accepts one parameter (allUsers). Use a for...in statement insdie the func to loop through allUsers object and return the number of users whoe online prepertyu is set to true
  const users = {
    Alan: {
      online: false,
    },
    Jeff: {
      online: true,
    },
    Sarah: {
      online: false,
    },
  };

  function countOnline(allUsers) {
    // Only change code below this line
    let count = 0;
    for (let key in allUsers) {
      // use the parameter in the parent function because countOnline(users) passes the users object as an argument through countOnline function
      //init count so i can add to this count
      if (allUsers[key]["online"]) {
        count++;
      }
    }
    return count;
    // Only change code above this line
  }

  console.log(countOnline(users));
};
ITERATE_THROUGH_THE_KEYS_OF_AN_OBJECT_WITH_FOR_IN_LOOP();

const GENERATE_AN_ARRAY_OF_ALL_OBJECT_KEYS_WITH_OBJECTKEY_METHOD = () => {
  //can generate an array which contains all the keys stored in an object using Object.keys() method
  //this method takes an object as an argument and returns an array of strings representing ecah prop in the object
  //REMEMBER: there's no specific order to the entries in the array

  //return statement stops the execution of a function and returns a value
  let users = {
    Alan: {
      age: 27,
      online: false,
    },
    Jeff: {
      age: 32,
      online: true,
    },
    Sarah: {
      age: 48,
      online: false,
    },
    Ryan: {
      age: 19,
      online: true,
    },
  };

  function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj);
    // Only change code above this line
  }

  console.log(getArrayOfUsers(users));
};
GENERATE_AN_ARRAY_OF_ALL_OBJECT_KEYS_WITH_OBJECTKEY_METHOD();

const MODIFY_AN_ARRAY_STORED_IN_AN_OBJECT = () => {
  //For objects you should know by now how to ....
  // - add
  // - modify
  // - remove key-value pairs
  // - check if a key exists
  // - iterate over all the keys in an object

  ////user contains 3 keys
  ////data which is one of the three keys has 5 keys
  ////friends is the key and it's value pair is an array containing strings as elements(people's names)

  ////finish the addFriend function: must satisfy these conditions
  ////takes "user" object and adds the name of the "friend" argument to the  array stored in user.data.friends and returns that array
  let user = {
    name: "Kenneth",
    age: 28,
    data: {
      username: "kennethCodesAllDay",
      joinDate: "March 26, 2016",
      organization: "freeCodeCamp",
      friends: ["Sam", "Kira", "Tomo"],
      location: {
        city: "San Francisco",
        state: "CA",
        country: "USA",
      },
    },
  };

  function addFriend(userObj, friend) {
    // Only change code below this line

    ///let's try...
    ///using .push(friend) to add that value when returns with friend argument which is pete in this case

    //init variable to store the target which is the friend's key
    let targetKey = userObj.data.friends;

    targetKey.push(friend);
    console.log(targetKey);
    return targetKey;

    // Only change code above this line
  }

  console.log(addFriend(user, "Pete"));
};
MODIFY_AN_ARRAY_STORED_IN_AN_OBJECT();
