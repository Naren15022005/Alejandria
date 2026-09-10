import { PracticalModule, Faculty } from '@/types/learning';

export const MOCK_MODULES: PracticalModule[] = [
  {
    id: 'ai-executive-strategy',
    title: 'Estrategia de Inteligencia Artificial para Ejecutivos',
    subtitle: 'Implementación corporativa, gobernanza de datos y modelos LLM en escala',
    tagline: 'Cómo integrar modelos de lenguaje en procesos core de negocio para optimizar operaciones sin riesgos regulatorios.',
    category: 'Negocios',
    icon: 'Brain',
    difficulty: 'Ejecutivo',
    estimatedHours: 6,
    rating: 4.9,
    reviewCount: 420,
    enrolledCount: 14200,
    instructor: {
      name: 'Dra. Helena Rostova',
      role: 'Socia Directora de Estrategia de IA',
      organization: 'McKinsey & Stanford AI Lab',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    },
    learningOutcomes: [
      'Evaluar el ROI y viabilidad de proyectos de IA generativa en la empresa.',
      'Diseñar marcos de gobernanza, privacidad y mitigación de alucinaciones.',
      'Implementar arquitecturas RAG (Retrieval-Augmented Generation) seguras.',
    ],
    modules: [
      {
        id: 'mod-ai-1',
        title: 'Módulo 1: Arquitectura RAG en Producción',
        summary: 'Conexión de bases de datos propietarias con LLMs mediante bases vectoriales.',
        durationMinutes: 45,
        exercises: [
          {
            id: 'ex-ai-1',
            title: 'Caso de Estudio: Privacidad de Datos en Finanzas',
            scenario: 'Un banco internacional desea usar un modelo de lenguaje para responder consultas internas sobre contratos de crédito confidenciales sin exponer datos de clientes al proveedor de API pública.',
            taskInstructions: 'Selecciona la arquitectura estratégica con mayor nivel de cumplimiento normativo (GDPR/SOX):',
            options: [
              'Enviar los contratos completos como adjuntos directamente al endpoint público de OpenAI.',
              'Implementar una canalización RAG privada en servidores locales/VPC con sanitización PII previa y embeddings vectoriales cifrados.',
              'Pedirle a los empleados que resuman los datos a mano antes de usar el chat de IA.',
            ],
            correctOptionIndex: 1,
            explanationQuick: 'El procesamiento RAG en VPC privada con filtrado de PII garantiza que la información sensible nunca entre en el conjunto de entrenamiento de un modelo externo.',
            xpPoints: 120,
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-ai-1',
        title: 'Caso de Estudio: Privacidad de Datos en Finanzas',
        scenario: 'Un banco internacional desea usar un modelo de lenguaje para responder consultas internas sobre contratos de crédito confidenciales sin exponer datos de clientes al proveedor de API pública.',
        taskInstructions: 'Selecciona la arquitectura estratégica con mayor nivel de cumplimiento normativo (GDPR/SOX):',
        options: [
          'Enviar los contratos completos como adjuntos directamente al endpoint público de OpenAI.',
          'Implementar una canalización RAG privada en servidores locales/VPC con sanitización PII previa y embeddings vectoriales cifrados.',
          'Pedirle a los empleados que resuman los datos a mano antes de usar el chat de IA.',
        ],
        correctOptionIndex: 1,
        explanationQuick: 'El procesamiento RAG en VPC privada con filtrado de PII garantiza que la información sensible nunca entre en el conjunto de entrenamiento de un modelo externo.',
        xpPoints: 120,
      }
    ],
    completedCount: 1,
    totalCount: 1,
  },
  {
    id: 'nextjs-architecture-scale',
    title: 'Arquitectura Web a Escala con Next.js & TypeScript',
    subtitle: 'Patrones de alto rendimiento, micro-frontends y optimización Edge',
    tagline: 'Construye aplicaciones web resilientes capaces de procesar millones de peticiones diarias con baja latencia.',
    category: 'Tecnología',
    icon: 'Cpu',
    difficulty: 'Avanzado',
    estimatedHours: 8,
    rating: 4.95,
    reviewCount: 680,
    enrolledCount: 22100,
    instructor: {
      name: 'Ing. Carlos Mendoza',
      role: 'Principal Staff Engineer',
      organization: 'Vercel Alumni & Tech Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    learningOutcomes: [
      'Dominar la estrategia de caching multinivel en Next.js App Router.',
      'Optimizar tiempos de primer renderizado (TTFB y LCP) en el Edge.',
      'Gestionar estado de servidor sin redundancia mediante Server Actions.',
    ],
    modules: [
      {
        id: 'mod-tech-1',
        title: 'Módulo 1: Revalidación Incremental (ISR) a Gran Escala',
        summary: 'Gestión de cachés en e-commerce con miles de páginas de productos.',
        durationMinutes: 60,
        exercises: [
          {
            id: 'ex-tech-1',
            title: 'Invalidación de Caché en E-commerce de Alto Tráfico',
            scenario: 'Un sitio e-commerce con 500,000 productos sufre lentitud porque las actualizaciones de stock tardan 1 hora en reflejarse debido a revalidate estático largo.',
            taskInstructions: '¿Cuál es el enfoque arquitectónico óptimo para lograr actualizaciones instantáneas en el inventario?',
            options: [
              'Reemplazar todas las páginas con SSR dinámico (force-dynamic) en cada petición.',
              'Implementar On-Demand Revalidation mediante Webhooks vinculados a `revalidateTag()` en las peticiones de producto.',
              'Aumentar la memoria del servidor Node.js al doble.',
            ],
            correctOptionIndex: 1,
            explanationQuick: '`revalidateTag()` permite mantener las páginas en caché CDN estática ultrarrápida e invalidar únicamente el tag del producto cuando cambia el stock.',
            xpPoints: 100,
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-tech-1',
        title: 'Invalidación de Caché en E-commerce de Alto Tráfico',
        scenario: 'Un sitio e-commerce con 500,000 productos sufre lentitud porque las actualizaciones de stock tardan 1 hora en reflejarse debido a revalidate estático largo.',
        taskInstructions: '¿Cuál es el enfoque arquitectónico óptimo para lograr actualizaciones instantáneas en el inventario?',
        options: [
          'Reemplazar todas las páginas con SSR dinámico (force-dynamic) en cada petición.',
          'Implementar On-Demand Revalidation mediante Webhooks vinculados a `revalidateTag()` en las peticiones de producto.',
          'Aumentar la memoria del servidor Node.js al doble.',
        ],
        correctOptionIndex: 1,
        explanationQuick: '`revalidateTag()` permite mantener las páginas en caché CDN estática ultrarrápida e invalidar únicamente el tag del producto cuando cambia el stock.',
        xpPoints: 100,
      }
    ],
    completedCount: 0,
    totalCount: 1,
  },
  {
    id: 'product-design-systems',
    title: 'Diseño de Producto & Sistemas de Diseño UI/UX',
    subtitle: 'De Tokens visuales a bibliotecas de componentes a nivel global',
    tagline: 'Crea lenguajes visuales coherentes y escalables que unifiquen la experiencia del usuario en web y móvil.',
    category: 'Diseño',
    icon: 'Palette',
    difficulty: 'Intermedio',
    estimatedHours: 5,
    rating: 4.88,
    reviewCount: 310,
    enrolledCount: 9800,
    instructor: {
      name: 'Sofia Valenzuela',
      role: 'Head of Design System',
      organization: 'Figma Community Lead',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    },
    learningOutcomes: [
      'Construir una arquitectura de Design Tokens escalable (Color, Typo, Spacing).',
      'Definir reglas de accesibilidad WCAG AAA en contraste y navegación por teclado.',
      'Garantizar alineación perfecta entre diseñadores Figma y desarrolladores React.',
    ],
    modules: [
      {
        id: 'mod-des-1',
        title: 'Módulo 1: Arquitectura de Design Tokens',
        summary: 'Definición de tokens semánticos vs primitivos.',
        durationMinutes: 40,
        exercises: [
          {
            id: 'ex-des-1',
            title: 'Gestión de Tokens en Modo Oscuro/Claro',
            scenario: 'Al agregar un tema oscuro a una aplicación, los desarrolladores encuentran que los colores duros como `bg-[#ffffff]` están dispersos en 300 componentes.',
            taskInstructions: '¿Qué principio de Design Systems soluciona esta deuda técnica?',
            options: [
              'Reemplazar valores duros con Tokens Semánticos (`--bg-surface`, `--text-primary`) mapeados a primitivos por tema.',
              'Crear dos componentes idénticos para cada botón en el proyecto.',
              'Usar filtros de inversión CSS `filter: invert(1)`.',
            ],
            correctOptionIndex: 0,
            explanationQuick: 'Los Tokens Semánticos desacoplan el significado del elemento UI de su valor cromático exacto, permitiendo cambios de tema inmediatos.',
            xpPoints: 90,
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-des-1',
        title: 'Gestión de Tokens en Modo Oscuro/Claro',
        scenario: 'Al agregar un tema oscuro a una aplicación, los desarrolladores encuentran que los colores duros como `bg-[#ffffff]` están dispersos en 300 componentes.',
        taskInstructions: '¿Qué principio de Design Systems soluciona esta deuda técnica?',
        options: [
          'Reemplazar valores duros con Tokens Semánticos (`--bg-surface`, `--text-primary`) mapeados a primitivos por tema.',
          'Crear dos componentes idénticos para cada botón en el proyecto.',
          'Usar filtros de inversión CSS `filter: invert(1)`.',
        ],
        correctOptionIndex: 0,
        explanationQuick: 'Los Tokens Semánticos desacoplan el significado del elemento UI de su valor cromático exacto, permitiendo cambios de tema inmediatos.',
        xpPoints: 90,
      }
    ],
    completedCount: 0,
    totalCount: 1,
  },
  {
    id: 'data-driven-growth-marketing',
    title: 'Growth Marketing & Adquisición Basada en Datos',
    subtitle: 'Modelos de atribución, optimización de embudos y retención de usuarios',
    tagline: 'Estrategias cuantitativas para escalar la adquisición de clientes con un Costo de Adquisición (CAC) eficiente.',
    category: 'Marketing',
    icon: 'TrendingUp',
    difficulty: 'Intermedio',
    estimatedHours: 6,
    rating: 4.85,
    reviewCount: 290,
    enrolledCount: 11500,
    instructor: {
      name: 'Marcus Thorne',
      role: 'VP of Growth',
      organization: 'Reforge & Scale Ventures',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    learningOutcomes: [
      'Calcular el Customer Lifetime Value (LTV) y la relación LTV/CAC.',
      'Diseñar experimentos A/B rigurosos con significancia estadística.',
      'Implementar loops de retención orgánica y viralidad inducida.',
    ],
    modules: [],
    exercises: [
      {
        id: 'ex-mkt-1',
        title: 'Optimización de Ratio LTV:CAC en SaaS B2B',
        scenario: 'Una startup SaaS invierte $300 USD en adquirir cada cliente (CAC), pero el valor de vida del cliente (LTV) es de sólo $450 USD (ratio 1.5x). La empresa está perdiendo caja.',
        taskInstructions: '¿Cuál es la palanca estratégica prioritaria para alcanzar un ratio saludable de 3x o superior?',
        options: [
          'Aumentar el presupuesto publicitario un 50% para compensar.',
          'Reducir la tasa de cancelación (Churn) aumentando el onboarding y expandiendo cuentas mediante upsells.',
          'Despedir al equipo de soporte al cliente.',
        ],
        correctOptionIndex: 1,
        explanationQuick: 'Reducir el Churn y aumentar la expansión de cuentas expande directamente el LTV sin incrementar el CAC publicitario inicial.',
        xpPoints: 110,
      }
    ],
    completedCount: 0,
    totalCount: 1,
  },
  {
    id: 'executive-leadership-teams',
    title: 'Liderazgo de Equipos de Alto Rendimiento',
    subtitle: 'Gestión de la complejidad, cultura de responsabilidad y comunicación directa',
    tagline: 'Herramientas de dirección ejecutiva para inspirar equipos, alinear metas estratégicas y resolver conflictos con autoridad.',
    category: 'Liderazgo',
    icon: 'Users',
    difficulty: 'Ejecutivo',
    estimatedHours: 7,
    rating: 4.92,
    reviewCount: 510,
    enrolledCount: 18300,
    instructor: {
      name: 'Dra. Claire Dupont',
      role: 'Senior Executive Coach',
      organization: 'Harvard Business Publishing',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    },
    learningOutcomes: [
      'Aplicar la metodología OKR (Objectives and Key Results) con claridad.',
      'Desarrollar conversaciones difìciles con franqueza radical y empatía.',
      'Fomentar la seguridad psicológica para incentivar la innovación.',
    ],
    modules: [],
    exercises: [
      {
        id: 'ex-lead-1',
        title: 'Gestión de Desempeño en Situación de Cambio',
        scenario: 'Un director de área nota que un talento senior clave ha bajado su rendimiento un 40% tras la reorganización de la compañía.',
        taskInstructions: '¿Cuál es el paso de liderazgo ejecutivo recomendado en la primera reunión 1-on-1?',
        options: [
          'Emitir una advertencia escrita inmediata por escrito sin hablar.',
          'Abrir un diálogo con empatía y franqueza radical para diagnosticar si la causa es falta de claridad en el nuevo rol o desalineación de expectativas.',
          'Ignorar la situación esperando que se solucione sola con el tiempo.',
        ],
        correctOptionIndex: 1,
        explanationQuick: 'Diagnosticar la causa raíz (claridad de expectativas vs desmotivación) antes de juzgar preserva la confianza y permite corregir el rumbo rápidamente.',
        xpPoints: 100,
      }
    ],
    completedCount: 1,
    totalCount: 1,
  }
];

export const FACULTIES: Faculty[] = [
  {
    id: 'fac-eng',
    code: 'FAC-01',
    romanNumeral: 'I',
    name: 'Facultad de Ingeniería',
    latinMotto: 'Scientia, Fabrica et Innovatio',
    description: 'Ingeniería multidisciplinaria avanzada: desarrollo de software distribuido, robótica y mecatrónica, ingeniería industrial, sistemas de información, inteligencia artificial e infraestructura tecnológica de gran escala.',
    icon: 'Cpu',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Software & Sistemas', 'Robótica & Mecatrónica', 'Ingeniería Industrial', 'IA & Cloud Infrastructure'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Ingeniería',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    stats: {
      coursesCount: 12,
      studentsCount: 28400,
      tracksCount: 4,
    },
    courses: [MOCK_MODULES[1], MOCK_MODULES[0]],
    categories: [
      {
        id: 'cat-soft-systems',
        title: 'Ingeniería de Software & Sistemas',
        icon: 'Code',
        description: 'Desarrollo de software distribuido, arquitecturas cloud-native, microservicios, DevOps, plataformas de datos y sistemas de información empresariales.',
        paths: [
          {
            id: 'path-distributed-systems',
            title: 'Arquitectura de Sistemas Distribuidos',
            description: 'Diseño de sistemas escalables, tolerantes a fallos y consistentes: CAP theorem, consensus, event-driven, CQRS, service mesh.',
            estimatedHours: 55,
            difficulty: 'Avanzado',
            icon: 'Cpu',
            topics: ['CAP Theorem & Trade-offs', 'Raft & Consensus Algorithms', 'Event Sourcing & CQRS', 'Service Mesh (Istio/Linkerd)', 'Observabilidad: OpenTelemetry, Distributed Tracing', 'Resilience Patterns: Circuit Breaker, Bulkhead, Retry']
          },
          {
            id: 'path-cloud-native',
            title: 'Cloud-Native & Kubernetes en Producción',
            description: 'Operación de clusters Kubernetes a escala: operators, CRDs, GitOps, multi-cluster, security, cost optimization.',
            estimatedHours: 50,
            difficulty: 'Avanzado',
            icon: 'Cloud',
            topics: ['Kubernetes Internals: API Server, Controller Manager, Scheduler', 'Operators & CRDs: Kubebuilder, Operator SDK', 'GitOps: ArgoCD, Flux, Progressive Delivery', 'Multi-Cluster & Federation', 'Security: RBAC, Network Policies, OPA Gatekeeper', 'FinOps: Cost Optimization, Right-sizing, Spot Instances']
          },
          {
            id: 'path-platform-engineering',
            title: 'Platform Engineering & Developer Experience',
            description: 'Construcción de Internal Developer Platforms (IDP), self-service infrastructure, golden paths, Backstage, template standardization.',
            estimatedHours: 40,
            difficulty: 'Avanzado',
            icon: 'Layers',
            topics: ['Internal Developer Platforms: Backstage, Port, Cortex', 'Golden Paths & Paved Roads', 'Template Standardization: Cookiecutter, Scaffolder', 'Self-Service Infrastructure: Crossplane, Terraform Cloud', 'Developer Experience Metrics: SPACE, DORA', 'Platform as Product: Product Management for Platforms']
          },
          {
            id: 'path-data-platforms',
            title: 'Plataformas de Datos & Data Engineering',
            description: 'Arquitecturas de datos modernas: Lakehouse, Streaming, Real-time OLAP, Data Mesh, Governance, Quality.',
            estimatedHours: 45,
            difficulty: 'Avanzado',
            icon: 'Database',
            topics: ['Lakehouse: Delta Lake, Iceberg, Hudi', 'Streaming: Kafka, Flink, RisingWave, Redpanda', 'Real-time OLAP: ClickHouse, Apache Druid, Pinot', 'Data Mesh: Domain-Oriented Ownership', 'Governance: Unity Catalog, OpenLineage, Great Expectations', 'ML Feature Stores: Feast, Tecton, Hopsworks']
          }
        ]
      },
      {
        id: 'cat-robotics-mechatronics',
        title: 'Robótica & Mecatrónica',
        icon: 'Cpu',
        description: 'Sistemas robóticos autónomos, control en tiempo real, visión por computadora, gemelos digitales, robótica industrial y de servicios.',
        paths: [
          {
            id: 'path-autonomous-robotics',
            title: 'Robótica Autónoma & Navegación',
            description: 'SLAM, planificación de movimiento, control predictivo, ROS 2, simulación, despliegue en edge.',
            estimatedHours: 60,
            difficulty: 'Avanzado',
            icon: 'Navigation',
            topics: ['SLAM: Visual, LiDAR, Sensor Fusion', 'Motion Planning: RRT*, MPC, Trajectory Optimization', 'ROS 2: Nodes, Topics, Actions, Lifecycle', 'Simulation: Gazebo, Isaac Sim, Webots', 'Edge Deployment: Jetson, Qualcomm RB5, Micro-ROS', 'Safety: ISO 13482, Functional Safety']
          },
          {
            id: 'path-computer-vision-robotics',
            title: 'Visión por Computadora para Robótica',
            description: 'Detección 3D, pose estimation, depth estimation, neural radiance fields, sim-to-real transfer.',
            estimatedHours: 45,
            difficulty: 'Avanzado',
            icon: 'Eye',
            topics: ['3D Detection: PointPillars, CenterPoint, BEV', 'Pose Estimation: FoundationPose, MegaPose', 'Depth & NeRF: Instant-NGP, Gaussian Splatting', 'Sim-to-Real: Domain Randomization, System ID', 'Embedded Vision: TensorRT, ONNX Runtime, NCNN', 'Dataset Generation: Synthetic Data, Procedural Generation']
          },
          {
            id: 'path-industrial-robotics',
            title: 'Robótica Industrial & Manufactura Avanzada',
            description: 'Manipuladores, cinemática, control de fuerza, células flexibles, digital twins, OPC UA, ISA-95.',
            estimatedHours: 40,
            difficulty: 'Intermedio',
            icon: 'Factory',
            topics: ['Kinematics & Dynamics: Forward/Inverse, Jacobians', 'Force Control: Impedance, Admittance, Hybrid', 'Digital Twins: NVIDIA Omniverse, Siemens Tecnomatix', 'Industrial Protocols: OPC UA, EtherCAT, PROFINET', 'ISA-95 & Manufacturing Operations Management', 'Collaborative Robots: Safety Standards, ISO 10218']
          },
          {
            id: 'path-mechatronics-design',
            title: 'Diseño Mecatrónico & Sistemas Embebidos',
            description: 'Diseño de sistemas integrados: MCU/SoC, RTOS, PCB, actuadores, sensores, power electronics, testing HIL.',
            estimatedHours: 50,
            difficulty: 'Intermedio',
            icon: 'Cpu',
            topics: ['MCU/SoC Selection: STM32, ESP32, NXP, TI', 'RTOS: FreeRTOS, Zephyr, ThreadX', 'PCB Design: KiCad, Altium, High-Speed Design', 'Power Electronics: Motor Drives, BMS, PMIC', 'HIL Testing: Hardware-in-the-Loop, dSPACE, NI', 'Model-Based Design: Simulink, Stateflow, Code Generation']
          }
        ]
      },
      {
        id: 'cat-industrial-engineering',
        title: 'Ingeniería Industrial & Operaciones',
        icon: 'Factory',
        description: 'Optimización de sistemas productivos, supply chain, logística, manufactura esbelta, simulación, gemelos digitales de procesos.',
        paths: [
          {
            id: 'path-operations-research',
            title: 'Investigación de Operaciones & Optimización',
            description: 'Programación lineal/entera/mixta, heurísticas, metaheurísticas, optimización estocástica, solvers comerciales y open-source.',
            estimatedHours: 45,
            difficulty: 'Avanzado',
            icon: 'BarChart3',
            topics: ['LP/MIP: Simplex, Branch-and-Bound, Cutting Planes', 'Solvers: Gurobi, CPLEX, SCIP, HiGHS, OR-Tools', 'Heuristics: Genetic Algorithms, Simulated Annealing, ACO', 'Stochastic Optimization: Scenario Trees, Sample Average Approximation', 'Decomposition: Benders, Dantzig-Wolfe, Column Generation', 'Applications: Scheduling, Routing, Network Design']
          },
          {
            id: 'path-supply-chain',
            title: 'Supply Chain Analytics & Logística Cuantitativa',
            description: 'Demand forecasting, inventory optimization, network design, last-mile, risk & resilience, control towers.',
            estimatedHours: 40,
            difficulty: 'Avanzado',
            icon: 'Truck',
            topics: ['Demand Forecasting: Statistical, ML, Deep Learning (Temporal Fusion Transformers)', 'Inventory Optimization: Multi-Echelon, Newsvendor, Safety Stock', 'Network Design: Facility Location, Flow Optimization', 'Last-Mile: VRP with Time Windows, Dynamic Routing', 'Risk & Resilience: Digital Twins, Stress Testing', 'Control Towers: End-to-End Visibility, Alerting']
          },
          {
            id: 'path-lean-manufacturing',
            title: 'Manufactura Esbelta & Mejora Continua',
            description: 'TPS/Lean, Six Sigma, Value Stream Mapping, Kata, TPM, OEE, Andon, Standard Work, cultura de mejora.',
            estimatedHours: 35,
            difficulty: 'Intermedio',
            icon: 'TrendingUp',
            topics: ['Toyota Production System: Principles, 14 Management Principles', 'Value Stream Mapping: Current/Future State, Material & Info Flow', 'Six Sigma: DMAIC, Statistical Tools, Design of Experiments', 'Toyota Kata: Improvement Kata, Coaching Kata', 'Total Productive Maintenance: OEE, Autonomous Maintenance', 'Lean Culture: Hoshin Kanri, A3 Thinking, Gemba Walks']
          },
          {
            id: 'path-process-simulation',
            title: 'Simulación de Procesos & Gemelos Digitales',
            description: 'Discrete Event Simulation, Agent-Based Modeling, Digital Twins para operaciones, AnyLogic, SimPy, FactoryTalk.',
            estimatedHours: 30,
            difficulty: 'Intermedio',
            icon: 'Cpu',
            topics: ['Discrete Event Simulation: Process-Interaction, Event-Scheduling', 'Agent-Based Modeling: Mesa, NetLogo, AnyLogic', 'Digital Twins: Physics-Based vs Data-Driven', 'Calibration & Validation: History Matching, Sensitivity', 'Scenario Analysis: What-If, Monte Carlo, Optimization', 'Real-Time Integration: OPC UA, MQTT, Kafka']
          }
        ]
      },
      {
        id: 'cat-ai-infrastructure',
        title: 'IA & Infraestructura Tecnológica',
        icon: 'Brain',
        description: 'MLOps, LLMOps, infraestructura para entrenamiento/serving masivo, accelerators, compiladores, sistemas de datos para IA.',
        paths: [
          {
            id: 'path-mlops-llmops',
            title: 'MLOps & LLMOps: Ciclo de Vida Completo',
            description: 'Feature stores, experiment tracking, model registry, CI/CD para ML, monitoring, drift detection, governance.',
            estimatedHours: 45,
            difficulty: 'Avanzado',
            icon: 'GitBranch',
            topics: ['Feature Stores: Feast, Tecton, Hopsworks', 'Experiment Tracking: MLflow, Weights & Biases, ClearML', 'Model Registry & Deployment: KServe, Seldon, BentoML', 'CI/CD for ML: Kubeflow Pipelines, Dagster, Airflow', 'Monitoring: Drift Detection, Data Quality, Performance', 'Governance: Model Cards, Bias Audits, Regulatory Compliance']
          },
          {
            id: 'path-training-infra',
            title: 'Infraestructura para Entrenamiento Masivo',
            description: 'Clusters GPU a escala: distributed training, FSDP, ZeRO, Megatron-LM, networking (NVLink, InfiniBand, RoCE), checkpointing.',
            estimatedHours: 50,
            difficulty: 'Avanzado',
            icon: 'Server',
            topics: ['Distributed Training: DDP, FSDP, ZeRO-3, Pipeline Parallelism', 'Frameworks: Megatron-LM, NeMo, YaLM, Axolotl', 'Networking: NVLink/NVSwitch, InfiniBand, RoCE v2', 'Checkpointing: Async, Incremental, Distributed', 'Scheduler: Slurm, Kubernetes (Kueue, Volcano)', 'Cost Optimization: Spot, Checkpoint-Restart, Mixed Precision']
          },
          {
            id: 'path-serving-inference',
            title: 'Serving & Inferencia de Alto Rendimiento',
            description: 'TensorRT-LLM, vLLM, TGI, Triton, batching continuo, speculative decoding, quantization, KV cache optimization.',
            estimatedHours: 40,
            difficulty: 'Avanzado',
            icon: 'Zap',
            topics: ['Inference Engines: vLLM, TensorRT-LLM, TGI, Triton', 'Continuous Batching & PagedAttention', 'Speculative Decoding: Medusa, EAGLE, Lookahead', 'Quantization: GPTQ, AWQ, GGUF, FP8, INT4', 'KV Cache: Prefix Caching, Offloading, Compression', 'Routing: Prefill/Decode Disaggregation, Load Balancing']
          },
          {
            id: 'path-ai-compilers',
            title: 'Compiladores & Runtime para IA',
            description: 'MLIR, TVM, XLA, Triton, CUDA graphs, kernel fusion, auto-tuning, hardware abstraction para aceleradores.',
            estimatedHours: 45,
            difficulty: 'Avanzado',
            icon: 'Terminal',
            topics: ['MLIR: Dialects, Passes, Lowering to GPU/TPU', 'TVM: Relay, TensorIR, Auto-Scheduler, MetaSchedule', 'XLA: HLO, Compiler Pipeline, SPMD Partitioning', 'Triton: Pythonic GPU Kernels, Auto-Tuning', 'Kernel Fusion: Horizontal, Vertical, Persistent Kernels', 'Hardware Abstraction: ROCm, oneAPI, CUDA Graphs']
          }
        ]
      }
    ]
  },
  {
    id: 'fac-health',
    code: 'FAC-02',
    romanNumeral: 'II',
    name: 'Facultad de Salud',
    latinMotto: 'Vita et Sanitas',
    description: 'Ciencias médicas y de la salud: medicina clínica, informática médica, biotecnología, epidemiología, salud pública y telemedicina aplicada al diagnóstico.',
    icon: 'Activity',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Medicina Clínica', 'Informática Médica', 'Salud Pública', 'Biotecnología'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Salud',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    },
    stats: {
      coursesCount: 8,
      studentsCount: 19400,
      tracksCount: 3,
    },
    courses: [MOCK_MODULES[0]],
  },
  {
    id: 'fac-law',
    code: 'FAC-03',
    romanNumeral: 'III',
    name: 'Facultad de Derecho',
    latinMotto: 'Iustitia et Lex',
    description: 'Derecho corporativo internacional, regulación de tecnologías emergentes, propiedad intelectual, ciberderecho y compliance normativo.',
    icon: 'Scale',
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Derecho Corporativo', 'Regulación de IA', 'Propiedad Intelectual', 'Compliance'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección Jurídica',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    stats: {
      coursesCount: 5,
      studentsCount: 13200,
      tracksCount: 2,
    },
    courses: [MOCK_MODULES[4]],
  },
  {
    id: 'fac-econ',
    code: 'FAC-04',
    romanNumeral: 'IV',
    name: 'Facultad de Economía',
    latinMotto: 'Aequitas et Prosperitas',
    description: 'Economía cuantitativa, finanzas corporativas B2B, análisis econométrico, macroeconomía internacional y mercados globales.',
    icon: 'TrendingUp',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Econometría', 'Finanzas B2B', 'Modelos Econométricos', 'Mercados Financieros'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Economía',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    stats: {
      coursesCount: 5,
      studentsCount: 18500,
      tracksCount: 2,
    },
    courses: [MOCK_MODULES[3]],
  },
  {
    id: 'fac-arch',
    code: 'FAC-05',
    romanNumeral: 'V',
    name: 'Facultad de Arquitectura',
    latinMotto: 'Forma et Spatium',
    description: 'Diseño urbano sostenible, arquitectura bioclimática, modelado digital BIM, gestión de proyectos constructivos y ordenamiento territorial.',
    icon: 'Compass',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Modelado BIM', 'Urbanismo Sostenible', 'Diseño Bioclimático', 'Gestión de Obras'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Arquitectura',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    },
    stats: {
      coursesCount: 4,
      studentsCount: 11800,
      tracksCount: 2,
    },
    courses: [MOCK_MODULES[2]],
  },
  {
    id: 'fac-edu',
    code: 'FAC-06',
    romanNumeral: 'VI',
    name: 'Facultad de Educación',
    latinMotto: 'Docendo Discimus',
    description: 'Pedagogía digital avanzada, diseño instruccional moderno, neuroeducación, tecnologías educativas y gestión de instituciones.',
    icon: 'GraduationCap',
    coverImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Diseño Instruccional', 'Neuroeducación', 'EdTech', 'Liderazgo Educativo'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Educación',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    },
    stats: {
      coursesCount: 4,
      studentsCount: 9600,
      tracksCount: 2,
    },
    courses: [MOCK_MODULES[4]],
  },
  {
    id: 'fac-arts',
    code: 'FAC-07',
    romanNumeral: 'VII',
    name: 'Facultad de Artes',
    latinMotto: 'Ars Longa, Vita Brevis',
    description: 'Artes digitales, composición estética, diseño de experiencias visuales, narrativa multimedia y preservación del patrimonio cultural.',
    icon: 'Palette',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Artes Digitales', 'Narrativa Visual', 'Estética Contemporánea', 'Diseño Multimedia'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Artes',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    },
    stats: {
      coursesCount: 3,
      studentsCount: 8400,
      tracksCount: 2,
    },
    courses: [MOCK_MODULES[2]],
  },
  {
    id: 'fac-sci',
    code: 'FAC-08',
    romanNumeral: 'VIII',
    name: 'Facultad de Ciencias',
    latinMotto: 'Veritas per Experientiam',
    description: 'Investigación en física teórica, matemática aplicada, ciencias de datos avanzadas, biotecnología y métodos científicos rigurosos.',
    icon: 'Sparkles',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Física Aplicada', 'Matemática Avanzada', 'Ciencia de Datos', 'Biotecnología'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Ciencias',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    },
    stats: {
      coursesCount: 5,
      studentsCount: 16200,
      tracksCount: 2,
    },
    courses: [MOCK_MODULES[0]],
  }
];

export const SCHOOLS: Faculty[] = [
  {
    id: 'esc-frontend',
    code: 'ESC-00',
    romanNumeral: 'I',
    name: 'Ingeniería Frontend',
    latinMotto: 'Interfacies et Experientia',
    description: 'Ruta completa de ingeniería frontend: desde fundamentos web hasta arquitecturas modernas a escala. Domina HTML semántico, CSS avanzado, JavaScript/TypeScript, React, Next.js, rendimiento web, accesibilidad y patrones de arquitectura frontend empresarial.',
    icon: 'Layout',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['HTML5 & CSS3 Moderno', 'JavaScript ES6+ & TypeScript', 'React & Next.js App Router', 'Rendimiento & Core Web Vitals', 'Accesibilidad WCAG', 'Testing Frontend', 'Arquitectura & Patrones', 'Micro-frontends & Module Federation'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Frontend',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    stats: { coursesCount: 24, studentsCount: 42100, tracksCount: 3 },
    courses: [MOCK_MODULES[1]],
    categories: [
      {
        id: 'cat-frontend-basico',
        title: 'Nivel 1: Fundamentos Sólidos (Básico)',
        icon: 'BookOpen',
        description: 'Base inquebrantable: la web nativa (HTML, CSS, JavaScript/TypeScript) + panorámica de alternativas de servidor (Python, Go, Rust, Java, C#) para que elijas tu stack completo desde el día uno.',
        paths: [
          {
            id: 'path-html-semantico',
            title: 'HTML5 Semántico & Accesibilidad Nativa',
            description: 'Estructura de documentos con significado: landmark roles, heading hierarchy, formularios accesibles, SEO técnico y APIs nativas del navegador.',
            estimatedHours: 12,
            difficulty: 'Principiante',
            icon: 'FileText',
            topics: ['Elementos Semánticos (header, main, article, section)', 'Jerarquía de Encabezados & Outline', 'Formularios Accesibles & Validación Nativa', 'ARIA Solo Cuando Es Necesario', 'Meta Tags, Open Graph & SEO Técnico', 'Picture & Source para Imágenes Responsivas', 'Web Components Nativos (Slots, Shadow DOM)']
          },
          {
            id: 'path-css-moderno',
            title: 'CSS3 Moderno: Layout, Animaciones & Sistemas',
            description: 'Domina el cascade: Grid, Flexbox, Container Queries, Custom Properties, Layers, animaciones performantes y arquitectura CSS escalable sin frameworks.',
            estimatedHours: 18,
            difficulty: 'Principiante',
            icon: 'Palette',
            topics: ['CSS Grid & Subgrid para Layouts Complejos', 'Flexbox: Alineación, Distribución & Gap', 'Container Queries & Unidades Relativas (cqw, cqh)', 'Custom Properties: Temas, Modo Oscuro & Design Tokens', '@layer para Cascada Controlada', 'Animaciones con @keyframes, View Transitions API', 'CSS Nesting Nativo, :has(), :where(), :is()', 'Arquitectura CSS: ITCSS, BEM & Utility-First']
          },
          {
            id: 'path-js-fundamentos',
            title: 'JavaScript ES6+ Profundo: El Lenguaje Nativo',
            description: 'JavaScript moderno sin transpiladores: módulos, async/await, iteradores, proxies, WeakMap/Set, memory management y APIs del navegador.',
            estimatedHours: 20,
            difficulty: 'Principiante',
            icon: 'Code',
            topics: ['Módulos ES (import/export, dynamic import)', 'Async/Await, Promise.allSettled, Top-level Await', 'Iteradores, Generadores & Símbolos', 'Proxy & Reflect para Metaprogramación', 'WeakMap, WeakSet, FinalizationRegistry', 'Memory Management & Garbage Collection', 'Web APIs: Fetch, Streams, IntersectionObserver, ResizeObserver', 'Event Loop: Microtasks, Macrotasks & RequestIdleCallback']
          },
          {
            id: 'path-typescript-esencial',
            title: 'TypeScript Esencial: Tipado Pragmático',
            description: 'TypeScript como superset productivo: inference, generics, utility types, discriminated unions, template literal types y configuración estricta.',
            estimatedHours: 14,
            difficulty: 'Principiante',
            icon: 'ShieldCheck',
            topics: ['Inferencia de Tipos & Anotaciones Explícitas', 'Generics: Constraints, Defaults & Variance', 'Utility Types (Pick, Omit, Partial, Record, ReturnType)', 'Discriminated Unions & Narrowing', 'Template Literal Types & Mapped Types', 'tsconfig.json Strict Mode: Qué Activar y Por Qué', 'Declaration Files (.d.ts) & Module Augmentation', 'Type-Driven Development: Tipos como Documentación']
          },
          {
            id: 'path-toolign-basico',
            title: 'Tooling & Ecosistema JS/TS: Vite, ESLint, Prettier, Vitest',
            description: 'Configura un entorno profesional JS/TS desde cero: bundling rápido, linting estricto, formateo consistente y testing unitario moderno.',
            estimatedHours: 8,
            difficulty: 'Principiante',
            icon: 'Terminal',
            topics: ['Vite: Config, Plugins, Alias & Variables de Entorno', 'ESLint Flat Config + TypeScript ESLint + React Rules', 'Prettier: Integración & Reglas de Consistencia', 'Vitest: Unit Testing Rápido, Coverage & Mocks', 'Husky + lint-staged: Git Hooks Automatizados', 'Package.json Scripts: Dev, Build, Preview, Test, Lint']
          },
          {
            id: 'path-web-desde-otros-lenguajes',
            title: 'Desarrollo Web desde Otros Lenguajes: Panorama de Alternativas',
            description: 'Visión práctica de backends no-JS para servir tu frontend: Python (FastAPI/Django), Go (Gin/Fiber), Rust (Axum/Actix), Java (Spring Boot), C# (ASP.NET Core), Node (NestJS/Hono). Elige tu stack full-stack.',
            estimatedHours: 10,
            difficulty: 'Principiante',
            icon: 'Layers',
            topics: ['Python: FastAPI (Async, OpenAPI nativo) vs Django (Batteries Included)', 'Go: Gin (Rápido) vs Fiber (Express-like) — Concurrencia Nativa', 'Rust: Axum (Ergonomía) vs Actix (Actor Model) — Seguridad Memoria', 'Java: Spring Boot (Ecosistema Enterprise) — Virtual Threads (JDK 21+)', 'C#: ASP.NET Core (Performance, Minimal APIs) — AOT Compilation', 'Node.js Alternativas: NestJS (Opinionado) vs Hono (Edge/Universal)', 'Comunicación Frontend↔Backend: REST, GraphQL, tRPC, gRPC — Qué Encaja', 'Deploy Unificado: Docker Compose, Kubernetes, Serverless (Vercel, Cloud Run, Fly.io)']
          }
        ]
      },
      {
        id: 'cat-frontend-intermedio',
        title: 'Nivel 2: Frameworks & Ecosistema Profesional (Intermedio)',
        icon: 'Code',
        description: 'Elige tu framework principal y profundiza: React, Vue, Svelte, Solid, Astro, Qwik. Mental model, hooks/signals, Server Components/Islands, estado global, testing y Next.js / Nuxt / SvelteKit / Astro / SolidStart en producción.',
        paths: [
          {
            id: 'path-elegir-framework',
            title: 'Panorama de Frameworks 2025: React, Vue, Svelte, Solid, Astro, Qwik',
            description: 'Comparativa honesta: arquitectura (VDOM vs Signals vs Compilador), Server Components vs Islands, bundle size, learning curve, empleo, ecosistema. Decide con criterio técnico, no moda.',
            estimatedHours: 8,
            difficulty: 'Intermedio',
            icon: 'GitBranch',
            topics: ['React 19: RSC, Actions, use() — Ecosistema Maduro', 'Vue 3.5: Signals, Vapor Mode — DX Equilibrada', 'Svelte 5: Runes, Compiler — Reactividad Sin VDOM', 'SolidJS: Signals Fine-Grained — Rendimiento Extremo', 'Astro 5: Islands, View Transitions — Content-First', 'Qwik: Resumability, Zero Hydration — Streaming Real', 'Comparativa: Bundle, Hydration, SSR/SSG/ISR, Edge, Jobs']
          },
          {
            id: 'path-react-profundo',
            title: 'Opción A — React 19: Mental Model, Hooks & Server Components',
            description: 'React profundo: Fiber, render phases, bailout, hooks avanzados, Server Components, Actions, Next.js 15 App Router en producción.',
            estimatedHours: 24,
            difficulty: 'Intermedio',
            icon: 'Brain',
            topics: ['Fiber Architecture: Work Loop, Priorities, Lanes', 'Render vs Commit Phase, Bailout con memo/useMemo/useCallback', 'Hooks Avanzados: useReducer, useSyncExternalStore, useInsertionEffect', 'Custom Hooks & Patrones: Compound Components, State Machines', 'Server Components por Defecto: Boundary "use client"', 'Server Actions: Mutaciones Seguras sin API Routes', 'Next.js 15: Streaming, Suspense, Parallel/Intercepting Routes', 'Caching: fetch(), revalidateTag, no-store, Partial Prerendering']
          },
          {
            id: 'path-vue-profundo',
            title: 'Opción B — Vue 3.5: Composition API, Signals & Nuxt 4',
            description: 'Vue moderno: Composition API, <script setup>, Signals (reactivity transform), Nuxt 4 con Nitro, Auto-imports, Server Routes, Hybrid Rendering.',
            estimatedHours: 22,
            difficulty: 'Intermedio',
            icon: 'Layout',
            topics: ['Composition API vs Options API: Mental Model', 'Signals: ref(), computed(), watchEffect() — Fine-Grained', 'Componentes: defineProps, defineEmits, defineSlots, defineModel', 'Nuxt 4: Nitro Server, Hybrid Rendering, Route Rules', 'Auto-imports, Layers, Modules, Server Components (Experimental)', 'Pinia: Stores Tipados, DevTools, Testing', 'VueUse: Composables Reutilizables (100+)', 'Testing: Vitest + Vue Test Utils + Playwright']
          },
          {
            id: 'path-svelte-profundo',
            title: 'Opción C — Svelte 5: Runes, SvelteKit 2 & Server-First',
            description: 'Svelte 5 con Runes ($state, $derived, $effect), SvelteKit 2: Server Load, Actions, Form Actions, Edge/Node Adapters, Preload.',
            estimatedHours: 20,
            difficulty: 'Intermedio',
            icon: 'Zap',
            topics: ['Runes: $state, $derived, $effect, $props — Reactividad Explícita', 'SvelteKit: File-Based Routing, +page.svelte, +layout.svelte', 'Load Functions (Server/Universal), Form Actions, Progressive Enhancement', 'Adapters: Node, Vercel, Cloudflare, Netlify, Static', 'Stores vs Runes: Migración & Coexistencia', 'Transitions/Animations Nativas: flip, crossfade', 'Testing: Vitest + @testing-library/svelte + Playwright']
          },
          {
            id: 'path-solid-astro-qwik',
            title: 'Opción D — Solid, Astro, Qwik: Enfoques Alternativos',
            description: 'Solid (Signals puros), Astro (Islands/Content-First), Qwik (Resumability). Cuándo brillan cada uno y cómo integrar en stack real.',
            estimatedHours: 16,
            difficulty: 'Intermedio',
            icon: 'Sparkles',
            topics: ['SolidJS: createSignal, createEffect, createMemo — Sin Re-renders', 'SolidStart: File Routing, Server Functions, Streaming SSR', 'Astro: .astro Components, Islands, View Transitions API', 'Astro DB, Actions, Middleware, i18n Nativo', 'Qwik: Resumability, $ Signals, Optimizer, Prefetching', 'Qwik City: Routing, Layouts, Middleware, Streaming', 'Migración/Coexistencia: Micro-frontends, Module Federation']
          },
          {
            id: 'path-state-management-multi',
            title: 'Gestión de Estado Multi-Framework: Server vs Client',
            description: 'TanStack Query (Framework-Agnostic), Signals Stores, Zustand/Jotai/Pinia, URL State. Patrones universales más allá del framework.',
            estimatedHours: 12,
            difficulty: 'Intermedio',
            icon: 'Database',
            topics: ['TanStack Query v5: Framework-Agnostic, Signals Integration', 'Client State: Signals Stores (Solid/Zustand/Jotai/Pinia)', 'Form State: Zod + Valibot + Framework Forms', 'URL as State: Search Params, Router Integration', 'Optimistic Updates: Patterns Across Frameworks', 'Persistencia: localStorage, IndexedDB, BroadcastChannel']
          },
          {
            id: 'path-testing-multi',
            title: 'Testing Frontend Universal: Unit, Integration, E2E',
            description: 'Vitest + Testing Library (React/Vue/Svelte/Solid), Playwright para E2E, Visual Regression, MSW para API Mocking. Una estrategia, múltiples targets.',
            estimatedHours: 10,
            difficulty: 'Intermedio',
            icon: 'CheckCircle2',
            topics: ['Vitest: Config Multi-Framework, Coverage, Snapshots', 'Testing Library: Queries, User Events, Accessibility', 'MSW: API Mocking Compartido entre Unit & E2E', 'Playwright: E2E Cross-Browser, Fixtures, Trace Viewer', 'Visual Regression: Playwright Screenshots / Chromatic', 'CI Matrix: Frameworks × Browsers × Node Versions']
          }
        ]
      },
      {
        id: 'cat-frontend-avanzado',
        title: 'Nivel 3: Arquitectura, Rendimiento & Escala (Avanzado)',
        icon: 'Cpu',
        description: 'Nivel senior/staff: Core Web Vitals, arquitectura de micro-frontends, module federation, edge computing, design systems, y decisiones técnicas de alto impacto.',
        paths: [
          {
            id: 'path-web-vitals',
            title: 'Core Web Vitals & Rendimiento Extremo',
            description: 'LCP, INP, CLS: medición real (RUM), optimización crítica, streaming, especulación y budgets de rendimiento.',
            estimatedHours: 16,
            difficulty: 'Avanzado',
            icon: 'TrendingUp',
            topics: ['LCP: Critical CSS, Preload, Priority Hints, fetchpriority', 'INP: Long Tasks, useTransition, Web Workers, isInputPending', 'CLS: Font Display, Aspect Ratio, Layout Shift Attribution', 'RUM vs Lab Data: Web Vitals Library, CrUX', 'Resource Hints: preconnect, dns-prefetch, prefetch, prerender', 'Service Workers: Workbox, Offline-First, Background Sync', 'Budgets: Bundle Size, Third-Party, Timing Budgets']
          },
          {
            id: 'path-architecture-patterns',
            title: 'Arquitectura Frontend: Patrones & Decisiones',
            description: 'Feature-sliced design, atomic design, domain-driven frontend, micro-frontends con Module Federation y monorepos.',
            estimatedHours: 18,
            difficulty: 'Avanzado',
            icon: 'GitBranch',
            topics: ['Feature-Sliced Design (FSD): Layers, Slices, Segments', 'Atomic Design vs FSD: Cuándo Usar Cada Uno', 'Domain-Driven Frontend: Bounded Contexts en UI', 'Module Federation: Host/Remote, Shared Dependencies', 'Monorepos: Turborepo / Nx / pnpm Workspaces', 'Versionado: Changesets, Semantic Release', 'API Contracts: tRPC, GraphQL Codegen, OpenAPI/TS']
          },
          {
            id: 'path-design-systems',
            title: 'Design Systems & Component Libraries',
            description: 'Construye un DS empresarial: tokens, componentes headless (Radix/Ark UI), theming, documentación (Storybook), versionado y adopción.',
            estimatedHours: 14,
            difficulty: 'Avanzado',
            icon: 'Palette',
            topics: ['Design Tokens: Spec (Style Dictionary), Transform & Platform Output', 'Headless UI: Radix UI / Ark UI / Headless UI', 'Theming: CSS Variables, Tailwind CSS Variables, Class Variance Authority', 'Storybook: Controls, Docs, Chromatic, Visual Tests', 'Composición: Compound Components, Polymorphic (asChild)', 'Accesibilidad: WCAG 2.2 AA, Testing con axe-core', 'Distribución: npm Workspace, Provenance, SBOM']
          },
          {
            id: 'path-edge-hybrid',
            title: 'Edge Computing, Hybrid Rendering & Streaming',
            description: 'Next.js en el Edge: Middleware, Edge Runtime, Partial Prerendering (PPR), React 19 Streaming, Server Actions en Edge.',
            estimatedHours: 12,
            difficulty: 'Avanzado',
            icon: 'Cloud',
            topics: ['Edge Runtime vs Node.js Runtime: Limitaciones & APIs', 'Middleware: Geolocation, A/B Testing, Bot Detection', 'Partial Prerendering (PPR): Static Shell + Dynamic Islands', 'React 19: use() API, useOptimistic, useFormStatus', 'Streaming Server Actions & Progressive Enhancement', 'Vercel/Cloudflare/Netlify: Deploy, Logs, Analytics', 'Observabilidad: OpenTelemetry, Sentry, Logs Estructurados']
          },
          {
            id: 'path-accessibility-internationalization',
            title: 'Accesibilidad Avanzada & Internacionalización (i18n)',
            description: 'WCAG 2.2 AAA, testing automatizado + manual, RTL, formatting APIs, routing i18n y estrategia de traducción continua.',
            estimatedHours: 10,
            difficulty: 'Avanzado',
            icon: 'Globe',
            topics: ['WCAG 2.2: Nuevos Criterios (Focus Appearance, Dragging)', 'Testing: axe-core, Lighthouse CI, Manual Audit Checklist', 'RTL Support: Logical Properties, dir=auto, CSS Logical', 'Intl API: DateTimeFormat, NumberFormat, RelativeTimeFormat', 'Next.js i18n: Routing, Middleware, Dictionaries, Pluralización', 'Translation Management: Crowdin/Lokalise + CI Pipeline']
          }
        ]
      }
    ]
  },
  {
    id: 'esc-dev',
    code: 'ESC-01',
    romanNumeral: 'I',
    name: 'Desarrollo de Software',
    latinMotto: 'Codex et Logica',
    description: 'Desarrollo de software integral: algoritmos, estructuras de datos, programación orientada a objetos, arquitecturas web modernas, frontend y backend.',
    icon: 'Code',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Algoritmos & Estructuras', 'Frontend & React', 'Backend & Node.js', 'Clean Code'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Software',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    stats: { coursesCount: 14, studentsCount: 34200, tracksCount: 13 },
    courses: [MOCK_MODULES[1]],
    categories: [
      {
        id: 'cat-comp-fund',
        title: 'Fundamentos de Computación',
        icon: 'Brain',
        description: 'Bases teóricas y conceptuales sobre arquitectura de computadores, lógica digital, memoria, sistemas operativos y redes de información.',
        courses: [MOCK_MODULES[1]],
        paths: [
          {
            id: 'path-comp-arch',
            title: 'Arquitectura de Computadores & Sistemas',
            description: 'Funcionamiento interno de CPUs, jerarquía de memoria caché, arquitectura Von Neumann y ciclo de instrucción.',
            estimatedHours: 12,
            difficulty: 'Principiante',
            icon: 'Cpu',
            topics: ['CPUs & Registros', 'Gestión de Memoria', 'Ciclo de Instrucción', 'Sistemas de Archivos']
          },
          {
            id: 'path-logic',
            title: 'Lógica Digital & Álgebra Booleana',
            description: 'Sistemas numéricos binario/hexadecimal, compuertas lógicas, mapas de Karnaugh y álgebra de Boole.',
            estimatedHours: 10,
            difficulty: 'Principiante',
            icon: 'Binary',
            topics: ['Compuertas Lógicas', 'Sistemas Numéricos', 'Álgebra de Boole', 'Circuitos Combinacionales']
          }
        ]
      },
      {
        id: 'cat-prog-fund',
        title: 'Fundamentos de Programación',
        icon: 'Code',
        description: 'Dominio práctico y especializado estructurado en 13 rutas de aprendizaje técnico de alto impacto.',
        paths: [
          {
            id: 'path-frontend',
            title: 'Ruta Frontend',
            description: 'Interfaces web modernas de alta velocidad: HTML5 semántico, CSS3/Tailwind, JavaScript ES6+, TypeScript, React y Next.js App Router.',
            estimatedHours: 45,
            difficulty: 'Intermedio',
            icon: 'Layout',
            topics: ['HTML5 & CSS3', 'JavaScript ES6+ & TypeScript', 'React & Next.js', 'Web Performance & Accessibility']
          },
          {
            id: 'path-backend',
            title: 'Ruta Backend',
            description: 'Desarrollo de servidores resilientes: Node.js, Express, NestJS, Python/FastAPI, autenticación JWT, ORMs y microservicios.',
            estimatedHours: 50,
            difficulty: 'Avanzado',
            icon: 'Server',
            topics: ['Node.js & NestJS', 'Python & FastAPI', 'Autenticación & JWT', 'Microservicios']
          },
          {
            id: 'path-fullstack',
            title: 'Ruta Full Stack',
            description: 'Integración end-to-end de cliente y servidor: Server-Side Rendering (SSR), APIs RESTful/GraphQL y persistencia de datos.',
            estimatedHours: 60,
            difficulty: 'Avanzado',
            icon: 'Layers',
            topics: ['Arquitectura Full Stack', 'Next.js Server Actions', 'GraphQL & REST', 'Deploy & Monitoreo']
          },
          {
            id: 'path-mobile',
            title: 'Ruta Mobile',
            description: 'Aplicaciones móviles nativas y multiplataforma con React Native, Flutter, Swift para iOS y Kotlin para Android.',
            estimatedHours: 40,
            difficulty: 'Intermedio',
            icon: 'Smartphone',
            topics: ['React Native & Expo', 'Flutter & Dart', 'iOS (Swift)', 'Android (Kotlin)']
          },
          {
            id: 'path-desktop',
            title: 'Ruta Desktop',
            description: 'Creación de software de escritorio multiplataforma con Electron, Tauri, C#/.NET y bibliotecas nativas del sistema operativo.',
            estimatedHours: 35,
            difficulty: 'Intermedio',
            icon: 'Monitor',
            topics: ['Electron & Node', 'Tauri & Rust', 'C# & .NET Desktop', 'Integración OS Native']
          },
          {
            id: 'path-apis',
            title: 'Ruta APIs',
            description: 'Diseño e implementación de interfaces de programación: RESTful, GraphQL, gRPC, especificación OpenAPI y gateways de producción.',
            estimatedHours: 30,
            difficulty: 'Avanzado',
            icon: 'Globe',
            topics: ['Diseño RESTful', 'GraphQL Schemas', 'gRPC & Protobuf', 'API Gateways & Rate Limiting']
          },
          {
            id: 'path-arch',
            title: 'Ruta Arquitectura',
            description: 'Principios SOLID, Clean Architecture, Domain-Driven Design (DDD), patrones de diseño GOF y diseño de sistemas distribuidos.',
            estimatedHours: 55,
            difficulty: 'Ejecutivo',
            icon: 'Cpu',
            topics: ['Principios SOLID', 'Clean Architecture & DDD', 'Patrones de Diseño', 'Sistemas Distribuidos']
          },
          {
            id: 'path-devops',
            title: 'Ruta DevOps',
            description: 'Automatización e integración continua: CI/CD con GitHub Actions, contenedores Docker, orquestación en Kubernetes e IaC con Terraform.',
            estimatedHours: 45,
            difficulty: 'Avanzado',
            icon: 'Terminal',
            topics: ['Docker & Contenedores', 'Kubernetes Cluster Ops', 'CI/CD Pipelines', 'Terraform & IaC']
          },
          {
            id: 'path-cloud',
            title: 'Ruta Cloud',
            description: 'Computación en la nube empresarial: infraestructura en AWS, Google Cloud y Azure, arquitecturas Serverless y VPCs seguras.',
            estimatedHours: 50,
            difficulty: 'Avanzado',
            icon: 'Cloud',
            topics: ['AWS & GCP Architecture', 'Serverless Functions', 'VPCs & Cloud Security', 'Storage & Caching']
          },
          {
            id: 'path-testing',
            title: 'Ruta Testing',
            description: 'Aseguramiento de calidad de software: pruebas unitarias (Jest/Vitest), TDD, pruebas de integración y E2E automatizado con Cypress y Playwright.',
            estimatedHours: 30,
            difficulty: 'Intermedio',
            icon: 'CheckCircle2',
            topics: ['Jest & Vitest', 'TDD (Test-Driven Dev)', 'Integration Testing', 'E2E con Playwright']
          },
          {
            id: 'path-databases',
            title: 'Ruta Bases de Datos',
            description: 'Gestión y diseño de almacenamiento: SQL avanzado con PostgreSQL, NoSQL con MongoDB, modelos relacionales, indexación y Redis Caching.',
            estimatedHours: 40,
            difficulty: 'Intermedio',
            icon: 'Database',
            topics: ['PostgreSQL & SQL Avanzado', 'MongoDB & NoSQL', 'Indexación & Tuning', 'Redis & Caching']
          },
          {
            id: 'path-blockchain',
            title: 'Ruta Blockchain',
            description: 'Desarrollo descentralizado Web3: programación de Smart Contracts con Solidity, Ethereum Virtual Machine (EVM), Hardhat y dApps.',
            estimatedHours: 45,
            difficulty: 'Avanzado',
            icon: 'Link',
            topics: ['Solidity & EVM', 'Smart Contracts', 'Web3.js & Ethers.js', 'DeFi & dApps']
          },
          {
            id: 'path-swe',
            title: 'Ruta Ingeniería de Software',
            description: 'Gestión del ciclo de vida del software: metodologías Agile/Scrum, estimación de proyectos, Code Reviews, refactorización y deuda técnica.',
            estimatedHours: 35,
            difficulty: 'Ejecutivo',
            icon: 'Compass',
            topics: ['Agile & Scrum Ops', 'Code Review Best Practices', 'Refactorización & Deuda Técnica', 'Gestión de Proyectos']
          }
        ]
      }
    ]
  },
  {
    id: 'esc-ia',
    code: 'ESC-02',
    romanNumeral: 'II',
    name: 'Inteligencia Artificial',
    latinMotto: 'Intelligentia et Futurum',
    description: 'Modelos de lenguaje (LLMs), aprendizaje profundo, procesamiento de lenguaje natural, arquitectura RAG en VPC privada y agentes autónomos.',
    icon: 'Sparkles',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Machine & Deep Learning', 'Modelos LLM & RAG', 'PyTorch & TensorFlow', 'Agentes Autónomos'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de IA',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    },
    stats: { coursesCount: 10, studentsCount: 28900, tracksCount: 3 },
    courses: [MOCK_MODULES[0]],
  },
  {
    id: 'esc-cloud',
    code: 'ESC-03',
    romanNumeral: 'III',
    name: 'Cloud & DevOps',
    latinMotto: 'Nubium et Systemata',
    description: 'Infraestructura en la nube de alta disponibilidad: administración en AWS/GCP, contenedores Docker, Kubernetes e IaC con Terraform.',
    icon: 'Cloud',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['AWS & Google Cloud', 'Docker & Kubernetes', 'Infrastructure as Code', 'CI/CD Pipelines'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección Cloud',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    stats: { coursesCount: 8, studentsCount: 19800, tracksCount: 3 },
    courses: [MOCK_MODULES[1]],
  },
  {
    id: 'esc-sec',
    code: 'ESC-04',
    romanNumeral: 'IV',
    name: 'Ciberseguridad',
    latinMotto: 'Custodia et Defensio',
    description: 'Protección de datos e infraestructura: pruebas de penetración, análisis de vulnerabilidades, arquitectura Zero Trust y respuesta a incidentes.',
    icon: 'ShieldCheck',
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Hacking Ético & PenTest', 'OWASP Top 10', 'Zero Trust Architecture', 'Criptografía Aplicada'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Ciberseguridad',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    stats: { coursesCount: 6, studentsCount: 16400, tracksCount: 2 },
    courses: [MOCK_MODULES[1]],
  },
  {
    id: 'esc-db',
    code: 'ESC-05',
    romanNumeral: 'V',
    name: 'Bases de Datos',
    latinMotto: 'Data et Structura',
    description: 'Diseño y optimización de bases de datos relacionales y NoSQL: PostgreSQL, MongoDB, modelado relacional, indexación y escalabilidad.',
    icon: 'Database',
    coverImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['PostgreSQL & SQL', 'MongoDB & NoSQL', 'Query Optimization', 'Data Replication'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Datos',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    stats: { coursesCount: 7, studentsCount: 18200, tracksCount: 2 },
    courses: [MOCK_MODULES[1]],
  },
  {
    id: 'esc-net',
    code: 'ESC-06',
    romanNumeral: 'VI',
    name: 'Redes',
    latinMotto: 'Nodus et Nexus',
    description: 'Ingeniería de redes de computadoras: protocolos TCP/IP, enrutamiento, conmutación, redes definidas por software (SDN) y seguridad de red.',
    icon: 'Network',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Protocolos TCP/IP', 'Routing & Switching', 'Firewalls & VPNs', 'Redes SDN'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Redes',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    stats: { coursesCount: 5, studentsCount: 12900, tracksCount: 2 },
    courses: [MOCK_MODULES[1]],
  },
  {
    id: 'esc-mob',
    code: 'ESC-07',
    romanNumeral: 'VII',
    name: 'Desarrollo Móvil',
    latinMotto: 'Mobilis et Fabrica',
    description: 'Desarrollo de aplicaciones nativas y multiplataforma para iOS y Android utilizando React Native, Flutter, Swift y Kotlin.',
    icon: 'Smartphone',
    coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['React Native & Flutter', 'Swift (iOS)', 'Kotlin (Android)', 'Mobile UI & APIs'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección Móvil',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    },
    stats: { coursesCount: 9, studentsCount: 22100, tracksCount: 3 },
    courses: [MOCK_MODULES[1]],
  },
  {
    id: 'esc-game',
    code: 'ESC-08',
    romanNumeral: 'VIII',
    name: 'Desarrollo de Videojuegos',
    latinMotto: 'Ludus et Creatio',
    description: 'Programación de videojuegos 2D y 3D, desarrollo en Unreal Engine y Unity, física interactiva, inteligencia artificial para NPCs y diseño de niveles.',
    icon: 'Gamepad2',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Unity & C#', 'Unreal Engine & C++', 'Física 3D', 'NPC AI & Level Design'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Videojuegos',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    stats: { coursesCount: 6, studentsCount: 15300, tracksCount: 2 },
    courses: [MOCK_MODULES[2]],
  },
  {
    id: 'esc-des',
    code: 'ESC-09',
    romanNumeral: 'IX',
    name: 'Diseño Digital',
    latinMotto: 'Forma et Experientia',
    description: 'Diseño de productos digitales, interfaz de usuario (UI), experiencia de usuario (UX), Design Systems en Figma e ilustración vectorizada.',
    icon: 'Palette',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Design Systems', 'Figma Prototyping', 'Investigación UX', 'Branding Digital'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Diseño',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    },
    stats: { coursesCount: 10, studentsCount: 24800, tracksCount: 3 },
    courses: [MOCK_MODULES[2]],
  },
  {
    id: 'esc-ds',
    code: 'ESC-10',
    romanNumeral: 'X',
    name: 'Ciencia de Datos',
    latinMotto: 'Data et Veritas',
    description: 'Análisis estadístico exploratorio, procesamiento masivo de datos con Python y SQL, ingeniería de características y modelos predictivos.',
    icon: 'BarChart3',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Python & Pandas', 'SQL Avanzado', 'Estadística Inferencial', 'Visualización de Datos'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Ciencia de Datos',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    },
    stats: { coursesCount: 9, studentsCount: 27100, tracksCount: 3 },
    courses: [MOCK_MODULES[0]],
  },
  {
    id: 'esc-mkt',
    code: 'ESC-11',
    romanNumeral: 'XI',
    name: 'Marketing',
    latinMotto: 'Mensura et Incrementum',
    description: 'Estrategias de adquisición de usuarios, Growth Marketing, analítica cuantitativa, optimización de embudos de conversión y campañas digital performance.',
    icon: 'TrendingUp',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Growth Marketing', 'Ratio LTV:CAC', 'Analítica de Conversión', 'Performance B2B'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Marketing',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    stats: { coursesCount: 8, studentsCount: 21400, tracksCount: 2 },
    courses: [MOCK_MODULES[3]],
  },
  {
    id: 'esc-fin',
    code: 'ESC-12',
    romanNumeral: 'XII',
    name: 'Finanzas',
    latinMotto: 'Valor et Aequitas',
    description: 'Modelos financieros corporativos, valoración de empresas tecnológicas, inversión en mercados globales, análisis econométrico y presupuestos.',
    icon: 'DollarSign',
    coverImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Modelación Financiera', 'Finanzas Corporativas', 'Venture Capital', 'Análisis de Riesgo'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección Financiera',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    stats: { coursesCount: 7, studentsCount: 16800, tracksCount: 2 },
    courses: [MOCK_MODULES[3]],
  },
  {
    id: 'esc-emp',
    code: 'ESC-13',
    romanNumeral: 'XIII',
    name: 'Emprendimiento',
    latinMotto: 'Origo et Innovatio',
    description: 'Creación y escalamiento de startups: diseño de modelos de negocio, validación de MVP, estrategia de go-to-market y levantamiento de capital.',
    icon: 'Rocket',
    coverImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Validación de MVP', 'Modelos de Negocio', 'Pitch Decks & Fundraising', 'Go-To-Market'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Emprendimiento',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    stats: { coursesCount: 7, studentsCount: 22600, tracksCount: 3 },
    courses: [MOCK_MODULES[3]],
  },
  {
    id: 'esc-pm',
    code: 'ESC-14',
    romanNumeral: 'XIV',
    name: 'Gestión de Producto',
    latinMotto: 'Productus et Visio',
    description: 'Dirección estratégica de producto (Product Management): descubrimiento continuo, definición de roadmap, investigación cuantitativa y OKRs.',
    icon: 'Layers',
    coverImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Product Discovery', 'Roadmaps & OKRs', 'Investigación de Usuarios', 'Métricas de Producto'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Producto',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    },
    stats: { coursesCount: 6, studentsCount: 17400, tracksCount: 2 },
    courses: [MOCK_MODULES[4]],
  },
  {
    id: 'esc-ofi',
    code: 'ESC-15',
    romanNumeral: 'XV',
    name: 'Ofimática',
    latinMotto: 'Ordo et Efficiencia',
    description: 'Dominio de herramientas de procesamiento de datos, automatización de documentos corporativos, tablas dinámicas avanzadas y macros.',
    icon: 'FileText',
    coverImage: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Excel Avanzado & Macros', 'Documentos Ejecutivos', 'Presentaciones de Impacto', 'Gestión de Hojas de Cálculo'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Ofimática',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    },
    stats: { coursesCount: 8, studentsCount: 26400, tracksCount: 2 },
    courses: [MOCK_MODULES[4]],
  },
  {
    id: 'esc-lang',
    code: 'ESC-16',
    romanNumeral: 'XVI',
    name: 'Idiomas',
    latinMotto: 'Lingua et Cultura',
    description: 'Dominio comunicativo global: inglés profesional y técnico para negocios, francés ejecutivo, alemán institucional e interpretación.',
    icon: 'Languages',
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Inglés Técnico B2B', 'Francés Ejecutivo', 'Comunicación Global', 'Gramática Avanzada'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Idiomas',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    },
    stats: { coursesCount: 11, studentsCount: 31200, tracksCount: 3 },
    courses: [MOCK_MODULES[4]],
  },
  {
    id: 'esc-prod',
    code: 'ESC-17',
    romanNumeral: 'XVII',
    name: 'Productividad',
    latinMotto: 'Tempus et Agilitas',
    description: 'Metodologías ágiles, sistemas de gestión del tiempo (GTD), organización de flujos de trabajo, automatización No-Code y enfoque mental.',
    icon: 'Zap',
    coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80',
    keyCompetencies: ['Metodologías Ágiles', 'Gestión del Tiempo', 'Automatizaciones No-Code', 'Sistemas Notion & GTD'],
    dean: {
      name: 'Sistema Alejandría',
      role: 'Dirección de Productividad',
      organization: 'Sistema Alejandría',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    stats: { coursesCount: 6, studentsCount: 19800, tracksCount: 2 },
    courses: [MOCK_MODULES[4]],
  }
];

export const ACADEMIES = SCHOOLS;

