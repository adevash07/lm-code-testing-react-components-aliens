export const validationSample = {
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
