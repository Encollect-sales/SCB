import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AccountAggregatorPage from '../pages/AccountAggregatorPage';

describe('Account Aggregator - Verify Records Are Not Duplicated', () => {

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

    it('TC_039 - Verify records are not duplicated after multiple clicks', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            accountAggregatorPage.NavigateToAccountAggregator();

            accountAggregatorPage.ClickViewBankBalance();

            accountAggregatorPage.ClickViewBankBalance();

            accountAggregatorPage.VerifyNoDuplicateRecords();

        });

    });

});