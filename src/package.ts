import { readFileSync } from 'fs'
import { join } from 'path'
import { IPackageJson } from 'package-json-type'

const packageJson: IPackageJson = JSON.parse(
  readFileSync(join(__dirname, '../package.json'), { encoding: 'utf8' }),
)

export default packageJson
