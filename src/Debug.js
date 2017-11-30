import Reactotron from 'reactotron-react-js'
import Immutable from 'seamless-immutable'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'

if (process.env.NODE_ENV === 'development') {
  // https://github.com/infinitered/reactotron for more options!
  Reactotron
    .configure({ name: 'Survey Web' })
    .use(reduxPlugin({ onRestore: Immutable }))
    .connect()

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear()

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron
}