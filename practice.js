// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var countMultiplyBy5 = 0;

  _.each(numbers, function(x) {
    if (x % 5 === 0) {
      countMultiplyBy5++;
    }
  });

  return countMultiplyBy5;

};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var certainFruit = _.filter(fruits, function(x) {
    return x === targetFruit;

  });

  return certainFruit;

};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var onlyWithP = _.filter(fruits, function(item) {
    return item.startsWith(letter);

  });

  return onlyWithP;

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var cookiesOnly = _.filter(desserts, function(item) {
    return item.type === 'cookie';
  });

  return cookiesOnly;

  // var newCookie = [];
  // for (var i = 0; i < desserts.length; i++) {
  //   if (desserts[i].type === 'cookie') {
  //     for (var c = 0; c < desserts[i].type.length; c++) {
  //       newCookie.push(desserts[i][c]);
  //     }
  //   }
  // }

};

/*
 *
 *  _.reduce
 *
 */

// var getArrayOfCookie = function(cookiesOnly) {
//   var getCookie = _.reduce()

// };



// return the total price of all products.
var sumTotal = function(products) {
  var totalPrice = _.reduce(products, function(start, num, products) {
    var turnIntoNum = Number(num.price.slice(1));
    return start + turnIntoNum;
  }, 0);

  return totalPrice;

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var countDessert = _.reduce(desserts, function(newObj, typeOf, desserts) {
    var typeOfDessert = typeOf.type;
    if (newObj[typeOfDessert] === undefined) {
      newObj[typeOfDessert] = 1;
    } else {
      newObj[typeOfDessert]++;
    }

    return newObj;
  }, {});

  return countDessert;

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var releaseIn90s = _.reduce(movies, function(newArr, typeOf, movies) {
    var yearMovieReleased = typeOf.releaseYear;
    var movie = typeOf.title;
    if (yearMovieReleased >= 1990 && yearMovieReleased <= 2000) {
      newArr.push(movie);
    }
    return newArr;

  }, []);

  return releaseIn90s;

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var shorterTime = _.reduce(movies, function(isItShorter, diffMovie, movies) {
    var movieRunTime = diffMovie.runtime;
    if (movieRunTime < timeLimit) {
      isItShorter = true;
    }

    return isItShorter;
  }, false);

  return shorterTime;

};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var capsFruit = _.map(fruits, function(item, i, fruits) {
    return item.toUpperCase();
  });
  return capsFruit;

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var isThereGlutten = _.map(desserts, function(item, i, desserts) {
    var arrOfIngreidents = item.ingredients;

    var newDesserts = {};
    newDesserts['name'] = item.name;
    newDesserts['ingredients'] = arrOfIngreidents;
    newDesserts['type'] = item.type;

    //need to check is there is flour in the ingreidients
    var isThereFlour = _.reduce(arrOfIngreidents, function(flourTotF, ingreidient) {
      if (ingreidient === 'flour') {
        flourTotF = true;
      }

    }, false);

    if (isThereFlour) {
      newDesserts['glutenFree'] = false;
    } else {
      newDesserts['glutenFree'] = true;
    }

    return newDesserts;
  });

  return isThereGlutten;

};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  var newObjWithCoupon = _.map(groceries, function(eachItem, index, groceries) {
    var newPrice = Number(eachItem.price.slice(1)) - (Number(eachItem.price.slice(1)) * coupon);

    var newGroceries = {};
    newGroceries['id'] = eachItem.id;
    newGroceries['product'] = eachItem.product;
    newGroceries['price'] = eachItem.price;
    newGroceries['salePrice'] = '$' + (Math.round(newPrice * 100) / 100);

    return newGroceries;


  });

  return newObjWithCoupon;

};
