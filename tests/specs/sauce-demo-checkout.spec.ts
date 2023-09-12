import { test } from '../../test-setup/page-setup';
import * as LoginPage from '../pages/sauce-demo/sauce-demo-login-page';
import * as CartPage from '../pages/sauce-demo/sauce-demo-cart-page';
import * as ProductsPage from '../pages/sauce-demo/sauce-demo-products-page';
import * as MiniCart from '../pages/sauce-demo/sauce-demo-mini-cart-page';
import * as CheckoutPage from '../pages/sauce-demo/sauce-demo-checkout-page';

test.describe('Saucedemo tests checkout page page ', () => {
  test('Saucedemo tests -  checkout page Test', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCart.clickMiniCart();
    await CartPage.verifyCartPage('Your Cart');
    await CartPage.clickCheckoutButton();
    await CheckoutPage.verifyCheckoutPage();
  });

  test('Saucedemo tests -  checkout page Test2', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCart.clickMiniCart();
    await CartPage.verifyCartPage('Your Cart');
    await CartPage.clickCheckoutButton();
    await CheckoutPage.verifyCheckoutPage();
  });

  test('Saucedemo tests -  checkout page Test3', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCart.clickMiniCart();
    await CartPage.verifyCartPage('Your Cart');
    await CartPage.clickCheckoutButton();
    await CheckoutPage.verifyCheckoutPage();
  });

  test('Saucedemo tests -  checkout page Test4', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCart.clickMiniCart();
    await CartPage.verifyCartPage('Your Cart');
    await CartPage.clickCheckoutButton();
    await CheckoutPage.verifyCheckoutPage();
  });
});
