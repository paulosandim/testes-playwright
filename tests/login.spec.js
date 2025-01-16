import { expect, test} from "@playwright/test"

test('the user login with sucess', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')
  await expect(await page.title()).toBe('Swag Labs')
})
