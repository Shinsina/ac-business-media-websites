const { get, getAsArray } = require('@mindful-web/object-path');

// ps short for Personas
const ps = [
  'FG - Operations - Convey Handling - Aeration Dry',
  'FG - Mfg Equip - Batching CRM Automation Software',
  'FG - Facility Design & Construction',
  'FG - Testing and Analysis',
  'FG - Feed Transportation Equipment',
];

const personasToRecommendContentSections = {
  'FG - Operations - Convey Handling - Aeration Dry': [115741],
  'FG - Mfg Equip - Batching CRM Automation Software': [115742],
  'FG - Facility Design & Construction': [115743],
  'FG - Testing and Analysis': [115744],
  'FG - Feed Transportation Equipment': [115745],
};

// IMPORTANT: Order matters here as this is used to retrieve keys!
const questionIds = [];
// const questionIds = ['643404c587747e1f4434a8c8', '6430a9a27694b7652a933308'];
/**
   * This is constructed as follows:
   * QuestionID1_QuestionID2
   * This makes it so if additional/subsequent question combinations are added
   * they can easily be added to provide additional personas.
   * Each key within QuestionID_QuestionID is constructed as follows:
   * AnswerIDForQuestionID1_AnswerIDFOrQuestionID2
   * This makes it so if additional/subsequent answer combinations are added
   * they can easily be added to provide additional personas.
   * NOTE: If an Answer ID pair/set is not listed it's because there were no personas mapped to it
   * this was opted to have the handler handle instances in which a pair/set is not found and return
   * an empty array
   */
const personasToAssign = {
  // Primary Business_Job Function
  '643404c587747e1f4434a8c8_6430a9a27694b7652a933308': {
    '643405a83e8177091cdc7f15_6430aa6653778299501b85c1': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e8177091cdc7f15_6430aa6653778251051b85c0': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e8177091cdc7f15_6430aa66537782178d1b85bf': [ps[1], ps[3]],
    '643405a83e8177091cdc7f15_6430aa665377823c961b85be': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e81777bd8dc7f14_6430aa6653778299501b85c1': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e81777bd8dc7f14_6430aa6653778251051b85c0': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e81777bd8dc7f14_6430aa66537782178d1b85bf': [ps[1], ps[3]],
    '643405a83e81777bd8dc7f14_6430aa665377823c961b85be': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e81773876dc7f16_6430aa6653778299501b85c1': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e81773876dc7f16_6430aa6653778251051b85c0': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e81773876dc7f16_6430aa66537782178d1b85bf': [ps[1], ps[3]],
    '643405a83e81773876dc7f16_6430aa665377823c961b85be': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e81770ec7dc7f0b_6430aa6653778299501b85c1': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e81770ec7dc7f0b_6430aa6653778251051b85c0': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e81770ec7dc7f0b_6430aa66537782178d1b85bf': [ps[1], ps[3]],
    '643405a83e81770ec7dc7f0b_6430aa665377823c961b85be': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e81772ceedc7f17_6430aa6653778299501b85c1': [ps[0], ps[2], ps[3], ps[4]],
    '643405a83e81772ceedc7f17_6430aa6653778251051b85c0': [ps[0], ps[2], ps[3], ps[4]],
    '643405a83e81772ceedc7f17_6430aa66537782178d1b85bf': [ps[3]],
    '643405a83e81772ceedc7f17_6430aa665377823c961b85be': [ps[0], ps[2], ps[3], ps[4]],
    '643405a83e81772253dc7f0a_6430aa6653778299501b85c1': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e81772253dc7f0a_6430aa6653778251051b85c0': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e81772253dc7f0a_6430aa66537782178d1b85bf': [ps[1], ps[3]],
    '643405a83e81772253dc7f0a_6430aa665377823c961b85be': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e81775863dc7f13_6430aa6653778299501b85c1': [ps[0], ps[1]],
    '643405a83e81775863dc7f13_6430aa6653778251051b85c0': [ps[0], ps[1]],
    '643405a83e81775863dc7f13_6430aa66537782178d1b85bf': [ps[1]],
    '643405a83e81775863dc7f13_6430aa665377823c961b85be': [ps[0], ps[1]],
    '643405a83e81775a33dc7f12_6430aa6653778299501b85c1': [ps[0], ps[1]],
    '643405a83e81775a33dc7f12_6430aa6653778251051b85c0': [ps[0], ps[1]],
    '643405a83e81775a33dc7f12_6430aa66537782178d1b85bf': [ps[1]],
    '643405a83e81775a33dc7f12_6430aa665377823c961b85be': [ps[0], ps[1]],
    '643405a83e8177fa68dc7f0f_6430aa6653778299501b85c1': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e8177fa68dc7f0f_6430aa6653778251051b85c0': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e8177fa68dc7f0f_6430aa66537782178d1b85bf': [ps[1], ps[3]],
    '643405a83e8177fa68dc7f0f_6430aa665377823c961b85be': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e817783a6dc7f10_6430aa6653778299501b85c1': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e817783a6dc7f10_6430aa6653778251051b85c0': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e817783a6dc7f10_6430aa66537782178d1b85bf': [ps[1], ps[3]],
    '643405a83e817783a6dc7f10_6430aa665377823c961b85be': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e81776603dc7f11_6430aa6653778299501b85c1': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e81776603dc7f11_6430aa6653778251051b85c0': [ps[0], ps[1], ps[2], ps[3], ps[4]],
    '643405a83e81776603dc7f11_6430aa66537782178d1b85bf': [ps[1], ps[3]],
    '643405a83e81776603dc7f11_6430aa665377823c961b85be': [ps[0], ps[1], ps[2], ps[3], ps[4]],
  },
};

const personasHandler = ({ answeredQuestions, debug = false }) => {
  // This only supports the Primary Business_Job Function persona assignments!
  const answers = questionIds.map((id) => {
    const questionMatch = answeredQuestions.find((question) => question.id === id);
    // Doesn't support multi-selects
    if (questionMatch && questionMatch.answers && questionMatch.answers.length === 1) {
      const [answer] = questionMatch.answers;
      const options = get(questionMatch, 'field.options');
      const answerWithLabel = options.find((option) => option.id === answer.id);
      return {
        answerId: get(answer, 'id'),
        answerLabel: get(answerWithLabel, 'label'),
        questionLabel: get(questionMatch, 'field.label'),
      };
    }
    return null;
  }).filter((v) => v);
  if (answers.length === 2) {
    const answerKey = answers.map((answer) => answer.answerId).join('_');
    const questionKey = questionIds.join('_');
    const assignedPersonas = getAsArray(personasToAssign, `${questionKey}.${answerKey}`);
    const assignedRecommendContentSections = assignedPersonas
      .map((persona) => personasToRecommendContentSections[persona]).flat();
    if (debug) {
      return {
        questionKey,
        answerKey,
        assignedPersonas,
        assignedRecommendContentSections,
        answers,
      };
    }
    return { assignedPersonas, assignedRecommendContentSections };
  }
  return { assignedPersonas: [], assignedRecommendContentSections: [] };
};

module.exports = {
  ps,
  questionIds,
  personasToAssign,
  personasHandler,
};
