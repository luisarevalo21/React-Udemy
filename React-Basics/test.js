capitlize = myString => {
  let finalString = "";
  if (isAlpha(myString[0])) {
    finalString += myString[0].toUpperCase();
  }
  for (let i = 1; i < myString.length; i++) {
    console.log("printing the string nwo", myString[i]);

    if (isAlpha(myString[i])) {
      if (myString[i - 1] === " ") {
        finalString += myString[i].toUpperCase();
        console.log("capitzaling a string");
      } else {
        console.log("adding to the string", finalString);

        finalString += myString[i];
      }
    } else {
      finalString += " ";
    }
  }
  console.log(finalString);
};

//helper method to determine if a character is a letter.
isAlpha = letter => {
  return letter.toLowerCase() != letter.toUpperCase();
};

capitlize("hello world");
