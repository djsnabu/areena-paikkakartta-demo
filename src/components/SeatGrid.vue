<script setup>
import { computed } from 'vue'
import { createSeat, isSeatSold, typeLabels } from '../data/sections.js'

const props = defineProps({
  sectionId: { type: String, required: true },
  config: { type: Object, required: true },
  selectedIds: { type: Set, required: true },
})
const emit = defineEmits(['back', 'toggle-seat'])

const sectionTag = computed(() => props.config.tag || typeLabels[props.config.type])
const seatClass = (seatId) => [props.config.type, { selected: props.selectedIds.has(seatId) }]
</script>

<template>
  <div class="detail active">
    <div class="detailbar">
      <button class="back" @click="emit('back')">← Yleiskartta</button>
      <div class="section-title">
        <strong>Katsomolohko {{ sectionId }}</strong>
        <span>{{ config.info }}</span>
      </div>
      <span class="tag">{{ sectionTag }}</span>
    </div>

    <div class="seatwrap">
      <div class="front">KENTTÄ / OTTELUALUE</div>
      <div class="rows">
        <div v-for="(count, rowIndex) in config.rows" :key="rowIndex" class="row">
          <span class="rownum">{{ rowIndex + 1 }}</span>
          <template v-for="seatNumber in [...Array(count)].map((_, i) => count - i)" :key="seatNumber">
            <button
              class="seat"
              :class="seatClass(`${sectionId}-R${rowIndex + 1}-P${seatNumber}`)"
              :disabled="isSeatSold(sectionId, rowIndex, seatNumber, count)"
              :aria-label="`${sectionId}, rivi ${rowIndex + 1}, paikka ${seatNumber}, ${config.price} euroa${isSeatSold(sectionId, rowIndex, seatNumber, count) ? ', varattu' : ''}`"
              :title="`${sectionId}, rivi ${rowIndex + 1}, paikka ${seatNumber}`"
              @click="emit('toggle-seat', createSeat(sectionId, config, rowIndex, seatNumber))"
            >{{ seatNumber }}</button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
