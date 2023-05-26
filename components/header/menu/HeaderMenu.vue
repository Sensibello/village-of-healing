<template>
    <div class="lifelanes">
        <!-- START: MOBILE MENU -->
            <nav class="lifelanes-menu mobile-only">
                <div class="flex-me">
                    <button
                        type="button"
                        class="menu-button hamburger mobile-only"
                        :aria-expanded="openLifelanes"
                        :aria-label="openLifelanes ? 'Close Life Lanes menu' : 'Open Life Lanes menu'"
                        @click="toggleMenu"
                    >
                        
                        <span class="lifelanes-logo-mobile" :class="{ 'is-active': openLifelanes }">
                            <img 
                                src="~assets/svg/menu-arrow.svg" 
                                class="" 
                                alt=""                    
                                
                            />
                            <!-- <span>Life Lanes </span> -->
                        </span>
                    </button>

                    <ul class="lifelanes-menu-panel" id="lifelanes-dropdown"  v-show="openLifelanes">
                        <li class="nav-item border-bottom">
                            <a class="nav-link" href="#" data-label="On the Road">
                                <span class="align-together">
                                    <img 
                                        src="~assets/svg/menu-arrow.svg"
                                        class="on-the-road" 
                                        alt=""                    
                                    />
                                    <p class="">On the Road</p>
                                </span>
                                <span class="mobile-only nav-item-text">Tried and true tips for cars</span>
                            </a>
                        </li>	

                        <li class="nav-item border-bottom">
                            <a class="nav-link" href="#" data-label="Household">
                                <span class="align-together">
                                    <img 
                                        src="~assets/svg/menu-arrow.svg"
                                        class="household" 
                                        alt=""                    
                                    />
                                    <p class="">Household</p>
                                </span>
                                <span class="mobile-only nav-item-text">From moving to design, all under one roof</span>
                            </a>
                        </li>

                        <li class="nav-item border-bottom">
                            <a class="nav-link" href="#" data-label="Adventure">
                                <span class="align-together">
                                    <img 
                                        src="~assets/svg/menu-arrow.svg"
                                        class="adventure" 
                                        alt=""                    
                                    />
                                    <p class="">Adventure</p>
                                </span>
                                <span class="mobile-only nav-item-text">Take off on your boat, motorcycle or RV</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#" data-label="Turning Points">
                                <span class="align-together">
                                    <img 
                                        src="~assets/svg/menu-arrow.svg"
                                        class="turning-points" 
                                        alt=""                    
                                    />
                                    <p class="">Turning Points</p>
                                </span>
                                <span class="mobile-only nav-item-text">Helping you to adjust to life's changes</span>
                            </a>
                        </li>
                        <!-- Start: Nav utility footer -->
                        <div class="nav-util border-bottom grid">
                            <div class="grid-l6 nav-util-item border-right border-top">
                                <a href="#" data-label="lifelanes" class="lifelanes-mobile-logo">
                                    <svg id="Group_20964" data-name="Group 20964" xmlns="http://www.w3.org/2000/svg" width="21.194" height="22.164" viewBox="0 0 21.194 22.164">
                                        <path id="Path_137088" data-name="Path 137088" d="M67.615,11.082H63.423V0H59.6V14.751h8.012v3.707l5.541-5.541L67.615,7.375Z" transform="translate(-51.962)"></path>
                                        <path id="Path_137089" data-name="Path 137089" d="M3.82,0H0V22.164H11.947l3.707-3.707H3.82Z"></path>
                                    </svg>

                                    <span>Life Lanes Home</span>
                                </a>
                            </div>
                            <div class="grid-l6 border-top nav-util-item" data-label="Saved Articles">
                                <a data-label="Saved Articles" href="#" class="saved-articles-nav">
                                    <img 
                                        src="~assets/svg/menu-arrow.svg"
                                        class="saved-articles" 
                                        alt=""                    
                                    />
                                    <span>Saved Articles</span>
                                </a>
                            </div>
                        </div>
                    <!-- End: Nav utility footer -->
                    </ul>
                    
                    <HeaderQuoteModal/>
                </div>
            </nav>
        <!-- END: MOBILE MENU -->
        
        <!-- START: DESKTOP MENU-->
        <nav class="menu lifelanes-desktop desktop-only">
            <a class="navbar-brand" href="#">
                <img 
                    src="~assets/svg/menu-arrow.svg"
                    alt="Life Lanes logo" 
                    aria-label="Lifelanes" 
                    class="logo-text" 
                />			
                <span class="sr-only">Life Lanes home</span>
            </a>
        
            <ul 
                class="nav" 
                itemscope="itemscope" 
                itemtype="http://schema.org/SiteNavigationElement" r
                ole="navigation" 
                aria-label="Life Lanes"
            >

                <li class="nav-item" role="presentation">
                    <a class="btn nav-link" href="#">
                        <img 
                            src="~assets/svg/menu-arrow.svg"
                            class="on-the-road" 
                            alt=""                    
                        />
                        <span class="nav-item-text">On the Road</span>
                    </a>
                </li>

                <li class="nav-item" role="presentation">
                    <a class="btn nav-link" href="#">	
                        <img 
                            src="~assets/svg/menu-arrow.svg"
                            class="household" 
                            alt=""                    
                        />
                        <span class="nav-item-text">Household</span>	
                    </a>
                </li>

                <li class="nav-item" role="presentation">
                    <a class="btn nav-link" href="#">	
                        <img 
                            src="~assets/svg/menu-arrow.svg"
                            class="adventure" 
                            alt=""                    
                        />
                        <span class="nav-item-text">Adventure</span>	
                    </a>
                </li>

                <li class="nav-item" role="presentation">
                    <a class="btn nav-link" href="#">	
                        <img 
                           src="~assets/svg/menu-arrow.svg"
                            class="turning-points" 
                            alt=""                    
                        />
                        <span class="nav-item-text">Turning Points</span>	
                    </a>                  
                </li>

                <li class="nav-item saved-articles" role="presentation">
                    <a href="/" class="btn btn-lg btn-block py-2 px-3 nav-link link-hover" data-label="Saved Articles">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 51.1113" focusable="false" aria-hidden="true"><title>Saved articles icon</title><path d="M42,8H10a2,2,0,0,0-2,2V49.1113a2,2,0,0,0,2.7432,1.857L26,44.8652l15.2568,6.1031A2,2,0,0,0,44,49.1113V10A2,2,0,0,0,42,8Z"></path><path d="M36,2a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2V41a2,2,0,0,0,4,0V4H34A2,2,0,0,0,36,2Z"></path></svg>
                        <span class="ml-2 mr-4">Saved Articles</span>
                    </a>
                </li>
                 <li class="desktop-only nav-item" role="">
                   <HeaderQuoteModal/>
                </li>
                

            </ul>
        </nav>
         <!-- END: DESKTOP MENU -->
    </div>

