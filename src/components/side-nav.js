import React from 'react';
import { Link } from 'gatsby';
import styles from "./side-nav.module.css";





class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null
    this.state = {
      currentAnchor: null
    }
  }

  componentDidMount() {
    this.calcCurrentAnchor = this.calcCurrentAnchor.bind(this);
    this.interval = setInterval(this.calcCurrentAnchor, 50);
    console.log(this.props);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calcCurrentAnchor() {
    const pageAnchors = this.props.pageAnchors;
    for (let i = 0; i < pageAnchors.length; i++) {
      // console.log('checking anchor: ', pageAnchors[i])
      if (this.props.currentOffset > pageAnchors[i].offsetTop) {
        // console.log('updating current anchor to :', pageAnchors[i]);
        if (i+1 == pageAnchors.length) {//at last anchor, can't check next
          let currentAnchor = pageAnchors[i];
          // console.log('updating current anchor: ', currentAnchor.getAttribute('href'))
          this.setState({currentAnchor: currentAnchor});
          break;
        } else if (this.props.currentOffset < pageAnchors[i+1].offsetTop) {
          let currentAnchor = pageAnchors[i];
          // console.log('updating current anchor: ', currentAnchor.getAttribute('href'))
          this.setState({currentAnchor: currentAnchor});
          break;
        }
      }
    }
  }

  styleIfActive(itemAnchor) {
    if (this.state.currentAnchor) {
      let currentAnchor = this.props.route + this.state.currentAnchor.getAttribute('href')
      // console.log('itemAnchor, currentAnchor, this.props', itemAnchor, currentAnchor)
      if (itemAnchor === currentAnchor) {
        return null
        // return {
        //   color: '#61b5d9',
        //   fontWeight: 'bold'
        // }
      } else {
        return null
      }
    }
  }

  render() {
    const { content } = this.props
    return(
        <div className={styles.container}>
            {content.map((section,index) =>
              <div key={index}>
                <li><Link to={section.anchor} style={this.styleIfActive(section.anchor)}>{section.name}</Link></li>
                <div style={{ marginLeft: 10 }}>
                  {section.children && section.children.map((firstChild,indexTwo) =>
                    <li key={indexTwo}>
                      <Link to={firstChild.anchor} style={this.styleIfActive(firstChild.anchor)}>{firstChild.name}</Link>
                        {firstChild.children && firstChild.children.map((secondChild, indexThree) =>
                          <div style={{ marginLeft: 10 }}>
                            <li key={indexThree}><Link to={secondChild.anchor} style={this.styleIfActive(secondChild.anchor)}>{secondChild.name}</Link></li>
                              {secondChild.children && secondChild.children.map((thirdChild) =>
                                <li style={{ marginLeft: 10 }}><Link to={thirdChild.anchor} style={this.styleIfActive(thirdChild.anchor)}>{thirdChild.name}</Link></li>
                              )}
                          </div>
                        )}
                    </li>
                  )}
                </div>
              </div>
            )}
          </div>
        )
      }
}

export default SideNav
