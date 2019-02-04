'use strict'
const {describe, it} = require('mocha')
const {expect} = require('chai')
const webdriver = require('selenium-webdriver')
const {By, Key} = webdriver

require('chromedriver')

describe('todo actions', () => {
  let driver
  before(async () => (driver = await new webdriver.Builder().forBrowser('chrome').build()))
  after(async () => await driver.quit())

  beforeEach(async () => {
    await driver.get('http://todomvc-app-for-testing.surge.sh/')

    const newTodoElement = await driver.findElement(By.css('.new-todo'))
    await newTodoElement.sendKeys('Clean room' + Key.RETURN)
  })

  it('should add a new todo to the list', async () => {
    expect(await (await driver.findElement(By.css('label'))).getText()).to.include('Clean room')
    expect(await (await driver.findElement(By.css('.toggle'))).isSelected()).to.be.false
  })

  describe('toggling todos', () => {
    it('should toggle test correctly', async () => {
      await (await driver.findElement(By.css('.toggle'))).click()

      expect(await (await driver.findElement(By.css('label'))).getCssValue('text-decoration-line')).to.equal('line-through')
    })

    it('should clear completed', async () => {
      await (await driver.findElement(By.css('.toggle'))).click()

      await (await driver.findElement(By.xpath('//*[text() = "Clear completed"]'))).click()

      expect(await (await driver.findElement(By.css('.todo-list'))).findElements(By.css('li'))).to.have.length(0)
    })
  })
})
