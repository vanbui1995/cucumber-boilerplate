import { Given } from 'cucumber';

import openWebsite from '../../support/action/openWebsite';
import loginPage from '../../support/page/login.page';

Given(/^I open the (url|site) "([^"]*)?"$/, openWebsite);

Given(/^I sign in with credential "([^"]*)?"\/"([^"]*)?"$/, loginPage.login);
