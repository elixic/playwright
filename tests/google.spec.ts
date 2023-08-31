import { expect, test } from '@playwright/test';

test.describe('Google', () => {
  test('search for playwright', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.goto(
      'https://www.google.com/search?q=playwright&sca_esv=561520638&source=hp&ei=LwzwZLq9MOKA0PEP16i9qAI&iflsig=AD69kcEAAAAAZPAaP85w7f42yMNSOMywDMc4jcgvlt87&ved=0ahUKEwj6kNGv_YWBAxViADQIHVdUDyUQ4dUDCAs&uact=5&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEDyAEA&sclient=gws-wiz'
    );
    await expect(
      await page.getByRole('link', {
        name: 'Playwright: ',
      })
    ).toContainText('Fast and reliable end-to-end testing');
  });
});
