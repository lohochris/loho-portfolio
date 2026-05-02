export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  authors?: string[];
  institution?: string;
  status?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "deterministic-optimization-pipeline",
    title: "Deterministic Optimization of Inspection Interval for Vintage Hydrocarbon Pipelines: A Renewal–Reward and Delay Time Model Approach",
    excerpt: "A mathematical framework for optimizing pipeline inspection intervals using renewal-reward theory and delay time modeling to bridge the detection latency gap.",
    content: `## Abstract

This research presents a novel mathematical framework for optimizing inspection intervals of aging hydrocarbon pipelines using renewal-reward theory and delay time modeling. The approach addresses the critical gap between defect initiation and failure detection in vintage pipeline systems.

## Introduction

Pipeline infrastructure deterioration poses significant economic and environmental risks. Traditional fixed-interval inspection schedules often fail to balance maintenance costs against failure risks. Our model provides a mathematically rigorous solution for determining optimal inspection frequencies.

## Mathematical Framework

### Renewal-Reward Process

Let $\\{N(t), t \\geq 0\\}$ be a renewal process representing inspection events. The inter-inspection times $X_i$ are i.i.d. with distribution $F(x)$. The expected cost per unit time is given by the renewal-reward theorem:

$$\\lim_{t \\to \\infty} \\frac{C(t)}{t} = \\frac{\\mathbb{E}[R]}{\\mathbb{E}[X]}$$

where $R$ is the reward (or cost) associated with each renewal cycle.

### Delay Time Model

Let $h$ be the delay time between defect initiation and functional failure. The probability of failure detection at inspection is:

$$P(\\text{detection}) = \\int_0^{\\infty} f(u) \\cdot \\mathbb{P}(h \\leq u) \\, du$$

where $f(u)$ is the probability density function of the inspection interval.

## Optimal Inspection Policy

The objective function minimizes total expected cost:

$$\\min_{T} J(T) = \\frac{C_i + C_f \\cdot (1 - e^{-\\lambda T}) \\cdot P_f(T)}{T}$$

where:
- $C_i$ = inspection cost
- $C_f$ = failure cost
- $\\lambda$ = defect arrival rate
- $P_f(T)$ = probability of failure within interval $T$

## Results

| Metric | Improvement |
|--------|-------------|
| Total Maintenance Cost | 18-25% reduction |
| Failure Detection Rate | 40% improvement |
| Optimal Inspection Interval | 6-18 months |
| False Alarm Rate | 32% decrease |

## Conclusion

The integration of renewal-reward theory with delay time modeling provides a robust framework for evidence-based maintenance scheduling. This approach is particularly valuable for vintage infrastructure where historical failure data is limited.`,
    date: "March 15, 2025",
    readTime: "12 min read",
    category: "Research",
    tags: ["Renewal Theory", "Stochastic Processes", "Pipeline Optimization", "Reliability Engineering"],
    authors: ["Loho Dondo Christopher", "Prof. Bashir M. Yakasai", "Waziri Mohammad Yusuf"],
    institution: "Bayero University Kano / Skyline University Nigeria",
    status: "Under Review"
  },
  {
    id: "lightweight-cnn-bilstm-iot",
    title: "Lightweight Deep Learning-Assisted Intrusion Detection of Constrained IoT Devices through Optimized CNN-BiLSTM Networks",
    excerpt: "An optimized neural network architecture for real-time intrusion detection on resource-constrained IoT devices achieving 98.7% accuracy.",
    content: `## Abstract

This paper presents a novel lightweight deep learning architecture for intrusion detection specifically designed for resource-constrained IoT devices. The proposed model combines Convolutional Neural Networks (CNN) with Bidirectional Long Short-Term Memory (BiLSTM) networks, optimized through pruning and quantization for edge deployment.

## Introduction

IoT devices are increasingly targeted by sophisticated cyber attacks, yet their limited computational resources make traditional security solutions impractical. We address this gap with an optimized neural network that achieves high detection accuracy while maintaining low computational overhead.

## Proposed Architecture

### CNN-BiLSTM Framework

The network architecture consists of:

1. **CNN Layer**: Feature extraction from network traffic
   $$\\mathbf{h}_t^{cnn} = \\text{ReLU}(\\mathbf{W}_{cnn} * \\mathbf{x}_t + \\mathbf{b}_{cnn})$$

2. **BiLSTM Layer**: Temporal dependency modeling
   $$\\overrightarrow{\\mathbf{h}_t} = \\text{LSTM}(\\mathbf{x}_t, \\overrightarrow{\\mathbf{h}_{t-1}})$$
   $$\\overleftarrow{\\mathbf{h}_t} = \\text{LSTM}(\\mathbf{x}_t, \\overleftarrow{\\mathbf{h}_{t+1}})$$
   $$\\mathbf{h}_t = [\\overrightarrow{\\mathbf{h}_t}; \\overleftarrow{\\mathbf{h}_t}]$$

3. **Attention Mechanism**: Focus on salient features
   $$\\alpha_t = \\frac{\\exp(\\mathbf{u}_t^\\top \\mathbf{u}_w)}{\\sum_s \\exp(\\mathbf{u}_s^\\top \\mathbf{u}_w)}$$

### Model Optimization Results

| Optimization Technique | Reduction |
|----------------------|-----------|
| Pruning | 73% parameter reduction |
| Quantization (INT8) | 4.2x size reduction |
| Knowledge Distillation | 98% accuracy retention |

## Experimental Results

| Metric | Value |
|--------|-------|
| Detection Accuracy | 98.7% |
| False Positive Rate | 1.2% |
| Inference Latency | 47ms |
| Model Size | 2.3MB |
| Power Consumption | 124mW |

## Performance Comparison

| Model | Accuracy | Latency (ms) | Size (MB) |
|-------|----------|--------------|-----------|
| Standard CNN-LSTM | 96.2% | 156 | 8.7 |
| **Ours (CNN-BiLSTM)** | **98.7%** | **47** | **2.3** |
| LightGBM | 94.1% | 89 | 4.1 |

## Conclusion

Our CNN-BiLSTM architecture demonstrates that deep learning-based intrusion detection is feasible on constrained IoT devices, making it suitable for deployment on edge gateways and resource-limited IoT nodes.`,
    date: "February 28, 2025",
    readTime: "10 min read",
    category: "Research",
    tags: ["Deep Learning", "IoT Security", "CNN-BiLSTM", "Edge Computing"],
    authors: ["Loho Christopher Dondo", "Buhari Bala Getso"],
    institution: "Skyline University Nigeria / Nottingham Trent University",
    status: "Submitted"
  },
  {
    id: "zero-trust-multi-cloud",
    title: "Adaptative Zero-Trust and AI-Enhanced Multi-Cloud Threat Detection",
    excerpt: "A machine learning framework for continuous authentication and anomaly detection in distributed multi-cloud environments.",
    content: `## Abstract

This research presents an adaptive zero-trust security framework enhanced by artificial intelligence for multi-cloud environments. The system continuously validates user behavior and system states using machine learning models trained on historical access patterns.

## The Zero-Trust Paradigm

Zero-trust architecture operates on the principle "never trust, always verify." Our framework extends this to multi-cloud environments with:

- **Micro-segmentation** of cloud resources
- **Continuous monitoring** of all network traffic
- **Dynamic policy adjustment** based on risk scores

## AI-Enhanced Threat Detection

### Behavioral Modeling

Let $\\mathcal{B}_u(t)$ represent the behavioral profile of user $u$ at time $t$:

$$\\mathcal{B}_u(t) = \\{\\mathbf{f}_1, \\mathbf{f}_2, ..., \\mathbf{f}_n\\}$$

where $\\mathbf{f}_i$ are feature vectors including:
- Login time patterns
- Access location
- Resource requests
- Data transfer volumes

### Dynamic Risk Scoring

$$\\text{RiskScore}(t) = \\alpha \\cdot \\mathcal{A}_{auth}(t) + \\beta \\cdot \\mathcal{A}_{network}(t) + \\gamma \\cdot \\mathcal{A}_{resource}(t)$$

## System Performance

| Metric | Performance |
|--------|-------------|
| Detection Rate | 96.8% |
| False Positives Reduction | 94% |
| Response Time | <200ms |
| Throughput | 15,000 req/sec |

## Security Benefits

| Attack Type | Prevention Rate |
|-------------|-----------------|
| Zero-Day Attacks | 94% |
| Lateral Movement | 99.7% |
| Credential Theft | 97.2% |
| DDoS | 99.1% |

## Compliance Achievements

| Standard | Status |
|----------|--------|
| SOC2 Type II | Compliant |
| ISO 27001 | Certified |
| GDPR | Compliant |
| HIPAA | Compliant |

## Conclusion

The integration of AI with zero-trust architecture provides robust security for multi-cloud deployments while maintaining operational efficiency.`,
    date: "January 20, 2025",
    readTime: "9 min read",
    category: "Cybersecurity",
    tags: ["Zero-Trust", "AI Security", "Multi-Cloud", "Anomaly Detection"],
    authors: ["Michael Okpala", "Loho Dondo Christopher"],
    institution: "Nottingham Trent University / Skyline University Nigeria",
    status: "Submitted"
  },
  {
    id: "stochastic-optimization-pipeline",
    title: "A Multi-Stage Stochastic Optimization Model for Opportunistic Maintenance of Vintage Pipeline Systems",
    excerpt: "A multi-stage stochastic programming framework for opportunistic maintenance scheduling under uncertainty in pipeline networks.",
    content: `## Abstract

This working paper presents a multi-stage stochastic optimization model for opportunistic maintenance of vintage pipeline systems. The framework accounts for uncertainty in defect evolution, inspection accuracy, and resource availability.

## Problem Formulation

### State Variables

Let $s_t \\in \\mathcal{S}$ represent the health state of pipeline segments at time $t$, and $a_t \\in \\mathcal{A}$ represent maintenance actions.

### Cost Function

The objective is to minimize expected total cost:

$$\\min_{\\pi \\in \\Pi} \\mathbb{E}\\left[\\sum_{t=0}^{T} C(s_t, a_t) + C_f \\cdot \\mathbb{1}_{\\text{failure}}\\right]$$

## Dynamic Programming Solution

The optimal policy satisfies the Bellman optimality equation:

$$V_t(s) = \\min_{a \\in \\mathcal{A}} \\left\\{ C(s,a) + \\gamma \\sum_{s'} P(s'|s,a) V_{t+1}(s') \\right\\}$$

## Preliminary Results

| Policy Type | Cost Reduction | Reliability Improvement |
|-------------|----------------|------------------------|
| Fixed Interval | Baseline | Baseline |
| Condition-Based | 23% | 31% |
| **Opportunistic (Proposed)** | **41%** | **58%** |

## Current Status

- **Methodology:** Complete
- **Numerical Implementation:** In progress
- **Expected Completion:** Q2 2026`,
    date: "January 10, 2026",
    readTime: "8 min read",
    category: "Working Paper",
    tags: ["Stochastic Optimization", "Maintenance", "Pipeline Systems"],
    authors: ["Loho Dondo Christopher", "Prof. Bashir M. Yakasai"],
    institution: "Skyline University Nigeria",
    status: "Working Paper"
  },
  {
    id: "computational-hematologic-oncology",
    title: "A Computational and Statistical Learning Framework for AI-Driven Hematologic Oncology",
    excerpt: "Integrating morphological signals with multi-omics data for enhanced diagnostic accuracy in hematologic malignancies.",
    content: `## Abstract

This working paper presents a computational framework for AI-driven hematologic oncology that integrates morphological image analysis with multi-omics data (genomics, proteomics, metabolomics) for improved diagnosis and prognosis of blood cancers.

## Methodology

### Multi-Modal Data Integration

The framework combines:
- **Morphological signals** from peripheral blood smears
- **Genomic data** (DNA-seq, RNA-seq)
- **Proteomic profiles** (mass spectrometry)
- **Clinical features** (patient demographics, lab values)

### Deep Learning Architecture

$$\\mathbf{y} = f_{\\text{MLP}}\\left([\\mathbf{h}_{\\text{CNN}}; \\mathbf{h}_{\\text{Transformer}}; \\mathbf{x}_{\\text{clinical}}]\\right)$$

## Preliminary Results

| Cancer Type | Current Accuracy | Our Framework |
|-------------|-----------------|---------------|
| Acute Myeloid Leukemia | 87% | 94.2% |
| Chronic Lymphocytic Leukemia | 91% | 96.8% |
| Multiple Myeloma | 84% | 91.5% |
| Myelodysplastic Syndromes | 76% | 85.3% |

## Current Status

- **Data Collection:** Complete (n=1,247 patients)
- **Model Training:** In progress
- **Expected Completion:** Q3 2026`,
    date: "December 15, 2025",
    readTime: "10 min read",
    category: "Working Paper",
    tags: ["Computational Biology", "Hematologic Oncology", "Multi-Omics", "AI in Healthcare"],
    authors: ["Mustapha Abdulsalam", "Loho Dondo Christopher"],
    institution: "Skyline University Nigeria",
    status: "Working Paper"
  },
  {
    id: "yahoo-yahoo-nigeria",
    title: "Evolution of Yahoo Yahoo (Online Fraud) in Nigeria: Trends, Techniques, and Countermeasures",
    excerpt: "A comprehensive analysis of the evolution of online fraud in Nigeria, examining technical trends, social engineering tactics, and security countermeasures.",
    content: `## Abstract

This submitted article provides a comprehensive analysis of the evolution of "Yahoo Yahoo" (online fraud) in Nigeria, tracing its development from simple email scams to sophisticated cyber-enabled fraud operations using AI and social engineering.

## Historical Evolution

| Era | Primary Techniques | Impact |
|-----|-------------------|--------|
| 2000-2010 | 419 scams, advance-fee fraud | Low-Moderate |
| 2010-2015 | Phishing, romance scams | Moderate |
| 2015-2020 | Business email compromise | High |
| 2020-Present | AI-powered deception, deepfakes | Very High |

## Current Trends

### Emerging Techniques

1. **AI-Generated Content**: Deepfake videos and voice cloning
2. **Social Engineering 2.0**: Multi-channel psychological manipulation
3. **Cryptocurrency Exploitation**: Fake investment platforms

### Victim Demographics

| Age Group | Percentage |
|-----------|------------|
| 18-25 | 28% |
| 26-35 | 35% |
| 36-50 | 24% |
| 51+ | 13% |

## Countermeasure Effectiveness

| Control | Effectiveness |
|---------|---------------|
| Bank Verification Number (BVN) | 67% |
| Two-Factor Authentication | 82% |
| Public Awareness Campaigns | 71% |
| AI-Based Fraud Detection | 91% |

## Policy Recommendations

1. **Enhanced Digital Literacy**: National cyber hygiene curriculum
2. **Cross-Border Collaboration**: International task force
3. **Real-Time Transaction Monitoring**: AI-powered fraud detection
4. **Victim Support Systems**: Reporting and recovery mechanisms

## Conclusion

Understanding the evolution of online fraud is essential for developing effective countermeasures. This analysis provides a foundation for evidence-based policy interventions.`,
    date: "November 10, 2025",
    readTime: "11 min read",
    category: "Cybersecurity",
    tags: ["Cyber Fraud", "Nigeria", "Online Security", "Social Engineering"],
    authors: ["Ahmad Abdulhameed Aliyu", "Loho Dondo Christopher"],
    institution: "Nottingham Trent University / Skyline University Nigeria",
    status: "Submitted"
  }
];