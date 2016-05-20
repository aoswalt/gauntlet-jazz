"use strict";

var Gauntlet = (function(gauntlet) {
  let fighter = {
    name: "Fighter",
    healthBonus: 20,
    strengthBonus: 10
  };

  let mage = {
    name: "Mage",
    magical: true,
    healthBonus: -10,
    strengthBonus: -20,
    intelligenceBonus: 20
  };

  var classes = {
    fighter: fighter,
    // All non-magical subclasses are set to inherit from fighter
    warrior: {
      name: "Warrior",
      healthBonus: fighter.healthBonus + 25,
      strengthBonus: fighter.strengthBonus + 30
    },
    valkyrie: {
      name: "Valkyrie",
      healthBonus: fighter.healthBonus + 20,
      strengthBonus: fighter.strengthBonus + 10
    },
    berserker: {
      name: "Berserker",
      healthBonus: fighter.healthBonus + 35,
      strengthBonus: fighter.strengthBonus + 20
    },
    monk: {
      name: "Monk",
      healthBonus: fighter.healthBonus + 10,
      strengthBonus: fighter.strengthBonus + 40
    },
    //MAGICAL CLASSES.
    mage: mage,
    // All subclasses are set to inherit from Mage
    shaman: {
      name: "Shaman",
      magical: mage.magical,
      healthBonus: mage.healthBonus + 5,
      strengthBonus: mage.strengthBonus - 10,
      intelligenceBonus: mage.intelligenceBonus + 20
    },
    wizard: {
      name: "Wizard",
      magical: mage.magical,
      healthBonus: mage.healthBonus - 15,
      strengthBonus: mage.strengthBonus - 25,
      intelligenceBonus: mage.intelligenceBonus + 40
    },
    conjurer: {
      name: "Conjurer",
      magical: mage.magical,
      // healthBonus: 0, // this isnt actually included
      strengthBonus: mage.strengthBonus - 10,
      intelligenceBonus: mage.intelligenceBonus + 10
    },
    sorcerer: {
      name: "Sorcerer",
      magical: mage.magical,
      healthBonus: mage.healthBonus - 5,
      strengthBonus: mage.strengthBonus - 20,
      intelligenceBonus: mage.intelligenceBonus + 30
    }
  };

  // /*
  //   Base function for a player, or enemy, class (profession)
  //  */
  gauntlet.PlayerClass = function() {
    this.name = "Beggar";
    this.healthBonus = 0;
    this.strengthBonus = 0;
    this.intelligenceBonus = 0;
    this.magical = false;

    this.toString = function() {
      return this.name;
    };
  };

  gauntlet.constructClass = function(classId) {
    var playerClass = new gauntlet.PlayerClass();
    Object.assign(playerClass, classes[classId]);
    return playerClass;
  };

  return gauntlet;
}(Gauntlet || {}));

console.log("Gauntlet.constructClass(sorcerer)", Gauntlet.constructClass("sorcerer"));