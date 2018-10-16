import React from 'react'
import { Link } from 'gatsby'

const SideNav = ({ pageContents }) => (
  <div
    style={{
      background: '#172f50',
      marginLeft: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 80,
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
          Page Contents
        </Link>
      </h3>
    </div>
  </div>
)

export default SideNav
