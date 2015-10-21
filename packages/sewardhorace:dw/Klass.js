var Bard = {
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
}
