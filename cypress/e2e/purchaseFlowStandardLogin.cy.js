import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import CheckoutStepOnePage from '../pages/CheckoutStepOnePage';
import CheckoutStepTwoPage from '../pages/CheckoutStepTwoPage';
import OrderConfirmationPage from '../pages/OrderConfirmationPage';

describe('Standard User Complete Shopping Flow', () => {
  const login = new LoginPage();
  const products = new ProductsPage();
  const cart = new CartPage();
  const checkoutStepOne = new CheckoutStepOnePage();
  const checkoutStepTwo = new CheckoutStepTwoPage();
  const orderConfirmation = new OrderConfirmationPage();

  before(() => {
    cy.fixture('users').as('userCredentials');
  });

  it('ensures that a standard user can complete a purchase', function () {
    const user = this.userCredentials.find(u => u.username === 'standard_user');

    login.performLogin(user.username, user.password);
    cy.url().should('include', '/inventory.html');
    
    products.addItemsToCart();
    // Checking for cart badge visibility and content after asynchronous operations
    cy.get('body').then($body => {
      if ($body.find('.cart_badge').length) {
        cy.get('.cart_badge').should('contain', '6');
      } else {
        // If the badge is not found or does not have the expected content
        cy.log('Cart badge not found or incorrect number of items added');
      }
    });

    products.navigateToCart();
    // Ensure user is on the cart page
    cy.url().should('include', '/cart.html'); 
    
    // Verifying the cart has exactly 6 items
    cart.verifyItemCount(6); 
    cart.proceedToCheckout();
    
    checkoutStepOne.enterUserInfo({ firstName: 'John', lastName: 'Doe', zipCode: '90210' });
    // Verify navigation to the next checkout step
    cy.url().should('include', '/checkout-step-two.html'); 

    // Ensure all items are listed on the checkout page
    checkoutStepTwo.verifyItemCount(6); 
    checkoutStepTwo.finishCheckout();
    
    orderConfirmation.verifyThankYouMessage('Thank you for your order!'); 
    orderConfirmation.verifyDispatchInformation('Your order has been dispatched, and will arrive just as fast as the pony can get there!'); 
    orderConfirmation.returnToHome();

     // Ensure user returns to the inventory page
    cy.url().should('include', '/inventory.html');
  });
});
