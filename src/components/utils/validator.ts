type Validation = {
  name: string;
  message: string;
  satified: boolean;
};

type validationOptions =
  | "SpeciesName"
  | "PlanetName"
  | "ReasonForSparing"
  | "NumberOfBeings"
  | "TwoPlusTwo";

export type ValidationSample = {
  SpeciesName: Validation[];
  PlanetName: Validation[];
  ReasonForSparing: Validation[];
  NumberOfBeings: Validation[];
  TwoPlusTwo: Validation[];
};

export const validationSample: ValidationSample = {
  SpeciesName: [
    {
      name: "isRequired",
      message: "Species name is required",
      satified: false,
    },
    {
      name: "isMinLength",
      message: "Species name must be at least 3 characters",
      satified: false,
    },
    {
      name: "isMaxLength",
      message: "Species name must be less than 20 characters",
      satified: false,
    },
  ],
  PlanetName: [
    {
      name: "isRequired",
      message: "Planet name is required",
      satified: false,
    },
    {
      name: "isMinLength",
      message: "Planet name must be at least 3 characters",
      satified: false,
    },
    {
      name: "isMaxLength",
      message: "Planet name must be less than 20 characters",
      satified: false,
    },
  ],
  ReasonForSparing: [
    {
      name: "isRequired",
      message: "Reason for sparing is required",
      satified: false,
    },
    {
      name: "isMinLength",
      message: "Reason for sparing must be at least 3 characters",
      satified: false,
    },
    {
      name: "isMaxLength",
      message: "Reason for sparing must be less than 20 characters",
      satified: false,
    },
  ],
  NumberOfBeings: [
    {
      name: "isRequired",
      message: "Number of beings is required",
      satified: false,
    },
    {
      name: "isMinLength",
      message: "Number of beings must be at least 1 character",
      satified: false,
    },
    {
      name: "isMaxLength",
      message: "Number of beings must be less than 20 characters",
      satified: false,
    },
  ],
  TwoPlusTwo: [
    {
      name: "isRequired",
      message: "What is 2 + 2 is required",
      satified: false,
    },
    {
      name: "isCorrect",
      message: "What is 2 + 2 must be 4",
      satified: false,
    },
  ],
};

const isRequired = (value: string) => {
  return value !== "";
};

const isMinLength = (value: string, minLength: number) => {
  return value.length >= minLength;
};

const isMaxLength = (value: string, maxLength: number) => {
  return value.length <= maxLength;
};

const isCorrect = (value: string) => {
  return value === "4";
};

export const validator = (name: validationOptions, value: string) => {
  const validation: Validation[] = validationSample[name];

  validation.forEach((rule) => {
    switch (rule.name) {
      case "isRequired":
        rule.satified = isRequired(value);
        break;
      case "isMinLength":
        rule.satified = isMinLength(value, 3);
        break;
      case "isMaxLength":
        rule.satified = isMaxLength(value, 20);
        break;
      case "isCorrect":
        rule.satified = isCorrect(value);
        break;
      default:
        break;
    }
  });

  return validation;
};
