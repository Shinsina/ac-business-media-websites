const formDefault = require('@ac-business-media/package-global/config/identity-x/default');

const form = {
  title: 'Concrete Content Form',
  anonymousCta: 'Register to access this Concrete piece of content',
  authenticatedCta: 'Fill out to access this Concrete piece of content.',
  fieldRows: [
    // spread default form and add to it.
    ...formDefault.fieldRows,
  ],
};

form.fieldRows.push(
  [
    {
      label: 'Job Title',
      id: '664370dc0635be5a37ae38f5',
      type: 'custom-select',
      required: true,
      width: 0.5,
    },
    {
      label: 'Primary Business',
      id: '66437775eab51a24312718de',
      type: 'custom-select',
      required: true,
      width: 0.5,
    },
  ],
);

module.exports = form;
