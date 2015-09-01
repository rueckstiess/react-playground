import React from 'react'
import Router from 'ampersand-router'
import Layout from './layout'
import MessagePage from './pages/message'
import D3DemoPage from './pages/d3demo'
import config from './config'

export default Router.extend({
  renderPage(page, opts = {layout: true}) {
    // if requested, wrap page in layout
    if (opts.layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      )
    }
    React.render(page, document.body)
  },

  routes: {
    '': 'welcome',
    'd3': 'd3demo',
    '*something': 'page404'
  },

  welcome () {
    this.renderPage(
      <div>
        <MessagePage
          title='Welcome to the React Playground'
          body='Click on the links at the top to look at the different examples.'
        />
      </div>
    , {layout: true})
  },

  d3demo () {
    this.renderPage(<D3DemoPage/>, {layout: true})
  },

  page404 () {
    this.renderPage(<MessagePage
      title="Page not found" body="sorry, please check the URL."
    />, {layout: false})
  }

})
