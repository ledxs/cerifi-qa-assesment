class ProductsPage {
  elements = {
    productItems: () => cy.get('.inventory_item'),
    addToCartButtons: () => cy.get('button[data-test*="add-to-cart"]'),
    cartLink: () => cy.get('.shopping_cart_link'),
    productPrices: () => cy.get('.inventory_item_price')
  };

  verifyItemCount(expectedCount) {
    this.elements.productItems().should('have.length', expectedCount);
  }

  validateProductPrices() {
    this.elements.productPrices().each(($el) => {
      // Ensure price format
      expect($el.text()).to.match(/^\$\d+\.\d{2}$/); 
    });
  }

  addItemsToCart() {
    this.elements.addToCartButtons().each(($btn) => {
      cy.wrap($btn).should('be.visible').click(); 
      cy.wait(500);
    });
  }
  

  navigateToCart() {
    this.elements.cartLink().click();
  }

  viewCart() {
    this.navigateToCart();
  }
}

export default ProductsPage;
