function calculateResult() {
    let adultCount = parseInt(document.getElementById("adults").value) || 0;
    let childCount = parseInt(document.getElementById("child").value) || 0;
    let infantsCount = parseInt(document.getElementById("infants").value) || 0;



    let selectedMadinahHotel = document.getElementById("Madinah-hotel").value;
    let hotelPrices = {
        "anwar": 10,
        "pullman": 10,
        "dallah": 10,
        "elaf": 10,
        "dar": 10
    };
    let madinahNights = parseFloat(document.getElementById("madinah-nights").value)
    let madinahHotelPrice = hotelPrices[selectedMadinahHotel] * madinahNights || 0;




    let selectedMakkahHotel = document.getElementById("Makkah-hotel").value;
    let Hotelprices2 = {
        "hyatt": 10,
        "conrad": 10,
        "hilton-suites": 10,
        "hilton-convention": 10,
        "intercontinental": 10
    };
    let makkahNights = parseFloat(document.getElementById("makkah-nights").value)
    let MakkahHotelPrice = Hotelprices2[selectedMakkahHotel] * makkahNights || 0;



    let selectedVisa = document.getElementById("visa").value;
    let visa = {
        "visit": 10,
        "work": 10,
        "umrah":10
    };
    let selectedVisaPrice = visa[selectedVisa] || 0;




    let selectedticket = document.getElementById("Airline").value;
    let ticket =
    {
        "saudia": 10,
        "flynas": 10,
        "emirates": 10,
        "qatar": 10,
        "turkish": 10
    };
    let selectedticketPrice = ticket[selectedticket] || 0;




    // Passenger costs
    let adultsTotal = 200 * adultCount;
    let childTotal = 100 * childCount;
    let infantsTotal = 50 * infantsCount;

    // Grand total including hotel prices
    let grandTotal = adultsTotal + childTotal + infantsTotal + madinahHotelPrice + MakkahHotelPrice + selectedVisaPrice + selectedticketPrice;

    document.getElementById("adultCost").innerText = adultsTotal.toLocaleString();
    document.getElementById("childCost").innerText = childTotal.toLocaleString();
    document.getElementById("infantCost").innerText = infantsTotal.toLocaleString();
    document.getElementById("grandTotal").innerText = grandTotal.toLocaleString();
}