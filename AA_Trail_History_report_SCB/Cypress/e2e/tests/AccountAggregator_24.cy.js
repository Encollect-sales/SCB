import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AccountAggregatorPage from '../pages/AccountAggregatorPage';

describe('Account Aggregator - Verify Current Balance Display Format', () => {

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

    it('TC_024 - Verify Current Balance is displayed', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            accountAggregatorPage.NavigateToAccountAggregator();

            accountAggregatorPage.ClickViewBankBalance();

            accountAggregatorPage.VerifyCurrentBalance();

        });

    });

});