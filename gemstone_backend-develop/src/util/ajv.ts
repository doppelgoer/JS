import Ajv from 'ajv';
import AjvFormats from 'ajv-formats';
import AjvKeywords from 'ajv-keywords';

const ajv = new Ajv({
  $data: true,
  coerceTypes: true,
  removeAdditional: true,
  useDefaults: true,
  strict: true,
});

AjvFormats(ajv);
AjvKeywords(ajv);

export default ajv;
