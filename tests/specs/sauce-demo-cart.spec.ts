import { test } from '../../test-setup/page-setup';
import * as LoginPage from '../pages/sauce-demo/sauce-demo-login-page';
import * as CartPage from '../pages/sauce-demo/sauce-demo-cart-page';
import * as ProductsPage from '../pages/sauce-demo/sauce-demo-products-page';
import * as MiniCart from '../pages/sauce-demo/sauce-demo-mini-cart-page';

test.describe.configure({ mode: 'parallel' });

test.describe('Saucedemo tests cart page ', () => {
  test('Saucedemo tests - cart page title validation test', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCart.clickMiniCart();
    await CartPage.verifyCartPage('Your Cart');
  });

  test('Saucedemo tests - cart page title validation test2', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCart.clickMiniCart();
    await CartPage.verifyCartPage('Your Cart');
  });

  test('Saucedemo tests - cart page title validation test3', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCart.clickMiniCart();
    await CartPage.verifyCartPage('Your Cart');
  });

  test('Saucedemo tests - cart page continue shopping Test1', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCart.clickMiniCart();
    await CartPage.verifyCartPage('Your Cart');
    await CartPage.clickContinueShoppingButton();
    await ProductsPage.verifyProductsPageDisplayed();
  });

  test('Saucedemo tests - cart page continue shopping Test2', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCart.clickMiniCart();
    await CartPage.verifyCartPage('Your Cart');
    await CartPage.clickContinueShoppingButton();
    await ProductsPage.verifyProductsPageDisplayed();
  });

  test('Saucedemo tests - cart page continue shopping Test3', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCart.clickMiniCart();
    await CartPage.verifyCartPage('Your Cart');
    await CartPage.clickContinueShoppingButton();
    await ProductsPage.verifyProductsPageDisplayed();
  });

  test('Saucedemo tests - cart page remove button Test1', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCart.clickMiniCart();
    await CartPage.verifyCartPage('Your Cart');
    await CartPage.clickRemoveButton();
    await CartPage.verifyEmptyCart();
  });

  test('Saucedemo tests - cart page remove button Test2', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCart.clickMiniCart();
    await CartPage.verifyCartPage('Your Cart');
    await CartPage.clickRemoveButton();
    await CartPage.verifyEmptyCart();
  });

  test('Saucedemo tests - cart page remove button Test3', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCart.clickMiniCart();
    await CartPage.verifyCartPage('Your Cart');
    await CartPage.clickRemoveButton();
    await CartPage.verifyEmptyCart();
  });
});
