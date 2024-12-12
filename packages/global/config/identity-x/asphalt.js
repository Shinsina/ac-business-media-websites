const formDefault = require('@ac-business-media/package-global/config/identity-x/default');

const form = {
  title: 'Asphalt Content Form',
  anonymousCta: 'Register to access this Asphalt piece of content',
  authenticatedCta: 'Fill out to access this Asphalt piece of content.',
  fieldRows: [
    // spread default form and add to it.
    ...formDefault.fieldRows,
  ],
};
form.fieldRows.push(
  [
    {
      label: 'Job Title',
      id: '66436fceafb6131c4a841f26',
      type: 'custom-select',
      required: true,
      width: 0.5,
    },
    {
      label: 'Primary Business',
      id: '66437894235da5b2358f59e9',
      type: 'custom-select',
      required: true,
      width: 0.5,
    },
  ],
);

module.exports = form;
