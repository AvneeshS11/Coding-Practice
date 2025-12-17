function add(a, b, callback) {
  setTimeout(() => {
    let result = a + b;
    console.log("Addition:", result);
    callback(result);
  }, 1000);
}

function multiplyBy3(num, callback) {
  setTimeout(() => {
    let result = num * 3;
    console.log("Multiplication:", result);
    callback(result);
  }, 2000);
}

function subtract4(num, callback) {
  setTimeout(() => {
    let result = num - 4;
    console.log("Subtraction:", result);
    callback(result);
  }, 3000);
}

function divideBy2(num, callback) {
  setTimeout(() => {
    let result = num / 2;
    console.log("Division:", result);
    callback(result);
  }, 4000);
}

// Callback Hell
add(5, 10, function(result1) {
  multiplyBy3(result1, function(result2) {
    subtract4(result2, function(result3) {
      divideBy2(result3, function(finalResult) {
        console.log("Final Result:", finalResult);
      });
    });
  });
});
