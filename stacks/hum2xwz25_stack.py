import aws_cdk as cdk
from aws_cdk import Stack, Duration
from aws_cdk import aws_s3 as s3, aws_iam as iam, aws_lambda as _lambda, aws_glue as glue
from constructs import Construct


class Hum2xwz25Stack(Stack):
    def __init__(self, scope: Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        # S3 Bucket
        bucket = s3.Bucket(
            self,
            "S3Bucket",
            bucket_name="hum2xwz25-s3-bucket",
            encryption=s3.BucketEncryption.S3_MANAGED,
            removal_policy=cdk.RemovalPolicy.RETAIN,
        )

        # IAM Role for Glue Crawler
        glue_role = iam.Role(
            self,
            "GlueCrawlerRole",
            role_name="hum2xwz25-glue-crawler-role",
            assumed_by=iam.ServicePrincipal("glue.amazonaws.com"),
            inline_policies={
                "GlueCrawlerPolicy": iam.PolicyDocument(
                    statements=[
                        iam.PolicyStatement(
                            effect=iam.Effect.ALLOW,
                            actions=["s3:GetObject", "s3:PutObject", "s3:ListBucket"],
                            resources=[bucket.bucket_arn, f"{bucket.bucket_arn}/*"],
                        ),
                        iam.PolicyStatement(
                            effect=iam.Effect.ALLOW,
                            actions=["glue:*"],
                            resources=["*"],
                        ),
                    ]
                )
            },
        )

        # Lambda execution role for starting the crawler
        start_lambda_role = iam.Role(
            self,
            "StartCrawlerLambdaRole",
            assumed_by=iam.ServicePrincipal("lambda.amazonaws.com"),
            managed_policies=[
                iam.ManagedPolicy.from_aws_managed_policy_name("service-role/AWSLambdaBasicExecutionRole")
            ],
            inline_policies={
                "StartCrawlerLambdaPolicy": iam.PolicyDocument(
                    statements=[
                        iam.PolicyStatement(
                            effect=iam.Effect.ALLOW,
                            actions=["glue:StartCrawler"],
                            resources=["*"],
                        )
                    ]
                )
            },
        )

        # Lambda Function to start Glue Crawler
        lambda_code = _lambda.InlineCode(
            """
import boto3

def handler(event, context):
    client = boto3.client('glue')
    response = client.start_crawler(Name='hum2xwz25-glue-crawler')
    return response
"""
        )

        start_crawler_fn = _lambda.Function(
            self,
            "StartGlueCrawler",
            function_name="hum2xwz25-start-glue-crawler",
            runtime=_lambda.Runtime.PYTHON_3_9,
            handler="index.handler",
            code=lambda_code,
            timeout=Duration.seconds(300),
            role=start_lambda_role,
        )

        # Lambda Permission allowing glue.amazonaws.com to invoke the function
        _lambda.CfnPermission(
            self,
            "StartGlueCrawlerPermission",
            action="lambda:InvokeFunction",
            principal="glue.amazonaws.com",
            function_name=start_crawler_fn.function_arn,
        )

        # Glue CfnCrawler
        glue.CfnCrawler(
            self,
            "GlueCrawler",
            name="hum2xwz25-glue-crawler",
            role=glue_role.role_arn,
            database_name="default",
            targets=glue.CfnCrawler.TargetsProperty(
                s3_targets=[glue.CfnCrawler.S3TargetProperty(path=f"s3://{bucket.bucket_name}/")]
            ),
        )

        # Outputs
        cdk.CfnOutput(self, "S3BucketName", value=bucket.bucket_name)
        cdk.CfnOutput(self, "GlueCrawlerName", value="hum2xwz25-glue-crawler")
        cdk.CfnOutput(self, "GlueCrawlerRoleName", value=glue_role.role_name)
