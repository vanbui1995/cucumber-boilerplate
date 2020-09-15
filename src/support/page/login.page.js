import { clickElement, openWebsite, redirectWebsite, setInputField } from '../action';

/**
 * Login page
 */
class LoginPage {
  baseUrl = browser.config.baseUrl;
  loginUrl = 'https://planpod.b2clogin.com/';
  usernameSelector = '#logonIdentifier';
  passwordSelector = '#password';
  submitSelector = 'button#next';

  /**
   * Login method
   *
   * @param {String} username username
   * @param {String} password password
   */
  login = (username, password) => {
    openWebsite('url', this.baseUrl);
    redirectWebsite('url', this.loginUrl);

    setInputField('set', username, this.usernameSelector);
    setInputField('set', password, this.passwordSelector);

    clickElement('click', 'button', this.submitSelector);

    redirectWebsite('url', this.baseUrl);
  };
}

export default new LoginPage();
