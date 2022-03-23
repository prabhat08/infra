export default {
  path: '/',
  onEnter: (params, replace) => {
    if (params.location.pathname === '/') replace('/hierarchy')
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, 
        require('./App').default
      )
    })
  },
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./components/hierarchy/HierarchyRoutes').default,
        require('./components/settings/SettingsRoutes').default,
      ])
    })
  }
}