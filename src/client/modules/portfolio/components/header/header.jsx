/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Helmet } from 'react-helmet';
import Icon from '@components/common/icon/icon.async';
import throttle from '@utils/throttle';
import isServer from '@utils/isServer';
import resume from '@assets/resume.pdf';
import PrimaryLink from '@components/common/PrimaryLink/PrimaryLink';
import MenuAsync from '../menu/menu.async';
import styles from './header.scss';

const hamBefore = `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`;
const hamBeforeActive = `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`;
const hamAfter = `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`;
const hamAfterActive = `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`;

const Navigation = [
  {
    name: 'About',
    to: '/#about',
    page: '/about',
  },
  {
    name: 'Experience',
    to: '/#experience',
    page: '/experience',
  },
  // {
  //   name: 'Work',
  //   to: '/#work',
  //   page: '/work',
  // },
  {
    name: 'Contact',
    to: '/#contact',
    page: '/contact',
  },
];

class Header extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      scrollDirection: 'none',
      lastScrollTop: 0,
      isMenuOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => throttle(this.handleScroll()));
  }

  // eslint-disable-next-line react/no-access-state-in-setstate
  toggleMenu = () => {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  };

  handleScroll = () => {
    if (isServer) return;
    const DELTA = 5;
    const { scrollDirection, lastScrollTop, isMenuOpen } = this.state;
    const { scrollY, innerHeight } = window;
    if (Math.abs(lastScrollTop - scrollY) <= DELTA || isMenuOpen) return;
    if (scrollY < DELTA) {
      this.setState({ scrollDirection: 'none' });
    } else if (scrollY > lastScrollTop && scrollY > 100) {
      if (scrollDirection !== 'down')
        this.setState({ scrollDirection: 'down' });
    } else if (scrollY + innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') this.setState({ scrollDirection: 'up' });
    }
    this.setState({ lastScrollTop: scrollY });
  };

  getHeaderStyle = () => {
    const { scrollDirection } = this.state;
    return {
      height: scrollDirection === 'none' ? '100px' : '70px',
      boxShadow:
        scrollDirection === 'up' ? `0 10px 30px -10px #020c1bb3` : 'none',
      transform: `translateY(${scrollDirection === 'down' ? '-70px' : '0px'})`,
    };
  };

  // eslint-disable-next-line complexity
  getHamburgerStyle = () => {
    const { isMenuOpen } = this.state;
    return (
      <Helmet>
        <style>
          {`
          .${styles.hamburgerInner}{
            transition-delay: ${isMenuOpen ? '0.12s' : '0s'};
            transform: rotate(${isMenuOpen ? '225deg' : '0deg'})!important;
            transition-timing-function: cubic-bezier(${
              isMenuOpen ? '0.215, 0.61, 0.355, 1' : '0.55, 0.055, 0.675, 0.19'
            });
          }
          .${styles.hamburgerInner}::before{
            width:${isMenuOpen ? '100%' : '120%'};
            top:${isMenuOpen ? '0' : '-10px'};
            opacity:${isMenuOpen ? '0' : '1'};
            transition:${isMenuOpen ? hamBeforeActive : hamBefore};
          }
          .${styles.hamburgerInner}::after{
            width:${isMenuOpen ? '100%' : '80%'};
            bottom:${isMenuOpen ? '0' : '-10px'};
            transform:rotate(${isMenuOpen ? '-90deg' : '0'});
            transition:${isMenuOpen ? hamAfterActive : hamAfter};
          }
          `}
        </style>
      </Helmet>
    );
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <header
        id="Header"
        className={styles.header}
        style={this.getHeaderStyle()}
      >
        <nav>
          <div className={styles.logo}>
            <PrimaryLink href="/" aria-label="home" internal>
              <Icon name="logo" />
              <span>A</span>
            </PrimaryLink>
          </div>

          <div
            role="button"
            className={styles.hamburger}
            aria-label="Menu"
            onClick={() => this.toggleMenu()}
          >
            {this.getHamburgerStyle()}
            <div className={styles.hamburgerBox}>
              <div className={styles.hamburgerInner}></div>
            </div>
          </div>

          <div className={styles.links}>
            <ol>
              {Navigation.map(({ name, to, page }) => (
                <li key={name} className="text-base">
                  <PrimaryLink
                    href={typeof window !== 'undefined' ? to : page}
                    internal={typeof window !== 'undefined'}
                  >
                    {name}
                  </PrimaryLink>
                </li>
              ))}
            </ol>
            <PrimaryLink href={resume}>
              <div className={styles.resumeButton}>Resume</div>
            </PrimaryLink>
          </div>
        </nav>
        {isMenuOpen && (
          <MenuAsync
            isMenuOpen={isMenuOpen}
            toggleMenu={this.toggleMenu}
            links={Navigation}
          />
        )}
      </header>
    );
  }
}

export default Header;
