import React from 'react';
import PropTypes from 'prop-types';
import { ContentUploader } from 'box-ui-elements';
import { IntlProvider } from 'react-intl';

class MDContentUploader extends React.Component {
  render () {
      const {folderId, token } = this.props;
      return (
          <div>
            <IntlProvider locale="en">
                <ContentUploader
                    rootFolderId={folderId}
                    token={token}
                />
            </IntlProvider>
          </div>
      );
  }
}

MDContentUploader.propTypes = {
    /** File id to be passed */
    folderId: PropTypes.number.isRequired,
    /** Token from Box Api to be passed */
    token: PropTypes.string.isRequired
};

export default MDContentUploader;