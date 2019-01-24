import { MachineType } from "../models/machine.model";

export class DisplayOption<TValue> {
    constructor(
        public translationKey: string,
        public value: TValue
    ) { }
}

export const sessionLifetimes = [
    new DisplayOption("indefinite", undefined),
    new DisplayOption("day", 1),
    new DisplayOption("days", 7),
    new DisplayOption("days", 30),
    new DisplayOption("days", 90),
];

export const pollIntervals = [
    new DisplayOption("second", 1000),
    new DisplayOption("seconds", 5000),
    new DisplayOption("seconds", 10000),
    new DisplayOption("seconds", 20000),
    new DisplayOption("seconds", 30000)
];

export const machineTypes = [
    new DisplayOption("Octoprint", MachineType.Octoprint),
    new DisplayOption("RepRapFirmware", MachineType.RepRapFirmware),
    new DisplayOption("UM", MachineType.UM)
];
