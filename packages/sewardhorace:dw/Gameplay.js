Utilities = {

  deepClone: function(obj) {
    if(obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj)
        return obj;
    var temp = obj.constructor();
    for(var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
            obj['isActiveClone'] = null;
            temp[key] = this.deepClone(obj[key]);
            delete obj['isActiveClone'];
        }
      }
    return temp;
  },
  randomItem: function(arr) {
    if (!arr) {
      return undefined;
    }
    var idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
  }
};


Game = {
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
};

Abilities = {
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

EquipmentEnums = {
  types:{
    WEAPON:1,
    AMMO:2,
    ARMOR:3,
    OTHER:4,
    COINS:5,
  },
  ammoTypes:{
    ARROWS:1,
  },
  weaponTags:{
    DMG:{
      1:1,
      2:2,
      3:3,
    },
    PIERCING:{
      1:1,
      2:2,
      3:3,
    },
    CLOSE:2,
    DANGEROUS:3,
    FAR:4,
    FORCEFUL:5,
    HAND:6,
    IGNORES_ARMOR:7,
    MESSY:8,
    NEAR:9,
    PRECISE:11,
    REACH:12,
    RELOAD:13,
    REQUIRES:14,
    SLOW:15,
    STUN:16,
    THROWN:17,
    TOUCH:18,
    TWO_HANDED:19,
  },
  armorTags:{
    CLUMSY:1,
  },
  generalTags:{
    USES:{
      1:1,
      2:2,
      3:3,
      4:4,
      5:5,
      6:6,
      7:7,
    },
    RATION:1,
    SLOW:2,
    DANGEROUS:3,
    APPLIED:4,
    TOUCH:5
  },
};

Equipment = {
  weapons:{
    RAGGED_BOW : {
      name: "Bow",
      description: "Ragged bow",
      weight:2,
      coins:15,
      tags: [
        EquipmentEnums.weaponTags.NEAR,
      ],
      type: EquipmentEnums.types.WEAPON,
      ammoType: EquipmentEnums.ammoTypes.ARROWS,
    },
    FINE_BOW:{
      name: "Bow",
      description: "Fine Bow",
      weight: 2,
      coins: 60,
      tags: [
        EquipmentEnums.weaponTags.NEAR,
        EquipmentEnums.weaponTags.FAR,
      ],
      type: EquipmentEnums.types.WEAPON,
      ammoType: EquipmentEnums.ammoTypes.ARROWS,
    },
    HUNTERS_BOW:{
      name: "Bow",
      description: "Hunter's Bow",
      weight: 1,
      coins: 100,
      tags: [
        EquipmentEnums.weaponTags.NEAR,
        EquipmentEnums.weaponTags.FAR,
      ],
      type: EquipmentEnums.types.WEAPON,
      ammoType: EquipmentEnums.ammoTypes.ARROWS,
    },
    CROSSBOW:{
      name: "Crossbow",
      description: "Crossbow",
      weight: 3,
      coins: 35,
      tags: [
        EquipmentEnums.weaponTags.NEAR,
        EquipmentEnums.weaponTags.RELOAD,
        EquipmentEnums.weaponTags.DMG[1],
      ],
      type: EquipmentEnums.types.WEAPON,
      ammoType: EquipmentEnums.ammoTypes.ARROWS,
    },
    CLUB:{
      name: "Club",
      description: "Club",
      weight: 2,
      coins: 1,
      tags: [
        EquipmentEnums.weaponTags.CLOSE
      ],
      type: EquipmentEnums.types.WEAPON,
    },
    SHILLELAGH:{
      name: "Shillelagh",
      description: "Shillelagh",
      weight: 2,
      coins: 1,
      tags: [
        EquipmentEnums.weaponTags.CLOSE
      ],
      type: EquipmentEnums.types.WEAPON,
    },
    STAFF:{
      name: "Staff",
      description: "Staff",
      weight: 1,
      coins: 1,
      tags: [
        EquipmentEnums.weaponTags.CLOSE,
        EquipmentEnums.weaponTags.TWO_HANDED,
      ],
      type: EquipmentEnums.types.WEAPON,
    },
    DAGGER:{
      name:"Dagger",
      description: "Dagger",
      weight:1,
      coins:2,
      tags:[
        EquipmentEnums.weaponTags.HAND,
      ],
      type: EquipmentEnums.types.WEAPON,
    },
    SHIV:{
      name:"Shiv",
      description: "Shiv",
      weight:1,
      coins:2,
      tags:[
        EquipmentEnums.weaponTags.HAND,
      ],
      type: EquipmentEnums.types.WEAPON,
    },
    KNIFE:{
      name:"Knife",
      description: "Knife",
      weight:1,
      coins:2,
      tags:[
        EquipmentEnums.weaponTags.HAND,
      ],
      type: EquipmentEnums.types.WEAPON,
    },
    THROWING_DAGGER:{
      name:"Throwing dagger",
      description: "Throwing dagger",
      weight:0,
      coins:1,
      tags:[
        EquipmentEnums.weaponTags.THROWN,
        EquipmentEnums.weaponTags.NEAR,
      ],
      type: EquipmentEnums.types.WEAPON,
    },
    SHORT_SWORD:{
      name:"Short Sword",
      description: "Short sword",
      weight:1,
      coins:8,
      tags:[
        EquipmentEnums.weaponTags.CLOSE,
      ],
      type: EquipmentEnums.types.WEAPON,
    },
    AXE:{
      name:"Axe",
      description: "Axe",
      weight:1,
      coins:8,
      tags:[
        EquipmentEnums.weaponTags.CLOSE,
      ],
      type: EquipmentEnums.types.WEAPON,
    },
    WARHAMMER:{
      name:"Warhammer",
      description: "Warhammer",
      weight:1,
      coins:8,
      tags:[
        EquipmentEnums.weaponTags.CLOSE,
      ],
      type: EquipmentEnums.types.WEAPON,
    },
    MACE:{
      name:"Mace",
      description: "Mace",
      weight:1,
      coins:8,
      tags:[
        EquipmentEnums.weaponTags.CLOSE,
      ],
      type: EquipmentEnums.types.WEAPON,
    },
    SPEAR:{
      name:"Spear",
      description: "Spear",
      weight:1,
      coins:5,
      tags:[
        EquipmentEnums.weaponTags.REACH,
        EquipmentEnums.weaponTags.THROWN,
        EquipmentEnums.weaponTags.NEAR,
      ],
      type: EquipmentEnums.types.WEAPON,
    },
    LONG_SWORD:{
      name:"Long Sword",
      description: "Long sword",
      weight:2,
      coins:15,
      tags:[
        EquipmentEnums.weaponTags.CLOSE,
        EquipmentEnums.weaponTags.DMG[1],
      ],
      type: EquipmentEnums.types.WEAPON,
    },
    BATTLE_AXE:{
      name:"Battle Axe",
      description: "Battle axe",
      weight:2,
      coins:15,
      tags:[
        EquipmentEnums.weaponTags.CLOSE,
        EquipmentEnums.weaponTags.DMG[1],
      ],
      type: EquipmentEnums.types.WEAPON,
    },
    FLAIL:{
      name:"Flail",
      description: "Flail",
      weight:2,
      coins:15,
      tags:[
        EquipmentEnums.weaponTags.CLOSE,
        EquipmentEnums.weaponTags.DMG[1],
      ],
      type: EquipmentEnums.types.WEAPON,
    },
    HALBERD:{
      name:"Halberd",
      description: "Halberd",
      weight:2,
      coins:9,
      tags:[
        EquipmentEnums.weaponTags.REACH,
        EquipmentEnums.weaponTags.DMG[1],
        EquipmentEnums.weaponTags.TWO_HANDED,
      ],
      type: EquipmentEnums.types.WEAPON,
    },
    RAPIER:{
      name:"Rapier",
      description: "Rapier",
      weight:1,
      coins:25,
      tags:[
        EquipmentEnums.weaponTags.CLOSE,
        EquipmentEnums.weaponTags.PRECISE,
      ],
      type: EquipmentEnums.types.WEAPON,
    },
    DUELING_RAPIER:{
      name:"Rapier",
      description: "Dueling rapier",
      weight:2,
      coins:50,
      tags:[
        EquipmentEnums.weaponTags.CLOSE,
        EquipmentEnums.weaponTags.PRECISE,
        EquipmentEnums.weaponTags.PIERCING[1],
      ],
      type: EquipmentEnums.types.WEAPON,
    },
  },

  ammo:{
    BUNDLE_OF_ARROWS:{
      name: "Bundle of Arrows",
      description: "Bundle of arrows",
      weight: 1,
      coins:1,
      ammo: 3,
      type:EquipmentEnums.types.AMMO,
      ammoType: EquipmentEnums.ammoTypes.ARROWS,
    },
    ELVEN_ARROWS:{
      name: "Elven Arrows",
      description: "Elven arrows",
      weight: 1,
      coins:20,
      ammo:4,
      type:EquipmentEnums.types.AMMO,
      ammoType: EquipmentEnums.ammoTypes.ARROWS,
    },
  },

  armor:{
    LEATHER:{
      name: "Leather Armor",
      description: "Leather armor",
      weight: 1,
      coins:10,
      armor: 1,
      type: EquipmentEnums.types.ARMOR,
    },
    CHAINMAIL:{
      name: "Chainmail",
      description: "Chainmail",
      weight: 1,
      coins:10,
      armor: 1,
      type: EquipmentEnums.types.ARMOR,
    },
    SCALE_MAIL:{
      name: "Scale Mail",
      description: "Scale mail",
      weight: 3,
      coins:50,
      armor: 2,
      type: EquipmentEnums.types.ARMOR,
      tags:[
        EquipmentEnums.CLUMSY,
      ],
    },
    PLATE:{
      name: "Plate",
      description: "Plate armor",
      weight: 4,
      coins:350,
      armor: 3,
      type: EquipmentEnums.types.ARMOR,
      tags:[
        EquipmentEnums.CLUMSY,
      ],
    },
    SHIELD:{
      name: "Sheild",
      description: "Sheild",
      weight: 2,
      coins:15,
      armorBonus: 1,
      type: EquipmentEnums.types.ARMOR,
    },
  },

  gear:{
    ADVENTURING_GEAR:{
      name: "Adventuring Gear",
      description: "A collection of useful mundane items",
      weight:1,
      coins:20,
      tags:[
        EquipmentEnums.generalTags.USES[5],
      ],
      type:EquipmentEnums.types.OTHER,
    },
    BANDAGES:{
      name: "Bandages",
      description: "heal 4 damage per use",
      weight:0,
      coins:5,
      tags:[
        EquipmentEnums.generalTags.SLOW,
        EquipmentEnums.generalTags.USES[3],
      ],
      type:EquipmentEnums.types.OTHER,
    },
    POULTICES_HERBS:{
      name: "Poultices and Herbs",
      description: "heal 7 damage per use",
      weight:1,
      coins:10,
      tags:[
        EquipmentEnums.generalTags.SLOW,
        EquipmentEnums.generalTags.USES[2],
      ],
      type:EquipmentEnums.types.OTHER,
    },
    HEALING_POTION:{
      name: "Healing Potion",
      description: "heal 10 damage and remove one debility",
      weight:0,
      coins:50,
      tags:[],
      type:EquipmentEnums.types.OTHER,
    },
    KEG_DWARVEN_STOUT:{
      name: "Keg of Dwarven Stout",
      description: "Share and take +1 to Carouse",
      weight:4,
      coins:10,
      tags:[],
      type:EquipmentEnums.types.OTHER,
    },
    BAG_OF_BOOKS:{
      name: "Bag of Books",
      description: "Consult a book to take +1 to Spout Lore",
      weight:2,
      coins:10,
      tags:[
        EquipmentEnums.generalTags.USES[5],
      ],
      type:EquipmentEnums.types.OTHER,
    },
    ANTITOXIN:{
      name: "Antitoxin",
      description: "Drink to cure one poison",
      weight:0,
      coins:10,
      tags:[],
      type:EquipmentEnums.types.OTHER,
    },
    DUNGEON_RATIONS:{
      name: "Dungeon Rations",
      description: "Dungeon rations",
      weight: 1,
      coins:3,
      tags:[
        EquipmentEnums.generalTags.RATION,
        EquipmentEnums.generalTags.USES[5],
      ],
      type: EquipmentEnums.types.OTHER,
    },
    PERSONAL_FEAST:{
      name: "Personal Feast",
      description: "Ostentatious to say the least.",
      weight:1,
      coins:10,
      tags:[
        EquipmentEnums.generalTags.RATION,
        EquipmentEnums.generalTags.USES[1],
      ],
      type:EquipmentEnums.types.OTHER,
    },
    DWARVEN_HARDTACK:{
      name: "Dwarven Hardtack",
      description: "Non-Dwarves look elsewhere.",
      weight:1,
      coins:3,
      tags:[
        EquipmentEnums.generalTags.RATION,
        EquipmentEnums.generalTags.USES[7],
      ],
      type:EquipmentEnums.types.OTHER,
    },
    ELVEN_BREAD:{
      name: "Elven Bread",
      description: "A delicacy",
      weight:1,
      coins:10,
      tags:[
        EquipmentEnums.generalTags.RATION,
        EquipmentEnums.generalTags.USES[7],
      ],
      type:EquipmentEnums.types.OTHER,
    },
    HALFLING_PIPELEAF:{
      name: "Halfling Pipeleaf",
      description: "Take +1 forward to parley if you share it (mark 2 uses).",
      weight:0,
      coins:5,
      tags:[
        EquipmentEnums.generalTags.USES[6],
      ],
      type:EquipmentEnums.types.OTHER,
    },
  },

  poisons:{
    OIL_OF_TAGIT:{
      name: "Oil of Tagit",
      description: "The target falls into a light sleep",
      weight:0,
      coins:15,
      tags:[
        EquipmentEnums.generalTags.APPLIED,
        EquipmentEnums.generalTags.DANGEROUS,
      ],
      type:EquipmentEnums.types.OTHER,
    },
    BLOODWEED:{
      name: "Bloodweed",
      description: "Until cured, the target takes -1d4 to their damage rolls.",
      weight:0,
      coins:12,
      tags:[
        EquipmentEnums.generalTags.TOUCH,
        EquipmentEnums.generalTags.DANGEROUS,
      ],
      type:EquipmentEnums.types.OTHER,
    },
    GOLDENROOT:{
      name: "Goldenroot",
      description: "The target treats the next creature they see as a trusted ally.",
      weight:0,
      coins:20,
      tags:[
        EquipmentEnums.generalTags.APPLIED,
        EquipmentEnums.generalTags.DANGEROUS,
      ],
      type:EquipmentEnums.types.OTHER,
    },
    SERPENTS_TEARS:{
      name: "Serpent's Tears",
      description: "Anyone dealing damage against the target rolls twice and takes the better result.",
      weight:0,
      coins:10,
      tags:[
        EquipmentEnums.generalTags.TOUCH,
        EquipmentEnums.generalTags.DANGEROUS,
      ],
      type:EquipmentEnums.types.OTHER,
    },
  }
};

Bard = {
  name:"Bard",
  names: [
    {
      name: "Elf",
      options: ["Astrafel", "Daelwyn", "Feliana", "Damarra", "Sistranalle", "Pendrell", "Melliandre", "Dagoliir"]
    },
    {
      name: "Human",
      options: ["Baldric", "Leena", "Dunwick", "Willem", "Edwyn", "Florian", "Seraphine", "Quorra", "Charlotte", "Lily", "Ramonde", "Cassandra"]
    }
  ],
  look: [
    {
      name: "eyes",
      options:[
        "Knowing Eyes", "Fiery Eyes", "Joyous Eyes"
      ]
    },
    {
      name: "hair",
      options: [
        "Fancy Hair", "Wild Hair", "Stylish Cap"
      ]
    },
    {
      name: "clothing",
      options:[
        "Finery", "Traveling Clothes", "Poor Clothes"
      ]
    },
    {
      name: "etc",
      options:[
        "Fit Body", "Well-fed Body", "Thin Body"
      ]
    }
  ],
  baseHP:6,
  baseDMG:6,
  baseLoad:9,
  races: [
    // should be in starting moves?
    {
      name: "Elf",
      text:"When you enter an important location (your call) you can ask the GM for one fact from the history of that location."
    },
    {
      name: "Human",
      text:"When you first enter a civilized settlement someone who respects the custom of hospitality to minstrels will take you in as their guest."
    }
  ],
  alignment: [
    {
      name:"Good",
      text:"Perform your art to aid someone else."
    },
    {
      name:"Neutral",
      text:"Avoid a conflict or defuse a tense situation."
    },
    {
      name:"Chaotic",
      text:"Spur others to significant and unplanned decisive action."
    }
  ],
  bonds: [
    "This is not my first adventure with _______________.",
    "I sang stories of _______________ long before I ever met them in person.",
    "_______________ is often the butt of my jokes.",
    "I am writing a ballad about the adventures of _______________.",
    "_______________ trusted me with a secret.",
    "_______________ does not trust me, and for good reason."
  ],
  equipment: {
    automatic:[
      Equipment.gear.DUNGEON_RATIONS,
    ],
    selectable:[
      {
        name: "instrument",
        numberGranted: 1,
        options: [
          {
            name: "Your father's mandolin, repaired",
            objects: [
              {
                name: "Mandolin",
                description: "Your father's mandolin, repaired",
                weight: 0,
                coins:0,
                tags:[],
                type: EquipmentEnums.types.OTHER,
              }
            ]
          },
          {
            name: "A fine lute, a gift from a noble",
            objects: [
              {
                name: "Lute",
                description: "A fine lute, a gift from a noble",
                weight: 0,
                coins:0,
                tags:[],
                type: EquipmentEnums.types.OTHER,
              }
            ]
          },
          {
            name: "The pipes with which you courted your first love",
            objects: [
              {
                name: "Pipes",
                description: "The pipes with which you courted your first love",
                weight: 0,
                coins:0,
                tags:[],
                type: EquipmentEnums.types.OTHER,
              },
            ],
          },
          {
            name: "A stolen horn",
            objects: [
              {
                name: "Horn",
                description: "A stolen horn",
                weight:0,
                coins:0,
                tags:[],
                type: EquipmentEnums.types.OTHER,
              },
            ],
          },
          {
            name: "A fiddle, never before played",
            objects: [
              {
                name: "Fiddle",
                description: "A fiddle, never before played",
                weight: 0,
                coins:0,
                tags:[],
                type: EquipmentEnums.types.OTHER,
              }
            ]
          },
          {
            name: "A songbook in a forgotten tongue",
            objects: [
              {
                name: "Songbook",
                description: "A songbook in a forgotten tongue",
                weight: 0,
                coins:0,
                tags:[],
                type: EquipmentEnums.types.OTHER,
              }
            ]
          }
        ]
      },
      {
        name: "clothing",
        numberGranted: 1,
        options: [
          {
            name: "Leather Armor",
            objects: [
              Equipment.armor.LEATHER,
            ],
          },
          {
            name: "Ostentatious Clothes",
            objects: [
              {
                name: "Clothes",
                description: "Ostentatious clothes",
                weight: 0,
                coins:0,
                tags:[],
                type:EquipmentEnums.types.OTHER,
              }
            ]
          }
        ]
      },
      {
        name: "armament",
        numberGranted: 1,
        options: [
          {
            name: "Dueling rapier (close, precise, 2 weight)",
            objects: [
              Equipment.weapons.DUELING_RAPIER,
            ],
          },
          {
            name: "Worn bow (near, 2 weight), bundle of arrows (3 ammo, 1 weight), and short sword (close, 1 weight)",
            objects: [
              Equipment.weapons.RAGGED_BOW,
              Equipment.ammo.BUNDLE_OF_ARROWS,
              Equipment.weapons.SHORT_SWORD,
            ],
          }
        ]
      },
      {
        name: "etc",
        numberGranted: 1,
        options: [
          {
            name: "Adventuring gear (1 weight)",
            objects: [
              Equipment.gear.ADVENTURING_GEAR,
            ],
          },
          {
            name: "Bandages (0 weight)",
            objects: [
              Equipment.gear.BANDAGES,
            ],
          },
          {
            name: "Halfling pipeleaf (0 weight)",
            objects: [
              Equipment.gear.HALFLING_PIPELEAF,
            ],
          },
          {
            name: "3 coins",
            objects: [
              {
                amt: 3,
                type: EquipmentEnums.types.COINS,
              }
            ]
          }
        ]
      }
    ]
  },
  moves: {
    starting:[],
    mid:[],
    advanced:[]
  }
};

BasicMoves = {
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
};

Character = function() {
  this.XP = 0;
  this.level = 1;
  this.abilities = this.autoAssignAbilities();
  this.klass = this.autoAssignClass();
  this.name = this.autoAssignName();
  this.look = this.autoAssignLook();
  this.race = this.autoAssignRace();
  this.maxHP = this.calculateMaxHP();
  this.HP = this.maxHP;
  this.maxLoad = this.calculateMaxLoad();
  this.bonds = this.autoAssignBonds(); // needs to include active bonds' text and target, as well as tally of finished bonds' targets (by character name? id?)
  this.alignment = this.autoAssignAlignment();
  this.equipment = {
    weapons:[],
    ammo:[],
    armor:[],
    coins:0,
    other:[],
  };
  this.autoAssignEquipment();
  // this.assignEquipment();
  this.spells = [];
  this.klassMoves = [];
  // this.companions = []; //hirelings, animal companions, familiars, etc.??
  //for temp stats:
  this.hold = {}; //ex. hold.defend = 3
  this.forward = {}; //should specify source (i.e., forward.aid = 1)
}
Character.prototype = {

  autoAssignAbilities: function() {
    return Abilities.getRandomAbilities();
  },
  autoAssignClass: function() {
    return Utilities.deepClone(Bard);
  },
  autoAssignName: function() {
    return this.klass.names[0].options[0];
  },
  autoAssignLook: function() {
    var lookOptions = this.klass.look;
    var look = [];
    for (i in lookOptions) {
      look.push(lookOptions[i].options[0]);
    };
    return look;
  },
  autoAssignRace: function() {
    return this.klass.races[0];
  },
  calculateMaxHP: function() {
    return this.klass.baseHP + this.abilities.con.score
  },
  calculateMaxLoad: function() {
    return this.klass.baseLoad + this.abilities.str.mod
  },
  autoAssignBonds: function() {
    return this.klass.bonds;
    //TODO should include reference to character ID when assigned
  },
  autoAssignAlignment: function() {
    return this.klass.alignment[0];
  },
  equip: function(item){
    if (item.type) {
      if (item.type === EquipmentEnums.types.WEAPON){
        this.equipment.weapons.push(Utilities.deepClone(item));
      } else if (item.type === EquipmentEnums.types.AMMO) {
        this.equipment.ammo.push(Utilities.deepClone(item));
      } else if (item.type === EquipmentEnums.types.ARMOR) {
        this.equipment.armor.push(Utilities.deepClone(item));
      } else if (item.type === EquipmentEnums.types.COINS) {
        console.log("Got " + item.amt + " coins.");
        this.equipment.coins += item.amt;
      } else if (item.type === EquipmentEnums.types.OTHER) {
        this.equipment.other.push(Utilities.deepClone(item));
      }
    }
  },
  unequip: function(item) {
    if (item.type) {
      if (item.type === EquipmentEnums.types.WEAPON){
        var idx = this.equipment.weapons.indexOf(item);
        if (idx > -1) {
          this.equipment.weapons.splice(idx, 1);
        }
      } else if (item.type === EquipmentEnums.types.AMMO) {
        var idx = this.equipment.ammo.indexOf(item);
        if (idx > -1) {
          this.equipment.ammo.splice(idx, 1);
        }
      } else if (item.type === EquipmentEnums.types.ARMOR) {
        var idx = this.equipment.armor.indexOf(item);
        if (idx > -1) {
          this.equipment.armor.splice(idx, 1);
        }
      } else if (item.type === EquipmentEnums.types.OTHER) {
        var idx = this.equipment.other.indexOf(item);
        if (idx > -1) {
          this.equipment.other.splice(idx, 1);
        }
      }
    }
  },
  assignEquipment: function() {
    var startingGear = [];
    //get all automatic gear
    for (i in this.klass.equipment.automatic){
      startingGear.push(this.klass.equipment.automatic[i]);
    }
    //choose from groups of gear options
    for (i in this.klass.equipment.selectable){
      var selectable = this.klass.equipment.selectable[i];
      console.log("Choose " + selectable.numberGranted + " " + selectable.name);
      var optionNames = [];
      for (var i = 0; i < selectable.options.length; i++){
        optionNames.push(selectable.options[i].name);
      }
      var choice = Game.getChoiceIndex(optionNames);
      var selection = selectable.options[choice];
      for (i in selection.objects) {
        console.log(selection.objects[i]);
        startingGear.push(selection.objects[i]);
      }
    }
    //equip
    for (i in startingGear){
      this.equip(startingGear[i]);
    }
  },
  autoAssignEquipment: function() {
    var startingGear = [];
    //get all automatic gear
    for (i in this.klass.equipment.automatic){
      startingGear.push(this.klass.equipment.automatic[i]);
    }
    //choose first choice of all gear options
    for (i in this.klass.equipment.selectable){
      var selectable = this.klass.equipment.selectable[i];
      var selection = selectable.options[1];
      for (i in selection.objects) {
        startingGear.push(selection.objects[i]);
      }
    }
    //equip
    for (i in startingGear){
      this.equip(startingGear[i]);
    }
  },

  getWeapon: function() {
    var options = this.equipment.weapons || [];
    options = options.concat([
      {
        type: EquipmentEnums.types.WEAPON,
        name: "(Other)",
        description: "???",
        weight: 0,
        tags: [],
      }
    ]);
    var weaponNames = [];
    for (weapon in options){
      weaponNames.push(options[weapon].name);
    }
    var choice = Game.getChoiceIndex(weaponNames);
    return options[choice];
  },
  getAmmo: function(weapon) {
    if (weapon.ammoType){
      var ammoType = weapon.ammoType;
      if (ammoType) {
        var availableAmmo = [];
        for (var key in this.equipment.ammo) {
          if (this.equipment.ammo[key].ammoType === ammoType){
            availableAmmo.push(this.equipment.ammo[key]);
          }
        }
        if (availableAmmo.length > 1){
          var ammoNames = [];
          for (var i = 0; i < availableAmmo.length; i++) {
            ammoNames.push(availableAmmo[i].name + ", amt: " + availableAmmo[i].ammo);
          }
          var choice = Game.getChoiceIndex(ammoNames);
          return availableAmmo[choice];
        } else if (availableAmmo.length === 1) {
          return availableAmmo[0];
        }
      }
    }
  },
};
