const title = 'Backhoe-loader Spec Guide';

module.exports = {
  title,
  description: `The <strong><em>Equipment Today ${title}</em></strong> is the industry’s first online, interactive spec’ing tool custom-built for construction equipment owners to find exactly which backhoe-loader they need for their equipment fleets.`,
  bullets: [
    'Entering specific search criteria (Model, Engine HP, Operating Weight, etc.)',
    'Sorting the information by any column to order the information the way you need it',
  ],
  seeAlso: '<p>To learn about the components that go into your equipment, also visit the <a href="https://www.oemoffhighway.com/specguide" target="_blank" rel="nofollow"><strong><u>OEM Off-Highway Spec Guides</u></strong></a>.</p>',
  image: {
    src: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/backhoe.png',
  },
  downloadLink: '/21036185',
  sheetSrc: 'https://content-sheets.googleapis.com/v4/spreadsheets/1ylNVqjRuvRu9_JUgyOuWSPXeGn6FkIw7McjFdZzdv0M/values/Backhoe-2019',
  columns: {
    company: {
      label: 'Company',
    },
    modelno: {
      label: 'Model No.',
    },
    enginehpnet: {
      label: 'Engine HP (net)',
      type: 'number',
    },
    operatingweightlbs: {
      label: 'Operating Weight (lbs.)',
      type: 'number',
    },
    maxbackhoedigdepthdisplay: {
      label: 'Backhoe Dig Depth',
    },
    backhoebreakoutforcelbs: {
      label: 'Backhoe Breakout Force (lbs.)',
      type: 'number',
    },
    maxloaderbucketcapacitycuyds: {
      label: 'Loader Bucket Capacity (cu. yds.)',
      type: 'number',
    },
    loaderbreakoutforcelbs: {
      label: 'Loader Breakout Force (lbs.)',
      type: 'number',
    },
    stdhydraulicflowgpm: {
      label: 'Standard Hydraulic Flow (gpm.)',
      type: 'number',
    },
  },
};
