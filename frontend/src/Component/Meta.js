import React from 'react';
import { Helmet } from 'react-helmet';
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title} </title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to A1SHOP',
  description: 'We shell the best products in cheap price',
  keywords: 'electronic,mobile,cheap electronics',
};
export default Meta;
