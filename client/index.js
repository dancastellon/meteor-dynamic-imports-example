import React from 'react';
import ReactDOM from 'react-dom';
import ContentEditor from '/imports/ui/components/ContentEditor';

Meteor.startup(function () {
  ReactDOM.render(
    <ContentEditor />,
    document.getElementById('app')
  );
});
