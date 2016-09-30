import React, { Component, PropTypes } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SettingsButton extends Component {

  render() {
    const { toggleSettings } = this.props;
    return (
      <div className="settingsButton">
        <button onClick={toggleSettings}>Settings</button>
      </div>
    );
  }
}

SettingsButton.propTypes = { toggleSettings: PropTypes.func };
export default SettingsButton;
