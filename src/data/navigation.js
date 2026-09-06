export const navLinks = [
  { name: 'Home', path: 'home' },
  { name: 'About Us', path: 'about' },
  {
    name: 'Services',
    path: 'services',
    isDropdown: true,
    children: [
      {
        name: 'Asset Management',
        path: 'asset-management',
        description: 'Comprehensive management of solar assets, including performance monitoring, operational oversight, and reporting.',
        icon: 'Activity'
      },
      {
        name: 'Rooftop CAPEX',
        path: 'rooftop-capex',
        description: 'End to end EPC services for commercial and industrial rooftop solar installations.',
        icon: 'Sun'
      },
      {
        name: 'Rooftop OPEX',
        path: 'rooftop-opex',
        description: 'Zero investment solar power solutions enabling businesses to adopt renewable energy with predictable electricity costs.',
        icon: 'Zap'
      },
      {
        name: 'Battery Energy Storage Systems',
        path: 'bess',
        description: 'Energy storage solutions supporting renewable integration and grid reliability.',
        icon: 'BatteryCharging'
      }
    ]
  },
  { name: 'Projects / Portfolio', path: 'projects' },
  { name: 'Procurement', path: 'procurement' },
  { name: 'CSR', path: 'csr' },
  { name: 'Job Openings', path: 'careers' },
  { name: 'Contact Us', path: 'contact' },
];

export const contactInfo = {
  phone: '+91 XXXXX XXXXX',
  phoneDisplay: '+91 XXXXX XXXXX',
  email: 'info@volgasolar.com',
  companyName: 'Volga Solar Solutions',
};

export const footerLinks = {
  company: [
    { name: 'Home', path: 'home' },
    { name: 'About Us', path: 'about' },
    { name: 'Projects / Portfolio', path: 'projects' },
    { name: 'Job Openings', path: 'careers' },
    { name: 'CSR', path: 'csr' },
    { name: 'Contact Us', path: 'contact' },
  ],
  services: [
    { name: 'Asset Management', path: 'asset-management' },
    { name: 'Rooftop Solar CAPEX', path: 'rooftop-capex' },
    { name: 'Rooftop Solar OPEX', path: 'rooftop-opex' },
    { name: 'Battery Energy Storage Systems (BESS)', path: 'bess' },
    { name: 'Procurement', path: 'procurement' },
  ],
};

