import React from 'react'
import { Link } from 'gatsby'

const SideNav = ({ content }) => (
  <div>
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
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {content.sections.map((section,index) =>
            <div key={index}>
              <h5>{section.name}</h5>
              {section.children.map(childSection => <h6>{childSection.name}</h6>)}
            </div>
            )
          }
        </Link>
      </h3>
    </div>
  </div>
)

export default SideNav
