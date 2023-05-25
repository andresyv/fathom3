import AuthRoutes from './auth.route'
import UserRoutes from './user.route'

export default [
  { routes: AuthRoutes, prefix: 'auth' },
  { routes: UserRoutes, prefix: 'users' }
]
