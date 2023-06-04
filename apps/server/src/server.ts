/* eslint-disable import/first */
import * as dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.join(__dirname, '..', '.env') })

import App from './application/app'
import Routes from './interface/routes'
import Plugins from './infrastructure/plugins'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const app = new App({ routes: Routes, plugins: Plugins })
app.start()
