module.exports = {
  engine: {
    title: '',
    image: '',
    pdfLink: '',
    measures: {
      metric: { label: 'Metric' },
      standard: { label: 'Standard' },
    },
    initialMeasureKey: 'metric',
    columns: {
      hp: {
        measure: 'standard',
        range: ['hp-low', 'hp-high'],
      },
      kw: {
        label: 'kW',
        measure: 'metric',
        range: ['kw-low', 'kw-high'],
      },
      fuel: {
        label: 'Fuel',
      },
    },
  },
};
