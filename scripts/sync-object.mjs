#!/usr/bin/env zx

import 'zx/globals'

const args = process.argv.slice(3)

if(!args.length) {
  console.log(chalk.red('[Error]'), chalk.white('Missing folder name argument'))
  console.log(chalk.red('[Error]'), chalk.white('Ex.: insurance-auto'))
  process.exit(0)
}

const folder = args[0]

try {
  await $`aws s3 sync ./mock-objects/${folder} s3://mock-mapfre-dev/objects/${folder}`
} catch(e) {
  console.log(chalk.red('[Error]'), chalk.bgRedBright.white(`Folder or path does'nt exists in ./mock-objects/${folder}`))
  process.exit(0)
}
