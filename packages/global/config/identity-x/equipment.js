const formDefault = require('@ac-business-media/package-global/config/identity-x/default');

const form = {
  title: 'Equipment Content Form',
  anonymousCta: 'Register to access this Equipment piece of content',
  authenticatedCta: 'Fill out to access this Equipment piece of content.',
  fieldRows: [
    // spread default form and add to it.
    ...formDefault.fieldRows,
  ],
};
form.fieldRows.push(
  [
    {
      label: 'Job Title',
      id: '664b5f1cafb6137ba8469acc',
      type: 'custom-select',
      required: true,
      width: 0.5,
    },
    {
      label: 'Primary Business',
      id: '664b5d760635bea8c46106f0',
      type: 'custom-select',
      required: true,
      width: 0.5,
    },
  ],
);

module.exports = form;
