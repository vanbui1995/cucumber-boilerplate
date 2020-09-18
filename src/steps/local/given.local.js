import { Given } from 'cucumber';

import { homePage } from '../../support/page';

Given(/^a summary data set$/, homePage.getUser);
