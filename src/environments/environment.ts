// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBwlk0KMM75nBsZ8L7j9cZ5N5x0fwqfBjg',
    authDomain: 'newproject-5d731.firebaseapp.com',
    databaseURL: 'https://newproject-5d731.firebaseio.com',
    projectId: 'newproject-5d731',
    storageBucket: 'newproject-5d731.appspot.com',
    messagingSenderId: '737689833575'
  },
  mailApi: '/assets/list.json'
};
export const palete = {
    primary: '#D32F2F',
    accent: '#E65100',
    warm: '#C2185B',
    name: '#D50000',
    secondary: '#D81B60',
    tertiary: '#8E24AA',
    quaternary: '#5E35B1',
    quinary: '#3949AB',
    secondaryLight: '#E91E63',
    tertiaryLight: '#9C27B0',
    quaternaryLight: '#673AB7',
    quinaryLight: '#3F51B5'       
}