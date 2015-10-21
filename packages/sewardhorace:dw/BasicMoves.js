//TODO only allow selecton of ranged weapons for volley, melee for hackAndSlash (ranged: true; melee: false;???) low priority
//TODO delete ammo object from inventory if it is depleted

var BasicMoves = {
  hackAndSlash: function(mover){
    var weapon = mover.getWeapon();//need to account for bonus dmg tags
    var mod = mover.abilities.str.mod;
    var baseDmg = mover.baseDmg;
    var dmg;
    Game.createResult(
      Game.basicRoll(mod),
      function() {
        mover.XP += 1;
        console.log("XP: " + mover.XP);
      },
      function() {
        dmg = Game.rollDice(1,baseDmg);
        console.log("Deal " + dmg + " damage and the enemy makes an attack against you!");
      },
      function() {
        var options = [
          "Deal your damage to the enemy and avoid their attack",
          "Deal +1d6 damage but expose yourself to the enemy’s attack"
        ];
        var choice = Game.getChoiceIndex(options);
        if (choice === 0) {
          dmg = Game.rollDice(1,baseDmg);
          console.log("Deal " + dmg + " damage and avoid the enemy attack!");
        } else {
          dmg = Game.rollDice(1,baseDmg) + Game.rollDice(1,6);
          console.log("Deal " + dmg + " damage and the enemy makes an attack against you!");
        }
      }
    );
  },
  volley: function(mover){
    var weapon = mover.getWeapon();
    var ammo = mover.getAmmo(weapon);
    var mod = mover.abilities.dex.mod;
    Game.createResult(
      Game.basicRoll(mod),
      function() {
        mover.XP += 1;
        console.log("XP: " + mover.XP);
      },
      function() {
        var options = [
          "You have to move to get the shot placing you in danger as described by the GM",
          "You have to take what you can get: -1d6 damage"
        ];
        if (ammo) {
          options.push("You have to take several shots, reducing your ammo by one");
        }
        var choice = Game.getChoiceIndex(options);
        if (choice === 0) {
          var dmg = Game.rollDice( 1, mover.baseDmg);
          console.log("Deal " + dmg + " damage, but now you're in danger!");
        } else if (choice === 1) {
          var dmg = Game.rollDice( 1, mover.baseDmg) - Game.rollDice(1,6);
          dmg = dmg < 0 ? 0 : dmg;
          console.log("It's a tough shot; deal " + dmg + " damage.");
        } else {
          var dmg = Game.rollDice( 1, mover.baseDmg);
          console.log("Deal " + dmg + " damage and lose 1 ammo");
          ammo.ammo -= 1;
          if (ammo.ammo === 0) {
            mover.unequip(ammo);
            console.log("Ammo source depleted");
          }
        }
      },
      function() {
        var dmg = Game.rollDice( 1, mover.baseDmg);
        console.log("You have a clear shot! Deal " + dmg + " damage.");
      }
    );
  },
  defyDanger: function(mover){
    var options = ["str", "dex", "con", "int", "wis", "cha"];
    var modChoice = options[Game.getChoiceIndex(options)];
    var mod = mover.abilities[modChoice].mod;
    Game.createResult(
      Game.basicRoll(mod),
      function(){
        mover.XP += 1;
        console.log("XP: " + mover.XP);
      },
      function(){

      },
      function(){

      }
    );
  },
  defend: function(mover){
    var mod = mover.abilities.con.mod
    Game.createResult(
      Game.basicRoll(mod),
      function(){
        mover.XP += 1;
        console.log("XP: " + mover.XP);
      },
      function(){
        mover.hold.defend = 1;
        console.log("Hold 1");
      },
      function(){
        mover.hold.defend = 3;
        console.log("Hold 3");
      }
    );
  },
  defendHold: function(mover){
    var hold = mover.hold.defend;
    if (hold > 0){
      var options = [
        "Redirect an attack from the thing you defend to yourself",
        "Halve the attack’s effect or damage",
        "Open up the attacker to an ally giving that ally +1 forward against the attacker",
        "Deal damage to the attacker equal to your level",
      ];
      var choice = Game.getChoiceIndex(options);
      if (choice === 0){
        console.log("Attack redirected");
      } else if (choice === 1){
        console.log("Half damage");
      } else if (choice === 2){
        console.log("Give an ally +1 fwd");
      } else {
        console.log("Deal "+mover.level+" dmg");
      }
    }
  },
}
