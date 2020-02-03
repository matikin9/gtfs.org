import React from 'react';
import Layout from '../components/layout';
import {graphql, navigate} from 'gatsby';
import rehypeReact from 'rehype-react';
import styles from './doc-page.module.css';
import SideNav from "../components/side-nav";
import Footer from '../components/footer';
import {useTranslation} from 'react-i18next';
import {getPathForLanguage} from '../lib/i18n';
import Agency from "../components/Agency";
import Stops from "../components/Stops";
import Routes from "../components/Routes";
import Trips from "../components/Trips";
import StopTimes from "../components/StopTimes";
import CalendarDates from "../components/CalendarDates";
import Calendar from "../components/Calendar";
import FareAttributes from "../components/FareAttributes";
import FareRules from "../components/FareRules";
import Shapes from "../components/Shapes";
import Transfers from "../components/Transfers";
import FeedInfo from "../components/FeedInfo";
import Frequencies from "../components/Frequencies";
import AgencySpec from "../components/AgencySpec";
import StopsSpec from "../components/StopsSpec";
import StopsSpecLevel from "../components/StopsSpecLevel";
import RoutesSpec from "../components/RoutesSpec";
import TripsSpecCalendarDates from "../components/TripsSpecCalendarDates";
import TripsSpecCalendar from "../components/TripsSpecCalendar";
import TripsSpec from "../components/TripsSpec";
import StopTimesSpec from "../components/StopTimesSpec";
import CalendarSpec from "../components/CalendarSpec";
import CalendarDatesSpec from "../components/CalendarDatesSpec";
import AttributionsSpec from "../components/AttributionsSpec";
import FareAttributesSpec from "../components/FareAttributesSpec";
import FareRulesSpec from "../components/FareRulesSpec";
import FeedInfoSpec from "../components/FeedInfoSpec";
import FrequenciesSpec from "../components/FrequenciesSpec";
import LevelsSpec from "../components/LevelsSpec";
import PathwaysSpec from "../components/PathwaysSpec";
import ShapeSpec from "../components/ShapesSpec";
import TransfersSpec from "../components/TransfersSpec";
import TranslationsSpec from "../components/TranslationsSpec";
import CoreButton from "../components/CoreButton";
import AttributionButton from "../components/AttributionButton";
import FareAttributesButton from "../components/FareAttributesButton";
import FareRulesButton from "../components/FareRulesButton";
import FeedInfoButton from "../components/FeedInfoButton";
import LevelsButton from "../components/LevelsButton";
import PathwaysButton from "../components/PathwaysButton";
import ShapesButton from "../components/ShapesButton";
import TransfersButton from "../components/TransfersButton";
import TranslationsButton from "../components/TranslationsButton";
import FrequenciesButton from "../components/FrequenciesButton";
import AgencyCheckBox from "../components/AgencyCheckBox";
import StopsCheckbox from "../components/StopsCheckbox";
import RoutesCheckbox from "../components/RoutesCheckbox";
import TripsCheckbox from "../components/TripsCheckbox";
import StopTimesCheckbox from "../components/StopTimesCheckbox";
import CalendarCheckbox from "../components/CalendarCheckbox";
import CalendarDatesCheckbox from "../components/CalendarDatesCheckbox";
import FareAttributesCheckbox from "../components/FareAttributesCheckbox";
import FareRulesCheckbox from "../components/FareRulesCheckbox";
import FeedInfoCheckbox from "../components/FeedInfoCheckbox";
import FrequenciesCheckbox from "../components/FrequenciesCheckbox";
import TransfersCheckbox from "../components/TransfersCheckbox";
import ShapesCheckbox from "../components/ShapesCheckbox";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "agency": Agency,
    "stops": Stops,
    "routes": Routes,
    "trips": Trips,
    "stoptimes": StopTimes,
    "calendar": Calendar,
    "calendardates": CalendarDates,
    "fareattributes": FareAttributes,
    "farerules": FareRules,
    "shapes": Shapes,
    "transfers": Transfers,
    "feedinfo": FeedInfo,
    "frequencies": Frequencies,
    "agencyspec": AgencySpec,
    "stopsspec": StopsSpec,
    "stopsspeclevel": StopsSpecLevel,
    "routesspec": RoutesSpec,
    "tripsspeccalendardates": TripsSpecCalendarDates,
    "tripsspec": TripsSpec,
    "tripsspeccalendar": TripsSpecCalendar,
    "stoptimesspec": StopTimesSpec,
    "calendarspec": CalendarSpec,
    "calendardatesspec": CalendarDatesSpec,
    "attributionsspec": AttributionsSpec,
    "fareattributesspec": FareAttributesSpec,
    "farerulesspec": FareRulesSpec,
    "feedinfospec": FeedInfoSpec,
    "frequenciesspec": FrequenciesSpec,
    "levelsspec": LevelsSpec,
    "pathwaysspec": PathwaysSpec,
    "shapesspec": ShapeSpec,
    "transfersspec": TransfersSpec,
    "translationsspec": TranslationsSpec,
    "corebutton": CoreButton,
    "attributionbutton": AttributionButton,
    "farerulesbutton": FareRulesButton,
    "fareattributesbutton": FareAttributesButton,
    "feedinfobutton": FeedInfoButton,
    "levelsbutton": LevelsButton,
    "pathwaysbutton": PathwaysButton,
    "shapesbutton": ShapesButton,
    "transfersbutton": TransfersButton,
    "translationsbutton": TranslationsButton,
    "frequenciesbutton": FrequenciesButton,
    "agencycheckbox": AgencyCheckBox,
    "stopscheckbox": StopsCheckbox,
    "routescheckbox": RoutesCheckbox,
    "tripscheckbox": TripsCheckbox,
    "stoptimescheckbox": StopTimesCheckbox,
    "calendarcheckbox": CalendarCheckbox,
    "calendardatescheckbox": CalendarDatesCheckbox,
    "fareattributescheckbox": FareAttributesCheckbox,
    "farerulescheckbox": FareRulesCheckbox,
    "feedinfocheckbox": FeedInfoCheckbox,
    "frequenciescheckbox": FrequenciesCheckbox,
    "transferscheckbox": TransfersCheckbox,
    "shapescheckbox": ShapesCheckbox
  },
}).Compiler

