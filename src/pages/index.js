import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <section id="gtfs-overview" class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>General Transit Feed Specification</h1>
          </div>
          <div class="col-md-6">

            <p>The General Transit Feed Specification (GTFS) defines an open standard format for exchanging public transportation schedule, geographic and fare information. GTFS “feeds” let public transit agencies publish data in a format that can be consumed and utilized in applications in an interoperable way.</p>

            <p>The GTFS format (sometimes referred to as GTFS Static) describes scheduled service. Its companion GTFS Realtime format is used to communicate arrival predictions, vehicle positions, and services advisories. At present, this site is mostly concerned with the GTFS Static format.</p>

          </div>
          <div class="col-md-6">

            <p>GTFS data is available for more than 1350 public transportation providers, and hundreds of applications utilize interoperable GTFS data. This site contains GTFS documentation, best practices, and links to tools.</p>

            <small><a href="">More GTFS background</a></small>

          </div>
        </div>
      </div>
    </section>


    <section id="how-do-i-start">
      <div class="container">
        <div class="col-xs-12 col-lg-6">
          <h2>How do I start?</h2>
          <ol>
            <li>Take a look at the <a href="">GTFS data examples</a>.</li>
            <li>Create your own feeds using the <a href="/reference">reference</a> and <a href="">best practices</a> as a guide. <a href="">GTFS Best Practices</a> supplement the GTFS reference to provide clear directions to feed publishers and improve consistency of data structure across feeds.</li>
            <li>Test your feed using <a href="">validation tools</a>.</li>
            <li><a href="">Publish your feed</a>, as described in the Help Center.</li>
          </ol>
          <p>See <a href="">Getting Started</a> for a more complete guide.</p>
        </div>
      </div>
    </section>

  </Layout>
)

export default IndexPage
