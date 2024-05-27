
const fs = require('fs');
const path = require('path');

const stateFilePath = path.join('C:\\Palywright\\QA_Practice_Automation\\', 'shared-state.json');

function saveState(key, data) {
  let state = {};
  if (fs.existsSync(stateFilePath)) {
    state = JSON.parse(fs.readFileSync(stateFilePath, 'utf-8'));
  }
  state[key] = data;
  fs.writeFileSync(stateFilePath, JSON.stringify(state, null, 2));
  //console.log(`Saved state for ${key}:`, data); // We can use this line to see the data saved in this step
}

function loadState(key) {
  if (!fs.existsSync(stateFilePath)) {
    return null;
  }
  const state = JSON.parse(fs.readFileSync(stateFilePath, 'utf-8'));
 // console.log(`Loaded state for ${key}:`, state[key]); //We can use this line to see the data saved in this step
  return state[key];
}

module.exports = { saveState, loadState };
