import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AllocationHistoryPage from '../pages/AllocationHistoryPage';
import 'cypress-wait-until';
 
describe('Allocation History - Account search', () => {
    let loginPage;
    let allocationHistoryPage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then((locators) => {
            loginPage = new LoginPage(locators);
        });
 
        // Initialize AllocationHistoryPage instance with locators
        getLocators('AllocationHistoryPage').then((locators) => {
            allocationHistoryPage = new AllocationHistoryPage(locators); // Pass locators to constructor
        });
    });
 
    it('Allocation History - TC_ID_547 - Check the Allocation by below methods available in ENCollection application: 1.Do allocation by primary and secondary bulk upload method 2.Do allocation by primary and secondary filters method 3.Do allocation while doing trial update >>Assign to method 4.Do allocation while execute segmentation and treatment method', () => {
        getTestData('loginData', 'login').then((user) => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(5000);
 
            // Perform communication setup and download file
            allocationHistoryPage.AccountSearch546();
 
            // Wait for download to complete (adjust timeout as needed)
            cy.wait(3000); // Increase timeout if necessary for slower downloads
 
            // Define the data for new columns C1 and D1
            const updatedData = [
                { AccountNo: '12345', AllocationOwnerCode: 'ABC', AllocationExpireDate: '2024-07-10' },
                // Add more data objects as needed
            ];
 
            const newData = ['12345', 'ABC', '2024-07-10'];
 
            // Upload the updated XLSX file
            allocationHistoryPage.fileuploadAllocationHistory547().then(() => {
                // Optionally assert success criteria after upload completes
                cy.log('File upload completed');

                //loginPage.logout();
            });
        });
    });
});