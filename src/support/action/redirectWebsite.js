import { checkInURLPath } from '../check';
import waitFor from './waitFor';

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
    waitFor('div#root');
  } else {
    waitFor('#logonIdentifier');
  }

  checkInURLPath(false, url);
};
