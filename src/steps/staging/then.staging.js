import { Then } from 'cucumber';

import { redirectWebsite } from '../../support/action';
import homePage from '../../support/page/home.page';

Then(/^I should be redirected to (url|site) "([^"]*)?"$/, redirectWebsite);

Then(
  /^I (create|delete) a user with first name is "([^"]*)?", last name is "([^"]*)?"$/,
  (action, firstName, lastName) => {
    switch (action) {
      case 'create':
        homePage.createUser(firstName, lastName);
        break;

      case 'delete':
        homePage.deleteUser(firstName, lastName);
        break;

      default:
        break;
    }
  },
);
