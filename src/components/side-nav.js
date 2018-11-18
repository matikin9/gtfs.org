import React from 'react';
import { Link } from 'gatsby';
import styles from "./side-nav.module.css";





class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAnchor: null
    }
  }

  componentDidMount() {
    this.calcCurrentAnchor = this.calcCurrentAnchor.bind(this);
    setInterval(this.calcCurrentAnchor, 500);
    console.log(this.props);
  }

  componentDidUpdate() {
    // console.log('nav receiving offset: ', this.props.currentOffset);
    // this.calcCurrentAnchor();
  }

  calcCurrentAnchor() {
    const pageAnchors = this.props.pageAnchors;
    for (let i = 0; i < pageAnchors.length; i++) {
      // console.log('checking anchor: ', pageAnchors[i])
      if (this.props.currentOffset > pageAnchors[i].offsetTop && this.props.currentOffset < pageAnchors[i+1].offsetTop) {
        // console.log('updating current anchor to :', pageAnchors[i]);
        let currentAnchor = pageAnchors[i];
        console.log('updating current anchor: ', currentAnchor.getAttribute('href'))
        this.setState({currentAnchor: currentAnchor});
        break;
      }
    }
  }

  styleIfActive(itemAnchor) {
    if (this.state.currentAnchor) {
      let currentAnchor = this.props.route + this.state.currentAnchor.getAttribute('href')
      // console.log('itemAnchor, currentAnchor, this.props', itemAnchor, currentAnchor)
      if (itemAnchor === currentAnchor) {
        return {color: '#61b5d9'}
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
