export const homeServices = [
  {
    id: 'asset-management',
    title: 'Solar Asset Management',
    shortDesc: 'Comprehensive operational, technical, and commercial stewardship to maximize power output and preserve asset longevity.',
    icon: 'Activity',
    link: 'asset-management',
    stats: '1.8 GW+ Monitored',
    image: '/images/solar-asset-inspection.jpg',
    tags: ['Q&M Analytics', 'Yield Optimization', 'Contract Stewardship']
  },
  {
    id: 'rooftop-solutions',
    title: 'Rooftop Solar Solutions',
    shortDesc: 'Turnkey industrial and commercial rooftop deployments engineered for rapid payback and maximum generation density.',
    icon: 'Sun',
    link: 'rooftop-capex',
    stats: '450+ MW Installed',
    image: '/images/rooftop-capex.jpg',
    tags: ['CAPEX Model', 'OPEX / PPA', 'C&I Facilities']
  },
  {
    id: 'bess',
    title: 'Battery Energy Storage Systems',
    shortDesc: 'Utility-scale and behind-the-meter containerized BESS delivering peak shaving, frequency response, and 24/7 resilience.',
    icon: 'BatteryCharging',
    link: 'bess',
    stats: '250 MWh Engineered',
    image: '/images/bess-storage.jpg',
    tags: ['Grid Firming', 'Peak Shaving', 'Microgrids']
  },
  {
    id: 'procurement',
    title: 'Renewable Energy Procurement',
    shortDesc: 'Global Tier-1 procurement and equipment quality benchmarking ensuring bankable components across the project lifecycle.',
    icon: 'ShieldCheck',
    link: 'procurement',
    stats: '100% Tier-1 Certified',
    image: '/images/solar-procurement.jpg',
    tags: ['Direct Sourcing', 'Stringent QA/QC', 'Bespoke Logistics']
  }
];

export const assetManagementDetails = {
  technical: [
    {
      title: 'Performance Monitoring & Analytics',
      desc: 'Real-time telemetry and SCADA integration tracking PR (Performance Ratio), CUF, string current anomalies, and soiling indices.',
      icon: 'Gauge'
    },
    {
      title: 'Preventive & Corrective Maintenance',
      desc: 'Scheduled thermography, IV curve tracing, torque audits, and rapid SLA-bound corrective dispatch teams.',
      icon: 'Wrench'
    },
    {
      title: 'Vendor & Contractor Management',
      desc: 'Warranty claim enforcement, Tier-1 OEM service management, and rigorous contractor compliance oversight.',
      icon: 'Users'
    },
    {
      title: 'Plant Performance Benchmarking',
      desc: 'Cross-portfolio comparative benchmarking against irradiation data, weather forecasts, and historical generation curves.',
      icon: 'BarChart3'
    }
  ],
  commercial: [
    {
      title: 'Energy Generation Verification',
      desc: 'Independent reconciliation of metered generation against statutory DISCOM transmission logs and open access meters.',
      icon: 'FileCheck2'
    },
    {
      title: 'Revenue Reconciliation',
      desc: 'PPA billing auditing, tariff indexing verification, late payment surcharge calculations, and off-taker billing compliance.',
      icon: 'Coins'
    },
    {
      title: 'Compliance & Regulatory Monitoring',
      desc: 'Continuous tracking of CEA guidelines, forecasting & scheduling (F&S) DSM regulations, and statutory filing norms.',
      icon: 'Scale'
    },
    {
      title: 'Stakeholder & Investor Reporting',
      desc: 'Bank-grade monthly, quarterly, and annual technical and financial performance dossiers tailored for lenders and equity sponsors.',
      icon: 'ClipboardList'
    }
  ],
  optimizationPoints: [
    {
      metric: '+4.8%',
      label: 'Average Generation Uplift',
      desc: 'Achieved through predictive soiling schedules and automated MPPT algorithm recalibration.'
    },
    {
      metric: '99.4%',
      label: 'Plant Availability Index',
      desc: 'Maintained across all managed assets with proactive component health surveillance.'
    },
    {
      metric: '< 2 Hrs',
      label: 'Mean Critical Response Time',
      desc: 'Guaranteed resolution dispatch through our central operations command centre.'
    }
  ]
};

