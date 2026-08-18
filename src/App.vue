<script setup>
import { computed, ref } from 'vue'
import ArenaMap from './components/ArenaMap.vue'
import SeatGrid from './components/SeatGrid.vue'
import CartPanel from './components/CartPanel.vue'
import { sectionConfigs } from './data/sections.js'

const currentSection = ref(null)
const selectedSeats = ref([])
const toastMessage = ref('')
let toastTimer

const currentConfig = computed(() => currentSection.value ? sectionConfigs[currentSection.value] : null)
const selectedIds = computed(() => new Set(selectedSeats.value.map((seat) => seat.id)))

function showToast(message) {
  toastMessage.value = message
  window.clearTimeout(toastTimer)
  toastTimer = window.setTimeout(() => { toastMessage.value = '' }, 2200)
}

function openSection(id) {
  currentSection.value = id
}

function toggleSeat(seat) {
  const index = selectedSeats.value.findIndex((item) => item.id === seat.id)
  if (index >= 0) {
    selectedSeats.value.splice(index, 1)
  } else if (selectedSeats.value.length >= 6) {
    showToast('Voit valita enintään 6 paikkaa')
    return
  } else {
    selectedSeats.value.push(seat)
  }
  publishSelection()
}

function removeSeat(id) {
  selectedSeats.value = selectedSeats.value.filter((seat) => seat.id !== id)
  publishSelection()
}

function totals() {
  const subtotal = selectedSeats.value.reduce((sum, seat) => sum + seat.price, 0)
  const fees = selectedSeats.value.length * 3.5
  return { subtotal, fees, total: subtotal + fees }
}

function serializableSeats() {
  return selectedSeats.value.map((seat) => ({ ...seat }))
}

function publishSelection() {
  window.parent?.postMessage({
    type: 'kivikyla-seatmap:selection',
    eventId: 'RAHINA-MMA-DEMO',
    seats: serializableSeats(),
    ...totals(),
  }, '*')
}

function checkout() {
  window.parent?.postMessage({
    type: 'kivikyla-seatmap:checkout',
    eventId: 'RAHINA-MMA-DEMO',
    seats: serializableSeats(),
  }, '*')
  showToast('Demo: paikkavalinnat lähetettiin lippukaupalle')
}
</script>

<template>
  <div class="app">
    <header class="top">
      <div class="brand">BILETTI <b>PAIKKAKARTTADEMO</b></div>
      <div class="event"><strong>RÄHINÄ MMA · KIVIKYLÄN AREENA</strong><br>Rauma</div>
    </header>

    <div class="grid">
      <main class="main">
        <div class="heading">
          <div>
            <h1>{{ currentSection ? `Lohko ${currentSection}` : 'Valitse katsomolohko' }}</h1>
            <p>{{ currentSection ? 'Valitse vapaat paikat. Harmaat paikat ovat varattuja.' : 'Avaa lohko nähdäksesi rivit, vapaat paikat ja hinnat.' }}</p>
          </div>
          <button class="tool" aria-label="Yleiskartta" @click="currentSection = null">⌂</button>
        </div>

        <section class="mapcard">
          <ArenaMap v-if="!currentSection" @select-section="openSection" />
          <SeatGrid
            v-else
            :section-id="currentSection"
            :config="currentConfig"
            :selected-ids="selectedIds"
            @back="currentSection = null"
            @toggle-seat="toggleSeat"
          />
        </section>
      </main>

      <CartPanel :selected-seats="selectedSeats" @remove="removeSeat" @checkout="checkout" />
    </div>

    <div class="toast" :class="{ show: toastMessage }" role="status">{{ toastMessage }}</div>
  </div>
</template>
