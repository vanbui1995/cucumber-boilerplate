import { clickElement, waitFor, moveTo } from '../action';

import clientsData from '../../../data/clients.json';
import proposedData from '../../../data/proposed.json';
import investmentsData from '../../../data/summary.json';

/**
 * Investment page
 */
class InvestmentPage {
  baseURL = 'https://planpod.azure-api.net/api/investment';

  /**
   * Get portfolio summary
   *
   * @param {'current' | 'proposed'} portfolioType Portfolio's type: current or proposed
   */
  getPortfolioSummary = (portfolioType) => {
    const adviceId = clientsData.data[0].relationships.advice[0].id;
    const portfolioDescription = investmentsData.data.relationships[portfolioType][0].attributes.productDescription;
    const portfolioRecommendationSelector = 'div.ant-steps-item-title*=Portfolio Recommendations';
    const portfolioSelector = `td[dataindex="productDescription"] input[value="${portfolioDescription}"]`;

    const investmentsURL = `${this.baseURL}/${adviceId}`;
    const investmentsMock = browser.mock(investmentsURL);

    investmentsMock.respond(investmentsData, {
      statusCode: 200,
    });

    waitFor(portfolioRecommendationSelector);
    clickElement('click', 'button', portfolioRecommendationSelector);

    waitFor(portfolioSelector);
  };

  /**
   * Get portfolio summary
   *
   * @param {'new' | 'retain' | 'rebalance' | 'withdraw'} operationType
   * Operation's type: new | retain | rebalance | withdraw
   */
  createProposedPortfolio = (operationType) => {
    const newPortfolioDesc = investmentsData.data.relationships.current[0].attributes.productDescription;
    const renderedPortfolioDesc = proposedData.data.attributes.productDescription;

    const addButtonSelector = 'section#proposedTable span[aria-label="plus-square"]';
    const operationSelector = `div=${operationType[0].toUpperCase()}${operationType.split(1)}`;
    const newPortfolioSelector = `li=${newPortfolioDesc}`;
    const renderedPortfolioSelector = `td[dataindex="productDescription"] input[value="${renderedPortfolioDesc}"]`;

    const adviceId = clientsData.data[0].relationships.advice[0].id;
    const url = `${this.baseURL}/${adviceId}/portfolio/proposed`;
    const mock = browser.mock(url);

    mock.respond(proposedData, { statusCode: 200 });

    waitFor(addButtonSelector);
    clickElement('click', 'button', addButtonSelector);

    waitFor(operationSelector);
    moveTo(operationSelector);

    browser.setupInterceptor();

    waitFor(newPortfolioSelector);
    clickElement('click', 'button', operationSelector);

    const request = browser.getRequest(0);
    console.info(request, '🤰🏻');
  };
}

export default new InvestmentPage();
