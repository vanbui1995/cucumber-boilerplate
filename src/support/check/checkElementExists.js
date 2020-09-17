import { checkIfElementExists } from '../utils';

/**
 * Check if the given element exists
 * @param  {String}   isExisting Whether the element should be existing or not
 *                               (true or false)
 * @param  {String}   selector       Element selector
 */
export default (isExisting, selector) => {
  /**
   * Falsecase assertion
   * @type {Boolean}
   */
  const falseCase = isExisting;

  checkIfElementExists(selector, falseCase);
};
