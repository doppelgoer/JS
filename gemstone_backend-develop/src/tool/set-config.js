const fs = require('fs-extra');
const path = require('path');

const PHASE_LIST = ['beta', 'real'];
const CONFIG_PATH = path.resolve(__dirname, '../config');

(async () => {
  const phase = getPhase(process.argv[2]);
  await fs.copy(path.resolve(CONFIG_PATH, phase), CONFIG_PATH);
  console.log('set-config done');
})();

function getPhase(phase) {
  if (PHASE_LIST.indexOf(phase) === -1) return PHASE_LIST[0];
  else return phase;
}
