<template>
  <div class="app flex-row align-items-top animated fadeIn">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="10">
          <b-card-group>
            <b-card no-body class="p-2">
              <b-card-body>
                <b-form><br/><br/>
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" class="form-control" placeholder="Enter Your Email" autocomplete="username email" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" class="form-control" placeholder="Password" autocomplete="current-password" />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="outline-dark" class="px-4">Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="Secondary" class="px-0">Forgot?</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-black bg-light py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h1>Sign Up</h1>
                   <p class="text-muted">Create an account to Sign Up</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" class="form-control" placeholder="Name" autocomplete="username email" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="fa fa-phone"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="name" class="form-control" placeholder="Mobile Number" autocomplete="current-password" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="cui-envelope-closed"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" class="form-control" placeholder="Email Address" autocomplete="current-password" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" class="form-control" placeholder="Password should be 8 digits" autocomplete="current-password" />
                  </b-input-group>
                  <b-row>
                    
                   
                  </b-row>
                  
                   <b-button variant="outline-dark" class="px-4">Register</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
