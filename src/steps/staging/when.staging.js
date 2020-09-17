import { When } from 'cucumber';

import { clickElement, setInputField } from '../../support/action';

When(/^I (add|set) "([^"]*)?" to "([^"]*)?" field$/, setInputField);

When(/^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/, clickElement);
