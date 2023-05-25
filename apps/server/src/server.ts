import * as dotenv from 'dotenv'
import path from 'path'
import App from './application/app'
import Routes from './interface/routes'
import Plugins from './infrastructure/plugins'

dotenv.config({ path: path.join(__dirname, '..', '.env') })
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const app = new App({ routes: Routes, plugins: Plugins })
app.start()
