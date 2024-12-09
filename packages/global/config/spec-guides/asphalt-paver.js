module.exports = {
  title: 'Asphalt Paver Spec Guide',
  description: 'The <strong><em>Asphalt Paver Spec Guide</em></strong> is the industry’s first online, interactive spec’ing tool custom-built for construction equipment owners to find exactly which paver they need for their equipment fleets.',
  bullets: [
    'Entering specific search criteria (Manufacturer, Model No., Engine HP, etc.)',
    'Sorting the information by any column to order the information the way you need it',
  ],
  seeAlso: '<p>To learn about the components that go into your equipment, also visit the <strong><a href="https://www.oemoffhighway.com/specguide" target="_blank" rel="nofollow">OEM Off-Highway Spec Guides</a></strong>.</p>',
  image: {
    src: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/asphalt-paver.jpg',
  },
  downloadLink: '/22925388',
  sheetSrc: 'https://content-sheets.googleapis.com/v4/spreadsheets/1Lx2srmVT5OTFf9y1TZjpCRnYFGWNlDp7J_eDzznuL8M/values/Sheet1',
  columns: {
    manufacturer: {
      label: 'Manufacturer',
    },
    modelno: {
      label: 'Model No.',
    },
    undercarriagetype: {
      label: 'Undercarriage Type',
    },
    enginehpnet: {
      label: 'Engine HP',
      type: 'number',
    },
    shippingdimensionslxwxhft: {
      label: 'Shipping Dimensions (LxWxH) (ft.)',
    },
    maxoperatingweightlbs: {
      label: 'Max Operating Weight (lbs.)',
    },
    hoppercapacitytons: {
      label: 'Hopper Capacity (tons)',
      type: 'number',
    },
    standardPavingWidth: {
      label: 'Standard Paving Width (ft.)',
      range: ['standardpavingwidthftminimum', 'standardpavingwidthftmaximum'],
      type: 'number',
    },
    maxpavingspeedvibratoryscreed: {
      label: 'Max Paving Speed (Vibratory Screed)',
    },
    maxpavingspeedtamperbarscreed: {
      label: 'Max Paving Speed (Tamper Bar Screed)',
    },
    maxtravelspeedmph: {
      label: 'Max Travel Speed (mph)',
    },
  },
};
