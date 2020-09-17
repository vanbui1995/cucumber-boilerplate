import { checkIfElementExists, getElementFromSelector } from '../utils';

/**
 * Set the value of the given input field to a new value or add a value to the
 * current selector value
 * @param  {String}   method  The method to use (add or set)
 * @param  {String}   value   The value to set the selector to
 * @param  {String | String[]}   selector Element selector
 */
export default (method, value, selector) => {
  /**
   * The command to perform on the browser object (addValue or setValue)
   * @type {String}
   */
  const command = method === 'add' ? 'addValue' : 'setValue';
  const checkValue = value || '';
  
  if (Array.isArray(selector) === false) {
    checkIfElementExists(selector, false, 1);
  }
  
  const element = getElementFromSelector(selector);
  element[command](checkValue);
};
