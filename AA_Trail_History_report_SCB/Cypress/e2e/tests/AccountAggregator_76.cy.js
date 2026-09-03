import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AccountAggregatorPage from '../pages/AccountAggregatorPage';

describe('Credit Card - Account Aggregator - Verify Records Are Not Duplicated', () => {

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

    it('TC_076 - Credit Card - Verify records are not duplicated after multiple clicks', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            accountAggregatorPage.NavigateToAccountAggregatorCC();

            accountAggregatorPage.ClickViewBankBalance();

            accountAggregatorPage.ClickViewBankBalance();

            accountAggregatorPage.VerifyNoDuplicateRecords();

        });

    });

});