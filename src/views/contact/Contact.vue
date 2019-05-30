<template>

  <div class="app flex-row align-items-top animated fadeIn">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="10">
          <b-card-group>
            <b-card no-body class="p-2">
              <b-card-body>
                <b-form><br/><br/>
                  <h1>Want to sell on Vkart </h1>
                  <p class="text-muted">Fill up the form</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" class="form-control" placeholder="Enter Your Email" autocomplete="username email" />
                  </b-input-group>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="cui-arrow-left icons"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" class="form-control" placeholder="Enter Your Address" autocomplete="username email" />
                  </b-input-group>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="fa fa-phone"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" class="form-control" placeholder="Enter Your phone Number" autocomplete="username email" />
                  </b-input-group>
                  
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="outline-dark" class="px-4">Submit</b-button>
                    </b-col>
                    
                  </b-row>
                </b-form>
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
