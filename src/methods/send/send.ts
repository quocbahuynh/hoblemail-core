import { sendPost } from "@api/sendPost";
import { validateParams } from "@utils/validateParams/validateParams";
import { validateTemplateParams } from "@utils/validateTemplateParams/validateTemplateParams";
import { HobleMailJSResponseStatus } from "models/HobleMailJSResponseStatus";

export const send = async (
    apiKey: string,
    emailServiceID: string,
    templateID: string,
    toMail: string,
    templateParameters?: Record<string, any>,
): Promise<HobleMailJSResponseStatus> => {

    validateParams(apiKey, emailServiceID, templateID);
    validateTemplateParams(templateParameters);

    const headers = {
        "x-api-key": apiKey,
        "Content-Type": "application/json"
    }

    const params: any = {
        serviceId: emailServiceID,
        templateId: templateID,
        toMail: toMail,
    };

    if (templateParameters) {
        params.templateParameters = templateParameters;
    }

    return sendPost("/api/email/send", JSON.stringify(params), headers);
}