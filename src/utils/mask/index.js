import { createTextMask } from "redux-form-input-masks";

export const phoneMask = createTextMask({
  pattern: "(99) 99999-9999",
  allowEmpty: true,
  guide: false,
});

export const cpfMask = createTextMask({
  pattern: '999.999.999-99',
  guide: false,
  allowEmpty: true
});
