import { sendPost } from "../../api/sendPost";
import { HopMailJSResponseStatus } from "../../models/HopMailJSResponseStatus";
import { send } from "./send";

const responseWrapper = () => {
    return Promise.resolve(new HopMailJSResponseStatus(200, 'OK'));
};

jest.mock('../../api/sendPost', () => ({
    sendPost: jest.fn(() => {
        return responseWrapper();
    }),
}));

describe('send()', () => {

    it('throws error if apiKey is missing', async () => {
        await expect(send('', 'service1', 'template1', 'test@gmail.com')
        ).rejects.toThrow('Missing apiKey');
    });
    
});