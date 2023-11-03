// FooterData.tsx

/**
 * This structure defines the mock data for the footer
 */
interface FooterSection {
    title: string;
    content: string[];
  }
  
  /**
   * This variable is used to define the footeer data as it contains the arrays of the data
   */
  const FooterData: FooterSection[] = [
    {
      title: 'Head Quarters',
      content: [
        'The Promenade, 19 General',
        'Mathenge Rd',
        'Nairobi, Kenya',
      ],
    },
    {
      title: 'Contacts',
      content: [
        'T +254 78 92 27 755',
        'E info@elewa.ke',
      ],
    },
    {
      title: 'Navigation',
      content: [
        'About us',
        'Social impact',
        'Invest',
        'News',
        'Contact',
      ],
    },
    {
      title: 'Brands',
      content: [
        'Elewa',
        'Italanta',
        'Venture labs',
      ],
    },
    {
      title: 'Privacy',
      content: [
        'Terms and conditions',
        'Cookie preferences',
      ],
    },
  ];
  
  
  export default FooterData;
  