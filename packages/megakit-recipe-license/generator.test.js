const yeomanTest = require('yeoman-test')
const path = require('path')
const fs = require('mz/fs')

const {generator, generatorResolved} = require('./')

describe('license generator recipe', () => {
  it('should generate a LICENSE.txt', async () => {
    // see: https://yeoman.io/authoring/testing.html#test-helpers
    //
    // TODO: investigate if we need to provide a 'namespace' argument here
    const context = yeomanTest

      .run(generator, {
        resolved: generatorResolved
      })

      .withOptions({
        name: 'Tenor',
        email: 'tenorbiel@gmail.com',
        year: '2019',
        license: 'MIT'
      })

    await context.toPromise()

    const targetFile = path.join(context.targetDirectory, 'LICENSE')
    const contents = await fs.readFile(targetFile, 'utf8')

    expect(contents).toMatchSnapshot()
  })
})

