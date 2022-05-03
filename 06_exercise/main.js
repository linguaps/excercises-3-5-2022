// Write a function called *weekNumbersToWords* when given an input array of numbers 1-7, it outputs an array of the weeksdays written out. You must use a switch, not if/else.

// Example: <br>
// Input: [1,4,6,3,2] <br>
// Output: ["Monday","Thursday","Saturday","Wednesday","Tuesday"]

// Estimated time: 30 minutes <br>
// Total points: 30

switch (weekNumbersToWords) {

    case 0:
    case 7:
      alert("It's Sunday!")
      break;
    case 1:
      alert("It's Monday");
      break;
    case 2:
      alert("It's Tuesday");
      break;
    case 3:
      alert("It's Wednesday");
      break;
    case 4:
      alert("It's Thursday");
      break;
    case 5:
      alert("It's Friday");
      break;
    case 6:
      alert("It's Saturday");
      break;
    default: 
      alert("Wrong input!");
      break;

  }