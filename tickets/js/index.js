var btnTicket = document.querySelector("[data-place=ticket]"),
    timeframe = document.querySelector("[data-action=timeframe]"),
    count     = document.querySelector("[data-action=countdown]"),
    reset     = document.querySelector(".reset"),
    interval, callInterval, counter = 4,
    callFor   = [
      "Used to pickup trash on same day of service",
      "To pickup trash after the customers normal service day",
      "Used to return pickup trash after a customer disputes a not out",
      "Used when we create a new customer or add a new service to their account",
      "When a customer is cancelled to reinstate their account",
      "Telling the driver a 1 time piece of important information",
      "To deliver a can for free",
      "To deliver a can at a charge",
      "To remove a can for free",
      "To remove a can at a charge",
      "To repair the lid or wheels on a can for free",
      "To replace a damaged can for free",
      "To replace a damaged can at a charge (when customer admits they broke it)",
      "When the driver notices a can is damaged",
      "Bulk pickup at no charge",
      "To remove a large item at a charge",
      "To pickup an appliance for free",
      "To pickup an appliance at a charge",
      "One time yard waste pickup",
      "As a return trip to service after their schedualed pickup time",
      "To change a setup fee for new customers"
    ],
    quesInt   = Math.floor(Math.random() * callFor.length),
    countDown = function() {
      count.textContent = counter;

      if (counter === -1) {
        clearInterval(interval);
        reset.textContent = "";
        location.reload(true);
      } else {
        counter--;
      }
    };

btnTicket.textContent = callFor[quesInt];

btnTicket.onclick = function() {
  if (this.textContent === callFor[0]) {
    this.textContent = "TKT/ETA";
    timeframe.textContent = "Completed either by end of day on the day it is entered or by noon the following business day.";
  }
  if (this.textContent === callFor[1]) {
    this.textContent = "TKT/MPU";
    timeframe.textContent = "Completed either by end of day on the day it is entered or by noon the following business day.";
  }
  if (this.textContent === callFor[2]) {
    this.textContent = "TKT/COU";
    timeframe.textContent = "Completed within 24-48 hours";
  }
  if (this.textContent === callFor[3]) {
    this.textContent = "TKT/NEW";
    timeframe.textContent = "Completed on the Service Day";
  }
  if (this.textContent === callFor[4]) {
    this.textContent = "TKT/RES";
    timeframe.textContent = "Completed on the Service Day";
  }
  if (this.textContent === callFor[5]) {
    this.textContent = "TKT/NOT";
    timeframe.textContent = "Completed on the Service Day";
  }
  if (this.textContent === callFor[6]) {
    this.textContent = "TKT/DEL";
    timeframe.textContent = "Usually within 5-10 business days (Refer to GP for exacts)";
  }
  if (this.textContent === callFor[7]) {
    this.textContent = "TKT/DLC";
    timeframe.textContent = "Usually within 5-10 business days (Refer to GP for exacts)";
  }
  if (this.textContent === callFor[8]) {
    this.textContent = "TKT/REM";
    timeframe.textContent = "Usually within 5-10 business days (Refer to GP for exacts)";
  }
  if (this.textContent === callFor[9]) {
    this.textContent = "TKT/RMC";
    timeframe.textContent = "Usually within 5-10 business days (Refer to GP for exacts)";
  }
  if (this.textContent === callFor[10]) {
    this.textContent = "TKT/RPR";
    timeframe.textContent = "Completed within 5 business days (Check service alerts for delays)";
  }
  if (this.textContent === callFor[11]) {
    this.textContent = "TKT/SWP";
    timeframe.textContent = "Completed within 5 business days (Check service alerts for delays)";
  }
  if (this.textContent === callFor[12]) {
    this.textContent = "TKT/SWC";
    timeframe.textContent = "Completed within 5 business days (Check service alerts for delays)";
  }
  if (this.textContent === callFor[13]) {
    this.textContent = "TKT/DIS";
    timeframe.textContent = "Completed within 10 business days";
  }
  if (this.textContent === callFor[14]) {
    this.textContent = "TKT/BLK";
    timeframe.textContent = "Usually done on customer's service day (Refer to GP for exacts)";
  }
  if (this.textContent === callFor[15]) {
    this.textContent = "TKT/BLC";
    timeframe.textContent = "Usually done on customer's service day (Refer to GP for exacts)";
  }
  if (this.textContent === callFor[16]) {
    this.textContent = "TKT/WGD";
    timeframe.textContent = "Usually done on customer's service day (Refer to GP for exacts)";
  }
  if (this.textContent === callFor[17]) {
    this.textContent = "TKT/WGC";
    timeframe.textContent = "Usually done on customer's service day (Refer to GP for exacts)";
  }
  if (this.textContent === callFor[18]) {
    this.textContent = "TKT/ONC";
    // timeframe.textContent = "";
  }
  if (this.textContent === callFor[19]) {
    this.textContent = "TKT/XPU";
    timeframe.textContent = "(Return trip) The following business day by the end of day";
  }
  if (this.textContent === callFor[20]) {
    this.textContent = "TKT/ADC";
    timeframe.textContent = "Closed out by us right away";
  }

  this.className = "answer";
  count.textContent = "5";
  interval = setInterval(countDown, 1000);
};

window.onkeyup = function(e) {
  if (e.keyCode == 13) {
    btnTicket.click();
  }
};