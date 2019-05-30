<template>
  <div class="animated fadeIn">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption=""
        text=""
        img-src="img\carousel\c4.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="img\carousel\c5.jpg">
        <h1></h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="img\carousel\c3.jpg"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="img\carousel\c1.jpg"
          alt="image slot"
        >
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
     <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="img\carousel\c2.jpg"
          alt="image slot"
        >
      </b-carousel-slide>
    </b-carousel>
    <br/>
    <h1>Deal of the day <iframe src="http://free.timeanddate.com/countdown/i6s7xhvo/n505/cf12/cm0/cu4/ct1/cs1/ca0/co0/cr0/ss0/cac333/cpc333/pct/tcfff/fs100/szw320/szh135/iso2019-05-31T00:00:00" allowTransparency="true" frameborder="0" width="98" height="19"></iframe>

<b-button variant="success" style="float:right;">View All</b-button>
</h1>
    <div class="animated fadeIn">
    <b-row>
      <b-col>
      <div>
  <b-card-group>
    <b-card  img-src="img\dealoftheday\d3.jpg" img-alt="Image" img-top>
      <b-card-text>
      
      </b-card-text>
    </b-card><br/>

    <b-card  img-src="img\dealoftheday\d2.jpg" img-alt="Image" img-top>
      <b-card-text>
        
      </b-card-text>
    </b-card><br/>

    <b-card  img-src="img\dealoftheday\d1.jpg" img-alt="Image" img-top> 
      <b-card-text>
        
        
      </b-card-text>
     
    </b-card>
  </b-card-group>
  <br/><br/> 
  <br/><br/>
</div>
      </b-col>    
    </b-row>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>