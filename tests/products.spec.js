import { expect, test} from "@playwright/test"

test('all products names begin with "Sauce Labs"', async ({ page }) => {
  await test.step('login', async () => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await page.locator('[data-test="login-button"]').click()
  })

  // test.fail()
  await test.step('product title verification', async () => {
    const titleListLocator = await page.locator('inventory_item_name')
    const productTitleList = await titleListLocator.allTextContents()

    for(const item of productTitleList) {
      await expect(item.slice(0, 10)).toBe('Sauce Labs')
    }
  })
})