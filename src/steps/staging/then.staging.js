import { Then } from 'cucumber';

import { redirectWebsite } from '../../support/action';

Then(/^I should be redirected to (url|site) "([^"]*)?"$/, redirectWebsite);
