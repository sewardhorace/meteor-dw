//TODO some equipment (bandages, etc.) need associated moves

var EquipmentEnums = {
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

var Equipment = {
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
