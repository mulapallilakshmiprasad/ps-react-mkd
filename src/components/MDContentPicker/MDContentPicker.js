import React from 'react';
import PropTypes from 'prop-types';
import { ContentPicker } from 'box-ui-elements';
import { IntlProvider } from 'react-intl';

class MDContentPicker extends React.Component {
  render () {
      const {folderId, token } = this.props;
      return (
          <div>
            <IntlProvider locale="en">
                <ContentPicker
                    rootFolderId={folderId}
                    token={token}
                    {...this.props}
                />
            </IntlProvider>
          </div>
      );
  }
}

MDContentPicker.propTypes = {
    /** File id to be passed */
    folderId: PropTypes.number.isRequired,
    /** Token from Box Api to be passed */
    token: PropTypes.string.isRequired
};

export default MDContentPicker;



