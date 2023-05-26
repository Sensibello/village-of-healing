<template>

<div class="gallery">
  <div role="region" tabindex="0" aria-describedby="instructions"  aria-label="gallery">
    <ul>
      <li  v-for="image in images" :key="image.src" aria-roledescription="slide">
         <a>   
            <figure>
                <damimg 
                :alt="`${image.alt}`" 
                widths="1860,1500,930,780,360" 
                sizes="(min-width: 970px) 930px, (min-width: 781px) 100vw, (min-width: 671px) 520px, 360px" 
                :ratio="image.ratio? image.ratio : '.666'" 
                :crop="image.crop? image.crop : 'true'"
                :format="`${image.format}`" 
                :src="`${image.src}`" 
                />

            </figure>
        
        </a>

      
      </li>
    </ul>
      <ul ref="galleryControls" :id="`gallery-${getUID}`" aria-label="gallery controls">
            <li>
                <button type="button" :id="`previous-${getUID}`" class="previous" aria-label="previous image" :aria-controls="`gallery-slider-wrap_${getUID}`">
                    <span class="arrow" aria-hidden="true"></span>  
                </button>
            </li>
            <li>
                <button type="button" :id="`next-${getUID}`" class="next" aria-label="next image" :aria-controls="`gallery-${getUID}`">
                    <span class="arrow" aria-hidden="true"></span>  
                </button>
            </li>
        </ul>
    </div>
    

</div>

</template>

<!-- Widths, sizes, ratio set because values
are assumed to never change for sliders -KS -->

<script>
import damimg from "./global/DamImg.vue";

export default {
   components: {
    damimg
  },

	name: 'gallery-slider',
	props: {
        images: {
            type: Array
        },

        name: {
            type: String
        }
        
	},

    computed: {
        getUID() {
            return this._uid;
        },
         
        
    },


    methods: {
        submit(){
        //console.log(this.$refs)
    },


  },


    mounted() {
    window.addEventListener('touchstart', function touched() {
    document.body.classList.add('touch')
    window.removeEventListener('touchstart', touched, false)
  }, false)

  /* lazy loading and button controls */
  const gallery = document.querySelector('[aria-label="gallery"]')
  const slides = gallery.querySelectorAll('li')
  const instructions = document.getElementById('instructions')

  const observerSettings = {
    root: gallery,
    rootMargin: '-10px'
  }

  if ('IntersectionObserver' in window) {
    const callback = (slides, observer) => {
      Array.prototype.forEach.call(slides, function(entry) {
        entry.target.classList.remove('visible')
        if (!entry.intersectionRatio > 0) {
          return
        }
        let img = entry.target.querySelector('img')
        if (img.dataset.src)  {
          img.setAttribute('src', img.dataset.src)
          img.removeAttribute('data-src')
        }
        entry.target.classList.add('visible')
      })
    }

    const observer = new IntersectionObserver(callback, observerSettings)
    Array.prototype.forEach.call(slides, t => observer.observe(t))

    const controls = document.createElement('ul')
    controls.setAttribute('aria-label', 'gallery controls')
    controls.innerHTML = `
    <li>
      <button id="previous" aria-label="previous">
        <svg aria-hidden="true" focusable="false"><use xlink:href="#arrow-left"></use></svg>
      </button>
    </li>
    <li>
      <button id="next" aria-label="next">
        <svg aria-hidden="true" focusable="false"><use xlink:href="#arrow-right"/></svg>
      </button> 
    </li>
    `

    instructions.parentNode.insertBefore(controls, instructions.nextElementSibling)
    instructions.parentNode.style.padding = '0 3rem'

    function scrollIt (slideToShow) {
      let scrollPos = Array.prototype.indexOf.call(slides, slideToShow) * (gallery.scrollWidth / slides.length)
      gallery.scrollLeft = scrollPos
    }

    function showSlide (dir, slides) {
      let visible = document.querySelectorAll('[aria-label="gallery"] .visible')
      let i = dir === 'previous' ? 0 : 1

      if (visible.length > 1) {
        scrollIt(visible[i])
      } else {
        let newSlide = i === 0 ? visible[0].previousElementSibling : visible[0].nextElementSibling
        if (newSlide) {
          scrollIt(newSlide)
        }
      }
    }

    controls.addEventListener('click', function (e) {
      showSlide(e.target.closest('button').id, slides)
    })
    
  } else {
    Array.prototype.forEach.call(slides, function (s) {
      let img = s.querySelector('img')
      img.setAttribute('src', img.getAttribute('data-src'))
    })
  }

             
    },

    methods: {
        onSlideStart(slide) {
            this.sliding = false
        },
        onSlideEnd(slide) {
            this.sliding = true
        },
    }
}


</script>




<style lang="scss">
[aria-label="gallery"] {
  border: 2px solid;
  overflow-x: scroll;
}

[aria-label="gallery controls"] button {
    position: absolute;
    background: #ffffff;
    color: #4099C6;
    border: 2px solid #111;
    border-radius: 0;
    width: 75px;
    height: 75px;
    top: 50%;
    border: 2px solid #4099C6;
    right: 0;
    left:0;

    @include size (tiny) {
        width: 55px;
        height: 55px;
  }

   @include size (xt) {
        width: 35px;
        height: 35px;
  }
}

[aria-label="gallery"]:focus, [aria-label="gallery controls"] button:focus {
  outline: 4px solid DodgerBlue;
  outline-offset: -6px;
}

[aria-label="gallery controls"] button:focus {
  outline-offset: -4px;
}

[aria-label="gallery"] ul {
  display: flex;
}


[aria-label="gallery"] li {
  list-style: none;
  flex: 0 0 100%;
  padding: 2rem;
  height: 60vh;
}

[aria-label="gallery"] figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

[aria-label="gallery"] figcaption {
  padding: 0.5rem;
  font-style: italic;
  text-align: center;
}

[aria-label="gallery"] img {
  max-height: calc(100% - 2rem);
  margin-top: 2rem;
  max-width: 100%;
}

#instructions {
  position: relative;
}

#instructions p {
  padding: 1rem;
  text-align: center;
  color: #fefefe;
  background-color: #111;
}

#focus, #hover, #hover-and-focus, #touch {
  display: none;
}



.gallery {
  position: relative;
}

[aria-label="gallery controls"] li {
  list-style: none;
}




</style>
