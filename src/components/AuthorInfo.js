import React, { Component } from 'react';
import { connect } from 'react-redux';

class AuthorInfo extends Component {


  render () {

    const { user } = this.props;
    if (!user) {
        return null;
    }

    return <div style={{paddingTop: '1%'}} className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {user: state.users.find(user => user.id === ownProps.author)};
};

export default connect(mapStateToProps)(AuthorInfo);
