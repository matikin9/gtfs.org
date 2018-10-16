import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#172f50',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          GTFS Home
        </Link>

        <Link
          to="/reference"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          GTFS Core Reference
        </Link>
      </h3>
    </div>
  </div>
)

export default Header
