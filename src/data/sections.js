export const sectionConfigs = {
  A1: { rows: Array(11).fill(14), type: 'standard', info: 'Pitkä sivu', price: 49 },
  A2: { rows: Array(11).fill(17), type: 'standard', info: 'Pitkä sivu', price: 49 },
  A3: { rows: Array(11).fill(11), type: 'standard', info: 'Keskilinjan tuntuma', price: 59 },
  A4: { rows: Array(11).fill(10), type: 'vip', info: 'VIP-katsomo · kentän keskilinja', price: 89, tag: 'VIP' },
  A5: { rows: Array(11).fill(11), type: 'standard', info: 'Keskilinjan tuntuma', price: 59 },
  A6: { rows: Array(11).fill(18), type: 'standard', info: 'Pitkä sivu', price: 49 },
  A7: { rows: [18,18,20,20,20,20,20,20,20,20,20,9], type: 'standard', info: 'Pitkä sivu', price: 49 },
  B2: { rows: [8,11,13,15,5,5,5], type: 'family', info: 'Pääty · sisältää perhekatsomopaikkoja', price: 39, tag: 'PERHE' },
  B3: { rows: [17,17,17,15,15,15,15], type: 'experience', info: 'Elämyskatsomo · K18 · A-oikeudet ja tarjoilu', price: 79, tag: 'K18' },
  B4: { rows: [14,14,14,14,14,14,13], type: 'family', info: 'Pääty · sisältää perhekatsomopaikkoja', price: 39, tag: 'PERHE' },
  B5: { rows: [19,19,19,19,19,19,16,16,16,16,16,16,14], type: 'family', info: 'Pääty · sisältää perhekatsomopaikkoja', price: 39, tag: 'PERHE' },
  C1: { rows: [30,30,30,30,30,26,22], type: 'standard', info: 'Päätykatsomo · perhe- ja eläkeläishintoja', price: 39 },
  C2: { rows: [28,28,28,28,24,24,24,20], type: 'standard', info: 'Päätykatsomo · perhe- ja eläkeläishintoja', price: 39 },
  C3: { rows: [6,8,12,13,7,7,7,18,18,18,18,18], type: 'standard', info: 'Kulmakatsomo · perhe- ja eläkeläishintoja', price: 39 },
  D1: { rows: [16,14,12,10,8,6,4,3], type: 'fan', info: 'Päätypuoli · fanikatsomo', price: 35, tag: 'FANIT' },
  D2: { rows: [17,15,13,11,9,7,5,4], type: 'fan', info: 'Päätypuoli · fanikatsomo', price: 35, tag: 'FANIT' },
  D3: { rows: [5,5,5,5,5,5,5,5,4,4], type: 'fan', info: 'Päätypuoli', price: 35, tag: 'FANIT' },
  D4: { rows: [1,3,5,7,9,11,13,15,18], type: 'fan', info: 'Päätypuoli', price: 35, tag: 'FANIT' },
  D5: { rows: [5,10,10,10,10,10,10,11,11,11,11], type: 'fan', info: 'Päätypuoli · fanikatsomo', price: 35, tag: 'FANIT' },
}

export const typeLabels = {
  standard: 'Peruslippu',
  vip: 'VIP',
  experience: 'Elämys K18',
  family: 'Perhealue',
  fan: 'Fanikatsomo',
}

export function isSeatSold(sectionId, rowIndex, seatNumber, rowSize) {
  return (sectionId.charCodeAt(0) * 17 + Number(sectionId.slice(1)) * 11 + rowIndex * rowSize + seatNumber) % 19 === 3
}

export function createSeat(sectionId, config, rowIndex, seatNumber) {
  return {
    id: `${sectionId}-R${rowIndex + 1}-P${seatNumber}`,
    section: sectionId,
    row: rowIndex + 1,
    number: seatNumber,
    type: config.type,
    price: config.price,
  }
}
