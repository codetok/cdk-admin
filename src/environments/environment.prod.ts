export const environment = {
  production: true
};


export const palete = {
    primary: 'mat-red',
    accent: 'mat-orange',
    warm: 'mat-red',
    name: 'red',
    secondary: '#D81B60',
    tertiary: '#8E24AA',
    quaternary: '#5E35B1',
    quinary: '#3949AB',
    secondaryLight: '#E91E63',
    tertiaryLight: '#9C27B0',
    quaternaryLight: '#673AB7',
    quinaryLight: '#3F51B5'
    
    
}
export const palleteSecondary = {
    primary: 'mat-red',
    accent: 'mat-orange',
    warm: 'mat-red',
}


export const theme = 'dark';

export const darkThemeGraphOptions = {
                                        elements : {
                                            line: {
                                                tension: 0.000001
                                            }
                                        },
                                         legend: {
                                                labels: {
                                                    fontColor: "red",
                                                    fontSize: 12
                                                }
                                            },
                                        scales: {
                                            xAxes: [{
                                                        gridLines: {
                                                            display:false
                                                        },
                                                        ticks: {
                                                            fontColor: 'red'
                                                        }
                                                    }],
                                            yAxes: [{
                                                        gridLines: {
                                                            display:false
                                                        },
                                                        ticks: {
                                                            fontColor: 'red'
                                                        }
                                                    }]
                                            },
                                        maintainAspectRatio: true,
                                        plugins: {
                                            filler: {
                                                propagate: false
                                            }    
                                        },
                                        title: {
                                            display: true,
                                            text: 'SALES GRAPH',
                                            fontColor: 'white'
                                        }
                                    };


export const lightThemeGraphOptions = {
                                        elements : {
                                            line: {
                                                tension: 0.000001
                                            }
                                        },
                                        maintainAspectRatio: false,
                                        plugins: {
                                            filler: {
                                                propagate: false
                                            }    
                                        },
                                        title: {
                                            display: true,
                                            text: 'LEADs GRAPH'
                                        }
                                    };
export function getGraphOptions(type = 'light') {
   return  (type =='light')? lightThemeGraphOptions:darkThemeGraphOptions;
}
