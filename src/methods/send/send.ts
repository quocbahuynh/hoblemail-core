import { sendPost } from "../../api/sendPost";

export const send = async (
    apiKey: string,
    emailServiceID: string,
    templateID: string,
    toMail: string,
    templateParameters?: Record<string, any>,
) => {
    if (!apiKey) throw new Error("Missing apiKey");

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