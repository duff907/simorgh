import React from 'react';
import { shape, element } from 'prop-types';
import articlePropTypes from '../../models/propTypes/article';
import ErrorMain from '../ErrorMain';
import nodeLogger from '../../helpers/logger.node';
import deepGet from '../../helpers/json/deepGet';

const logger = nodeLogger(__filename);

const constructRenderObject = data => ({
  status: deepGet(['status'], data) ? data.status : 500,
  assetData: deepGet(['data'], data),
});

const shouldRender = data => {
  let hasDataAnd200Status = false;
  const { status, assetData } = constructRenderObject(data);

  if (assetData && status === 200) hasDataAnd200Status = true;

  return { hasDataAnd200Status, status, assetData };
};

const WithData = Component => {
  const DataContainer = ({ data, ...props }) => {
    const { hasDataAnd200Status, status, assetData } = shouldRender(data);
    if (hasDataAnd200Status) {
      try {
        return <Component assetData={assetData} {...props} />;
      } catch (err) {
        logger.error(err);
      }
    }

    DataContainer.propTypes = {
      data: shape(articlePropTypes),
    };

    DataContainer.defaultProps = {
      data: shape,
    };

    return <ErrorMain status={status} />;
  };

  return DataContainer;
};

WithData.propTypes = {
  Component: element,
};

export default WithData;
