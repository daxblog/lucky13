// Voorbeeld van saldo en winst/verlies
const balance = 1000;  // Voorbeeldbalans
const dailyProfitLoss = 50;  // Voorbeeld van winst/verlies van de dag
const totalProfitLoss = 200;  // Voorbeeld van totale winst/verlies

// Vervang de waarde in de HTML met de opgehaalde gegevens
document.getElementById('balance').textContent = `€${balance.toFixed(2)}`;
document.getElementById('dailyProfitLoss').textContent = `€${dailyProfitLoss.toFixed(2)}`;
document.getElementById('totalProfitLoss').textContent = `€${totalProfitLoss.toFixed(2)}`;

// Voorbeeld van een grafiek met Chart.js
const ctx = document.getElementById('profitLossChart').getContext('2d');
const profitLossChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // Maanden
        datasets: [{
            label: 'Winst/Verlies',
            data: [100, 200, 150, 250, 180, 300],  // Voorbeeld van winst/verlies per maand
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Maand'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Winst/Verlies (€)'
                }
            }
        }
    }
});

// Download de grafiek als een PNG-afbeelding
document.getElementById('download-btn').addEventListener('click', function () {
    var imgURL = profitLossChart.toBase64Image();
    var a = document.createElement('a');
    a.href = imgURL;
    a.download = 'profit_loss_chart.png';
    a.click();
});

// Voorbeeld van een foutmelding in de log
document.getElementById('errorLog').textContent = "Geen fouten gedetecteerd.";  // Hier kan je echte foutmeldingen zetten
