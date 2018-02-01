import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import Drawer from 'react-md/lib/Drawers';
import FontIcon from 'react-md/lib/FontIcons';
import ListItem from 'react-md/lib/Lists/ListItem';
import Toolbar from 'react-md/lib/Toolbars';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      position: 'left',
    };
  }

  handleLogout() {
    const { logout } = this.props;
    logout();
  }

  handleRouteToHome() {
    const { history } = this.props;
    this.handleCloseDrawer();
    history.push('/');
  }

  handleRouteToSearchHistory() {
    const { currentUser, history } = this.props;

    this.handleCloseDrawer();
    history.push(`/users/${currentUser.id}/search-history`);
  }

  handleRouteToSettings() {
    const { currentUser, history } = this.props;
    this.handleCloseDrawer();
    history.push(`/users/${currentUser.id}/settings`);
  }

  handleRouteToIntegratedFlow() {
    const { currentUser, history } = this.props;
    this.handleCloseDrawer();
    history.push(`/users/${currentUser.id}/integrated-flow`);
  }

  handleToggle(visible) {
    this.setState({ visible });
  }

  handleCloseDrawer() {
    this.setState({ visible: false });
  }

  handleToggleLeft() {
    this.setState({ visible: !this.state.visible, position: 'left' });
  }

  renderToolbar() {
    const { currentUser } = this.props;
    const menuIcon = (
      <Button
        className="btn-color btn-align"
        icon
        key="nav"
        onClick={() => this.handleToggleLeft()}
      >
        menu
      </Button>
    );

    const menuIconNavigation = (
      <Button
        className="btn-color-navigation btn-align"
        icon
        key="nav"
        onClick={() => this.handleToggleLeft()}
      >
        menu
      </Button>
    );

    // if (this.props.location.pathname.indexOf('integrated-flow') !== -1) {
    //   return (
    //     <Toolbar
    //       className="integrated-title"
    //       nav={isEmpty(currentUser) ? null : menuIconNavigation}
    //       themed
    //     />
    //   );
    // } else {
    //   return <Toolbar nav={isEmpty(currentUser) ? null : menuIcon} themed title={'Team C'} />;
    // }
  }

  render() {
      alert(1223);
    const left = this.state.position === 'left';
    const close = (
      <Button className="close-arrow" icon onClick={() => this.handleCloseDrawer()}>
        {left ? 'arrow_back' : ''}
      </Button>
    );
    const header = (
      <Toolbar
        actions={left ? close : null}
        className="md-divider-border md-divider-border--bottom"
        nav={left ? null : close}
      />
    );
    const toolbarListItems = [
      <ListItem
        key="home"
        leftIcon={<FontIcon className="drawer-icon">home</FontIcon>}
        onClick={() => this.handleRouteToHome()}
        primaryText="Home"
      />,
      <ListItem
        key="searchHistory"
        leftIcon={<FontIcon className="drawer-icon">assignment</FontIcon>}
        onClick={() => this.handleRouteToSearchHistory()}
        primaryText="Search Log"
      />,
      <ListItem
        key="settings"
        leftIcon={<FontIcon className="drawer-icon">settings</FontIcon>}
        onClick={() => this.handleRouteToSettings()}
        primaryText="Settings"
      />,
      <ListItem
        key="signout"
        leftIcon={<FontIcon className="drawer-icon">person</FontIcon>}
        onClick={() => this.handleLogout()}
        primaryText="Sign Out"
      />,
      <ListItem
        key="integratedflow"
        leftIcon={<FontIcon className="drawer-icon">exit_to_app</FontIcon>}
        onClick={() => this.handleRouteToIntegratedFlow()}
        primaryText="Integrated Flow"
      />,
    ];

    return (
      <div className="toolbar-group">
        <div className="md-grid">
          {this.renderToolbar()}
          <Drawer
            {...this.state}
            header={header}
            navItems={toolbarListItems}
            onVisibilityToggle={() => this.handleToggle()}
            style={{ zIndex: 16 }}
            type={Drawer.DrawerTypes.TEMPORARY}
          />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  currentUser: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  logout: PropTypes.func,
  pathname: PropTypes.string,
};

export default Header;