# lambda-ghost :ghost:
Easy Web Scraping on AWS Lambda by node-lambda & Phantom.

![](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser.svg)
<!-- add ci status badge -->

## :pushpin: Description

### DEMO

![](https://lh3.googleusercontent.com/w4LTLNkoZK5KtFh_dxA2dtgxXz7BA3T68muG3FJ8mRge-ZFX2Fx2NMqqs4QfvIP95i-jw_-3JoklBLHmHE1fx9VP-yVflY83igMeNSu_S_Y8Q1Ez-bSn9Qo70kCgpVWD1kHQBBVj8YANxRwYHKi9Vg5TG3OHUIm7Yv7x0bp32F7v4KJeLnmSyyAKXMXgFna0XH9_cFYYJHfHxNqj8v6gkyMZxTyc6Qc0fxBrYbDfQZMVIpW8MQ_U8oUelN9k15qBUzf5hGWJkmmuRHO-iZ8oaoSfN0XzkbGYL4Qf8cqe0wtK4pbgBwlkKgw9fW_r05vbkZv_OjLVh2T7Uk1BI-pLbuQYdM-5-N1Dke0emylMyT44siGPbmjF4vrmsmGIyTNhUtaJD7SaW26cTLnMCBR0LuhCFMYEd7ZMnHasnCNMGQpiCN_UPuEd0DFNQdQBfz7cKtgx7czTibvPXvox0CTAHefXu4Oh07t2xhuLJ3uEyK0c1uCE_jhmlNIC2KyFvPxCc0knIcp1XBBNLEl4IqHKWkpNfu-3YuB1YciqAnVdjPJCdX8vm86ATFIrSZtVlflSa7X8Gx6YB7PzIoSAv7-UOsspGMo6fCKCt3HnSlGIBijREHjai_i-ETjIkfjA06nNcANpMqp3Gi7Vf2DagpNRDk6q-5JPpL4=w737-h281-no)

## :white_check_mark: Features
- :ghost: support PhantomJS by Phantom
- :cloud: also running on AWS
- :mouse: support .editorconfig

---

## :floppy_disk: Install
### Requirements
<!-- show dependencies first -->
* node v8.10.0+
* yarn v1.7.0+

### Step
1. Install
```
$ yarn install
```
1. Setup
```
$ yarn setup
```

## :arrow_forward: Usage
*how to run*

```
$ yarn start
```

*how to deploy*
※Setting up AWS-CLI configuration yet? see [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-config-files.html)

```
### for deplyment, overwrite your lambda role arn & region & function name(OS X example bellow)
$ sed -i '' 's/\(AWS_ROLE_ARN=\).*/\1<your_lambda_arn>/' .env
$ sed -i '' 's/\(AWS_REGION=\).*/\1<your_region>/' .env
$ sed -i '' 's/\(AWS_FUNCTION_NAME=\).*/\1<your_lambda_name>/' .env

$ yarn deploy
```
## :information_source: Anything else
nothing

## :pencil: Author
[mesh1nek0x0](https://github.com/mesh1nek0x0)

## :clipboard: LICENCE
MIT
