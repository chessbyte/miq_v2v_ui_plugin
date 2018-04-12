import React from 'react';
import PropTypes from 'prop-types';
import { Icon, ListView, Grid } from 'patternfly-react';
import OverviewEmptyState from '../OverviewEmptyState/OverviewEmptyState';

const InfrastructureMappingsList = ({
  transformationMappings,
  createInfraMappingClick
}) => (
  <Grid.Col
    xs={12}
    style={{
      paddingBottom: 100,
      height: '100%',
      backgroundColor: '#fff'
    }}
  >
    {transformationMappings.length > 0 ? (
      <React.Fragment>
        <div className="heading-with-link-container">
          <div className="pull-left">
            <h3>{__('Infrastructure Mappings')}</h3>
          </div>
          <div className="pull-right">
            {/** todo: create IconLink in patternfly-react * */}
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                createInfraMappingClick();
              }}
            >
              <Icon type="pf" name="add-circle-o" />
              &nbsp;{__('Create Infrastructure Mapping')}
            </a>
          </div>
        </div>

        <ListView>
          {transformationMappings.map(mapping => (
            <ListView.Item
              key={mapping.id}
              heading={mapping.name}
              description={mapping.description}
              additionalInfo={[
                <ListView.InfoItem key={0}>
                  <Icon type="pf" name="cluster" />
                  <strong>2</strong>&nbsp;{__('Source Clusters')}
                </ListView.InfoItem>,
                <ListView.InfoItem key={1}>
                  <Icon type="pf" name="cluster" />
                  <strong>2</strong>&nbsp;{__('Target Clusters')}
                </ListView.InfoItem>
              ]}
            >
              <Grid.Row>
                <Grid.Col sm={11}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Grid.Col>
              </Grid.Row>
            </ListView.Item>
          ))}
        </ListView>
      </React.Fragment>
    ) : (
      <OverviewEmptyState
        showWizardAction={createInfraMappingClick}
        description="Create an infrastructure mapping to later be used by a migration plan."
        buttonText="Create Infrastructure Mapping"
      />
    )}
  </Grid.Col>
);

InfrastructureMappingsList.propTypes = {
  transformationMappings: PropTypes.array,
  createInfraMappingClick: PropTypes.func
};

export default InfrastructureMappingsList;