export const cloudPractitioner = {
  id: 'cloud-practitioner',
  title: 'AWS Cloud Practitioner',
  certificationCode: 'CLF-C02',
  description: 'Learn cloud computing fundamentals and prepare for the AWS Cloud Practitioner certification.',
  difficulty: 'beginner',
  estimatedHours: 15,
  color: 'from-orange-500 to-yellow-500',
  domains: [
    {
      name: 'Cloud Concepts',
      weight: '24%',
      lessons: [
        {
          id: 'value-proposition',
          title: 'Value Proposition of AWS',
          content: `Cloud computing provides on-demand delivery of IT resources over the internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services such as computing power, storage, and databases from a cloud provider like AWS.`,
          keyConcepts: [
            'On-demand self-service: Provision resources automatically without human interaction',
            'Broad network access: Access resources over the network from any device',
            'Resource pooling: Provider resources serve multiple consumers',
            'Rapid elasticity: Scale up or down quickly based on demand',
            'Measured service: Pay only for what you use'
          ],
          keyPoints: [
            'AWS offers over 200 fully featured services',
            'Global infrastructure with 30+ regions and 90+ availability zones',
            'No upfront capital expenditure required',
            'Economies of scale reduce pay-as-you-go prices'
          ],
          examples: [
            { title: 'Traditional vs Cloud', code: '# Traditional: Buy server for $10,000\n# Cloud: Rent server for $0.10/hour\n\n# Break-even at ~11.4 years of 24/7 usage\n# Cloud wins for variable or growing workloads' }
          ],
          proTips: [
            'Start with the AWS Free Tier to experiment at no cost',
            'Use AWS Calculator to estimate costs before deploying'
          ]
        },
        {
          id: 'cloud-computing-models',
          title: 'Cloud Computing Models',
          content: `AWS offers different cloud deployment models and service models to meet various needs. Understanding these models helps you choose the right approach for your workloads.`,
          keyConcepts: [
            'IaaS (Infrastructure as Virtual machines, networking, storage - you manage OS and apps',
            'PaaS (Platform as a Service): Managed platforms like Elastic Beanstalk - you manage apps only',
            'SaaS (Software as a Service): Complete applications like WorkMail - provider manages everything',
            'Public Cloud: Resources shared across multiple organizations',
            'Private Cloud: Dedicated resources for a single organization',
            'Hybrid Cloud: Combination of public and private clouds'
          ],
          keyPoints: [
            'AWS Lambda is FaaS (Function as a Service) - serverless computing',
            'EC2 is the primary IaaS offering',
            'Elastic Beanstalk is AWS PaaS offering',
            'AWS Outposts extends AWS to private data centers'
          ],
          examples: [
            { title: 'Service Models', code: '# IaaS: Amazon EC2\n#   You manage: OS, middleware, runtime, apps\n#   AWS manages: Hardware, networking, storage\n\n# PaaS: AWS Elastic Beanstalk\n#   You manage: Your application code\n#   AWS manages: Everything else\n\n# SaaS: Amazon WorkMail\n#   You manage: Nothing - just use it\n#   AWS manages: Everything' }
          ],
          proTips: [
            'Serverless (Lambda) is the most hands-off compute option',
            'Containers (ECS/EKS) bridge the gap between IaaS and PaaS'
          ]
        },
        {
          id: 'well-architected',
          title: 'AWS Well-Architected Framework',
          content: `The AWS Well-Architected Framework helps cloud architects build secure, high-performing, resilient, and efficient infrastructure. It is based on six pillars.`,
          keyConcepts: [
            'Operational Excellence: Automate operations, define infrastructure as code',
            'Security: Apply security at all layers, enable traceability',
            'Reliability: Scale horizontally, recover from failures automatically',
            'Performance Efficiency: Use resources efficiently, maintain effectiveness as demand changes',
            'Cost Optimization: Avoid unnecessary costs, understand spending patterns',
            'Sustainability: Minimize environmental impact of running cloud workloads'
          ],
          keyPoints: [
            'The framework provides a consistent approach for customers and partners',
            'AWS Well-Architected Tool helps review workloads against the pillars',
            'Regular reviews help identify architectural improvements',
            'Free tool available in the AWS Management Console'
          ],
          examples: [
            { title: 'Review Process', code: '# 1. Define workload (name, description, owner)\n# 2. Answer questions for each pillar\n# 3. Review with AWS or partner\n# 4. Identify improvement areas\n# 5. Prioritize and implement changes\n# 6. Repeat regularly\n\n# Example pillar questions:\n# Security: How do you manage credentials?\n# Reliability: How do you recover from failures?' }
          ],
          proTips: [
            'Use the Well-Architected Tool for monthly reviews',
            'AWS Partners can conduct formal Well-Architected Reviews'
          ]
        },
        {
          id: 'cloud-economics',
          title: 'Cloud Economics & Benefits',
          content: `Understanding cloud economics helps organizations realize the financial benefits of moving to AWS. Key concepts include CapEx vs OpEx, Total Cost of Ownership, and return on investment.`,
          keyConcepts: [
            'CapEx (Capital Expenditure): Upfront costs for hardware and data centers',
            'OpEx (Operating Expenditure): Pay-as-you-go operational costs',
            'TCO (Total Cost of Ownership): Complete cost analysis including hidden costs',
            'AWS Migration Acceleration Program (MAP): Credits and tools for migration',
            'Economies of scale: AWS passes savings to customers'
          ],
          keyPoints: [
            'Cloud eliminates costs of physical data center operations',
            'Reduced IT staff needed for infrastructure management',
            'Global infrastructure enables worldwide deployment in minutes',
            'Pay-as-you-go model aligns costs with actual usage'
          ],
          examples: [
            { title: 'Cost Comparison', code: '# On-Premises Costs:\n# - Server hardware: $10,000\n# - Networking: $2,000\n# - Physical space: $5,000/year\n# - Power & cooling: $3,000/year\n# - IT staff: $80,000/year\n# - Maintenance: $2,000/year\n# Total Year 1: ~$102,000\n\n# AWS Cloud:\n# - EC2 instances: $5,000/year\n# - Storage: $1,200/year\n# - Support: $0 (basic)\n# Total Year 1: ~$6,200\n# Savings: ~94%' }
          ],
          proTips: [
            'Use AWS TCO Calculator for detailed cost comparisons',
            'MAP provides credits for qualifying migrations'
          ]
        },
        {
          id: 'cloud-journey',
          title: 'AWS Cloud Journey',
          content: `Organizations typically follow a structured journey when adopting AWS cloud. This journey involves assessment, migration, and optimization phases.`,
          keyConcepts: [
            'Assessment: Evaluate current infrastructure and identify migration candidates',
            'Migration: Move workloads to AWS using the 6 Rs (Rehost, Replatform, etc.)',
            'Optimization: Continuously improve performance and reduce costs',
            'Innovation: Leverage new AWS services to transform the business',
            'AWS Cloud Adoption Framework (CAF): Provides guidance for cloud adoption'
          ],
          keyPoints: [
            '6 Rs of Migration: Rehost, Replatform, Repurchase, Refactor, Retire, Retain',
            'AWS Migration Hub tracks migration progress',
            'AWS Snow Family enables offline data transfer (Snowcone, Snowball, Snowmobile)',
            'AWS Application Discovery Service helps plan migrations'
          ],
          examples: [
            { title: 'Migration Strategies', code: '# 6 Rs of Migration:\n\n# Rehost (Lift & Shift)\n# Move as-is to EC2\n# Example: Move file server to EC2\n\n# Replatform (Lift & Reshape)\n# Minor optimizations\n# Example: Migrate MySQL to RDS\n\n# Repurchase (Drop & Shop)\n# Switch to SaaS\n# Example: Move to Salesforce\n\n# Refactor (Re-architect)\n# Rebuild for cloud-native\n# Example: Monolith to microservices\n\n# Retire\n# Turn off unnecessary resources\n\n# Retain\n# Keep workloads on-premises' }
          ],
          proTips: [
            'Start with low-risk, high-value workloads for quick wins',
            'Use AWS Migration Acceleration Program (MAP) for guidance and credits'
          ]
        }
      ]
    },
    {
      name: 'Security & Compliance',
      weight: '30%',
      lessons: [
        {
          id: 'shared-responsibility',
          title: 'Shared Responsibility Model',
          content: `AWS operates on a Shared Responsibility Model. AWS is responsible for security OF the cloud (hardware, software, networking, facilities), while customers are responsible for security IN the cloud (data, identity, OS, network configuration).`,
          keyConcepts: [
            'AWS Responsibility (Security OF the Cloud): Hardware, software, networking, facilities',
            'Customer Responsibility (Security IN the Cloud): Data, OS, applications, network configuration',
            'Shared Controls: Patch management, configuration management, awareness & training',
            'Customer controls: Service and encryption selection, firewall/network config, platform OS'
          ],
          keyPoints: [
            'AWS manages physical security of data centers',
            'Customers manage security group rules and NACLs',
            'AWS manages hypervisor patching',
            'Customers manage OS patching on EC2 instances'
          ],
          examples: [
            { title: 'Responsibility Matrix', code: '# AWS Manages:\n# - Physical security of data centers\n# - Hardware and networking\n# - Hypervisor layer\n# - Global infrastructure\n\n# Customer Manages:\n# - Data classification\n# - OS patching (EC2)\n# - Firewall and network config\n# - IAM users and policies\n# - Encryption of data\n# - Client-side and server-side encryption\n# - Network traffic protection' }
          ],
          proTips: [
            'Understanding this model is critical for the exam',
            'The line shifts based on the service (Lambda vs EC2)'
          ]
        },
        {
          id: 'iam-basics',
          title: 'IAM Basics',
          content: `AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. IAM allows you to create and manage AWS users, groups, roles, and permissions.`,
          keyConcepts: [
            'Users: Individual identities with unique credentials',
            'Groups: Collections of users with shared permissions',
            'Roles: Temporary credentials for AWS services or external users',
            'Policies: JSON documents that define permissions',
            'Root Account: The email used to create the AWS account - protect it'
          ],
          keyPoints: [
            'Enable Multi-Factor Authentication (MFA) on root account',
            'Never use root account for daily tasks',
            'Follow principle of least privilege',
            'IAM is global - not tied to a region'
          ],
          examples: [
            { title: 'IAM Policy', code: '{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": "s3:GetObject",\n      "Resource": "arn:aws:s3:::my-bucket/*"\n    },\n    {\n      "Effect": "Deny",\n      "Action": "s3:DeleteBucket",\n      "Resource": "arn:aws:s3:::*"\n    }\n  ]\n}' }
          ],
          proTips: [
            'IAM is always free - no charges for users, groups, or roles',
            'Use IAM Access Analyzer to identify unintended access'
          ]
        },
        {
          id: 'security-policies',
          title: 'Security Policies',
          content: `AWS provides multiple policy types to control access. Understanding when to use each type is essential for securing your AWS environment.`,
          keyConcepts: [
            'Identity-based policies: Attached to IAM users, groups, or roles (managed or inline)',
            'Resource-based policies: Attached to resources like S3 buckets or Lambda functions',
            'Permission boundaries: Limits the maximum permissions an IAM entity can have',
            'Service Control Policies (SCPs): Controls permissions across all accounts in AWS Organizations',
            'Access Control Lists (ACLs): Legacy way to control access to resources'
          ],
          keyPoints: [
            'Managed policies can be attached to multiple identities',
            'Inline policies are embedded directly in a single identity',
            'SCPs do not apply to the management account',
            'Use IAM Access Analyzer to review policies'
          ],
          examples: [
            { title: 'S3 Bucket Policy', code: '{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "PublicRead",\n      "Effect": "Allow",\n      "Principal": "*",\n      "Action": "s3:GetObject",\n      "Resource": "arn:aws:s3:::my-public-bucket/*"\n    }\n  ]\n}' }
          ],
          proTips: [
            'Prefer managed policies over inline policies',
            'Use SCPs to enforce organization-wide guardrails'
          ]
        },
        {
          id: 'aws-organizations',
          title: 'AWS Organizations',
          content: `AWS Organizations helps you centrally manage and govern your environment as you grow. It enables you to create and manage multiple AWS accounts.`,
          keyConcepts: [
            'Management Account: The root account that manages all others',
            'Member Accounts: Individual AWS accounts under the management account',
            'Organizational Units (OUs): Groups of accounts for applying policies',
            'Service Control Policies (SCPs): Control what services accounts can use',
            'Consolidated Billing: Single payment method for all accounts'
          ],
          keyPoints: [
            'Consolidated billing provides volume discounts across accounts',
            'SCPs guardrail permissions but do not grant permissions',
            'Maximum of 5 accounts can be created by default (request increase)',
            'AWS Control Tower provides automated multi-account setup'
          ],
          examples: [
            { title: 'Organization Structure', code: '# Organization Structure:\n\nRoot\n├── Management Account\n├── Security OU\n│   ├── Log Archive Account\n│   ├── Audit Account\n│   └── Security Tooling Account\n├── Infrastructure OU\n│   ├── Network Account\n│   └── Shared Services Account\n├── Workload OU\n│   ├── Production Account\n│   ├── Staging Account\n│   └── Development Account\n└── Suspended OU\n    └── Closed Account' }
          ],
          proTips: [
            'Use Control Tower for quick multi-account setup',
            'Keep the management account clean - no workloads'
          ]
        },
        {
          id: 'compliance-artifact',
          title: 'Compliance Programs & AWS Artifact',
          content: `AWS complies with many international standards and regulations. AWS Artifact provides access to compliance reports and certifications.`,
          keyConcepts: [
            'AWS Artifact: Portal for compliance reports and agreements',
            'AWS Artifact Reports: Third-party audit reports (SOC, PCI, ISO)',
            'AWS Artifact Agreements: Legal agreements like BAA and DPA',
            'Compliance Programs: AWS meets standards like SOC, PCI DSS, HIPAA, FedRAMP',
            'AWS Config: Tracks resource compliance with desired configurations'
          ],
          keyPoints: [
            'AWS Artifact is free to access from the AWS Management Console',
            'Reports include SOC 1/2/3, PCI DSS Level 1, ISO 27001, and more',
            'AWS Config rules can automatically check compliance',
            'AWS Security Hub provides centralized security view'
          ],
          examples: [
            { title: 'Using AWS Config', code: '# AWS Config:\n# 1. Enable AWS Config in console\n# 2. Select resources to record\n# 3. Choose S3 bucket for storage\n# 4. Create Config Rules:\n\n# Example Rules:\n# - ec2-instances-in-vpc\n# - s3-bucket-ssl-requests-only\n# - iam-password-policy\n# - root-account-mfa-enabled\n\n# Config evaluates compliance:\n# COMPLIANT or NON-COMPLIANT' }
          ],
          proTips: [
            'Download reports from Artifact for audit purposes',
            'Use AWS Config for continuous compliance monitoring'
          ]
        }
      ]
    },
    {
      name: 'Cloud Technology & Services',
      weight: '34%',
      lessons: [
        {
          id: 'ec2-basics',
          title: 'EC2 Basics',
          content: `Amazon Elastic Compute Cloud (EC2) provides scalable computing capacity in the AWS Cloud. It eliminates the need to invest in hardware, allowing you to develop and deploy applications faster.`,
          keyConcepts: [
            'Instances: Virtual servers in the cloud',
            'Amazon Machine Images (AMIs): Pre-configured templates for instances',
            'Instance Types: Different CPU, memory, storage, and networking configurations',
            'Key Pairs: SSH credentials for secure access',
            'Security Groups: Virtual firewalls for instances'
          ],
          keyPoints: [
            'EC2 instance types: t3 (general), c6g (compute), r6g (memory), m6g (balanced)',
            'Elastic IP addresses can be reassisted between instances',
            'Placement groups control instance placement (cluster, spread, partition)',
            'Spot instances save up to 90% but can be terminated'
          ],
          examples: [
            { title: 'Launching an EC2 Instance', code: '# Using AWS CLI:\naws ec2 run-instances \\\n  --image-id ami-0abcdef1234567890 \\\n  --instance-type t3.micro \\\n  --key-name my-key-pair \\\n  --security-group-ids sg-12345678 \\\n  --subnet-id subnet-12345678\n\n# Key parameters:\n# --image-id: AMI to use\n# --instance-type: Hardware config\n# --key-name: SSH key pair name\n# --security-group-ids: Firewall rules' }
          ],
          proTips: [
            'Use t3.micro for Free Tier eligible workloads',
            'Stop instances when not in use to save costs'
          ]
        },
        {
          id: 'instance-types',
          title: 'EC2 Instance Types',
          content: `AWS offers different instance families optimized for different use cases. Understanding instance types helps you choose the right compute for your workload.`,
          keyConcepts: [
            'General Purpose (t3, m6g): Balanced compute, memory, and networking',
            'Compute Optimized (c6g): CPU-intensive tasks like batch processing',
            'Memory Optimized (r6g): In-memory databases and real-time analytics',
            'Storage Optimized (i3): High sequential read/write to local storage',
            'Accelerated Computing (p4, g5): GPU instances for ML and graphics'
          ],
          keyPoints: [
            'Burstable instances (t3) earn CPU credits during low usage',
            'Graviton processors (a1, m6g, c6g) offer better price-performance',
            'Size names: nano, micro, small, medium, large, xlarge, 2xlarge',
            'AMD and Intel variants available for some families'
          ],
          examples: [
            { title: 'Instance Selection', code: '# Instance Types by Use Case:\n\n# t3.micro  - 2 vCPU, 1GB  - Web servers, dev\n# t3.large  - 2 vCPU, 8GB  - Small apps, dev\n# m6g.large - 2 vCPU, 8GB  - General workloads\n# c6g.large - 2 vCPU, 4GB  - Batch processing\n# r6g.large - 2 vCPU, 16GB - In-memory databases\n# i3.large  - 2 vCPU, 15GB - NoSQL databases\n# p4d.24xl  - 96 vCPU, 1TB - ML training\n\n# Naming: [family][generation].[size]\n# m6g.xlarge:\n#   m = general purpose\n#   6 = 6th generation\n#   g = Graviton (ARM)\n#   xlarge = size' }
          ],
          proTips: [
            'Graviton instances (g suffix) are 20% cheaper and faster',
            'Use AWS Compute Optimizer for right-sizing recommendations'
          ]
        },
        {
          id: 's3-basics',
          title: 'S3 Basics',
          content: `Amazon Simple Storage Service (S3) is an object storage service offering 99.999999999% (11 9s) of durability. It stores data as objects in buckets.`,
          keyConcepts: [
            'Buckets: Containers for objects (globally unique names)',
            'Objects: Files stored in S3 with metadata and a unique key',
            'Regions: Choose where data is stored',
            'Versioning: Keep multiple versions of objects',
            'Access Control: IAM policies, bucket policies, ACLs, presigned URLs'
          ],
          keyPoints: [
            'S3 Standard: 99.99% availability, high durability',
            'Maximum object size: 5 TB',
            'Maximum PUT object size: 5 GB',
            'S3 Transfer Acceleration: Faster uploads over long distances'
          ],
          examples: [
            { title: 'S3 Operations', code: '# Create bucket\naws s3 mb s3://my-unique-bucket-name\n\n# Upload file\naws s3 cp myfile.txt s3://my-bucket/\n\n# List objects\naws s3 ls s3://my-bucket/\n\n# Download file\naws s3 cp s3://my-bucket/myfile.txt .\n\n# Sync directory\naws s3 sync ./local-folder s3://my-bucket/folder/' }
          ],
          proTips: [
            'Bucket names must be globally unique across all AWS accounts',
            'Enable versioning to protect against accidental deletions'
          ]
        },
        {
          id: 's3-storage-classes',
          title: 'S3 Storage Classes',
          content: `S3 offers multiple storage classes to optimize cost based on access patterns. Choose the right class to balance cost and performance.`,
          keyConcepts: [
            'S3 Standard: Frequently accessed data (default)',
            'S3 Intelligent-Tiering: Automatically moves objects between tiers',
            'S3 Standard-IA: Infrequent access with lower storage cost',
            'S3 One Zone-IA: Infrequent access in single AZ (cheaper)',
            'S3 Glacier Instant Retrieval: Long-term archive, millisecond retrieval',
            'S3 Glacier Flexible Retrieval: Archive, minutes to hours retrieval',
            'S3 Glacier Deep Archive: Long-term archive, 12-48 hours retrieval'
          ],
          keyPoints: [
            'Retrieval fees increase as storage costs decrease',
            'Intelligent-Tiering has no retrieval fees',
            'Glacier Deep Archive is lowest cost for long-term retention',
            'Minimum storage duration charges apply (30-180 days)'
          ],
          examples: [
            { title: 'Storage Class Comparison', code: '# Storage Classes:\n\n# S3 Standard\n# - Frequent access\n# - No minimum duration\n# - No retrieval fees\n\n# S3 Standard-IA\n# - Infrequent access\n# - 30-day minimum\n# - Per-GB retrieval fee\n\n# S3 One Zone-IA\n# - Infrequent, single AZ\n# - 30-day minimum\n# - Lower cost than Standard-IA\n\n# S3 Glacier Instant\n# - Archive, instant access\n# - 90-day minimum\n# - Higher retrieval fee\n\n# S3 Glacier Deep Archive\n# - Long-term archive\n# - 180-day minimum\n# - Lowest storage cost\n# - 12-48 hour retrieval' }
          ],
          proTips: [
            'Use S3 Lifecycle policies to automate class transitions',
            'Intelligent-Tiering is great for unpredictable access patterns'
          ]
        },
        {
          id: 'rds-basics',
          title: 'RDS Basics',
          content: `Amazon Relational Database Service (RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It supports multiple database engines.`,
          keyConcepts: [
            'Database Engines: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Aurora',
            'Multi-AZ: Synchronous standby replica for high availability',
            'Read Replicas: Asynchronous copies for read scaling',
            'Automated Backups: Point-in-time recovery up to 35 days',
            'Encryption: At rest using AWS KMS, in transit using SSL'
          ],
          keyPoints: [
            'Aurora is 5x faster than MySQL and 3x faster than PostgreSQL',
            'Aurora auto-scales storage up to 128 TB',
            'Max 15 Read Replicas for Aurora, 5 for other engines',
            'RDS is not serverless - instances are always running'
          ],
          examples: [
            { title: 'RDS Architecture', code: '# RDS Multi-AZ Deployment:\n\nPrimary AZ              Standby AZ\n┌──────────┐           ┌──────────┐\n│ Primary  │  Synchronous │ Standby │\n│ DB       │ ← Replication →│ DB      │\n│ Instance │           │ Instance │\n└────┬─────┘           └──────────┘\n     │                        │\n     └──── Failover ──────────┘\n     (automatic, 60-120 seconds)\n\n# Read Replicas (separate AZ or Region):\nPrimary → Read Replica 1\n       → Read Replica 2\n       → Read Replica 3' }
          ],
          proTips: [
            'Enable Multi-AZ for production databases',
            'Use Read Replicas to offload read traffic from primary'
          ]
        },
        {
          id: 'vpc-basics',
          title: 'VPC Basics',
          content: `Amazon Virtual Private Cloud (VPC) lets you provision a logically isolated section of AWS where you can launch resources in a virtual network you define.`,
          keyConcepts: [
            'Subnets: IP address ranges within your VPC (public or private)',
            'Internet Gateway: Connects VPC to the internet',
            'NAT Gateway: Allows private subnet instances to access the internet',
            'Route Tables: Control where network traffic is directed',
            'Security Groups: Stateful instance-level firewalls',
            'Network ACLs: Stateless subnet-level firewalls'
          ],
          keyPoints: [
            'Each VPC gets a /16 CIDR block (65,536 IPs)',
            'Default VPC comes with a public subnet in each AZ',
            'Security Groups are stateful (return traffic auto-allowed)',
            'NACLs are stateless (must allow both inbound and outbound)'
          ],
          examples: [
            { title: 'VPC Architecture', code: '# VPC: 10.0.0.0/16\n\n# Public Subnet AZ-1: 10.0.1.0/24\n#   - Web servers (EC2)\n#   - Internet Gateway attached\n#   - Route to 0.0.0.0/0 → IGW\n\n# Private Subnet AZ-1: 10.0.2.0/24\n#   - Application servers (EC2)\n#   - NAT Gateway\n#   - Route to 0.0.0.0/0 → NAT GW\n\n# Private Subnet AZ-2: 10.0.3.0/24\n#   - Database (RDS)\n#   - No internet access\n#   - Route only within VPC\n\n# Security Group:\n# Inbound: 443 from 0.0.0.0/0 (HTTPS)\n# Inbound: 22 from admin IP (SSH)\n# Outbound: All traffic allowed' }
          ],
          proTips: [
            'Always use private subnets for databases and backend servers',
            'Use NACLs for subnet-level defense in depth'
          ]
        },
        {
          id: 'lambda-basics',
          title: 'Lambda Basics',
          content: `AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume - no charge when your code is not running.`,
          keyConcepts: [
            'Serverless: No servers to manage',
            'Event-Driven: Triggered by events from AWS services',
            'Pay-per-use: charged per invocation and duration (ms)',
            'Stateless: Each invocation is independent',
            'Concurrency: Automatically scales to handle traffic'
          ],
          keyPoints: [
            'Maximum execution time: 15 minutes',
            'Memory: 128 MB to 10,240 MB',
            'Free tier: 1 million requests and 400,000 GB-seconds per month',
            'Supported runtimes: Python, Node.js, Java, Go, .NET, Ruby, custom'
          ],
          examples: [
            { title: 'Lambda Function', code: '# Python Lambda Function\nimport json\n\ndef lambda_handler(event, context):\n    name = event.get('name', 'World')\n    return {\n        'statusCode': 200,\n        'body': json.dumps({\n            'message': f'Hello, {name}!'\n        })\n    }\n\n# Triggered by:\n- API Gateway (HTTP requests)\n- S3 (object uploads)\n- DynamoDB (table changes)\n- SQS (message queue)\n- CloudWatch (scheduled)\n- IoT (device events)' }
          ],
          proTips: [
            'Lambda is great for APIs, data processing, and scheduled tasks',
            'Use Lambda Layers to share common code across functions'
          ]
        },
        {
          id: 'sqs-sns',
          title: 'SQS & SNS',
          content: `Amazon SQS (Simple Queue Service) and SNS (Simple Notification Service) are messaging services that enable decoupled, distributed applications.`,
          keyConcepts: [
            'SQS: Message queue for decoupling components',
            'Standard Queue: Best-effort ordering, at-least-once delivery',
            'FIFO Queue: Strict ordering, exactly-once processing',
            'SNS: Pub/sub messaging for fan-out patterns',
            'SNS Topics: Communication channels for subscribers'
          ],
          keyPoints: [
            'SQS retention: 1 to 14 days',
            'SNS supports: HTTP, email, SQS, Lambda as subscribers',
            'Dead Letter Queue (DLQ): Captures failed messages',
            'SNS + SQS = Reliable fan-out to multiple consumers'
          ],
          examples: [
            { title: 'SQS + SNS Pattern', code: '# SNS Fan-Out Pattern:\n\nProducer → SNS Topic\n              ├── SQS Queue 1 → Consumer A\n              ├── SQS Queue 2 → Consumer B\n              └── SQS Queue 3 → Consumer C\n\n# Benefits:\n# - Each consumer processes independently\n# - Failures in one dont affect others\n# - Easy to add new consumers\n\n# SQS Standard vs FIFO:\n# Standard: High throughput, best-effort order\n# FIFO: Ordered, exactly-once, lower throughput' }
          ],
          proTips: [
            'Use FIFO queues for financial transactions or order processing',
            'SNS + SQS is the recommended fan-out pattern'
          ]
        }
      ]
    },
    {
      name: 'Billing & Pricing',
      weight: '12%',
      lessons: [
        {
          id: 'pricing-models',
          title: 'AWS Pricing Models',
          content: `AWS offers several pricing models to help you optimize costs based on your usage patterns.`,
          keyConcepts: [
            'On-Demand: Pay by the hour/second with no commitment',
            'Reserved Instances (RI): 1 or 3 year commitment for 30-75% savings',
            'Savings Plans: Flexible pricing model for compute usage',
            'Spot Instances: Unused EC2 capacity at up to 90% discount',
            'Dedicated Hosts: Physical servers dedicated to your use'
          ],
          keyPoints: [
            'Savings Plans offer more flexibility than Reserved Instances',
            'Spot instances can be interrupted with 2-minute warning',
            'Reserved Instances can be sold on the RI Marketplace',
            'All pricing models can be combined for optimal savings'
          ],
          examples: [
            { title: 'Pricing Comparison', code: '# m6g.xlarge pricing (us-east-1):\n\n# On-Demand:    $0.154/hour\n# 1yr RI (No Upfront): $0.097/hour (37% off)\n# 3yr RI (All Upfront): $0.062/hour (60% off)\n# Savings Plan:  $0.093/hour (40% off)\n# Spot:          $0.046/hour (70% off)\n\n# Monthly cost (24/7 usage):\n# On-Demand:    $112.42\n# 1yr RI:       $70.81\n# 3yr RI:       $45.26\n# Spot:         $33.58' }
          ],
          proTips: [
            'Start with On-Demand, then optimize with RIs or Savings Plans',
            'Use AWS Cost Explorer to analyze usage patterns'
          ]
        },
        {
          id: 'free-tier',
          title: 'AWS Free Tier',
          content: `The AWS Free Tier allows you to explore and try AWS services without incurring costs. There are three types of Free Tier offerings.`,
          keyConcepts: [
            'Always Free: Lambda (1M requests), DynamoDB (25GB), S3 (5GB)',
            '12 Months Free: EC2 (750 hrs t3.micro), RDS (750 hrs), S3 (20GB)',
            'Trials: Short-term free usage for specific services',
            'Free Tier Dashboard: Track your Free Tier usage in the console'
          ],
          keyPoints: [
            'Free Tier applies to new accounts only',
            'Set up AWS Budgets to get alerts when approaching limits',
            'Exceeding Free Tier limits incurs standard charges',
            'Some services like CloudWatch have generous free tiers'
          ],
          examples: [
            { title: 'Free Tier Services', code: '# Always Free (12+ months):\n# Lambda: 1M requests/month\n# DynamoDB: 25GB storage\n# S3: 5GB Standard storage\n# SNS: 1M publishes\n# SQS: 1M requests\n# CloudWatch: 10 custom metrics\n\n# 12 Months Free:\n# EC2: 750 hrs t3.micro\n# RDS: 750 hrs db.t3.micro\n# S3: 20GB Standard storage\n# EBS: 30GB General Purpose\n# Elastic Load Balancing: 750 hrs\n\n# Track usage:\n# AWS Console → Billing → Free Tier' }
          ],
          proTips: [
            'Set up billing alerts immediately after creating an account',
            'Use the Free Tier calculator to estimate costs'
          ]
        },
        {
          id: 'cost-explorer',
          title: 'AWS Cost Explorer',
          content: `AWS Cost Explorer is a tool that lets you visualize, understand, and manage your AWS costs and usage over time.`,
          keyConcepts: [
            'Cost Analysis: View costs by service, region, account, or tag',
            'Forecasting: Predict future costs based on historical data',
            'Filtering: Drill down by any dimension or tag',
            'Reservation Reports: Track RI and Savings Plan utilization',
            'Anomaly Detection: Identify unusual spending patterns'
          ],
          keyPoints: [
            'Cost Explorer is free to use',
            'Data available for the last 12 months',
            'Can create custom reports and save them',
            'Export data to S3 for detailed analysis'
          ],
          examples: [
            { title: 'Cost Explorer Views', code: '# Cost Explorer Features:\n\n# 1. Cost & Usage Report\n#    - Bar chart of daily/monthly costs\n#    - Filter by service, region, tag\n\n# 2. Reservation Utilization\n#    - RI/Savings Plan usage percentage\n#    - Identify underutilized reservations\n\n# 3. Cost Forecast\n#    - Projected costs for next 3 months\n#    - Based on historical patterns\n\n# 4. Anomaly Detection\n#    - AI-powered spending alerts\n#    - Identify unusual cost spikes' }
          ],
          proTips: [
            'Create a daily cost report and review weekly',
            'Use tags to allocate costs to teams or projects'
          ]
        },
        {
          id: 'aws-budgets',
          title: 'AWS Budgets',
          content: `AWS Budgets lets you set custom budgets that alert you when costs or usage exceed (or are forecasted to exceed) your budgeted amount.`,
          keyConcepts: [
            'Cost Budgets: Set monthly, quarterly, or annual cost limits',
            'Usage Budgets: Track usage of specific services',
            'Reservation Budgets: Monitor RI and Savings Plan utilization',
            'Alerts: Email and SNS notifications at thresholds',
            'Actions: Automatically stop resources when budgets are exceeded'
          ],
          keyPoints: [
            'First 5 budgets are free, then $0.02/budget/day',
            'Alert thresholds: 50%, 80%, 100% (customizable)',
            'Budget actions can stop or terminate EC2 instances',
            'Can filter by service, account, tag, or region'
          ],
          examples: [
            { title: 'Budget Setup', code: '# AWS Budgets:\n\n# 1. Monthly Cost Budget\n#    Amount: $100\n#    Alert at: 80% ($80)\n#    Alert at: 100% ($100)\n#    Email: admin@company.com\n\n# 2. Usage Budget (EC2)\n#    Service: EC2\n#    Metric: Running Hours\n#    Threshold: 750 hours\n#    (Free Tier limit)\n\n# 3. Reservation Budget\n#    Service: EC2\n#    Type: RI Utilization\n#    Threshold: 80%\n\n# Budget Actions:\n# - Send notification\n# - Apply IAM policy\n# - Stop EC2 instances' }
          ],
          proTips: [
            'Create a budget immediately after account creation',
            'Use budget actions to automatically stop resources'
          ]
        }
      ]
    }
  ]
}
