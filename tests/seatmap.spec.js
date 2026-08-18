import { expect, test } from '@playwright/test'

test('seat selection publishes a cloneable payload to the ticket shop', async ({ page }) => {
  const pageErrors = []
  page.on('pageerror', (error) => pageErrors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error' && !message.text().includes('favicon')) {
      pageErrors.push(message.text())
    }
  })

  await page.addInitScript(() => {
    window.__seatmapMessages = []
    window.addEventListener('message', (event) => {
      if (event.data?.type?.startsWith('kivikyla-seatmap:')) {
        window.__seatmapMessages.push(event.data)
      }
    })
  })

  await page.goto('/')
  await page.locator('.section').first().click()
  await page.locator('button.seat:not(:disabled)').first().click()

  await expect(page.locator('.count')).toHaveText('1')
  await expect.poll(() => page.evaluate(() => window.__seatmapMessages.length)).toBe(1)

  const payload = await page.evaluate(() => window.__seatmapMessages[0])
  expect(payload.type).toBe('kivikyla-seatmap:selection')
  expect(payload.seats).toHaveLength(1)
  expect(payload.seats[0]).toEqual(expect.objectContaining({ section: expect.any(String) }))
  expect(pageErrors).toEqual([])
})
