import 'cypress-file-upload';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/Locatorutils';
import { getTestData } from '../utils/TestDataUtils';

describe(
  'Allocation Owner Bulk Upload | Account Level | 0248',
  () => {

    let loginPage;
    let allocationPage;

    before(() => {
      getLocators('loginPage').then(l => loginPage = new LoginPage(l));
      getLocators('Allocation').then(l => allocationPage = new AllocationPage(l));
    });

    it(
      '0248 | Account Level | Upload button disabled without file',
      () => {
        getTestData('loginData', 'login2').then(user => {
          loginPage.login(
            user.Companyname,
            user.email,
            user.password
          );

          allocationPage.Allocation_Owner_Bulk_Upload_248();
        });
      }
    );

  }
);
