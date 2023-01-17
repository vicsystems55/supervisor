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
    route: '/',
  },
  {
    header: 'Contracts',
    icon: 'FileIcon',
    title: 'Contracts',
    route: '/',
  },

  {
    header: 'Lots',
    icon: 'FileIcon',
    title: 'Lots',
    route: '/',
  },

  {
    header: 'Sites',
    icon: 'FileIcon',
    title: 'Sites',
    route: '/',
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
        title: 'Lot Report',
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
