var Abilities = {
  all: {
    str : {
      score: 0,
      mod: 0
    },
    dex : {
      score: 0,
      mod: 0
    },
    con : {
      score: 0,
      mod: 0
    },
    int : {
      score: 0,
      mod: 0
    },
    wis : {
      score: 0,
      mod: 0
    },
    cha : {
      score: 0,
      mod: 0
    }
  },

  standardScores: [
    16, 15, 13, 12, 9, 8
  ],

  //returns an array of six ability scores
  getRandomAbilities: function(){
    var abilities = {};
    var keys = Object.keys(Abilities.all);
    var scores = [16, 15, 13, 12, 9, 8];
    for (i in keys) {
      var key = keys[i];
      var score = scores.splice(
        Math.floor(Math.random()*scores.length
      ),1)
      [0];
      abilities[key] = {score: 0, mod: 0};
      abilities[key].score = score;
      abilities[key].mod = Abilities.getModifier(score);
    }
    return abilities;
  },

  //returns the modifier for a given ability score
  getModifier: function(ability){
    if (ability <= 3) {
      return -3;
    } else if (ability <= 5) {
      return -2;
    } else if (ability <= 8) {
      return -1;
    } else if (ability <= 12) {
      return 0;
    } else if (ability <= 15) {
      return 1;
    } else if (ability <= 17) {
      return 2;
    } else {
      return 3;
    }
  },
};
