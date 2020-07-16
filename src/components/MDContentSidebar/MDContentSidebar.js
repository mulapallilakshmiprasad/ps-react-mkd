import React from 'react';
import PropTypes from 'prop-types';
import { ContentSidebar } from 'box-ui-elements';
import { IntlProvider } from 'react-intl';

class MDContentSidebar extends React.Component {
  render () {
      const {fileId, token } = this.props;
      return (
          <div>
            <IntlProvider locale="en">
                <ContentSidebar
                    fileId={fileId}
                    hasActivityFeed
                    hasMetadata
                    hasSkills
                    hasVersions
                    token={token}
                    {...this.props}
                />
            </IntlProvider>
          </div>
      );
  }
}

MDContentSidebar.propTypes = {
    /** File id to be passed */
    fileId: PropTypes.number.isRequired,
    /** Token from Box Api to be passed */
    token: PropTypes.string.isRequired
};

export default MDContentSidebar;

