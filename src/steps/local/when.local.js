import { When } from 'cucumber';

import { investmentPage } from '../../support/page';

When(/^an existing (current|proposed) portfolio$/, investmentPage.getPortfolioSummary);

When(/^I click the \+ button to (new|retain|rebalance|withdraw) a portfolio$/, investmentPage.createProposedPortfolio);
