const SUBNAV_VISIBLE_CLASS = 'navigation__subnav--visible';
const SUBNAV_TARGET_ATTR = 'data-nav-element';
const NAV_ITEM_CLASS = 'navigation__item';
const BURGER_CLASS = 'navigation-toggle';

class NavigationBurger {
  constructor() {
    this.navToggle = document.getElementById(BURGER_CLASS);
    this.init();
  }

  init() {
    this.navToggle.addEventListener('click', event => {
        const target = document.getElementById(event.target.getAttribute('data-target'));
        target.classList.toggle('navigation--visible');
    });
  }
}

class SubNavigation {
  constructor() {
    this.navItems = Array.from(
      document.getElementsByClassName(`${NAV_ITEM_CLASS}--expandable`)
    );
    this.init();
  }

  showSubNav(id) {
    const subNav = document.getElementById(id);
    subNav.classList.add(SUBNAV_VISIBLE_CLASS);
  }

  isSubNavVisible(id) {
    const subNav = document.getElementById(id);
    return subNav.classList.contains(SUBNAV_VISIBLE_CLASS);
  }

  hideSubNav(id) {
    const subNav = document.getElementById(id);
    subNav.classList.remove(SUBNAV_VISIBLE_CLASS);
  }

  hideSubNavs() {
    this.navItems.forEach(element => {
      element.classList.remove(`${NAV_ITEM_CLASS}--expanded`);
      const subNavId = element.getAttribute(SUBNAV_TARGET_ATTR);
      this.hideSubNav(subNavId);
    });
  }

  init() {
    this.navItems.forEach(element => {
      ['click'].map((e) => {
        element.addEventListener(e, event => {
          event.preventDefault();
          const subNavId = event.target.getAttribute(SUBNAV_TARGET_ATTR);
          const isVisible = this.isSubNavVisible(subNavId);
          this.hideSubNavs();
          if (!isVisible) {
            event.target.classList.add(`${NAV_ITEM_CLASS}--expanded`);
            this.showSubNav(subNavId);
          }
        })
      });
    });
  }
}

new NavigationBurger();

new SubNavigation();