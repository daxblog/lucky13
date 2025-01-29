from flask import Flask, render_template, request, send_file
from flask_socketio import SocketIO
import eventlet
import datetime
import csv

app = Flask(__name__)
socketio = SocketIO(app, async_mode='eventlet')

# Simpele wachtwoordbeveiliging
PASSWORD = "lucky13pass"
balance = 1000  # Startsaldo (simulatie)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        entered_password = request.form.get("password")
        if entered_password == PASSWORD:
            return render_template("dashboard.html")
        else:
            return render_template("index.html", error="Fout wachtwoord!")
    return render_template("index.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

# Real-time saldo updates simuleren
@app.route("/update_balance")
def update_balance():
    global balance
    balance += 5  # Simulatie van een update
    socketio.emit("update_balance", {"balance": balance})
    return "Saldo geüpdatet"

# CSV exportfunctie
@app.route("/export")
def export():
    filename = f"saldo_{datetime.datetime.now().strftime('%B_%d_%Y')}.csv"
    with open(filename, "w", newline="") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["Datum", "Saldo"])
        writer.writerow([datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'), balance])
    return send_file(filename, as_attachment=True)

if __name__ == "__main__":
    socketio.run(app, debug=True, host="0.0.0.0")
