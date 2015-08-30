import app from 'ampersand-app'
import Router from './router'
import styles from './styles/index.less'

// expose app to browser console
window.app = app

app.extend({
  init () {
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()
