function calcolaMRUA() {
    const accelerazione = parseFloat(prompt("Inserisci l'accelerazione (m/s²):"));
    const tempo = parseFloat(prompt("Inserisci il tempo (s):"));
    const distanza = 0.5 * accelerazione * Math.pow(tempo, 2);
    alert(`La distanza percorsa è: ${distanza.toFixed(2)} metri`);
}
