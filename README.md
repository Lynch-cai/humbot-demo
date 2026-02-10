# CDK synth instructions

This directory contains a minimal AWS CDK (Python) application that defines two stacks:
- Hum2xwz25Stack
- Huml99de4Stack

Quickstart to synthesize the CloudFormation templates:

1. Create a Python virtual environment (optional) and activate it.
2. Install dependencies:
   pip install -r requirements.txt

3. Install the CDK CLI if you want to use the cdk command (optional):
   npm install -g aws-cdk

4. Synthesize the templates (from this directory):
   cdk synth

   If the CDK CLI is not available you can run the app directly (cdk.json is configured to point to app.py):
   python3 app.py

Outputs from the synth will include S3 bucket names, Glue crawler names, and role ARNs for each stack.
