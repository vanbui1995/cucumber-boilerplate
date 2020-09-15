import { checkInURLPath } from '../check';

/**
 * Redirect the given URL
 * @param  {String}   type Type of navigation (getUrl or site)
 * @param  {String}   page The URL to navigate to
 */
export default (type, page) => {
  /**
   * The URL to navigate to
   * @type {String}
   */
  const url = type === 'url' ? page : browser.options.baseUrl + page;

  if (page === browser.config.baseUrl) {
    $('div#root').waitForExist();
  } else {
    $('#logonIdentifier').waitForExist();
  }

  checkInURLPath(false, url);
};
