// In this drill you need to convert DNA strands to RNA.
//
// The mapping is as follows :
//
// DNA has the following strings
//
// “G” “C” “A” “T”
//
// RNA has the following strings
//
// “G” “C” “A” “U”
//
// Essentially you need to covert any “T” value inside the DNA string to a “U” for a RNA string conversion.
//
// This is easily accomplished with the .replace method, especially with only one value to look for.
// The /T/ is what we are only looking for. If you wanted to find additional replacements, just seperate with a comma.
// g is added after your selection to make it a global, otherwise it would stop after finding the first one.
// the "U" is the value to take its place.
// Done with ES6 formatting. Other methods for this soultuion would be a "var to return", or using a case.


const Conversion = dna => dna.replace(/T/g, 'U’);
