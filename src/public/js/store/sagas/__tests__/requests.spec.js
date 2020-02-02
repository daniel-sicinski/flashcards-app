import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
  audioRequest,
  API_BASE_URL
} from "../requests";

const createMockFetch = (responseData = {}, requestError) => {
  const mockJsonPromiseResolve = Promise.resolve(responseData);
  const mockJsonPromiseReject = Promise.reject(requestError);
  const responseObject = {
    json: () => (requestError ? mockJsonPromiseReject : mockJsonPromiseResolve),
    blob: () => (requestError ? mockJsonPromiseReject : mockJsonPromiseResolve),
    ok: requestError ? false : true
  };
  const mockFetchPromise = Promise.resolve(responseObject);
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
};

const createFetchOptions = (method, data = {}) => {
  if (method === "DELETE") {
    return { method: "DELETE" };
  }

  return {
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
};

describe("Requests", () => {
  afterEach(() => {
    if (global.fetch) {
      global.fetch.mockClear();
    }
  });

  afterAll(() => {
    delete global.fetch;
  });

  it("getRequest is defined", () => {
    expect(getRequest).toBeDefined();
    expect(typeof getRequest).toBe("function");
  });

  it("getRequest calls proper URL", async () => {
    const responseData = {};
    createMockFetch(responseData);
    const URL = "/test";

    const response = await getRequest(URL);
    expect(response).toBe(responseData);
    expect(global.fetch).toHaveBeenCalledWith(API_BASE_URL + URL);
  });

  it("getRequest throws error if response type is not 2xx", async () => {
    const responseError = "Response error";
    createMockFetch({}, responseError);
    const URL = "/test";

    try {
      await getRequest(URL);
      jest.fail("Function should throw error");
    } catch (err) {
      expect(err).toBeDefined();
      expect(err).toBe(responseError);
    }
  });

  /////////////////////

  it("postRequest is defined", () => {
    expect(postRequest).toBeDefined();
    expect(typeof postRequest).toBe("function");
  });

  it("postRequest calls proper URL and passes data to fetch", async () => {
    const responseData = {};
    const data = {};
    const fetchOptions = createFetchOptions("POST", data);
    createMockFetch(responseData);
    const URL = "/test";

    const response = await postRequest(URL, data);
    expect(response).toBe(responseData);
    expect(global.fetch).toHaveBeenCalledWith(API_BASE_URL + URL, fetchOptions);
  });

  it("postRequest throws error if response type is not 2xx", async () => {
    const data = {};

    const responseError = "Response error";
    createMockFetch({}, responseError);
    const URL = "/test";

    try {
      await postRequest(URL, data);
      jest.fail("Function should throw error");
    } catch (err) {
      expect(err).toBeDefined();
      expect(err).toBe(responseError);
    }
  });

  /////////////////////

  it("putRequest is defined", () => {
    expect(putRequest).toBeDefined();
    expect(typeof putRequest).toBe("function");
  });

  it("putRequest calls proper URL and passes data to fetch", async () => {
    const responseData = {};
    const data = {};
    const fetchOptions = createFetchOptions("PUT", data);
    createMockFetch(responseData);
    const URL = "/test";

    const response = await putRequest(URL, data);
    expect(response).toBe(responseData);
    expect(global.fetch).toHaveBeenCalledWith(API_BASE_URL + URL, fetchOptions);
  });

  it("putRequest throws error if response type is not 2xx", async () => {
    const data = {};

    const responseError = "Response error";
    createMockFetch({}, responseError);
    const URL = "/test";

    try {
      await putRequest(URL, data);
      jest.fail("Function should throw error");
    } catch (err) {
      expect(err).toBeDefined();
      expect(err).toBe(responseError);
    }
  });

  /////////////////////

  it("deleteRequest is defined", () => {
    expect(deleteRequest).toBeDefined();
    expect(typeof deleteRequest).toBe("function");
  });

  it("deleteRequest calls proper URL and uses proper fetch options", async () => {
    const fetchOptions = createFetchOptions("DELETE");
    createMockFetch();
    const URL = "/test";

    await deleteRequest(URL);
    expect(global.fetch).toHaveBeenCalledWith(API_BASE_URL + URL, fetchOptions);
  });

  it("deleteRequest throws error if response type is not 2xx", async () => {
    const responseError = "Response error";
    createMockFetch({}, responseError);
    const URL = "/test";

    try {
      await deleteRequest(URL);
      jest.fail("Function should throw error");
    } catch (err) {
      expect(err).toBeDefined();
      expect(err).toBe(responseError);
    }
  });

  /////////////////////

  it("audioRequest is defined", () => {
    expect(audioRequest).toBeDefined();
    expect(typeof audioRequest).toBe("function");
  });

  it("audioRequest calls proper URL and uses proper fetch options", async () => {
    const fetchOptions = {
      responseType: "blob"
    };
    createMockFetch();
    const trackId = 1;

    await audioRequest(trackId);
    expect(global.fetch).toHaveBeenCalledWith(
      `/api/v1/audioTrack/${trackId}`,
      fetchOptions
    );
  });

  it("audioRequest throws error if response type is not 2xx", async () => {
    const responseError = "Response error";
    createMockFetch({}, responseError);
    const trackId = 1;

    try {
      await deleteRequest(trackId);
      jest.fail("Function should throw error");
    } catch (err) {
      expect(err).toBeDefined();
      expect(err).toBe(responseError);
    }
  });
});