</template>




<script>
import HeaderQuoteModal from '~/components/header/QuoteModal.vue'

export default {
  name: "LifelanesMenu",

  components: {
    HeaderQuoteModal
  },
  
   data() {
    return {
      openLifelanes: false,
    };
  },
  methods: {
    toggleMenu() {
      this.openLifelanes = !this.openLifelanes;
    },
  },
};
</script>

<style lang="scss" scoped>



/* ==========  START: LIFELANES MENU -- DESKTOP STYLES ==========  */ 
.lifelanes-desktop {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 0px;
	position: fixed;
    width: 100%;
    background: $white;
	margin: 61px auto 0px auto;
	box-shadow: 0 5px 5px rgb(0 0 0 / 15%);

    .nav {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
    }

   .nav-link {
    span {
        font-family: $ninetysixsans;
        font-weight: $font-medium;
        margin-left: 0.5rem;
        margin-right: 1.5rem;
    }
   } 

    .link-hover:not(.active) {
        transition: opacity 0.1s linear;
    }

    .nav-item {

        svg, img {
            max-height: 20px;
            max-width: 15px;
            position: relative;
            top: 3px;
            margin-bottom: 0px;
            display: inline-block;
            margin-top: 0px;
            margin: auto;

        }

        .on-the-road {
            fill: $purple-700;
        }

        .household {
            fill: $red-700;
        }

        .adventure {
            fill: $orange-700;
        }

        .turning-points {
            fill: $green-700;
        }

        .btn {
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            padding-right: 1.5rem;
            padding-left: 1.5rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }
    }
}
/* ==========  END:  DESKTOP STYLES ==========  */ 




/* ========== START: LIFELANES MENU -- MOBILE STYLES ==========   */ 

