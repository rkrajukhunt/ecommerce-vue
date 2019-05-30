<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" >
        <img class="navbar-brand-full" src="img/brand/logo.png" width="89" height="25" alt="VKART Logo" >
        <img class="navbar-brand-minimized" src="img/brand/favicon.png" width="30" height="30" alt="Vkart Logo">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-navbar-nav class="d-md-down-none">
        <template>
          
  <input class="form-control" type="text" placeholder="Search by  name" aria-label="Search"/>
  <b-button pill variant="secondary" class="my-2 my-sm-0 cui-magnifying-glass" type="submit"></b-button>
</template>
       
        <b-nav-item class="px-3" to="/users" exact></b-nav-item>  
        
       
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <div>
           <b-nav-item class="px-4" to="/users">LogIn/SignUp   
         </b-nav-item>
        
          </div>
        
       
        <b-nav-item class="px-2" to="/contact">ContactUs</b-nav-item>
        <b-nav-item class="px-3 cui-cart" to="/cart">Cart</b-nav-item>
       
      
      </b-navbar-nav>
      
      <!--<AsideToggler class="d-lg-none" mobile />-->
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>    <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside/>
      </AppAside>
    </div>
   
  </div>
</template>

<script>
import nav from '@/_nav'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import DefaultAside from './DefaultAside'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'

export default {
  name: 'DefaultContainer',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  data () {
    return {
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    }
  }
}
</script>
