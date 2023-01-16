// assets
import { IconDashboard, IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconBrandChrome, IconHelp };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    // title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'sample-page',
            title: 'Infra Alarms',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconBrandChrome,
            breadcrumbs: true
        },
        {
            id: 'documentation',
            title: 'Products',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconHelp,
            breadcrumbs: true
        },
        {
            id: 'documentation1',
            title: 'OCR Alarms',
            type: 'item',
            url: '/sample-page2',
            icon: icons.IconHelp,
            external: true,
            target: true
        },
        {
            id: 'documentation2',
            title: 'GitHub Repo',
            type: 'item',
            url: '/sample-page3',
            icon: icons.IconHelp,
            external: true,
            target: true
        }
    ]
};

export default dashboard;
