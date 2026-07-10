import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import 'cypress-wait-until';


class CollectionPage {
  constructor(locators) {
    this.locators = locators;
  }
  
CreateTestPage_01(){

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").should('be.visible').click();
    cy.wait(1000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").should('be.visible').click();
     cy.wait(1000);
     cy.get('.title').contains("Create Segment").should('be.visible');
     cy.wait(1000);
}

CreateTestPage_02(){

    
}

CreateTestPage_03(){

    
}

CreateTestPage_04(){

     
}

CreateTestPage_05(){

     

}

CreateTestPage_06(){

    

}

CreateTestPage_07(){

    
}

CreateTestPage_08(){

    
     
}

CreateTestPage_09(){

}

CreateTestPage_10(){

}

CreateTestPage_11(){

}

CreateTestPage_12(){

}

CreateTestPage_13(){

}

CreateTestPage_14(){

}

CreateTestPage_15(){

}

CreateTestPage_16(){

}

CreateTestPage_17(){

}

CreateTestPage_18(){

}

CreateTestPage_19(){

}

CreateTestPage_20(){

}

CreateTestPage_21(){

}

CreateTestPage_22(){

}

CreateTestPage_23(){

}

CreateTestPage_24(){

}

CreateTestPage_25(){

}

CreateTestPage_26(){

}

CreateTestPage_27(){

}

CreateTestPage_28(){

}

CreateTestPage_29(){

}

CreateTestPage_30(){

}





}

export default CollectionPage;