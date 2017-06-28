import broadbandInBasra from '../../components/cases/broadbandInBasra';
import laraguayAssistance from '../../components/cases/laraguayAssistance';
import caseTwo from '../../components/cases/slumpingToothpaste';

/* Company Thumbnail Images */
import bcgImgSrc from '../../assets/images/company-logos/bcg/bcg-logo.png';
import mckImgSrc from '../../assets/images/company-logos/mck/mck-logo.png';


export default [
  {
    name: 'Slumping Toothpaste Sales',
    sku: 'slumping_toothpaste_sales',
    company: 'Boston Consulting Group',
    locked: false,
    thumbnail: bcgImgSrc,
    pages: caseTwo,
  },
  {
    name: 'Broadband in Basra',
    sku: 'broadband_in_basra',
    company: 'Boston Consulting Group',
    locked: false,
    thumbnail: bcgImgSrc,
    pages: broadbandInBasra,
  },
  {
    name: 'Strengthening Disability Assistance in Laraguay',
    sku: 'strengthening_disability_assistance',
    company: 'McKinsey & Company',
    locked: true,
    thumbnail: mckImgSrc,
    pages: laraguayAssistance,
  },
];

