<script setup>
const emit = defineEmits(['select-section'])

const open = (id) => emit('select-section', id)
const onKey = (event, id) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    open(id)
  }
}
</script>

<template>
  <div class="overview">
    <div class="legend" aria-label="Katsomotyypit">
      <span><i class="dot"></i>Perus</span>
      <span><i class="dot vip-dot"></i>VIP</span>
      <span><i class="dot experience-dot"></i>Elämys K18</span>
      <span><i class="dot fan-dot"></i>Fanikatsomo</span>
    </div>

    <svg viewBox="0 0 1000 700" role="img" aria-label="Kivikylän Areenan katsomolohkot">
      <path class="arena-shell" d="M115 80H845l70 45 35 120v315l-70 70H120l-70-75V180z" />
      <rect class="rink" x="235" y="180" width="530" height="310" rx="64" />
      <line class="rink-line" x1="500" y1="180" x2="500" y2="490" />
      <line class="rink-line" x1="370" y1="180" x2="370" y2="490" />
      <line class="rink-line" x1="630" y1="180" x2="630" y2="490" />
      <circle class="cage" cx="500" cy="335" r="58" />
      <text class="cage-label" x="500" y="331" text-anchor="middle">OTTELUALUE</text>
      <text class="cage-label" x="500" y="348" text-anchor="middle">HÄKKI</text>

      <g class="section" tabindex="0" role="button" aria-label="Avaa katsomolohko C1" @click="open('C1')" @keydown="onKey($event, 'C1')"><rect class="block" x="285" y="88" width="180" height="70"/><text class="label" x="375" y="130" text-anchor="middle">C1</text></g>
      <g class="section" tabindex="0" role="button" aria-label="Avaa katsomolohko C2" @click="open('C2')" @keydown="onKey($event, 'C2')"><rect class="block" x="515" y="88" width="225" height="70"/><text class="label" x="627" y="130" text-anchor="middle">C2</text></g>
      <g class="section" tabindex="0" role="button" aria-label="Avaa katsomolohko C3" @click="open('C3')" @keydown="onKey($event, 'C3')"><path class="block" d="M745 88h72l55 40v78h-88l-18-48z"/><text class="label" x="814" y="145" text-anchor="middle">C3</text></g>

      <g class="section" tabindex="0" role="button" aria-label="Avaa katsomolohko B5" @click="open('B5')" @keydown="onKey($event, 'B5')"><rect class="block" x="95" y="184" width="112" height="140"/><text class="label" x="151" y="261" text-anchor="middle">B5</text></g>
      <g class="section" tabindex="0" role="button" aria-label="Avaa katsomolohko B4" @click="open('B4')" @keydown="onKey($event, 'B4')"><rect class="block" x="95" y="327" width="75" height="76"/><text class="label" x="132" y="374" text-anchor="middle">B4</text></g>
      <g class="section" tabindex="0" role="button" aria-label="Avaa katsomolohko B3" @click="open('B3')" @keydown="onKey($event, 'B3')"><rect class="block experience-block" x="95" y="406" width="112" height="88"/><text class="label" x="151" y="452" text-anchor="middle">B3</text><text class="small-label" x="151" y="474" text-anchor="middle">ELÄMYS K18</text></g>
      <g class="section" tabindex="0" role="button" aria-label="Avaa katsomolohko B2" @click="open('B2')" @keydown="onKey($event, 'B2')"><path class="block" d="M145 502l62-7 30 74-67 30-42-55z"/><text class="label" x="183" y="552" text-anchor="middle">B2</text></g>
      <rect x="72" y="184" width="20" height="310" fill="#707887"/><text class="small-label" x="82" y="340" text-anchor="middle" transform="rotate(-90 82 340)">RAUMA ROYAL CLUB</text>
      <rect class="fan-block" x="95" y="135" width="112" height="46"/><text class="small-label" x="151" y="156" text-anchor="middle">SEISOMAKATSOMO</text><text class="small-label" x="151" y="171" text-anchor="middle">VIERASFANIT</text>

      <g class="section" tabindex="0" role="button" aria-label="Avaa katsomolohko A7" @click="open('A7')" @keydown="onKey($event, 'A7')"><path class="block" d="M225 500h100l-4 95H190l-20-27z"/><text class="label" x="256" y="556" text-anchor="middle">A7</text></g>
      <g class="section" tabindex="0" role="button" aria-label="Avaa katsomolohko A6" @click="open('A6')" @keydown="onKey($event, 'A6')"><path class="block" d="M327 500h105v95H321z"/><text class="label" x="378" y="556" text-anchor="middle">A6</text></g>
      <g class="section" tabindex="0" role="button" aria-label="Avaa katsomolohko A5" @click="open('A5')" @keydown="onKey($event, 'A5')"><path class="block" d="M434 500h82v95h-84z"/><text class="label" x="475" y="556" text-anchor="middle">A5</text></g>
      <g class="section" tabindex="0" role="button" aria-label="Avaa katsomolohko A4" @click="open('A4')" @keydown="onKey($event, 'A4')"><path class="block vip-block" d="M518 500h74v95h-76z"/><text class="label" x="555" y="548" text-anchor="middle">A4</text><text class="small-label" x="555" y="568" text-anchor="middle">VIP</text></g>
      <g class="section" tabindex="0" role="button" aria-label="Avaa katsomolohko A3" @click="open('A3')" @keydown="onKey($event, 'A3')"><path class="block" d="M594 500h76v95h-78z"/><text class="label" x="632" y="556" text-anchor="middle">A3</text></g>
      <g class="section" tabindex="0" role="button" aria-label="Avaa katsomolohko A2" @click="open('A2')" @keydown="onKey($event, 'A2')"><path class="block" d="M672 500h104l5 95H670z"/><text class="label" x="726" y="556" text-anchor="middle">A2</text></g>
      <g class="section" tabindex="0" role="button" aria-label="Avaa katsomolohko A1" @click="open('A1')" @keydown="onKey($event, 'A1')"><path class="block" d="M778 500h85l19 51-25 44h-76z"/><text class="label" x="823" y="556" text-anchor="middle">A1</text></g>

      <g v-for="id in ['D1','D2','D3','D4','D5']" :key="id" class="section" tabindex="0" role="button" :aria-label="`Avaa katsomolohko ${id}`" @click="open(id)" @keydown="onKey($event, id)">
        <path v-if="id==='D1'" class="block fan-block" d="M786 207h87v92l-46 43-41-30z"/>
        <path v-else-if="id==='D2'" class="block fan-block" d="M786 316l41 31 46 45v99h-87z"/>
        <rect v-else-if="id==='D3'" class="block fan-block" x="786" y="493" width="88" height="46"/>
        <path v-else-if="id==='D4'" class="block fan-block" d="M875 493h53l-14 72-52 15 12-40z"/>
        <path v-else class="block fan-block" d="M860 582l55-15 15 37-38 25h-50z"/>
        <text class="label" :x="id==='D4' ? 892 : id==='D5' ? 888 : id==='D3' ? 830 : 828" :y="id==='D1' ? 272 : id==='D2' ? 425 : id==='D3' ? 524 : id==='D4' ? 535 : 608" text-anchor="middle">{{ id }}</text>
      </g>
      <rect x="877" y="210" width="24" height="280" fill="#707887"/><text class="small-label" x="889" y="350" text-anchor="middle" transform="rotate(90 889 350)">KANNATTAJAKATSOMO</text>
      <g><template v-for="i in 16" :key="i"><rect :x="189 + i*41" y="610" width="37" height="28" rx="2" fill="#aeb4bf"/><text class="box-label" :x="207 + i*41" y="628" text-anchor="middle">AITIO {{ i }}</text></template></g>
      <text class="north" x="500" y="675" text-anchor="middle">AITIOT 1–32 · BUSINESS CLUB · INVA</text>
    </svg>
    <div class="mapnote">Valitse katsomolohko · paikkakartta avautuu tähän näkymään</div>
  </div>
</template>
