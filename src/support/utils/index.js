/**
 * Check if the given element exists in the DOM one or more times
 * @param  {String}  selector  Element selector
 * @param  {Boolean} falseCase Check if the element (does not) exists
 * @param  {Number}  exactly   Check if the element exists exactly this number
 *                             of times
 */
const checkIfElementExists = (selector, falseCase = false, exactly = 1) => {
  /**
   * The number of elements found in the DOM
   * @type {Int}
   */
  const nrOfElements = $$(selector);

  if (falseCase === true) {
    expect(nrOfElements).toHaveLength(0, `Element with selector "${selector}" should not exist on the page`);
  } else if (exactly) {
    expect(nrOfElements).toHaveLength(
      exactly,
      `Element with selector "${selector}" should exist exactly ${exactly} time(s)`,
    );
  } else {
    expect(nrOfElements.length).toBeGreaterThanOrEqual(
      1,
      `Element with selector "${selector}" should exist on the page`,
    );
  }
};

/**
 * Perform an click action on the given element
 * @param  {String | String[]} selector Element selector, single or list
 * @param  {Boolean} check Flag to indicate whether we should check for element existence
 *
 * @returns {WebdriverIO.Element} WebdriverIO Element
 */
const getElementFromSelector = (selector, check = true) => {
  let result;

  if (Array.isArray(selector)) {
    const selectorList = selector;

    if (check) checkIfElementExists(selectorList[0]);

    result = selectorList.slice(1).reduce((prev, curr) => {
      if (check) checkIfElementExists(curr);

      return prev.$(curr);
    }, $(selectorList[0]));
  } else {
    if (check) checkIfElementExists(selector);
    result = $(selector);
  }

  return result;
};

export { getElementFromSelector, checkIfElementExists };
