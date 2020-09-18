import { checkIfElementExists, getElementFromSelector } from '../utils';

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String | String[]}   selector Element selector
 */
export default (action, type, selector) => {
  /**
   * Element to perform the action on
   * @type {String}
   */
  const selector2 = type === 'link' ? `=${selector}` : selector;
  /**
   * The method to call on the browser object
   * @type {String}
   */
  const method = action === 'click' ? 'click' : 'doubleClick';

  const element = getElementFromSelector(selector2);
  element[method]();
};
