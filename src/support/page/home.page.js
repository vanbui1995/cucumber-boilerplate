import { clickElement, setInputField, waitFor } from '../action';
import { checkElementExists } from '../check';

import clientsData from '../../../data/clients.json';

/**
 * Login page
 */
class HomePage {
  /**
   * Create a user method
   *
   * @param {String} firstName User's first name
   * @param {String} lastName User's last name
   */
  createUser = (firstName, lastName) => {
    const dOB = new Date().toLocaleDateString('fr-CA');
    const newUserSelector = `span=${firstName} ${lastName}`;
    const newClientButtonSelector = 'form button.btn-sidebar';
    const firstNameSelector = 'input#basic_firstName';
    const lastNameSelector = 'input#basic_lastName';
    const dObSelector = 'input#basic_dateOfBirth';
    const submitSelector = 'div.btn-NameAndBirthDay button.ant-btn-primary';

    waitFor(newClientButtonSelector);

    clickElement('click', 'button', newClientButtonSelector);
    setInputField('set', firstName, firstNameSelector);
    setInputField('set', lastName, lastNameSelector);
    setInputField('set', dOB, dObSelector);

    clickElement('click', 'button', submitSelector);

    waitFor(newUserSelector);
  };

  /**
   * Delete a user method
   *
   * @param {String} firstName User's first name
   * @param {String} lastName User's last name
   */
  deleteUser = (firstName, lastName) => {
    const userSelector = `span=${firstName} ${lastName}`;
    const moreDropdownSelector = [userSelector, '..', '..', 'span.anticon-more.ant-dropdown-trigger'];
    const deleteButtonSelector = 'ul li.ant-dropdown-menu-item.ant-dropdown-menu-item-only-child:nth-child(1)';
    const confirmButtonSelector = 'div.ant-popover-buttons button:nth-child(2)';

    waitFor(userSelector);
    clickElement('click', 'button', moreDropdownSelector);
    clickElement('click', 'button', deleteButtonSelector);
    clickElement('click', 'button', confirmButtonSelector);
    checkElementExists(false, userSelector);
  };

  /**
   * Get user
   */
  getUser = () => {
    const fullName = 'Automation Test';
    const adviceDate = clientsData.data[0].relationships.advice[0].attributes.date;
    const adviceText = new Date(adviceDate).toLocaleDateString('us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    const userSelector = `span=${fullName}`;
    const adviceSelector = `span=${adviceText}`;
    const investmentSelector = 'span=Investments';

    const clientURL = 'https://planpod.azure-api.net/api/advice/client';

    const clientMock = browser.mock(clientURL);

    clientMock.respond(clientsData, {
      statusCode: 200,
    });

    browser.url(browser.config.baseUrl);

    waitFor(userSelector);
    clickElement('click', 'button', userSelector);

    waitFor(adviceSelector);
    browser.pause(500);
    clickElement('click', 'button', adviceSelector);

    waitFor(investmentSelector);
    clickElement('click', 'button', investmentSelector);
  };
}

export default new HomePage();
