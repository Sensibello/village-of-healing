<template> 
    <header id="header" data-module="header" class="header">
        <MenuHeaderMenu/>
    </header>
</template>


<script>
import MenuHeaderMenu from '~/components/header/menu/HeaderMenu.vue'

export default {
name: "Header",
  components: {
    
   MenuHeaderMenu
  }
}
</script>


<style lang="scss">
header {
    z-index: 9999;
    position: absolute;
    width: 100%;
}

.navbar {
	left: 0;
	right: 0;
	z-index: 1002;
	background: $white;
	display: block;
	justify-content: flex-start;

    a {
        color: $black;
        position: relative;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
}

.navbar-brand {
	margin-right: 2rem;
	display: inline-block;
    padding-top: 0rem;
    padding-bottom:0rem;
    margin-right: 4rem;
    line-height: 1;
    white-space: nowrap;
}

.nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    align-items: center;
    
    .phone-nav {
        align-items: baseline;
    }

    .saved-articles {
        border-left: 1px solid $black;
        /* margin-left: 20px; */
        margin-right: 10px;
    }
}

.nav-item {
    .save-articles {
        padding: 0;
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
}

.nav-link {
	position: relative;
	text-decoration: none;
    font-size: 1.3rem;
    font-weight: 400;
    color: $black;

    &:after {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }

      &:hover {
        &:after {
            transform: scaleX(.85);
        }
      }
}

.logo-text {
    fill: $black;
    max-height: 30px;
    width: 120px;
}

</style>
