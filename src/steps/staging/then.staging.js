import { Then } from 'cucumber';

import { redirectWebsite } from '../../support/action';
import homePage from '../../support/page/home.page';

Then(/^I should be redirected to (url|site) "([^"]*)?"$/, redirectWebsite);

Then(/^I create a new user with first name is "([^"]*)?", last name is "([^"]*)?"$/, homePage.createUser);
