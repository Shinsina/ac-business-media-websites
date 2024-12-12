const formDefault = require('./default');

const form = {
  title: 'Pavement Content Form',
  anonymousCta: 'Register to access this Pavement piece of content',
  authenticatedCta: 'Fill out to access this Pavement piece of content.',
  fieldRows: [
    // spread default form and add to it.
    ...formDefault.fieldRows,
  ],
};
form.fieldRows.push(
  [
    {
      label: 'Job Title',
      id: '664b630aeab51a9936d99d59',
      type: 'custom-select',
      required: true,
      width: 0.5,
    },
    {
      label: 'Primary Business',
      id: '664b61a70635be184a616332',
      type: 'custom-select',
      required: true,
      width: 0.5,
    },
  ],
);

module.exports = form;
