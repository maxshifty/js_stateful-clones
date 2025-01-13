'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const history = [];
  const newObj = { ...state };

  for (const key of actions) {
    if (key.type === 'addProperties') {
      for (const el in key.extraData) {
        newObj[el] = key.extraData[el];
      }
    }

    if (key.type === 'removeProperties') {
      for (const el in key.keysToRemove) {
        delete newObj[key.keysToRemove[el]];
      }
    }

    if (key.type === 'clear') {
      for (const elem in newObj) {
        delete newObj[elem];
      }
    }
    history.push({ ...newObj });
  }

  return history;
}

module.exports = transformStateWithClones;
