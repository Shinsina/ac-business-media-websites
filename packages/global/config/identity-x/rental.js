const formDefault = require('@ac-business-media/package-global/config/identity-x/default');

const form = {
  title: 'Rental Content Form',
  anonymousCta: 'Register to access this Rental piece of content',
  authenticatedCta: 'Fill out to access this Rental piece of content.',
  fieldRows: [
    // spread default form and add to it.
    ...formDefault.fieldRows,
  ],
};
form.fieldRows.push(
  [
    {
      label: 'Job Title',
      id: '664b66b5a370d8a8013ab885',
      type: 'custom-select',
      required: true,
      width: 0.5,
    },
    {
      label: 'Primary Business',
      id: '664b6576eab51a8a95d9d881',
      type: 'custom-select',
      required: true,
      width: 0.5,
    },
  ],
);

module.exports = form;
