/**
 * Syncs package.json version with constants file for release.
 *
 * Triggered inside `postversion` hook in package.json.
 *
 * See: https://semantic-release.gitbook.io/semantic-release/support/faq#how-can-i-use-a-npm-build-script-that-requires-the-package-jsons-version
 */

import { name, version } from '../package.json'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { USER_AGENT } from '../src/constants'

const CONSTANTS_FILE = join(__dirname, '../lib/constants.js')

const constants = readFileSync(CONSTANTS_FILE, { encoding: 'utf8' })
const replaced = constants.replace(USER_AGENT, `${name}/${version}`)

writeFileSync(CONSTANTS_FILE, replaced, { encoding: 'utf8' })
