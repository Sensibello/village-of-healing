<template>
  <div class="quote-modal">
      <a
          
          class="primary-btn"
          :aria-expanded="openModal"
          :aria-label="openModal ? 'Close Get a Quote Modal' : 'Close Get a Quote Modal'"
          @click="toggleModal"
        >
        <span> Get a quote </span>
      </a>

  <div class="quote-modal-body" id="quote-modal"  v-show="openModal">
    <img 
        src="~assets/svg/menu-arrow.svg" 
        class="prog-logo" 
        alt=""                    
    />




  </div>

  </div>
</template>

<script>


export default {
 
 data() {
    return {
      openModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.openModal = !this.openModal;
    },
  },

  components: {
    
  }
  
}
</script>


<style lang="scss">
.quote-modal {
  position: relative;

  .primary-btn {

      background: #fff;
      border: 1px solid #1178B1;
      border-radius: 8px;
      padding: 6px 10px;
      font-size: 1.2rem;
      font-weight: 500;
        span {
          color: #1178B1;
          padding: 0px 10px;
          font-size: 14px;
          display: inline-block;
          font-family: '96Sans-Medium', 'Helvetica', 'Arial', sans-serif;
        }

        &:hover, &:active {
          opacity: 1;
          background: #F2F9FC;
        }
  }

  .quote-modal-body {
    position: absolute;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 0 25px -10px #000;
    height: 255px;
    width: 250px;
    right: 0;
    text-align: center;
    padding: 1.5rem 3rem;
    top: 50px;
    z-index: 1;
    
    .prog-logo {
      margin-bottom: 1.5rem;
      margin-top: 1.5rem;
    }

    .h1-subhead {
      margin-bottom: 3rem;
      color: $gray-700;
      font-size: clamp(1.6rem, 1.35em, 2.4rem);
      font-weight: $font-light;
      line-height: 1.333;
      text-transform: none;
    }

    .custom-select {
      margin-top: .5rem;
      margin-bottom: 1.5rem;
    }

    .btn {
      margin: 0;
      padding: 0;
      background-color: #007cb9;
      color: #fff;
      border: none;
      border-radius: 4px;
      font-family: '96sans-medium', 'Helvetica', 'Arial', sans-serif;
      font-size: 16px;
      height: 40px;
      width: 100%;
    }

    .find-agent {
      margin-top: 1rem;
      text-transform: none;
      text-decoration: none;

      a {
        color: #2d2d2d;
        position: relative;
        font-size: 1.3rem;
        text-transform: none!important;
        transition: border .2s ease-in,background-size .2s ease-in;
        background: linear-gradient( 120deg,rgba(0,119,179,.1) 0%,rgba(0,119,179,.1) 100%) no-repeat;
        background-position: 0 100%;
        background-size: 100% 0;
        border-bottom: 1px solid #0077b3;
      
        padding-bottom: 0.1em;
        text-decoration: none;

        &:hover {
            background-size: 100% 100%;
            border-bottom: 0 solid rgba(0,119,179,.1);
            color: #2d2d2d;
        }
      }
    }
  }


}


#quote-modal {
    &:before {
    top: -8px;
    right: 50px;
    content: "";
    z-index: -1;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-top: 14px solid #fff;
    height: 22px;
    bottom: -12px !important;
    width: 0;
    background: white;
    transform: rotate(45deg);
    position: absolute;
  }
}
</style>
