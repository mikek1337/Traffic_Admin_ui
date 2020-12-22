import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
    hidden:true
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'ትራፊክ ፖሊሶችን ይቆጣጠሩ ',
    icon: 'shopping-cart-outline',

    children:[
      {
        title:'ትራፊክ ፖሊስ አስገባ',
        link:'/pages/Admin/Add-Traffic'
      },
      {
        title:'ሲስተም ውስጥ ያሉትን ተጠቃሚዎች ይመልከቱ',
        link:'/pages/Admin/View-User'
      }
    ]
  },
  {
    title:'የትራፊክ አደጋውን ',
    icon: 'shopping-cart-outline',
    children:[
      {
        title:'ትራፊክ ፖሊስ መድብ',
        link:'/pages/Admin/assign'
      }
    ]
  },
  {
    title:'መዝገብ',
    children:[
      {
        title:'የገቡ መዝገቦችን ተመልከት',
        link:'/pages/Admin/view-records'
      }
    ]
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
    hidden:true
  },
  {
    title: 'የአደጋ ቅጽ ሙላ',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'ቀላል አደጋ',
        link: '/pages/forms/inputs',
      },
      {
        title: 'መካከለኛ አደጋ',
        link: '/pages/forms/layouts',
      },
      {
        title: 'ከባድ አደጋ',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Ask Assistance',
        link: '/pages/forms/askassistance',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
        hidden:true
      }
    ],
  },
  {
    title:'System User',
    group:true
  },
  {
    title:'Records',
    icon:'keypad-outline',
    children:[
      {
        title:'records',
        link:'/pages/sysuser/sysrecords',
      },
      {
        title:'report',
        link:'/pages/sysuser/report'
      }
    ]
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
    hidden:true
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
    hidden:true
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
    hidden:true
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
    hidden:true
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
    hidden:true
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
    hidden:true
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
    hidden:true
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
    hidden:true
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
    hidden:true
  },
];
