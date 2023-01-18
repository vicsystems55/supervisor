export default [
  {
    header: 'Home',
    icon: 'FileIcon',
    title: 'Home',
    route: '/',
  },
  {
    header: 'Programme',
    icon: 'FileIcon',
    title: 'Programme',
    route: 'programmes',
  },
  {
    header: 'Contracts',
    icon: 'FileIcon',
    title: 'Contracts',
    route: 'contracts',
  },

  {
    header: 'Reports',
    icon: 'FileIcon',
    title: 'Reports',
    children: [
      {
        title: 'Contract Reports',
        route: 'home',
        icon: 'HomeIcon',
      },
      {
        title: 'Lot Reports',
        route: 'second-page',
        icon: 'FileIcon',
      },
    ],
  },
  {
    header: 'Valuation',
    icon: 'FileIcon',
    title: 'Valuation',
    route: '/',
  },
  {
    header: 'User Management',
    icon: 'FileIcon',
    title: 'User Management',
    route: 'users',
  },
  {
    header: 'Pages',
    icon: 'FileIcon',
    children: [
      {
        title: 'Home',
        route: 'home',
        icon: 'HomeIcon',
      },
      {
        title: 'Second Page',
        route: 'second-page',
        icon: 'FileIcon',
      },
    ],
  },
]
