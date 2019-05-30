export default {
  items: [
    {
      name: 'Home',
      url: '/dashboard',
      icon: 'icon-energy',
      badge: {
        variant: 'secondary',
        text: 'latest'
      }
    },
    {
      title: true,
      name: 'Clothing & footwear',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Men',
      url: '/theme/colors',
      icon: 'icon-user'
    },
    {
      name: 'Women',
      url: '/theme/typography',
      icon: 'icon-user-female'
    },
    {
      title: true,
      name: 'Home Appliances',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Kitchen Items',
      url: '/base',
      icon: 'icon-cup',
      children: [
        {
          name: 'page1',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'page2',
          url: '/base/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'page3',
          url: '/base/carousels',
          icon: 'icon-puzzle'
        }
    
      
     
       
      ]
    },
    {
      name: 'Furnitures & others',
      url: '/buttons',
      icon: 'icon-grid',
      children: [
        {
          name: 'page1',
          url: '/buttons/standard-buttons',
          icon: 'icon-cursor'
        },
        {
          name: 'page2',
          url: '/buttons/dropdowns',
          icon: 'icon-cursor'
        },
        {
          name: 'page3',
          url: '/buttons/button-groups',
          icon: 'icon-cursor'
        },
        {
          name: 'page4',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor'
        }
      ]
    },
    {
      name: 'Gaming',
      url: '/charts',
      icon: 'icon-game-controller'
    },
    {
      name: 'Offer Zone',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Monthly Offers',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW'
          }
        },
        {
          name: 'Weekly Offers',
          url: '/icons/flags',
          icon: 'icon-star'
        },
        {
          name: 'Buy 1 get 1 Free',
          url: '/icons/font-awesome',
          icon: 'icon-star',
         
        }
       
      ]
    },
   
    
    {
      title: true,
      name: 'More Categories'
    },
    {
      name: 'Household Items',
      url: '/pages',
      icon: 'icon-home',
      children: [
        {
          name: 'page1',
          url: '/pages/login',
          icon: 'icon-star'
        }
       
      
       
      ]
    },
    
    
    
  ]
}
