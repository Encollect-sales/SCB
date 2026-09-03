import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AccountAggregatorPage from '../pages/AccountAggregatorPage';

describe('Credit Card - Account Aggregator - Verify Total Overdue Amount', () => {

    let loginPage;
    let accountAggregatorPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('AccountAggregator').then(locators => {
            accountAggregatorPage = new AccountAggregatorPage(locators);
        });

    });

    it('TC_074 - Credit Card - Verify Total Overdue Amount is displayed', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            accountAggregatorPage.NavigateToAccountAggregatorCC();

            accountAggregatorPage.VerifyTotalOverdueAmount();

        });

    });

});