import broadbandInBasra from '../../components/cases/broadbandInBasra';
import laraguayAssistance from '../../components/cases/laraguayAssistance';
import caseTwo from '../../components/cases/slumpingToothpaste';

/* Company Thumbnail Images */
import bcgImgSrc from '../../assets/images/company-logos/bcg/bcg-logo.png';
import mckImgSrc from '../../assets/images/company-logos/mck/mck-logo.png';


export default [
  {
    name: 'Slumping Toothpaste Sales',
    sku: 'toothpaste_case_purchase',
    company: 'Boston Consulting Group',
    locked: false,
    thumbnail: bcgImgSrc,
    pages: caseTwo,
  },
  {
    name: 'Broadband in Basra',
    sku: 'broadband_case_purchase',
    company: 'Boston Consulting Group',
    locked: false,
    thumbnail: bcgImgSrc,
    pages: broadbandInBasra,
  },
  {
    name: 'Strengthening Disability Assistance',
    sku: 'laraguay_case_purchase',
    company: 'McKinsey & Company',
    locked: true,
    thumbnail: mckImgSrc,
    pages: laraguayAssistance,
  },
];

