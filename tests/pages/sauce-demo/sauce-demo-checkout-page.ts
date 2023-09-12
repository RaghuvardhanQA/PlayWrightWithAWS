import { expectElementToBeVisible, getLocator } from 'vasu-playwright-utils';

const checkoutInfoSection = () => getLocator(`//*[@class='checkout_info']`);

export async function verifyCheckoutPage() {
  await expectElementToBeVisible(checkoutInfoSection());
}
