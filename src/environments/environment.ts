// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDYv02aLpqUgtJIP9CbT31mOHpu0a77xLM",
    authDomain: "cdk-admin.firebaseapp.com",
    databaseURL: "https://cdk-admin.firebaseio.com",
    projectId: "cdk-admin",
    storageBucket: "cdk-admin.appspot.com",
    messagingSenderId: "422055031001",
    appId: "1:422055031001:web:261c3f03c6dbe830df8ec8",
    measurementId: "G-NYGXB63DCC"
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