import React from 'react';
import PropTypes from 'prop-types';
import { ContentOpenWith } from 'box-ui-elements';
import { IntlProvider } from 'react-intl';

class MDContentOpenWith extends React.Component {
  render () {
      const {fileId, token } = this.props;
      return (
          <div>
              <IntlProvider locale="en">
                    <ContentOpenWith
                        fileId={fileId}
                        token={token}
                    />
                </IntlProvider>
          </div>
      );
  }
}

MDContentOpenWith.propTypes = {
    /** File id to be passed */
    fileId: PropTypes.number.isRequired,
    /** Token from Box Api to be passed */
    token: PropTypes.string.isRequired
};

export default MDContentOpenWith;



