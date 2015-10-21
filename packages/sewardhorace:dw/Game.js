var Game = {
  rollDice: function(numberOfDice, numberOfSides) {
    numberOfDice = numberOfDice || 1;
    numberOfSides = numberOfSides || 6;
    var total = 0;
    for (var i = 0; i < numberOfDice; i++) {
      var roll = Math.floor((Math.random() * numberOfSides) + 1);
      total += roll;
    }
    return total;
  },

  BasicRollEnum: {
    FAIL: 1,
    PARTIAL: 2,
    SUCCESS: 3,
    BONUS: 4,
  },

  basicRoll: function(mod) {
    mod = mod || 0;
    var roll = Game.rollDice(2,6)
    console.log("rolled " + roll + " + " + mod);
    roll = roll + mod
    var result;
    if (roll <= 6) {
      result = Game.BasicRollEnum.FAIL;
      console.log("failure");
    } else if (roll <= 9){
      result = Game.BasicRollEnum.PARTIAL;
      console.log("partial success");
    } else if (roll <= 12){
      result = Game.BasicRollEnum.SUCCESS;
      console.log("success");
    } else {
      result = Game.BasicRollEnum.BONUS;
      console.log("success (bonus)");
    }
    return result
  },

  createResult: function(result, one, two, three, four){
    if (result === Game.BasicRollEnum.FAIL){
      one();
    } else if (result === Game.BasicRollEnum.PARTIAL){
      two();
    } else if (result === Game.BasicRollEnum.SUCCESS){
      three();
    } else {
      if (four) {
        four();
      } else {
        three();
      }
    }
  },

  showOptions: function(options){
    options = options || [];
    console.log("Options:");
    for (i in options) {
      console.log(i + ". " + options[i]);
    }
  },
  getChoiceIndex: function(options, description){
    options = options || [];
    if (options.length > 0){
      description = description || "one"
      Game.showOptions(options);
      var choice;
      while (!(choice >= 0 && choice < options.length)){
        choice = parseInt(prompt("Chose " + description + ". (enter the number of your choice:", ""));
      }
      console.log(options[choice]);
      return choice;
    }
  },
}
