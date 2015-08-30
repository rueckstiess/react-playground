import React from 'react'
import Router from 'ampersand-router'
import Layout from './layout'
import MessagePage from './pages/message'
import config from './config'

export default Router.extend({
  renderPage(page, opts = {layout: true}) {
    if (opts.layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      )
    }
    React.render(page, document.body);
  },

  routes: {
    '': 'welcome',
    'layout': 'layout',
    '*something': 'page404'
  },

  welcome () {
    this.renderPage(<MessagePage title='Hello, YourApp' body='This is just a placeholder without layout.'/>, {layout: false})
  },

  layout () {
    this.renderPage(<MessagePage title='Hello, YourApp' body='This is just a placeholder with layout.'/>)
  },

  page404 () {
    this.renderPage(<MessagePage title="Page not found" body="sorry, please check the URL."/>, {layout: false})
  }

})
