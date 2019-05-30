<template>
  <div class="animated fadeIn">
    <p1>Clothing & footwear->Women</p1><br/><br/>
    <b-row>
      
      <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
        
₹4,549
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
          <b-img src="
      img\women\w2.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Ladies Dress code 1</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
           ₹4,549 <b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
            <b-img src="
      img\women\w3.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Ladies Dress code 2</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
             ₹4,549<b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
          <b-img src="
      img\women\w4.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
        Ladies Dress code 3</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
             ₹4,549<b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
          <b-img src="
      img\women\w5.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Ladies Dress code 4</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
         ₹4,549<b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
          <b-img src="
      img\women\w6.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
         Ladies Dress code 5</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
            ₹4,549 <b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
            <b-img src="
      img\women\w7.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Ladies Dress code 6</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
             ₹4,549<b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
          <b-img src="
      img\women\w16.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Ladies Dress code 7</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
            ₹4,549<b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
          <b-img src="
      img\women\w8.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
         Ladies Dress code 8</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
         ₹4,549<b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
          <b-img src="
      img\women\w9.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Ladies Dress code 9</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
            ₹4,549 <b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
            <b-img src="
      img\women\w10.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Ladies Dress 10</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
             ₹4,549<b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
          <b-img src="
      img\women\w11.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Ladies Dress 11</b-card>
      </b-col>
       <b-col sm="4" md="3">
        <b-card>
          <div slot="footer">
             ₹4,549<b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >Buy Now</b-badge>
          </div>
          <b-img src="
      img\women\w12.jpeg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img><br/>
          Ladies Dress 12</b-card>
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

