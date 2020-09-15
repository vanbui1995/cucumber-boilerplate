/**
 * Open the given URL
 * @param  {String}   type Type of navigation (getUrl or site)
 * @param  {String}   page The URL to navigate to
 */
export default (type, page) => {
  /**
   * The URL to navigate to
   * @type {String}
   */
  let url = type === 'url' ? page : browser.options.baseUrl + page;

  if (page === 'base_url') {
    url = browser.options.baseUrl;
  }

  browser.url(url);
};
