const routes = {
  path: 'academics',
  content: require('./Academics').default,
  getComponents(nextState, cb) {
    require.ensure([], function (require) {
      cb(null, {
        content: require('./Academics').default
      })
    })
  },
  getIndexRoute(nextState, cb) {
    require.ensure([], function (require) {
      cb(null, {
        components: {
          view: require('./academicsindex/AcademicsIndex').default
        }
      })
    })
  },
  childRoutes: [
    {
      path: ':hierarchyId/overview',
      getComponents(nextState, cb) {
        require.ensure([], function (require) {
          cb(null, {
            view: require('./overview/Overview').default
          })
        })
      }
    },
    {
      path: ':hierarchyId/standards',
      getComponents(nextState, cb) {
        require.ensure([], function (require) {
          cb(null, {
            view: require('./standards/Standards').default
          })
        })
      }
    },
    {
      path: ':hierarchyId/rubrics',
      getComponents(nextState, cb) {
        require.ensure([], function (require) {
          cb(null, {
            view: require('./rubrics/Rubrics').default
          })
        })
      }
    }
  ]
}

export default routes
