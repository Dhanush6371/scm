document.addEventListener("DOMContentLoaded", () => {
  const createShipmentPage = document.getElementById("createShipmentPage");
  const homePage = document.getElementById("homePage");
  const createShipmentBtn = document.getElementById("createShipmentBtn");
  const shipmentForm = document.getElementById("shipmentForm");

  createShipmentBtn.addEventListener("click", () => {
    homePage.classList.add("hidden");
    createShipmentPage.classList.remove("hidden");
  });

  shipmentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Shipment created successfully!");
    shipmentForm.reset();
    createShipmentPage.classList.add("hidden");
    homePage.classList.remove("hidden");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const deviceDataStreamPage = document.getElementById("deviceDataStreamPage");
  const getDeviceDataBtn = document.getElementById("getDeviceDataBtn");
  const deviceDataBody = document.getElementById("deviceDataBody");
  const deviceDataBtn = document.getElementById("deviceDataBtn");

  // Dummy data for demonstration
  const deviceData = [
    {
      deviceId: "4587434500",
      batteryLevel: "6.0",
      firstSensorTemp: "19.0°C",
      routeFrom: "Mumbai, India",
      routeTo: "Louisville, USA",
      timestamp: "2023-02-06 10:19 AM",
    },
    {
      deviceId: "4587434500",
      batteryLevel: "2.9",
      firstSensorTemp: "22.4°C",
      routeFrom: "Mumbai, India",
      routeTo: "Louisville, USA",
      timestamp: "2023-02-06 12:49 PM",
    },
    {
      deviceId: "4587434500",
      batteryLevel: "5.6",
      firstSensorTemp: "19.7°C",
      routeFrom: "Hyderabad, India",
      routeTo: "Louisville, USA",
      timestamp: "2023-02-06 01:19 PM",
    },
  ];

  // Navigation to Device Data Stream page
  deviceDataBtn.addEventListener("click", () => {
    hideAllPages();
    deviceDataStreamPage.classList.remove("hidden");
  });

  // Fetch and display device data
  getDeviceDataBtn.addEventListener("click", () => {
    const selectedDeviceId = document.getElementById("deviceId").value;
    const filteredData = deviceData.filter(
      (data) => data.deviceId === selectedDeviceId
    );

    // Clear existing table rows
    deviceDataBody.innerHTML = "";

    // Populate table with filtered data
    filteredData.forEach((data) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${data.deviceId}</td>
        <td>${data.batteryLevel}</td>
        <td>${data.firstSensorTemp}</td>
        <td>${data.routeFrom}</td>
        <td>${data.routeTo}</td>
        <td>${data.timestamp}</td>
      `;
      deviceDataBody.appendChild(row);
    });
  });

  // Function to hide all pages
  function hideAllPages() {
    document.querySelectorAll(".page").forEach((page) => {
      page.classList.add("hidden");
    });
  }
});



