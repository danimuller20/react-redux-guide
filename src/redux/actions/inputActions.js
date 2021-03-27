const INPUT_CHANGE = 'INPUT_CHANGE';

const inputAction = (text) => ({
  type: INPUT_CHANGE,
  text,
});

export default inputAction;
