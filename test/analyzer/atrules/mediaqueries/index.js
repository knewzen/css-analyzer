const test = require('ava')
const testScope = require('../../../utils/scope-tester.js')

const SCOPE = 'atrules/mediaqueries'

test(SCOPE, async t => {
  const {actual, expected} = await testScope(SCOPE)
  t.deepEqual(actual.atrules.mediaqueries, expected)
})
