
# HobleMail SDK for Node.js

SDK for developers using HobleMail.

Ship email with one call — no SMTP required.


![NPM Version](https://img.shields.io/npm/v/@hoblemail/core?color=blue)
![License](https://img.shields.io/github/license/quocbahuynh/hoblemail-core)
![Build Status](https://img.shields.io/badge/status-development-yellow)
![Node](https://img.shields.io/node/v/@hoblemail/core)


## ⚠️ Status

> This project is **under active development** and may change rapidly.  
> Early adopters are welcome to try it and provide feedback!


## Install

```bash
npm install @hoblemail/core
# or
yarn add @hoblemail/core

```

## Examples

- [React.js](https://github.com/quocbahuynh/hoblemail-core/tree/main/example/react-app)
- [Next.js (App Router)](https://github.com/quocbahuynh/hoblemail-core/tree/main/example/next-app)


## Before You Start

1. **Create an Email Service** → Add your sender email in the [Hoble Mail Dashboard](https://hoblemail.com) and copy its **Email Service ID**.  
2. **Create a Template** → Design your email content, add variables like `{{name}}`, and copy the **Template ID**.  
3. **Get an API Key** → From **Settings → API Keys**, generate and copy your key.

You’ll need these three values:
- `API Key (xxxxx...xxxxx)`
- `EMAIL_SERVICE_ID`
- `TEMPLATE_ID`

Then you’re ready to send your first email 🎉

## Usage

Send your first email:

```js
import { send } from "@hoblemail/core";

const parameters = {
  name: "John Doe",
  age: 18,
};

try {
  await send({
    apiKey: "xxxxx...xxxxx",
    emailServiceId: "EMAIL_SERVICE_ID",
    templateId: "TEMPLATE_ID",
    to: "user@gmail.com",
    templateParameters: parameters,
  });

  console.log("✅ Email sent successfully!");
} catch (err) {
  console.error("❌ Email sending failed!", err);
}
```


## Authors

- Developed by HobleMail Team

## License

This project is licensed under the [MIT License](./LICENSE).

## Contributing

We welcome contributions!  
If you'd like to improve or extend HobleMail Core, please open an issue or pull request on [GitHub](https://github.com/quocbahuynh/hoblemail-core).


