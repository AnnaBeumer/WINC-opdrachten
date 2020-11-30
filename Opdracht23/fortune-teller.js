const tellFortune = function (children, partnerName, location, jobTitle) {
  console.log(
    "You will be a " +
      jobTitle +
      " in " +
      location +
      ", and married to " +
      partnerName +
      " with " +
      children +
      " kids."
  );
};

tellFortune(3, "John", "New York", "assistent");
tellFortune(5, "Eric", "Amsterdam", "dogwalker");
tellFortune(2, "Mary", "Utrecht", "CEO");
