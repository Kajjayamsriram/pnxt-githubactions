async function searchFlights() {

    const from =
        document.getElementById("from").value;

    const to =
        document.getElementById("to").value;

    const response =
        await fetch(
            `/api/flights/search?from=${from}&to=${to}`
        );

    const data =
        await response.json();

    const container =
        document.getElementById("flightResults");

    container.innerHTML = "";

    data.flights.forEach(flight => {

        container.innerHTML += `
            <div class="card">

                <div>
                    <h3>${flight.airline}</h3>

                    <p>
                        ${flight.flightNumber}
                    </p>

                    <p>
                        ${flight.from}
                        →
                        ${flight.to}
                    </p>

                    <p>
                        ${flight.departure}
                        -
                        ${flight.arrival}
                    </p>
                </div>

                <div>
                    <h3>₹${flight.price}</h3>

                    <button
                        onclick="bookFlight(${flight.id})">
                        Book
                    </button>
                </div>

            </div>
        `;
    });
}


async function loadHotels() {

    const response =
        await fetch("/api/hotels");

    const hotels =
        await response.json();

    const container =
        document.getElementById("hotelResults");

    container.innerHTML = "";

    hotels.forEach(hotel => {

        container.innerHTML += `
            <div class="card">

                <div>
                    <h3>${hotel.name}</h3>

                    <p>
                        ${hotel.city}
                    </p>

                    <p>
                        Rating: ${hotel.rating}
                    </p>
                </div>

                <div>
                    <h3>
                        ₹${hotel.pricePerNight}
                    </h3>

                    <button
                        onclick="bookHotel(${hotel.id})">
                        Book
                    </button>
                </div>

            </div>
        `;
    });
}


async function bookFlight(id) {

    const name =
        prompt("Enter your name:");

    const email =
        prompt("Enter your email:");

    if (!name || !email) {
        return;
    }

    const response =
        await fetch("/api/bookings", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                type: "flight",
                itemId: id,
                customerName: name,
                email: email
            })
        });

    const data =
        await response.json();

    alert(
        `Booking confirmed: ${data.booking.bookingId}`
    );
}


async function bookHotel(id) {

    const name =
        prompt("Enter your name:");

    const email =
        prompt("Enter your email:");

    if (!name || !email) {
        return;
    }

    const response =
        await fetch("/api/bookings", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                type: "hotel",
                itemId: id,
                customerName: name,
                email: email
            })
        });

    const data =
        await response.json();

    alert(
        `Booking confirmed: ${data.booking.bookingId}`
    );
}