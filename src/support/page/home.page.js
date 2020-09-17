import { clickElement, setInputField, waitFor } from '../action';
import { checkElementExists } from '../check';

/**
 * Login page
 */
class HomePage {
  /**
   * Login method
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
   * Login method
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
}

export default new HomePage();
