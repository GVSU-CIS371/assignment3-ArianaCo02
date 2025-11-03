import { defineStore } from "pinia";
import { ref } from "vue";


import bases from "../data/bases";
import creamers from "../data/creamers";
import syrups from "../data/syrups";
import temperatures from "../data/temperatures";

import type { BaseBeverageType } from "../data/bases";
import type { CreamerType } from "../data/creamers";
import type { SyrupType } from "../data/syrups";

export interface SavedBeverage {
  name: string;
  base: BaseBeverageType;
  creamer: CreamerType;
  syrup: SyrupType;
  temperature: string; 
}

export const useBeverageStore = defineStore("beverageStore", () => {
  


  const selectedBase = ref<BaseBeverageType>(bases[0]);
  const selectedCreamer = ref<CreamerType>(creamers[0]);
  const selectedSyrup = ref<SyrupType>(syrups[0]);
  const selectedTemperature = ref<string>(temperatures[1] || "Cold"); 

  
  const beverageName = ref<string>("");


  const beverages = ref<SavedBeverage[]>([]);



 
  function makeBeverage() {
    // basic guard
    if (!beverageName.value.trim()) {
      alert("Please enter a beverage name.");
      return;
    }

    const newDrink: SavedBeverage = {
      name: beverageName.value.trim(),
      base: selectedBase.value,
      creamer: selectedCreamer.value,
      syrup: selectedSyrup.value,
      temperature: selectedTemperature.value,
    };

    beverages.value.push(newDrink);

   
    beverageName.value = "";
  }

  
  function showBeverage(drink: SavedBeverage) {
    selectedBase.value = drink.base;
    selectedCreamer.value = drink.creamer;
    selectedSyrup.value = drink.syrup;
    selectedTemperature.value = drink.temperature;
  }

  

  return {
   
    bases,
    creamers,
    syrups,
    temperatures,

   
    selectedBase,
    selectedCreamer,
    selectedSyrup,
    selectedTemperature,

   
    beverageName,

    
    beverages,

    
    makeBeverage,
    showBeverage,
  };
});

