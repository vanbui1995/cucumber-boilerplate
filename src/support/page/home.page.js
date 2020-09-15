import { clickElement, setInputField, waitFor } from '../action';

/**
 * Login page
 */
class HomePage {
  newClientButtonSelector = 'form button.btn-sidebar';
  firstNameSelector = 'input#basic_firstName';
  lastNameSelector = 'input#basic_lastName';
  dObSelector = 'input#basic_dateOfBirth';
  submitSelector = 'div.btn-NameAndBirthDay button.ant-btn-primary';

  /**
   * Login method
   *
   * @param {String} firstName User's first name
   * @param {String} lastName User's last name
   */
  createUser = (firstName, lastName) => {
    const dOB = new Date().toLocaleDateString('fr-CA');
    const newUserSelector = `span=${firstName} ${lastName}`;

    waitFor(this.newClientButtonSelector);

    clickElement('click', 'button', this.newClientButtonSelector);
    setInputField('set', firstName, this.firstNameSelector);
    setInputField('set', lastName, this.lastNameSelector);
    setInputField('set', dOB, this.dObSelector);

    clickElement('click', 'button', this.submitSelector);

    waitFor(newUserSelector);
  };
}

export default new HomePage();
