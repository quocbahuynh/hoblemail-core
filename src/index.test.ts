import { send } from "./methods/send/send";
import * as index from "./index";
import { HopMailJSResponseStatus } from "models/HopMailJSResponseStatus";

jest.mock("./methods/send/send", () => ({
  send: jest.fn(),
}));

describe("index.ts", () => {
  const mockApiKey = "mock-api-key";
  const mockServiceID = "mock-service-id";
  const mockTemplateID = "mock-template-id";
  const mockToMail = "test@example.com";
  const mockTemplateParams = { name: "John Doe" };

  const mockResponse: HopMailJSResponseStatus = {
    status: 200,
    text: "Email sent successfully",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (send as jest.Mock).mockResolvedValue(mockResponse);
  });

  it("should export send function", () => {
    expect(index.send).toBeDefined();
    expect(typeof index.send).toBe("function");
  });

  it("should have default export containing send property", () => {
    expect(index.default).toBeDefined();
    expect(index.default.send).toBe(index.send);
  });

  it("should call send with correct parameters", async () => {
    const result = await index.send(
      mockApiKey,
      mockServiceID,
      mockTemplateID,
      mockToMail,
      mockTemplateParams
    );

    expect(send).toHaveBeenCalledWith(
      mockApiKey,
      mockServiceID,
      mockTemplateID,
      mockToMail,
      mockTemplateParams
    );
    expect(result).toEqual(mockResponse);
  });

  it("should work when templateParameters is omitted", async () => {
    const result = await index.send(
      mockApiKey,
      mockServiceID,
      mockTemplateID,
      mockToMail
    );

    expect(send).toHaveBeenCalledWith(
      mockApiKey,
      mockServiceID,
      mockTemplateID,
      mockToMail
    );
    expect(result).toEqual(mockResponse);
  });
});
