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
        description: 'Maximizing plant generation and lifecycle yield for utility & C&I portfolios',
        icon: 'Activity'
      },
      {
        name: 'Rooftop CAPEX',
        path: 'rooftop-capex',
        description: 'Turnkey engineering, procurement, and construction for full asset ownership',
        icon: 'Sun'
      },
      {
        name: 'Rooftop OPEX',
        path: 'rooftop-opex',
        description: 'Zero upfront capital investment with immediate per-unit tariff savings',
        icon: 'Zap'
      },
      {
        name: 'Battery Energy Storage Systems',
        path: 'bess',
        description: 'Utility and industrial BESS for peak shifting and microgrid resilience',
        icon: 'BatteryCharging'
      }
    ]
  },
  { name: 'Projects', path: 'projects' },
  { name: 'Procurement', path: 'procurement' },
  { name: 'CSR', path: 'csr' },
  { name: 'Careers', path: 'careers' },
  { name: 'Contact', path: 'contact' },
];

export const contactInfo = {
  phone: '+91 98200 12345',
  phoneDisplay: '+91 98200 12345',
  email: 'info@volgasolar.com',
  corporateOffice: 'Level 14, Volga Tower, Bandra Kurla Complex (BKC), Mumbai - 400051, India',
  regionalOffice: 'Aerocity Hospitality District, New Delhi - 110037, India',
  hours: 'Mon - Fri: 9:00 AM - 6:30 PM IST'
};

export const footerLinks = {
  company: [
    { name: 'About Us', path: 'about' },
    { name: 'Our Projects', path: 'projects' },
    { name: 'Careers', path: 'careers' },
    { name: 'Our Approach', path: 'home#approach' },
  ],
  services: [
    { name: 'Solar Asset Management', path: 'asset-management' },
    { name: 'Rooftop Solar CAPEX', path: 'rooftop-capex' },
    { name: 'Rooftop Solar OPEX', path: 'rooftop-opex' },
    { name: 'Battery Storage (BESS)', path: 'bess' },
  ],
  companyInfo: [
    { name: 'Procurement & Vendors', path: 'procurement' },
    { name: 'Corporate Social Responsibility', path: 'csr' },
    { name: 'Contact Us', path: 'contact' },
    { name: 'Client Portal', path: 'contact' },
  ]
};
