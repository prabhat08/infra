const routes = {
  path: 'settings',
  onEnter: (params, replace) => {
    if (params.location.pathname === '/settings') replace('/settings/configuration')
  },
  content: require('./Settings').default,
  getComponents(nextState, cb) {
    require.ensure([], function (require) {
      cb(null, {
        content: require('./Settings').default
      })
    })
  },
  childRoutes: [
    {
      path: 'configuration',
      getComponents(nextState, cb) {
        require.ensure([], function (require) {
          cb(null, {
            view: require('./configuration/Configuration').default
          })
        })
      }
    },
    {
      path: 'imports',
      getComponents(nextState, cb) {
        require.ensure([], function (require) {
          cb(null, {
            view: require('./imports/Imports').default
          })
        })
      }
    }
  ]
}

export default routes
