export interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeType: 'primary' | 'secondary' | 'accent';
  architecture: string;
  summary: string;
  deliverables: string[];
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  domain: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level?: string; icon?: string; highlighted?: boolean }[];
}

export interface Certification {
  title: string;
  issuer: string;
  type: string;
  year?: string;
  verified: boolean;
}

export const PERSONAL_INFO = {
  name: "Tushar T Patgar",
  role: "Data Engineer | ETL Developer",
  tagline: "Engineering reliable data pipelines. Transforming complex data into analytics-ready intelligence.",
  summary:
    "Data Engineer experienced in building enterprise ETL/ELT pipelines, AWS-based data solutions, distributed processing workflows and analytics-ready datasets across FinTech and analytics domains.",
  experienceYears: "1.4",
  location: "Bengaluru, India",
  email: "tusharpatgar1@gmail.com",
  github: "https://github.com/tusharpatgar",
  linkedin: "https://www.linkedin.com/in/tushar-patgar-a78039348/",
  resumePdfUrl: "./resume/Tushar_Patgar_Data_Engineer_Resume.pdf",
  stats: [
    { label: "Experience", value: "1.4 Years", icon: "Clock" },
    { label: "Public Repositories", value: "7+", icon: "GitBranch" },
    { label: "Core Cloud Stack", value: "AWS Ecosystem", icon: "Cloud" },
    { label: "O'Reilly Certifications", value: "4 Verified", icon: "Award" },
  ],
};

