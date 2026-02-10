import aws_cdk as cdk
from aws_cdk import Stack
from aws_cdk import aws_s3 as s3, aws_iam as iam, aws_glue as glue
from constructs import Construct


class Huml99de4Stack(Stack):
    def __init__(self, scope: Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        # S3 Bucket
        bucket = s3.Bucket(
            self,
            "S3Bucket",
            bucket_name="huml99de4-s3-bucket",
            encryption=s3.BucketEncryption.S3_MANAGED,
            removal_policy=cdk.RemovalPolicy.RETAIN,
        )

        # IAM Role for Glue Crawler
        glue_role = iam.Role(
            self,
            "GlueCrawlerRole",
            role_name="huml99de4-glueCrawlerRole",
            assumed_by=iam.ServicePrincipal("glue.amazonaws.com"),
            inline_policies={
                "huml99de4-glueCrawlerPolicy": iam.PolicyDocument(
                    statements=[
                        iam.PolicyStatement(
                            effect=iam.Effect.ALLOW,
                            actions=["s3:GetObject", "s3:PutObject", "s3:ListBucket"],
                            resources=[bucket.bucket_arn, f"{bucket.bucket_arn}/*"],
                        ),
                    ]
                )
            },
        )

        # Glue CfnCrawler with schedule
        glue.CfnCrawler(
            self,
            "GlueCrawler",
            name="huml99de4-glueCrawler",
            role=glue_role.role_arn,
            database_name="huml99de4-database",
            targets=glue.CfnCrawler.TargetsProperty(
                s3_targets=[glue.CfnCrawler.S3TargetProperty(path=f"s3://{bucket.bucket_name}/")]
            ),
            schedule=glue.CfnCrawler.ScheduleProperty(schedule_expression="cron(0 12 * * ? *)"),
        )

        # Outputs
        cdk.CfnOutput(self, "S3BucketName", value=bucket.bucket_name)
        cdk.CfnOutput(self, "GlueCrawlerRoleArn", value=glue_role.role_arn)
        cdk.CfnOutput(self, "GlueCrawlerName", value="huml99de4-glueCrawler")
