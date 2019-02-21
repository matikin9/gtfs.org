import React from 'react';
import { Link } from 'gatsby';
import styles from "./side-nav.module.css";
import { useTranslation } from 'react-i18next';

const SideMenuList = (props) => {
  const { t } = useTranslation()
  const { list } = props

  return list.map((item, index) =>
    <ul key={index} className="list-unstyled">
      <li>
        <Link to={item.anchor}>{t(`menu:${item.name}`)}</Link>
        {item.children && <SideMenuList list={item.children} />}
      </li>
    </ul>
  )
}

const SideNav = (props) => {
  const { content } = props
  return(
    <div className={styles.sideNav}>
      <SideMenuList list={content} />
    </div>
  )
}

export default SideNav
