<script setup>
import { computed } from 'vue'
import { typeLabels } from '../data/sections.js'

const props = defineProps({ selectedSeats: { type: Array, required: true } })
const emit = defineEmits(['remove', 'checkout'])

const euro = (value) => new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR' }).format(value)
const subtotal = computed(() => props.selectedSeats.reduce((sum, seat) => sum + seat.price, 0))
const fees = computed(() => props.selectedSeats.length * 3.5)
const total = computed(() => subtotal.value + fees.value)
</script>

<template>
  <aside class="cart">
    <div class="carthead">
      <div><h2>Valitut paikat</h2><p>Enintään 6 lippua</p></div>
      <span class="count">{{ selectedSeats.length }}</span>
    </div>

    <div v-if="!selectedSeats.length" class="empty">
      <div class="emptyicon">○ ○ ○</div>
      <b>Ei vielä valintoja</b>
      Valitse katsomolohko ja sen jälkeen vapaat paikat.
    </div>

    <ul v-else class="list">
      <li v-for="seat in selectedSeats" :key="seat.id">
        <div>
          <div class="seatname">Lohko {{ seat.section }} · Rivi {{ seat.row }} · Paikka {{ seat.number }}</div>
          <div class="seattype">{{ typeLabels[seat.type] }}</div>
        </div>
        <div>
          <div class="price">{{ euro(seat.price) }}</div>
          <button class="remove" @click="emit('remove', seat.id)">Poista</button>
        </div>
      </li>
    </ul>

    <div class="summary">
      <div class="sum"><span>Liput</span><span>{{ euro(subtotal) }}</span></div>
      <div class="sum"><span>Palvelumaksut</span><span>{{ euro(fees) }}</span></div>
      <div class="sum total"><span>Yhteensä</span><span>{{ euro(total) }}</span></div>
      <button class="continue" :disabled="!selectedSeats.length" @click="emit('checkout')">Jatka tilaukseen</button>
      <p class="fine">Interaktiivinen demo. Ei tee oikeaa varausta. Saatavuus ja hinnat kytketään tuotannossa lippukaupan rajapintaan.</p>
    </div>
  </aside>
</template>
