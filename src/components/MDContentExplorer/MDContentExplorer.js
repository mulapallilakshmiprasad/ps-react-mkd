import React from 'react';
import PropTypes from 'prop-types';
import { ContentExplorer } from 'box-ui-elements';
import { IntlProvider } from 'react-intl';

class MDContentExplorer extends React.Component {
  render () {
      const {fileId, token } = this.props;
      return (
          <div>
              <IntlProvider locale="en">
                <ContentExplorer
                    fileId={fileId}
                    token={token}
                    />
              </IntlProvider>
          </div>
      );
  }
}

MDContentExplorer.propTypes = {
    /** File id to be passed */
    fileId: PropTypes.number.isRequired,
    /** Token from Box Api to be passed */
    token: PropTypes.string.isRequired
};

export default MDContentExplorer;
