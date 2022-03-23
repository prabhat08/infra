const routes = {
  path: 'settings',
  getComponents(nextState, cb) {
    require.ensure([], function (require) {
      cb(null, {
        content: require('./Settings').default
      })
    })
  },
  childRoutes: [
    {
      path: "home",
      getComponents(nextState, cb) {
        require.ensure([], function (require) {
          cb(null, {
            view: require('./home/Home').default
          })
        })
      }
    },
    {
      path: "imports",
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
