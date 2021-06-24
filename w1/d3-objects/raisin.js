const raisinAlarm = cookie => {
  for(topping of cookie){
    if(topping === '🍇'){
      return "Raisin Alert! Raisins are actually better than chocolate though, so enjoy 😊.";
    }
  } 
  return "No raisins 🥀 ";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

