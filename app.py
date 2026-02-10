#!/usr/bin/env python3
import aws_cdk as cdk
from stacks.hum2xwz25_stack import Hum2xwz25Stack
from stacks.huml99de4_stack import Huml99de4Stack

app = cdk.App()
Hum2xwz25Stack(app, "Hum2xwz25Stack")
Huml99de4Stack(app, "Huml99de4Stack")

app.synth()
