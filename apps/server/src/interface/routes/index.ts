import AuthRoutes from './auth.route'
import UserRoutes from './user.route'
import ProfileRoutes from './profile.route'

export default [
  { routes: AuthRoutes, prefix: 'auth' },
  { routes: UserRoutes, prefix: 'users' },
  { routes: ProfileRoutes, prefix: 'profile' }
]
