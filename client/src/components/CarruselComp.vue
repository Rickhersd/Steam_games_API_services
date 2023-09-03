<template>
  <div class="carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <div class="card_carousel" v-for="card in cards" :key="card.alt">
        <img :src="card.src" />
      </div>
    </div>
  </div>
  <button @click="prev">prev</button>
  <button @click="next">next</button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

let currentSlide = ref<number>(0)
let interval = 5000

type cardType = {
  src: string,
  alt: string
}

const cards = ref<{
  src: string,
  alt: string
}[]>([
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Image 1'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Image 2'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Image 3'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Image 4'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Image 5'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Image 6'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Image 7'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Image 8'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Image 9'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Image 10'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Image 11'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Image 12'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Image 13'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Image 14'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Image 15'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Image 16'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Image 17'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Image 18'
  },
  {
  src: 'https://via.placeholder.com/350x150',
  alt: 'Image 19'
  },
  {
  src: 'https://via.placeholder.com/350x150',
  alt: 'Image 20'
  }
])

onMounted(() => {
  setStep()
  resetTranslate()
})

let innerStyles = ref<{
  transition?: string,
  transform?: string
}>({})
let step = ref('')
const transitioning = ref<boolean>(false)
const inner = ref<HTMLDivElement | null>(null)

const setStep = () => {
  if(!inner.value) return
  const innerWidth = inner.value.scrollWidth
  const totalCards = cards.value.length
  step.value = `${innerWidth / totalCards}px`
}

const next = () => {
  if (transitioning.value) return
  transitioning.value = true

  moveLeft()

  afterTransition(() => {
    const card  = cards.value.shift() as cardType 
    cards.value.push(card)
    resetTranslate()
    transitioning.value = false
  })
}

const prev = () => {
  if (transitioning.value) return

  transitioning.value = true
  moveRight()

  afterTransition(() => {
    const card = cards.value.pop() as cardType 
    cards.value.unshift(card)
    resetTranslate()
    transitioning.value = false
  })
}

const moveLeft = () => {
  innerStyles.value = {
    transform: `translateX(-${step.value})
                translateX(-${step.value})`
  }
}

const moveRight = () => {
  innerStyles.value = {
    transform: `translateX(${step.value})
                translateX(-${step.value})`
  }
}

const afterTransition = (cb : () => void) => {
  if (!inner.value) return
  const listener = () => {
    if (!inner.value) return
    cb()
    inner.value.removeEventListener('transitionend', listener)
  }
  inner.value.addEventListener('transitionend', listener)
}

const resetTranslate = () => {
  innerStyles.value = {
    transition: 'none',
    transform: `translateX(-${step.value})`
  }
}

</script>

<style lang="scss">
.carousel {
  width: 1000px;
  overflow: hidden;
}

.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}

.card_carousel {
  width: 350px;
  margin-right: 10px;
  display: inline-flex;

  /* optional */
  height: 200px;
  background-color: #39b1bd;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}

/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>