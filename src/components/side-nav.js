import React from 'react';
import { Link } from 'gatsby';
import styles from "./side-nav.module.css";



const SideNav = ({ content }) => (
    <div className={styles.container}>
      {console.log('received contents:', content)}
          {content.map((section,index) =>
            <div key={index}>
              <li><Link to={section.anchor}>{section.name}</Link></li>
              <div style={{ marginLeft: 10 }}>
                {section.children && section.children.map((firstChild,indexTwo) =>
                  <li key={indexTwo}>
                    <Link to={firstChild.anchor} className={styles.subcategory}>{firstChild.name}</Link>
                      {firstChild.children && firstChild.children.map((secondChild, indexThree) =>
                        <div style={{ marginLeft: 10 }}>
                          <li key={indexThree}><Link to={secondChild.anchor} className={styles.subcategory}>{secondChild.name}</Link></li>
                            {secondChild.children && secondChild.children.map((thirdChild) =>
                              <li style={{ marginLeft: 10 }}>{thirdChild}</li>
                            )}
                        </div>
                      )}
                  </li>
                )}
              </div>
            </div>
            )
          }
    </div>
)


export default SideNav
