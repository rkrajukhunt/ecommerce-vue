<template>
  <div class="animated fadeIn">
    <p1>Clothing & footwear->Men</p1><br/><br/>
    <b-row>
      <b-col sm="4" md="3">
        
        <b-card>
          
          <div slot="footer">₹4,549
            
   <b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
   <b-modal id="modal-1" title="Checkout" >
    <p class="my-4">Select Quantity and size</p>
 <b-container fluid>
        <b-row class="mb-1 text-center">
          <b-col cols="3"></b-col>
          <b-col>Size</b-col>
          <b-col>Quantity</b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col cols="3">Select</b-col>
          
          <b-col>
            <b-form-select
              v-model="headerBgVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="headerTextVariant"
              :options="options"
            ></b-form-select>
          </b-col>
        </b-row>
      </b-container>
       <div slot="modal-footer" class="w-100" >
        <b-button  class="btn btn-success float-right mx-3" style="width: 100px;"
         >Buy Now 
        </b-button>
        
        <b-button class="float-right btn btn-dark " style="width: 100px;">
          Add to cart
        </b-button>
      </div>
      
      
  </b-modal>
          

                      
          </div>
      <router-link to="/theme/product">
          <b-img src="img\men\m12.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block"  height = "60" width="120" ></b-img></router-link><br/>Adidas Neo T-shirt</b-card>
       
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
              ₹4,546 
              
             <b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
            <b-img src="img\men\m13.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Adidas T-shirt</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
            ₹4,546
            <b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
          <b-img src="
      img\men\m14.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Adidas Red T-shirt</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
            ₹4,546
            <b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
          <b-img src="
      img\men\m15.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Adidas Pink T-shirt</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
₹4,549
            <b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
          <b-img src="
      img\men\m16.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Adidas Blue T-shirt</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
            ₹4,546 
            <b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
            <b-img src="
      img\men\m17.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Adidas Black T-shirt</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
            ₹4,546
            <b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
          <b-img src="
      img\men\m18.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Adidas Print T-shirt </b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
      
            ₹4,546
            <b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
          <b-img src="
      img\men\m19.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
         Adidas Grey T-shirt</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
₹4,549
            <b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
          <b-img src="
      img\men\m20.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Nike Tshirt Grey</b-card>
      </b-col>
       <b-col sm="" md="3">
        <b-card>
          <div slot="footer">
            ₹4,546 
            <b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
            <b-img src="
      img\men\m21.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Adidas Sportswear</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
            ₹4,546
           <b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
          <b-img src="
      img\men\m12.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Adidas New Edition</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
          ₹4,546
           <b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
          <b-img src="
      img\men\m12.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Adidas Neo Blue</b-card>
      </b-col>
      
    </b-row><!--/.row-->
  </div>
</template>

<script>

export default {
  
  name: 'cards',
  data: function () {
    return {
      show: true,
      variants: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
      options:['1', '2', '3', '4', '5']
    }
  }
}
</script>

<style scoped>
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>

