import { Pet } from "../types/interfaces";

const AVG_HUMAN_LIFE_EXPECTANCY = 72;
const petLifeExpectancy: Record<Pet, number> = {
    cat: 14,
    dog: 10,
} as const;


function getHumanAge(petAge: number, petSpecies: Pet): number {
    const petLifeRate: number = petAge / petLifeExpectancy[petSpecies];
    return AVG_HUMAN_LIFE_EXPECTANCY * petLifeRate;
}

export {
    getHumanAge
}