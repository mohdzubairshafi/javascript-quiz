const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    answer: "4. all of the above",
  },
  {
    questionText: "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
  {
    questionText: "What is the output of the following code? \nconsole.log(Math.round(2.5))",
    options: ["1. 2", "2. 3", "3. 2.5", "4. 3.5"],
    answer: "2. 3",
  },
  {
    questionText: "What is the difference between let and var in JavaScript?",
    options: [
      "2. let can be re declared, but var cannot",
      "3. var has function scope, but let has block scope",
      "4. let has function scope, but var has block scope",
    ],
    answer: "3. var has function scope, but let has block scope",
  },
  {
    questionText: "What is a closure in JavaScript?",
    options: [
      "1. A function that has access to variables in its parent scope",
      "2. A function that returns another function",
      "3. A function that has no name",
      "4. A function that has a default parameter",
    ],
    answer: "1. A function that has access to variables in its parent scope",
  },
  {
    questionText: "What is a promise in JavaScript?",
    options: [
      "1. An object that represents a value that may not be available yet, but will be resolved at some point in the future",
      "2. A way to iterate over a collection of elements",
      "3. A method that sorts an array in place",
      "4. A function that creates a new object",
    ],
    answer:
      "1. An object that represents a value that may not be available yet, but will be resolved at some point in the future",
  },
  {
    questionText: "What does the async keyword do in JavaScript?",
    options: [
      "1. It makes a function run synchronously",
      "2. It makes a function return a promise",
      "3. It makes a function run in a separate thread",
      "4. It has no effect on a function",
    ],
    answer: "2. It makes a function return a promise",
  },
  {
    questionText: "What is the result of the following code? \n[1, 2, 3].map(x => x * 2)",
    options: ["1. [2, 4, 6]", "2. [1, 4, 9]", "3. [2, 3, 6]", "4. [1, 2, 3]"],
    answer: "1. [2, 4, 6]",
  },
  {
    questionText:
      "What is the result of the following code? \nlet obj = {a: 1, b: 2, c: 3}; \nlet {a, b, c} = obj; \nconsole.log(a, b, c);",
    options: ["1. 1, 2, 3", "2. undefined, undefined, undefined", "3. {a: 1, b: 2, c: 3}", "4. ReferenceError"],
    answer: "1. 1, 2, 3",
  },
  {
    questionText:
      "Which of the following methods returns a new array containing all elements of the original array that pass a test?",
    options: ["1. filter()", "2. reduce()", "3. map()", "4. sort()"],
    answer: "1. filter()",
  },
  {
    questionText:
      "Which of the following methods returns a new array with the results of calling a function for every array element?",
    options: ["1. forEach()", "2. reduce()", "3. map()", "4. filter()"],
    answer: "3. map()",
  },
  {
    questionText:
      "What is the output of the following code? \nvar x = 5;\n(function() {\n  console.log(x);\n  var x = 10;\n})();",
    options: ["1. 5", "2. 10", "3. undefined", "4. ReferenceError"],
    answer: "3. undefined",
  },
  {
    questionText: "What does the Promise.all() method do?",
    options: [
      "1. Resolves multiple promises in parallel",
      "2. Resolves multiple promises in series",
      "3. Rejects multiple promises in parallel",
      "4. Rejects multiple promises in series",
    ],
    answer: "1. Resolves multiple promises in parallel",
  },
];
