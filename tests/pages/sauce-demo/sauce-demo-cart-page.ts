import { click, expectElementToHaveText, isElementHidden } from 'vasu-playwright-utils';
import { getLocator } from 'vasu-playwright-utils';

const cartPageTitle = () => getLocator(`//*[@class='title']`);
const continueShoppingButton = () => getLocator(`//*[@id='continue-shopping']`);
const removeButton = () => getLocator(`//button[@class='btn btn_secondary btn_small cart_button']`);
const checkoutButton = () => getLocator(`//button[@id='checkout']`);
const miniCartCount = () => getLocator(`//*[@id='shopping_cart_container']//span`);

export async function verifyCartPage(expText: string) {
  await expectElementToHaveText(cartPageTitle(), expText);
}

export async function clickContinueShoppingButton() {
  await click(continueShoppingButton());
}

export async function clickRemoveButton() {
  await click(removeButton());
}

export async function clickCheckoutButton() {
  await click(checkoutButton());
}

export async function verifyEmptyCart() {
  await isElementHidden(miniCartCount());
}
