Package.describe({
  name: '3stack:react-datetimepicker',
  version: '4.14.30_4',
  summary: 'A simple react helper for <ReactDatetimePicker>',
  git: 'https://github.com/3stack-software/meteor-react-datetimepicker',
  documentation: 'README.md'
});

Package.onUse(function(api){
  api.versionsFrom('METEOR@1.4');
  api.export('ReactDatetimePicker', 'client');
  api.imply('3stack:datetimepicker-common@4.14.30');
  api.use([
    'meteor-base',
    'react@15.0.1',
    'tsega:bootstrap3-datetimepicker@4.14.30_4',
    '3stack:datetimepicker-common@4.14.30'
  ], 'client');
  api.addFiles([
    'datetimepicker.jsx'
  ], 'client');
});