export const capexEPCSteps = [
  {
    step: '01',
    title: 'Site Assessment & Feasibility',
    desc: '3D shadow analysis, structural load testing, wind speed compliance, and localized solar irradiance modeling.'
  },
  {
    step: '02',
    title: 'System Design & Engineering',
    desc: 'BIM-guided layout, string matching, cable sizing, and lightning protection systems engineered to global IEC benchmarks.'
  },
  {
    step: '03',
    title: 'Procurement of Equipment',
    desc: 'Direct sourcing of Tier-1 bifacial modules, string/central inverters, and hot-dip galvanized mounting structures.'
  },
  {
    step: '04',
    title: 'Installation & Commissioning',
    desc: 'Execution by certified solar technicians, rigorous pre-commissioning flash tests, and cold/hot commissioning.'
  },
  {
    step: '05',
    title: 'Grid Connectivity & Approvals',
    desc: 'End-to-end statutory liaising, CEIG inspection clearance, net-metering approvals, and bi-directional meter synchronization.'
  }
];

export const opexSteps = [
  {
    step: '01',
    title: 'Design & Funded Installation',
    desc: 'Volga finances 100% of the project capital, engineering, and turnkey installation on your commercial or industrial rooftop.'
  },
  {
    step: '02',
    title: 'Volga Owns & Operates Asset',
    desc: 'Our certified engineering team handles continuous 25-year O&M, insurance, component replacements, and performance risks.'
  },
  {
    step: '03',
    title: 'Pay Only for Power Consumed',
    desc: 'You purchase the green solar kilowatt-hours produced at a pre-agreed tariff typically 25% to 45% below grid power rates.'
  }
];

export const bessApplications = [
  {
    title: 'Renewable Energy Integration',
    desc: 'Smooth out solar intermittency, curtailment mitigation, and firm solar output into predictable base-load power.',
    icon: 'Layers'
  },
  {
    title: 'Peak Load Management',
    desc: 'Discharge stored low-cost energy during premium tariff intervals to eliminate maximum demand charges.',
    icon: 'TrendingUp'
  },
  {
    title: 'Backup Power Solutions',
    desc: 'Seamless millisecond transfer during grid outages, replacing noisy diesel generators with zero-emission clean power.',
    icon: 'Shield'
  },
  {
    title: 'Grid Stabilization',
    desc: 'Provide primary frequency response, reactive power support (VAR support), and synthetic inertia to the transmission grid.',
    icon: 'Cpu'
  }
];

export const procurementCategories = [
  {
    name: 'Solar Photovoltaic Modules',
    spec: 'N-Type TOPCon & Heterojunction (HJT) bifacial modules with efficiencies exceeding 22.5% and low degradation warranties.',
    icon: 'Grid'
  },
  {
    name: 'Solar Grid-Tied Inverters',
    spec: 'Tier-1 string and central inverters with high MPPT efficiency, integrated PID recovery, and advanced AFCI fire protection.',
    icon: 'Zap'
  },
  {
    name: 'Module Mounting Structures',
    spec: 'High-yield pre-galvanized & hot-dip zinc-aluminum-magnesium (ZAM) coated steel with 25-year corrosion guarantees.',
    icon: 'Box'
  },
  {
    name: 'Electrical Balance of Systems (BOS)',
    spec: 'HT switchgear, solar DC/AC cables, dry-type step-up transformers, SCADA sensors, and class-1 surge protection.',
    icon: 'Sliders'
  },
  {
    name: 'Battery Energy Storage Systems',
    spec: 'UL9540A certified Lithium Iron Phosphate (LFP) rack-mounted enclosures, liquid thermal cooling, and advanced BMS.',
    icon: 'BatteryCharging'
  }
];
