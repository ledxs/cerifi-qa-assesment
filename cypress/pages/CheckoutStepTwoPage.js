class CheckoutStepTwoPage {
    elements = {
      productItems: () => cy.get('.cart_item'),
      totalPriceLabel: () => cy.get('.summary_total_label'),
      finishButton: () => cy.get('button[data-test="finish"]'),
      itemPrices: () => cy.get('.inventory_item_price')
    };
  
    verifyItemCount(expectedCount) {
      this.elements.productItems().should('have.length', expectedCount);
    }
  
    validateTotalPrice() {
      let sum = 0;
      this.elements.itemPrices().each(($el) => {
        const priceText = $el.text();
        const price = parseFloat(priceText.replace('$', ''));
        sum += price;
      }).then(() => {
        this.elements.totalPriceLabel().invoke('text').then((text) => {
          const total = parseFloat(text.match(/\d+\.\d{2}/)[0]);
          expect(total).to.equal(sum);
        });
      });
    }
  
    finishCheckout() {
      this.elements.finishButton().click();
    }
  }
  
  export default CheckoutStepTwoPage;
  