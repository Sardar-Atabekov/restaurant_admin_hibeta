import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'dashboards',
    // title: 'Dashboards',
    // subtitle: 'Unique dashboard designs',
    type: 'group',
    icon: 'heroicons-outline:home',
    translate: 'DASHBOARDS',
    children: [
      {
        id: 'dashboards.home',
        title: 'Home',
        type: 'item',
        icon: 'heroicons-outline:home',
        url: '/dashboards/home',
      },
      {
        id: 'dashboards.orders',
        title: 'Orders',
        type: 'collapse',
        icon: 'heroicons-outline:speakerphone',
        translate: 'Orders',
        url: '/dashboards/orders/new-orders',
        children: [
          {
            id: 'orders.new-orders',
            title: 'New orders',
            type: 'item',
            url: '/dashboards/orders/new-orders',
            end: true,
            badge: {
              title: '27',
              classes: 'px-8 bg-white-600 text-white rounded-full',
            },
          },
          {
            id: 'orders.edit-orders',
            title: 'Edit orders',
            type: 'item',
            url: '/dashboards/orders/edit-orders',
            badge: {
              title: '11',
              classes: 'px-8 bg-yellow-600 text-white rounded-full',
            },
          },
          {
            id: 'orders.active-orders',
            title: 'Active orders',
            type: 'item',
            url: '/dashboards/orders/active-orders',
            badge: {
              title: '1',
              classes: 'px-8 bg-red-600 text-white rounded-full',
            },
            end: true,
          },
        ],
      },
      {
        id: 'dashboards.menu',
        title: 'Menu',
        type: 'collapse',
        icon: 'heroicons-outline:menu',
        url: '/dashboards/menu/dishes',
        children: [
          {
            id: 'dashboards.dishes',
            title: 'Dishes',
            type: 'item',
            url: '/dashboards/menu/dishes',
            end: true,
            badge: {
              title: '11',
              classes: 'px-8 bg-white-600 text-white rounded-full',
            },
          },
          {
            id: 'dashboards.category',
            title: 'Category',
            type: 'item',
            url: '/dashboards/menu/category',
            end: true,
            badge: {
              title: '1',
              classes: 'px-8 bg-white-600 text-white rounded-full',
            },
          },
        ],
      },
      {
        id: 'dashboards.promotion',
        title: 'Promotion',
        type: 'item',
        icon: 'heroicons-outline:trending-down',
        url: '/dashboards/promotions',
      },
      {
        id: 'dashboards.comments',
        title: 'Comments',
        type: 'item',
        icon: 'heroicons-outline:pencil',
        url: '/dashboards/comments',
      },
      {
        id: 'dashboards.restaurant',
        title: 'Restaurant',
        type: 'item',
        icon: 'heroicons-outline:chart-pie',
        url: '/dashboards/restaurant',
      },
      {
        id: 'dashboards.users',
        title: 'Users',
        type: 'item',
        icon: 'heroicons-outline:users',
        url: '/dashboards/users',
      },
      {
        id: 'dashboards.report',
        title: 'Report',
        type: 'item',
        icon: 'heroicons-outline:document-report',
        url: '/dashboards/report',
      },
      {
        id: 'dashboards.reports',
        title: 'Reports',
        type: 'item',
        icon: 'heroicons-outline:reports',
        url: '/dashboards/reports',
      },
      {
        id: 'dashboards.time',
        title: 'Timeworker',
        type: 'item',
        icon: 'heroicons-outline:clock',
        url: '/dashboards/time',
      },
      {
        id: 'dashboards.caches',
        title: 'Caches',
        type: 'item',
        icon: 'heroicons-outline:cash',
        url: '/dashboards/cashes',
      },
      {
        id: 'dashboards.help',
        title: 'Help',
        type: 'item',
        icon: 'heroicons-outline:question-mark-circle',
        url: '/dashboards/help',
      },
    ],
  },
];

export default navigationConfig;
