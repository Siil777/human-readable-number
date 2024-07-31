module.exports = function toReadable (number) {
    if (number === 0) return 'zero';
    const belowTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const aboveHundred = ['hundred'];
    function convert(number) {
        if (number < 20) return belowTwenty[number];
        if (number < 100) return tens[Math.floor(number / 10)] + (number % 10 ? ' ' + belowTwenty[number % 10] : '');
        if (number < 1000) return belowTwenty[Math.floor(number / 100)] + ' ' + aboveHundred[0] + (number % 100 ? ' ' + convert(number % 100) : '');
    }
    return convert(number);
}