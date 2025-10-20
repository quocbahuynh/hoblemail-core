import { sendPost } from "../../api/sendPost";
import { validateParams } from "@utils/validateParams/validateParams";
import { validateTemplateParams } from "@utils/validateTemplateParams/validateTemplateParams";
import { send } from "./send";


jest.mock('../../api/sendPost', () => ({
  sendPost: jest.fn(),
}));

jest.mock('../../utils/validateParams/validateParams', () => ({
  validateParams: jest.fn(),
}));

jest.mock('../../utils/validateTemplateParams/validateTemplateParams', () => ({
  validateTemplateParams: jest.fn(),
}));

describe('send', () => {
  const mockApiKey = 'TEST_API_KEY';
  const mockServiceID = 'SERVICE_123';
  const mockTemplateID = 'TEMPLATE_456';
  const mockToMail = 'user@example.com';
  const mockTemplateParams = { name: 'Quoc' };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call all validators and sendPost with correct parameters', async () => {
    (sendPost as jest.Mock).mockResolvedValue({ status: 200, text: 'OK' });

    await send(
      mockApiKey,
      mockServiceID,
      mockTemplateID,
      mockToMail,
      mockTemplateParams
    );

    expect(validateParams).toHaveBeenCalledWith(
      mockApiKey,
      mockServiceID,
      mockTemplateID
    );
    expect(validateTemplateParams).toHaveBeenCalledWith(mockTemplateParams);

    const expectedHeaders = {
      'x-api-key': mockApiKey,
      'Content-Type': 'application/json',
    };
    const expectedBody = JSON.stringify({
      serviceId: mockServiceID,
      templateId: mockTemplateID,
      toMail: mockToMail,
      templateParameters: mockTemplateParams,
    });
    expect(sendPost).toHaveBeenCalledWith('/api/email/send', expectedBody, expectedHeaders);
  });

  it('should omit templateParameters if not provided', async () => {
    (sendPost as jest.Mock).mockResolvedValue({ status: 200, text: 'OK' });

    await send(mockApiKey, mockServiceID, mockTemplateID, mockToMail);

    const expectedBody = JSON.stringify({
      serviceId: mockServiceID,
      templateId: mockTemplateID,
      toMail: mockToMail,
    });
    expect(sendPost).toHaveBeenCalledWith(
      '/api/email/send',
      expectedBody,
      expect.any(Object)
    );
  });

  it('should return the result from sendPost', async () => {
    const mockResponse = { status: 200, text: 'OK' };
    (sendPost as jest.Mock).mockResolvedValue(mockResponse);

    const result = await send(
      mockApiKey,
      mockServiceID,
      mockTemplateID,
      mockToMail,
      mockTemplateParams
    );

    expect(result).toEqual(mockResponse);
  });

  it('should throw if sendPost rejects', async () => {
    (sendPost as jest.Mock).mockRejectedValue(new Error('Network Error'));

    await expect(
      send(mockApiKey, mockServiceID, mockTemplateID, mockToMail, mockTemplateParams)
    ).rejects.toThrow('Network Error');
  });
});
