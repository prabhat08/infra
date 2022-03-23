const routes = {
  path: 'hierarchy',
  content: require('./Hierarchy').default,
  // getComponents(nextState, cb) {
  //   require.ensure([], function (require) {
  //     cb(null, {
  //       content: require('./Hierarchy').default
  //     })
  //   })
  // },

  childRoutes: [
    {
      path: "overview",
      getComponents(nextState, cb) {
        require.ensure([], function (require) {
          cb(null, {
            view: require('./overview/Overview').default
          })
        })
      }
    },
    {
      path: "standards",
      getComponents(nextState, cb) {
        require.ensure([], function (require) {
          cb(null, {
            view: require('./standards/Standards').default
          })
        })
      }
    }
  ]
}

export default routes
