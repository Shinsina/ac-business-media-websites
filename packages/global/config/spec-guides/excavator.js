const title = 'Excavator Spec Guide';

module.exports = {
  title,
  description: `The <strong><em>Equipment Today ${title}</em></strong> is the industry’s first online, interactive spec’ing tool custom-built for construction equipment owners to find exactly which excavator they need for their equipment fleets.`,
  bullets: [
    'Entering specific search criteria (Model, Engine HP, Operating Weight, etc.)',
    'Sorting the information by any column to order the information the way you need it',
  ],
  seeAlso: '<p>To learn about the components that go into your equipment, also visit the <a href="https://www.oemoffhighway.com/specguide" target="_blank" rel="nofollow"><strong><u>OEM Off-Highway Spec Guides</u></strong></a>.</p>',
  image: {
    src: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/excavator.jpg',
  },
  downloadLink: '/22916349',
  sheetSrc: 'https://content-sheets.googleapis.com/v4/spreadsheets/1LYU3btf5iNzaBdONjMvZmK7KiEDxSUofUR6fvJGxU2Q/values/Excavator-2016',
  columns: {
    company: {
      label: 'Company',
    },
    model: {
      label: 'Model No.',
    },
    hpnet: {
      label: 'HP (net)',
      type: 'number',
    },
    operatingweight: {
      label: 'Operating Weight (lbs.)',
      type: 'number',
      range: ['operatingweightlbslow', 'operatingweightlbshigh'],
    },
    standardBucketCapacity: {
      label: 'Standard Bucket Capacity (yd³)',
      type: 'number',
      range: ['stdbucketcapacitycuydslow', 'stdbucketcapacitycuydshigh'],
    },
    breakoutforcelbs: {
      label: 'Breakout Force (lbs.)',
      type: 'number',
    },
    maxdigdepthdisplay: {
      label: 'Max Dig Depth (ft. in.)',
    },
    maxreachatgradegroundleveldisplay: {
      label: 'Max Reach at Ground Level\n(ft. in)',
    },
    tracktwheelw: {
      label: 'Track (T) / Wheeled (W)',
    },
    link: {
      label: 'Link',
      hidden: true,
    },
    featured: {
      label: 'Featured',
      hidden: true,
    },
  },
};
