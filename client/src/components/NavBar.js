import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';



//
// const styles = {
//   background: {
//     style={stylesGradient}
//      colors={['#5ED2A0', '#339CB1']}
//   }
// }
class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item style={{ color: 'white' }} name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item style={{ color: 'white' }} name='Login' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div style={{ background: 'linear-gradient(to right, #38ef7d, #11998e)', color: 'white' }}>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item style={{ color: 'white' }} name='home' />
          </Link>
          <Link to='/Profile'>
            <Menu.Item style={{ color: 'white' }}  name='profile' />
          </Link>

          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));