.flex-me {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.lifelanes-menu {
    padding: 10px 20px;
    background-color: $white;
    margin-top: 55px;

    .lifelanes-toggle {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    .hamburger {
        background: white;
        border: none;
        font-family: $ninetysixsans;
        font-size: 1.25rem;
        font-weight: 700;
        padding: 0;
        width: 100px;

        &[aria-expanded="false"]{
            .lifelanes-logo-mobile{
                position: relative;

                    &:after {
                        content: "";
                        position: absolute;
                        top: 0px;
                        right: -20px;
                        /* display: inline-block; */
                        content: " ";
                        background-image: url(/_nuxt/assets/svg/menu-arrow.svg);
                        background-size: 8px 8px;
                        height: 8px;
                        width: 8px;
                        transform: rotate(0deg);
                        transition: ease 0.5s;
                    }
            } 
      
        }

        &[aria-expanded="true"]{
            .lifelanes-logo-mobile{
                position: relative;

                    &:after {
                        content: "";
                        position: absolute;
                        top: 0px;
                        right: -20px;
                        /* display: inline-block; */
                        content: " ";
                        background-image: url(/_nuxt/assets/svg/menu-arrow.svg);
                        background-size: 8px 8px;
                        height: 8px;
                        width: 8px;
                        transform: rotate(180deg);
                        transition: ease 0.5s;
                    }
            } 
        }

        span {
            margin-left: 5px;
        }
    }

    .lifelanes-menu-panel {
        padding: 0;
        overflow: hidden;
        list-style-type: none;
        background: $light-gray;
        box-shadow: 0 0 5px rgba(0,0,0,.3);
        border-bottom: 1px solid $gray-500 !important;
        transition: 0.33s ease-in-out;
        
        position: absolute;
        right: 0;
        left: 0;
        top: 115px;

        li {
            padding: 0 30px 5px 30px;

            a {
                text-transform: none;
                padding-bottom: 20px;
                display: block;
                padding: 12px;
                color: $black;
                text-decoration: none;
                white-space: nowrap;
                position: relative;
                font-size: 1.3rem;
                
                span {
                    font-size: 1.3rem;
                
                    p {
                        color: $black;
                        font-weight: 700;
                    }
                }

                .align-together {
                    display: flex;
                    align-items: center;
                }

                svg, img {
                    display: inline-block;
                    margin-right: 10px;
                    height: 20px;
                    width: 15px;
                }
            }

            svg {
                max-height: 20px;
                max-width: 15px;
                position: relative;
                top: 3px;
                margin-bottom: -1px;
                display: inline-block;
                margin-top: -3px;
            }

            .on-the-road {
                fill: $purple-700;
            }

            .household {
                fill: $red-700;
            }

            .adventure {
                fill: $orange-700;
            }

            .turning-points {
                fill: $green-700;
            }
        }
    }

    .nav-util {
        background-color: $light-gray;
        bottom: 0;
        padding: 0;

        //TODO: swap these out for css child classes 
        .border-right {
            border-right: 1px solid $gray-500 !important;
        }
        .border-left {
            border-left: 1px solid $gray-500 !important;
        }
        .border-bottom {
            border-bottom: 1px solid $gray-500 !important;
        }
        .border-top {
            border-top: 1px solid $gray-500 !important;
        }
        
        svg {
            max-width: 13px;
            width: 13px;
            height: 15px;
            margin-right: 10px;
        }
        
        a {
            text-decoration: none;
            color: $black;
            position: relative;
            font-size: 1.3rem;
            text-transform: capitalize;
            display: flex;
            margin: auto;
            align-items: center;
            justify-content: center;
        }

        .nav-util-item {
            padding: 1.5rem 0rem;
        }

    }

    //TODO: refactor/update these and clean up when we add the Get a Quote button
    .action-menu.action-menu-quote, .find-an-agent-cta {
        background-color: transparent;
        border-radius: 30px;
        padding: 0;
        /* margin: 12px 0px; */
        right: 25px;
        text-align: center;
        bottom: 85px;
        position: static;
        width: auto;
        display: inline-block;
        z-index: 0;
        box-shadow: none;
        line-height: 2;
    }

    .get-a-quote {
        .action-link {
            border: 1px solid $prog-blue;
            border-radius: 8px;
            padding: 6px 10px;
            font-size: 1.2rem;
            font-weight: 500;
            text-decoration: none;
            color: $prog-blue;
            font-weight: 900;
        }
    }

    .nav-util  {
        .saved-articles {
            display: inline-block;
            margin-right: 10px;
            height: 20px;
            width: 15px;
        }
    }

}

/*==========   END:  MOBILE STYLES  ==========  */ 


/* ==========  START: LIFELANES MENU -- UTILITY CLASSES ==========  */ 

.mobile-only {
    display: none;
}

.desktop-only {
    
}

.lifelanes-menu-panel {
    display: block;
}

@include size(medium) {
    .lifelanes {
        position: fixed;
        width: 100%;
    }
    .mobile-only {
        display: block;
    }

    .desktop-only {
        display: none!important;
    }
}
/* ==========  END:  UTILITY CLASSES  ==========  */ 
</style>

