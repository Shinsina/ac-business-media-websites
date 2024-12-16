const title = 'Skid Steer Spec Guide';

module.exports = {
  title,
  description: `The <strong><em>Equipment Today ${title}</em></strong> is the industry’s first online, interactive spec’ing tool custom-built for construction equipment owners to find exactly which skid-steer loader they need for their equipment fleets.`,
  bullets: [
    'Entering specific search criteria (Model, Engine HP, Rated Operating Capacity, etc.)',
    'Sorting the information by any column to order the information the way you need it',
  ],
  seeAlso: '<p>Also check out the interactive <a href="/specguide/excavator"><strong><u>Excavator Spec Guide</u></strong></a>, and the components that go into your equipment using the <a href="https://www.oemoffhighway.com/specguide" target="_blank" rel="nofollow"><strong><u>OEM Off-Highway Spec Guides</u></strong></a>.</p>',
  image: {
    src: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/skidsteerlarge.jpg',
  },
  downloadLink: '/21563130',
  sheetSrc: 'https://content-sheets.googleapis.com/v4/spreadsheets/12TC912nI227058ho8_zrLwYYzp7P2T7zZDCXO0ZTSZw/values/Sheet1',
  columns: {
    manufacturer: {
      label: 'Manufacturer',
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
    ratedoperatingcapacitylbs: {
      label: 'Rated Operating Capacity (lbs.)',
      type: 'number',
    },
    breakoutforcelbs: {
      label: 'Breakout Force (lbs.)',
      type: 'number',
    },
    heighttohingepinin: {
      label: 'Height to Hing Pin (in.)',
      type: 'number',
    },
    standardhydraulicflowgpm: {
      label: 'Standard Hydraulic Flow (gpm)',
      type: 'number',
    },
    verticalvorradialrlift: {
      label: 'Vertical (V) or Radial (R) Lift',
    },
  },
};
