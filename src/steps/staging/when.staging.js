import { When } from 'cucumber';

import { clickElement, setInputField } from '../../support/action';
import loginPage from '../../support/page/login.page';

When(/^I (add|set) "([^"]*)?" to "([^"]*)?" field$/, setInputField);

When(/^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/, clickElement);
