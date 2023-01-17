export default [
  {
    header: 'Home',
    icon: 'FileIcon',
    title: 'Home',
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
