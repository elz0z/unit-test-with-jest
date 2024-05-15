const sayHello = require('./sayHello')
test('say hello', () => {
  expect(sayHello()).toBe('hello')
})