function VersionSelect(props) {
  const {t, i18n} = useTranslation();
  return (
      <div className="card mb-4 mt-3">
        <div className="card-body">
          <form className={styles.versionSelectForm}>
            <label htmlFor="versionSelect">{t('version')}</label>
            <select
                id="versionSelect"
                value={props.location.pathname}
                onChange={(event) => navigate(event.target.value)}
            >
              <option value={getPathForLanguage('/reference/realtime/v2/', i18n.language)}>2.0 ({t('latest')})</option>
              <option value={getPathForLanguage('/reference/realtime/v1/', i18n.language)}>1.0</option>
            </select>
          </form>
        </div>
      </div>
  );
}


function throttled(delay, fn) {
  let lastCall = 0;
  return (...args) => {
    const now = (new Date()).getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  }
}

export default class DocPage extends React.Component {
  constructor(props) {
    super(props);

    this.anchors = [];
    this.state = {
      pageYOffset: 0
    }
    this.trackScrollLocation = this.trackScrollLocation.bind(this);
    this.logOffset = this.logOffset.bind(this);
    this.throttledLogOffset = throttled(500, this.logOffset);
  }

  componentDidMount() {
    this.grabAnchors();
    this.trackScrollLocation();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttledLogOffset);
  }

  grabAnchors() {
    this.anchors = document.getElementsByClassName('anchor');
  }

  logOffset() {
    const newOffset = window.pageYOffset;
    this.setState({
      pageYOffset: newOffset
    });
  }

  trackScrollLocation() {
    window.addEventListener('scroll', this.throttledLogOffset);
  }

  formatTable(hast) {
    hast.properties.className = ['table'];
    return {
      children: [hast],
      properties: {
        className: ['table-responsive']
      },
      tagName: 'div',
      type: 'element'
    };
  }

  render() {
    const pageYOffset = this.state.pageYOffset;

    const { data, location } = this.props
    const { markdownRemark, allSideMenu } = data // data.markdownRemark holds our post data
    const { frontmatter } = markdownRemark
    const { lang } = frontmatter
    const { pathname } = location

    const pageContents = allSideMenu ? allSideMenu.edges[0].node.contents : [];
    const pageTitle = allSideMenu ? allSideMenu.edges[0].node.title : '';
    const showTitle = pathname.includes('/reference/realtime/');
    const showVersionControl = pathname.includes('/reference/realtime/');

    const hast = markdownRemark.htmlAst.children.reduce((memo, hast) => {
      if (hast.tagName === 'table') {
        hast = this.formatTable(hast);
      }
      if (hast.children) {
        hast.children.forEach(hast => {
          if (hast.tagName === 'table') {
            hast = this.formatTable(hast);
          }
        });
      }

      if (hast.type !== 'text') {
        memo.push(hast);
      }

      return memo;
    }, []);

    return (
        <Layout lang={lang} location={location}>
          <div className={styles.container}>
            <div className={styles.navContainer}>
              <SideNav
                  content={pageContents}
                  route={pathname}
                  currentOffset={pageYOffset}
                  pageAnchors={this.anchors}
              />
            </div>
            <div className={styles.docContainer}>
              {showTitle && <h1>{pageTitle}</h1>}
              {showVersionControl && <VersionSelect location={location}/>}
              {renderAst({
                children: hast,
                type: 'root'
              })}
            </div>
            <Footer className="footerDocPage"/>
          </div>
        </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        path,
        lang
      }
    }
    
    allSideMenu(filter: {sourceInstancePath: {eq: $path}}) {
      edges {

        node {
          id
          sourceInstancePath
          title
          contents {
            name
            anchor
            children {
              name
              anchor
              children {
                name
                anchor
                children {
                  name
                  anchor
                }
              }
            }
          }
        }
      }
    }
  }
`
