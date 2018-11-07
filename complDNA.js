function DNAStrand(dna) {
  dna = dna.toUpperCase()
  let complement = ''
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'T') {
      complement += 'A'
    }
    if (dna[i] === 'A') {
      complement += 'T'
    }
    if (dna[i] === 'C') {
      complement += 'G'
    }
    if (dna[i] === 'G') {
      complement += 'C'
    }
  }
  return complement
}

function DNAStrand(dna) {
  var dnaPairs = { 'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G' }
  return dna.replace(/./g, sym => dnaPairs[sym])
}
