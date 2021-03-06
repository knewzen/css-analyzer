const postcss = require('postcss')
const atRules = require('./atrules')
const rules = require('./rules')
const selectors = require('./selectors')
const declarations = require('./declarations')

function processNodes(tree) {
  return {
    atRules: atRules(tree),
    rules: rules(tree),
    selectors: selectors(tree),
    declarations: declarations(tree)
  }
}

module.exports = css => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await postcss().process(css)
      resolve(processNodes(result.root))
    } catch (err) {
      reject(err)
    }
  })
}
