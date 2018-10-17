import React from 'react';
// import { Link } from 'gatsby';
import onClickOutside from 'react-onclickoutside';
import styles from './dropdown.module.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      title: this.props.title
    }
  }

  handleClickOutside() {
    this.setState({
      open: false
    })
  }

  toggleList() {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    const {list} = this.props;
    const {title, open} = this.state;
    return(
      <div className={styles.container}>
        <div className={styles.title} onClick={() => this.toggleList()}>
          {title}
        </div>
        <div className={styles.items}>
          {open && <ul>
            {list.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>}
        </div>
      </div>
    )
  }


}

export default onClickOutside(Dropdown);
