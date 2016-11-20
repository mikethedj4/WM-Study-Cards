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
      "To change a setup fee for new customers",
      
      "General adjustment to wave a charge off a customers bill",
      "To move a credit balance from one account to another",
      "To send the customer a refund in the form of a check",
      "General note to billing (Needs soup approval)",
      "To ask billing to do something on the account in the future (no soup approval)",
      "Driver compliment",
      "Non driver compliment",
      "To reinstate an account from purple",
      "General complaint against the driver",
      "Customer identified repeat issue",
      "Complaint for the can not being delivered or removed in the specified time. (aprox: 5 buis. days)",
      "Complaint for the container being put in the wrong spot",
      "Complaint for no follow up communication",
      "Repeat missed pickups of 2 or more instances in 90 days",
      "Complaint for litter being scattered in/around the customers yard or street",
      "Complaint for trash being serviced to early or to late",
      
      "Dust coming off of truck or landfill",
      "Litter flying off of truck",
      "Mud coming off of truck",
      "Truck being to loud",
      "Truck or landfill being to smelly",
      "Environmental Other Complaint (Get soup approval)",
      "Pests coming off of truck or landfill",
      "Garbadge juice spilling out of truck",
      "General request to operations",
      "Used to request Route # when we can't find it in MAS",
      "When the driver does something unsafe",
      "To resume an account on vacation hold",
      "A case entered whenever we cancel an account",
      "Used to resend a bill or recycled container"
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
  
  if (this.textContent === callFor[21]) {
    this.textContent = "ADJ/ADJ";
    timeframe.textContent = "Completed within 1-2 weeks";
  }
  if (this.textContent === callFor[22]) {
    this.textContent = "ADJ/MDB";
    timeframe.textContent = "Completed within 1-2 weeks";
  }
  if (this.textContent === callFor[23]) {
    this.textContent = "ADJ/REF";
    timeframe.textContent = "Completed within 4-8 weeks";
  }
  if (this.textContent === callFor[24]) {
    this.textContent = "BIL/BNT";
  }
  if (this.textContent === callFor[25]) {
    this.textContent = "BIL/FUT";
  }
  if (this.textContent === callFor[26]) {
    this.textContent = "CMP/DCM";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[27]) {
    this.textContent = "CMP/NCM";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[28]) {
    this.textContent = "CNC/RST";
    timeframe.textContent = "Completed within 1-2 weeks";
  }
  if (this.textContent === callFor[29]) {
    this.textContent = "CPL/CAD";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[30]) {
    this.textContent = "CPL/CID";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[31]) {
    this.textContent = "CPL/CNT";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[32]) {
    this.textContent = "CPL/MPC";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[33]) {
    this.textContent = "CPL/NOC";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[34]) {
    this.textContent = "CPL/RPC";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[35]) {
    this.textContent = "CPL/TIS";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[36]) {
    this.textContent = "CPL/TOD";
    timeframe.textContent = "Completed within 1-2 business days";
  }

  if (this.textContent === callFor[37]) {
    this.textContent = "ENV/DUS";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[38]) {
    this.textContent = "ENV/LIT";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[39]) {
    this.textContent = "ENV/MUD";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[40]) {
    this.textContent = "ENV/NOI";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[41]) {
    this.textContent = "ENV/ODR";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[42]) {
    this.textContent = "ENV/OEI";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[43]) {
    this.textContent = "ENV/PES";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[44]) {
    this.textContent = "ENV/SPL";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[45]) {
    this.textContent = "OPS/OPS";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[46]) {
    this.textContent = "OPS/RTE";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[47]) {
    this.textContent = "SAF/SEQ";
  }
  if (this.textContent === callFor[48]) {
    this.textContent = "SAL/INC";
  }
  if (this.textContent === callFor[49]) {
    this.textContent = "SAL/CAN";
  }
  if (this.textContent === callFor[50]) {
    this.textContent = "UNR/USL";
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