export const CORE_CAPABILITIES = [
  {
    title: "Pipeline Architecture",
    description: "End-to-end batch and streaming ETL/ELT workflows with schema enforcement, idempotent runs, and automated CloudWatch alerting.",
    tags: ["ETL/ELT", "PySpark", "AWS Glue", "Airflow"],
  },
  {
    title: "Medallion Lakehouse Design",
    description: "Multi-hop storage architecture (Bronze raw ingestion, Silver cleansed/normalized, Gold business dimensions & facts) powered by Delta Lake ACID tables.",
    tags: ["Bronze/Silver/Gold", "Delta Lake", "Databricks", "S3"],
  },
  {
    title: "Incremental Processing",
    description: "High-performance incremental upserts and data merging utilizing Delta Lake MERGE INTO syntax and Slowly Changing Dimensions (SCD Type 1 & 2).",
    tags: ["SCD 1 & 2", "Delta MERGE", "Upserts", "Deduplication"],
  },
  {
    title: "Change Data Capture (CDC)",
    description: "Near real-time relational database replication leveraging AWS DMS binary logs, serverless S3 triggers with AWS Lambda, and AWS Glue curation.",
    tags: ["AWS DMS", "RDS MySQL", "AWS Lambda", "CDC"],
  },
  {
    title: "Data Quality & Reconciliation",
    description: "Automated audit frameworks validating schema drift, row count parity, null anomalies, and financial transaction reconciliations.",
    tags: ["Data Integrity", "Reconciliation", "Validation Rules", "SSIS"],
  },
  {
    title: "Cloud Analytics & Modeling",
    description: "Dimensional star schema modeling, Fact and Dimension tables, and query execution plan optimization on Amazon Redshift and Microsoft SQL Server.",
    tags: ["Star Schema", "Amazon Redshift", "SQL Server", "T-SQL"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "sql-dw",
    title: "SQL Data Warehouse",
    subtitle: "Layered Medallion Architecture with Star Schema Modeling",
    badge: "Production Architecture",
    badgeType: "primary",
    architecture: "Bronze (Raw Ingestion) ➔ Silver (Cleansed/Normalized) ➔ Gold (Business Dimensions & Facts)",
    summary:
      "Engineered an enterprise-grade analytical data warehouse showcasing end-to-end data warehousing best practices. Implemented layered bronze/silver/gold data structures, star-schema modeling, and historical change tracking.",
    deliverables: [
      "Designed star schema dimensional model with partitioned Fact and Dimension tables",
      "Authored optimized T-SQL ETL workflows for extraction, cleansing, validation, and staging",
      "Implemented Slowly Changing Dimensions (SCD Type 1 & Type 2) for historical auditing",
      "Applied advanced query optimization, indexing strategies, and automated data reconciliation routines",
    ],
    technologies: ["SQL Server", "T-SQL", "Star Schema", "Data Warehousing", "SSMS", "SCD 1 & 2"],
    repoUrl: "https://github.com/tusharpatgar/datawarehouseprojectsql",
    metrics: [
      { label: "Layers", value: "Bronze ➔ Silver ➔ Gold" },
      { label: "Tracking", value: "SCD Type 1 & 2" },
      { label: "Model", value: "Star Schema" },
    ],
  },
  {
    id: "walmart-sales",
    title: "Walmart Sales Analytics",
    subtitle: "Databricks PySpark Lakehouse with Incremental Delta Lake Upserts",
    badge: "Big Data & Lakehouse",
    badgeType: "accent",
    architecture: "Databricks PySpark Lakehouse ➔ Delta Lake ACID Storage ➔ Analytical Aggregations",
    summary:
      "Built a distributed retail analytics data pipeline processing high-volume transaction feeds with strict schema validation, business-rule transformations, and incremental upserts.",
    deliverables: [
      "Enforced schema validation and bad-record quarantine logic to eliminate corrupt ingestions",
      "Developed business-rule transformations, time-series aggregations, and metric calculations",
      "Implemented incremental processing using Delta Lake MERGE INTO syntax for fast deduplication",
      "Configured partition pruning, Z-ordering, and in-memory caching for low-latency queries",
    ],
    technologies: ["Databricks", "Apache Spark", "PySpark", "Delta Lake", "Python", "Spark SQL"],
    repoUrl: "https://github.com/tusharpatgar/walmart_sales_etl",
    metrics: [
      { label: "Engine", value: "Apache Spark" },
      { label: "Storage", value: "Delta Lake ACID" },
      { label: "Method", value: "Incremental MERGE" },
    ],
  },
  {
    id: "aws-cdc",
    title: "AWS CDC Pipeline",
    subtitle: "Event-Driven Change Data Capture with DMS, Lambda, Glue & S3",
    badge: "Enterprise Implementation",
    badgeType: "secondary",
    architecture: "RDS MySQL ➔ AWS DMS ➔ S3 Bronze ➔ Lambda Event ➔ Glue ETL ➔ Redshift / S3 Gold",
    summary:
      "Architected a serverless event-driven Change Data Capture pipeline streaming real-time transactional modifications into a curated cloud lakehouse and Redshift warehouse.",
    deliverables: [
      "Configured continuous binlog Change Data Capture replication via AWS Database Migration Service (DMS)",
      "Engineered event-driven orchestration triggering AWS Lambda on S3 raw landing events",
      "Developed PySpark AWS Glue ETL jobs executing deduplication, schema normalization, and SCD tracking",
      "Established comprehensive observability, CloudWatch alarms, and metric dashboards for SLA compliance",
    ],
    technologies: ["AWS RDS", "AWS DMS", "AWS Lambda", "AWS Glue", "Amazon S3", "Amazon Redshift", "Amazon CloudWatch", "PySpark"],
    metrics: [
      { label: "Ingestion", value: "Binlog CDC (DMS)" },
      { label: "Orchestration", value: "Event-Driven Lambda" },
      { label: "Monitoring", value: "CloudWatch Telemetry" },
    ],
  },
];

export const PIPELINE_STAGES = [
  {
    id: "source",
    number: "01",
    name: "Source Systems",
    category: "Ingress",
    technologies: ["RDS MySQL", "PostgreSQL", "SQL Server", "Transactional Logs", "REST APIs"],
    description: "Operational relational databases and distributed feeds publishing change streams and financial ledger events.",
    highlight: "Binary log extraction & transactional durability",
    latency: "< 500ms",
    format: "OLTP Records / Binlogs",
  },
  {
    id: "ingestion",
    number: "02",
    name: "Data Ingestion & CDC",
    category: "Capture",
    technologies: ["AWS DMS", "Apache Kafka", "AWS Lambda", "S3 Ingestion Bucket"],
    description: "Capturing transactional updates continuously without source lock contention. Triggering serverless ingestion events.",
    highlight: "Zero-data-loss Change Data Capture (CDC)",
    latency: "Near Real-Time",
    format: "Raw JSON / Parquet Landing",
  },
  {
    id: "processing",
    number: "03",
    name: "Data Processing & ETL",
    category: "Transformation",
    technologies: ["Apache Spark", "PySpark", "AWS Glue", "Databricks", "Delta Lake"],
    description: "Distributed cleansing, strict schema enforcement, currency conversions, business rules, and SCD Type 1 & 2 deduplication.",
    highlight: "ACID transactions with Delta MERGE INTO",
    latency: "Scheduled / Event Batch",
    format: "Delta Lake Tables",
  },
  {
    id: "storage",
    number: "04",
    name: "Medallion Lakehouse",
    category: "Storage",
    technologies: ["Amazon S3", "Bronze Layer (Raw)", "Silver Layer (Cleaned)", "Gold Layer (Curated)"],
    description: "Scalable cloud object storage organized into Medallion tiers ensuring clear lineage, auditing, and high concurrency read performance.",
    highlight: "Immutable Bronze ➔ Curated Gold",
    latency: "99.999999999% Durability",
    format: "Optimized Snappy Parquet",
  },
  {
    id: "analytics",
    number: "05",
    name: "Analytics & Consumption",
    category: "Serving",
    technologies: ["Amazon Redshift", "Amazon Athena", "Snowflake", "BI Reporting", "Ad-hoc SQL"],
    description: "Star schema marts and analytical views queried by financial analysts, executive dashboards, and ML modeling workflows.",
    highlight: "Sub-second analytical query response",
    latency: "< 2s Query SLA",
    format: "Dimensional Star Schema",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming & Languages",
    description: "Core languages for pipeline logic, transformations, and analytical queries",
    skills: [
      { name: "Python", highlighted: true },
      { name: "SQL", highlighted: true },
      { name: "T-SQL", highlighted: true },
      { name: "PySpark", highlighted: true },
      { name: "Spark SQL", highlighted: true },
    ],
  },
  {
    category: "Big Data & Lakehouse",
    description: "Distributed compute engines and ACID table formats for massive scale",
    skills: [
      { name: "Apache Spark", highlighted: true },
      { name: "PySpark", highlighted: true },
      { name: "Databricks", highlighted: true },
      { name: "Delta Lake", highlighted: true },
      { name: "Apache Kafka" },
      { name: "Apache Parquet" },
    ],
  },
  {
    category: "AWS Cloud Platform",
    description: "Enterprise cloud services for ingestion, compute, storage, and orchestration",
    skills: [
      { name: "Amazon S3", highlighted: true },
      { name: "AWS Glue", highlighted: true },
      { name: "AWS Lambda", highlighted: true },
      { name: "Amazon Redshift", highlighted: true },
      { name: "AWS DMS", highlighted: true },
      { name: "Amazon Athena" },
      { name: "AWS Step Functions" },
      { name: "Amazon CloudWatch" },
      { name: "AWS IAM" },
      { name: "AWS CLI" },
      { name: "Amazon EC2" },
    ],
  },
  {
    category: "Databases & Warehouses",
    description: "Relational engines, enterprise RDBMS, and cloud analytical warehouses",
    skills: [
      { name: "Microsoft SQL Server", highlighted: true },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Snowflake" },
      { name: "SSMS" },
    ],
  },
  {
    category: "Orchestration & DevOps",
    description: "Workflow scheduling, transformation management, containerization, and CI/CD",
    skills: [
      { name: "Apache Airflow", highlighted: true },
      { name: "dbt (Data Build Tool)", highlighted: true },
      { name: "SSIS", highlighted: true },
      { name: "Docker" },
      { name: "Git" },
      { name: "GitHub Actions" },
      { name: "Linux / Bash" },
    ],
  },
  {
    category: "Data Engineering Core",
    description: "Architectural patterns, schema strategies, and data quality frameworks",
    skills: [
      { name: "ETL / ELT Pipelines", highlighted: true },
      { name: "Medallion Architecture", highlighted: true },
      { name: "CDC Replication", highlighted: true },
      { name: "SCD Type 1 & 2", highlighted: true },
      { name: "Star Schema Modeling", highlighted: true },
      { name: "Data Quality & Reconciliation", highlighted: true },
      { name: "Schema Drift Detection" },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Wissen Digital Pvt Ltd",
    role: "Software Engineer",
    period: "July 2026 – November 2026",
    location: "Bengaluru, India",
    domain: "FinTech Data Engineering & Cloud Solutions",
    responsibilities: [
      "Engineered high-throughput Python and SQL data pipelines for enterprise financial record processing and reconciliations.",
      "Architected and deployed serverless cloud data solutions leveraging Amazon S3, AWS Lambda, AWS Glue, Amazon EC2, and Amazon Redshift.",
      "Implemented comprehensive business transformation logic with automated validation rules, schema enforcement, and bad-record handling.",
      "Supported production incremental processing workflows, configured CloudWatch telemetry and error alarming, and resolved ETL pipeline bottlenecks.",
    ],
    technologies: ["Python", "SQL", "AWS S3", "AWS Lambda", "AWS Glue", "Amazon Redshift", "Amazon EC2", "Amazon CloudWatch"],
  },
  {
    company: "Endava Solutions Pvt Ltd",
    role: "Data Engineer / ETL Programmer",
    period: "January 2025 – January 2026",
    location: "Bengaluru, India",
    domain: "Enterprise Financial Datasets & Data Integration",
    responsibilities: [
      "Designed, developed, and optimized SSIS-based ETL pipelines handling high-volume financial transactions and accounting ledgers.",
      "Constructed end-to-end data extraction, transformation, cleansing, and business-rule validation workflows in T-SQL.",
      "Developed robust reconciliation frameworks to identify and isolate null anomalies, schema drift, and transaction imbalances across staging and destination systems.",
      "Executed critical data verification and extraction processes during enterprise data migrations, merger integrations, and production system cutovers.",
      "Partnered cross-functionally with QA leads, data analysts, and client stakeholders to uphold strict SLAs and ensure audit compliance.",
    ],
    technologies: ["SSIS", "SQL Server", "T-SQL", "Data Modelling", "Data Quality Validation", "Reconciliation", "SSMS"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Python for Data Science",
    issuer: "O'Reilly Media",
    type: "Professional Certification",
    verified: true,
  },
  {
    title: "Microsoft SQL Server",
    issuer: "O'Reilly Media",
    type: "Database Administration & T-SQL",
    verified: true,
  },
  {
    title: "SQL Server Integration Services (SSIS)",
    issuer: "O'Reilly Media",
    type: "Enterprise ETL Architecture",
    verified: true,
  },
  {
    title: "PySpark & AWS: Master Big Data",
    issuer: "O'Reilly Media",
    type: "Cloud Big Data & Distributed Compute",
    verified: true,
  },
];

export const EDUCATION = {
  degree: "Bachelor of Computer Applications (BCA)",
  period: "2020 – 2023",
  field: "Computer Science & Information Technology",
  institution: "Dharwad,Karnataka",
  highlights: [
    "Core curriculum in Data Structures, Database Management Systems (RDBMS), Operating Systems, and Object-Oriented Programming.",
    "Built hands-on foundations in relational schema design, SQL querying, and algorithmic problem solving.",
  ],
};
