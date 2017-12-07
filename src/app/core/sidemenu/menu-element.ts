export const menus = [
    {
        "name"   : "Dashboard",
        "icon"   : "dashboard",
        "open"   : false,
        "chip"   :  { "value": 2,'color': 'accent'} ,
        "sub"    :  [
                        {
                            "name": "Dashboard",
                            "link": "/auth/dashboard",
                            "icon": "dashboard",
                            "chip"   : false,
                            "open"   : true,
                        },
                        {
                            "name": "Account",
                            "link": "/auth/dashboard-account",
                            "icon": "dashboard",
                            "chip"   : false,
                            "open"   : true,
                        }
                    ]
    },
    {
        "name"   : "Material Widget",
        "icon"   : "widgets",
        "open"   : false,
        "sub"    :  [
                        {
                            "name"  : "Buttons",
                            "link"  : "material-widgets/buttons",
                            "icon"  : "indeterminate_check_box",
                            "chip"  : false,
                            "open"  : false,
                        },
                        {
                            "name"  : "List",
                            "link"  : "material-widgets/list",
                            "icon"  : "list",
                            "chip"  : false,
                            "open"  : false,
                        },
                        {

                            "name": "Stepper",
                            "link": "material-widgets/stepper",
                            "icon": "view_week",
                            "chip"   : false,
                            "open"   : false,

                        },
                        {
                            "name": "Expansion",
                            "link": "material-widgets/expansion",
                            "icon": "web_aaset",
                            "chip"   : false,
                            "open"   : false,
                        },
                        {
                            "name": "Progress Spinner",
                            "link": "spinner",
                            "icon": "cached",
                            "chip"   : false,
                            "open"   : false,
                        },
                        {
                            "name": "Cards",
                            "link": "cards",
                            "icon": "crop_16_9",
                            "open"   : false,
                        },
                        {
                            "name": "Icons",
                            "link": "icon",
                            "icon": "gif",
                            "open"   : false,
                        },
                        {

                            "name": "AutoComplete",
                            "link": "autocomplete",
                            "icon": "get_app",
                            "open"   : false,
                        },
                        {
                            "name": "CheckBox",
                            "link": "checkbox",
                            "icon": "check_box",
                            "open"   : false,
                        },
                        {
                            "name": "DatePicker",
                            "link": "datepicker",
                            "icon": "date_range",
                            "open"   : false,
                        },

                        {
                            "name": "Slider",
                            "link": "slider",
                            "open"   : false,
                            "icon":"keyboard_tab"
                        },
                        {
                            "name": "Slide Toggle",
                            "link": "slide-toggle",
                            "open"   : false,
                            "icon":"album"
                           
                        },
                         {
                            "name": "Menu",
                            "icon": "menu",
                            "link": "menu",
                            "open"   : false,
                        },
                         {
                            "name": "Progress Bar",
                            "link": "progress-bar",
                            "open"   : false,
                            "icon":"trending_flat"
                        },
                        {
                            "name": "Input",
                            "icon": "input",
                            "link": "inputs",
                            "open"   : false,
                        },
                        {
                            "name": "Radio",
                            "icon": "radio_button_checked",
                            "link": "radio",
                            "open"   : false,
                        },
                        {
                            "name": "Select",
                            "icon": "select_all",
                            "link": "select",
                            "open"   : false,
                        },
                    ]
    },{
        "name"   : "Forms",
        "icon"   : "mode_edit",
        "open"   : false,
        "sub"    :  [
                        {
                            "name": "Template Driven",
                            "icon": "mode_edit",
                            "open"   : false,
                            "link":"template_driven"
                        },
                        {
                            "name": "Reactive Forms",
                            "icon": "text_fields",
                            "open"   : false,
                            "link":"reactive_forms"
                        }
                    ]
    },{
        "name"   : "Tables",
        "icon"   : "list",
        "open"   : false,
        "chip"   :  { "value": 2,'color': 'accent'} ,
        "sub"    :  [
                        {
                            "name": "Filtering",
                            "icon": "filter_list",
                            "link": "tables/filter",
                            "open"   : false,
                        },
                        {
                            "name": "Pagination",
                            "icon": "last_page",
                            "link": "pagination-table",
                            "open"   : false,
                        },
                        {
                            "name": "Sorting",
                            "icon": "sort_by_alpha",
                            "link": "sorting-table",
                            "open"   : false,
                        },
                        {
                            "name": "HTTP",
                            "icon": "http",
                            "link": "retrive-http-table",
                            "open"   : false,
                        },
                        {
                            "name": "All Features",
                            "icon": "done_all",
                            "link": "all-features-table",
                            "open"   : false,
                        },
                        {
                            "name": "Responsive Tables",
                            "icon": "filter_center_focus",
                            "link": "responsive-table",
                            "open"   : false,
                        }
                    ]
    },{
        "name"   : "Charts",
        "icon"   : "pie_chart_outlined",
        "open"   : false,
        "sub"    :  [
                        {
                            "name": "chartjs",
                            "icon": "view_list",
                            "link":"chartjs",
                            "open"   : false,

                        },
                        {
                            "name": "ngx-chart",
                            "icon": "show_chart",
                            "open"   : false,
                            "link": "ngx-charts",
                        },
                        {
                            "name": "nvd3",
                            "icon": "pie_chart",
                            "open"   : false,
                            "link": "nvd3-charts",
                        }
                        
                    ]
    },{
        "name"   : "maps",
        "icon"   : "map",
        "open"   : false,
        "sub"    :  [
                        {
                            "name": "google-map",
                            "icon": "directions",
                            "link":"googlemap",
                            "open"   : false,
                        },
                        {
                            "name": "leaflet-map",
                            "icon": "directions",
                            "link":"leafletmap",
                            "open"   : false,
                        }
                    ]
    },{
        "name"   : "Pages",
        "icon"   : "content_copy",
        "open"   : false,
        "sub"    :  [
                        {
                            "name": "Services",
                            "icon": "local_laundry_service",
                            "open": false,
                            "link": "services",
                        },{
                            "name": "Login",
                            "icon": "work",
                            "open": false,
                            "link": "login",
                        },{
                            "name": "Registeration",
                            "icon": "work",
                            "open": false,
                            "link": "register",
                        },{
                            "name":"Map",
                            "icon":"directions",
                            "open": false,
                        }
                    ]
    },{
        "name"   : "Editor",
        "icon"   : "content_copy",
        "open"   : false,
        "sub"    :  [
                        {
                            "name": "Text Editor",
                            "icon": "mode_edit",
                            "link": "editor",
                            "open"   : false,
                        },
                       
                    ]
    }

]