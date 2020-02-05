const validatePlaylist = require("../validatePlaylist");

describe("validatePlaylist", () => {
  it("calls next with error if no name is provided in request", () => {
    const req = {
      body: {
        cardsIds: ["1", "2"]
      }
    };

    const res = {};

    const next = jest.fn();

    validatePlaylist(req, res, next);
    expect(next).toHaveBeenCalledWith(
      new Error('ValidationError: "name" is required')
    );
  });

  it("calls next with error if no cardsIds is provided in request", () => {
    const req = {
      body: {
        name: "test"
      }
    };

    const res = {};

    const next = jest.fn();

    validatePlaylist(req, res, next);
    expect(next).toHaveBeenCalledWith(
      new Error('ValidationError: "cardsIds" is required')
    );
  });

  it("calls next if request is ok", () => {
    const req = {
      body: {
        name: "test",
        cardsIds: ["1", "2"]
      }
    };

    const res = {};

    const next = jest.fn();

    validatePlaylist(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});
