import React from 'react';
import PropTypes from 'prop-types';
import { ContentPreview } from 'box-ui-elements';
import { IntlProvider } from 'react-intl';

class MDContentPreview extends React.Component {
  render () {
      const {fileId, token } = this.props;
      return (
          <div>
            <IntlProvider locale="en">
                <ContentPreview
                    contentSidebarProps={{
                        detailsSidebarProps: {
                            hasAccessStats: true,
                            hasClassification: true,
                            hasNotices: true,
                            hasProperties: true,
                            hasRetentionPolicy: true,
                            hasVersions: true,
                        },
                        hasActivityFeed: true,
                        hasMetadata: true,
                        hasSkills: true,
                        hasVersions: true,
                    }}
                    hasHeader={true}
                    fileId={fileId}
                    token={token}
                    {...this.props}
                />
            </IntlProvider>
          </div>
      );
  }
}

MDContentPreview.propTypes = {
    /** File id to be passed */
    fileId: PropTypes.number.isRequired,
    /** Token from Box Api to be passed */
    token: PropTypes.string.isRequired
};

export default MDContentPreview;

