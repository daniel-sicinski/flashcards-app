import { mapArrayToObjectByIds } from "../utils";

describe("Sagas utils", () => {
  it("mapArrayToObjectByIds should map array to object ", () => {
    const arr = [
      {
        id: 1,
        name: "Joe"
      },
      {
        id: 2,
        name: "Doe"
      }
    ];
    const expected = {
      1: {
        id: 1,
        name: "Joe"
      },
      2: {
        id: 2,
        name: "Doe"
      }
    };

    expect(mapArrayToObjectByIds(arr, "id")).toEqual(expected);
  });

  it("mapArrayToObjectByIds returns nothing if empty arrray is passed", () => {
    const arr = [];
    expect(mapArrayToObjectByIds(arr, "id")).toBeUndefined();
  });

  it("mapArrayToObjectByIds throws if no idProp is passed", () => {
    const arr = [
      {
        id: 1,
        name: "Joe"
      },
      {
        id: 2,
        name: "Doe"
      }
    ];

    expect(() => mapArrayToObjectByIds(arr)).toThrow(
      "idProp should be provided"
    );
  });

  it("mapArrayToObjectByIds throws wrong idParam provided", () => {
    const arr = [
      {
        id: 1,
        name: "Joe"
      },
      {
        id: 2,
        name: "Doe"
      }
    ];

    expect(() => mapArrayToObjectByIds(arr, "wrongIdParam")).toThrow(
      "wrong idProp provided"
    );
  });
});
