var btnTicket = document.querySelector("[data-place=ticket]"),
    timeframe = document.querySelector("[data-action=timeframe]"),
    count     = document.querySelector("[data-action=countdown]"),
    reset     = document.querySelector(".reset"),
    interval, callInterval, counter = 4,
    callFor   = [
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
    this.textContent = "ADJ/ADJ";
    timeframe.textContent = "Completed within 1-2 weeks";
  }
  if (this.textContent === callFor[1]) {
    this.textContent = "ADJ/MDB";
    timeframe.textContent = "Completed within 1-2 weeks";
  }
  if (this.textContent === callFor[2]) {
    this.textContent = "ADJ/REF";
    timeframe.textContent = "Completed within 4-8 weeks";
  }
  if (this.textContent === callFor[3]) {
    this.textContent = "BIL/BNT";
  }
  if (this.textContent === callFor[4]) {
    this.textContent = "BIL/FUT";
  }
  if (this.textContent === callFor[5]) {
    this.textContent = "CMP/DCM";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[6]) {
    this.textContent = "CMP/NCM";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[7]) {
    this.textContent = "CNC/RST";
    timeframe.textContent = "Completed within 1-2 weeks";
  }
  if (this.textContent === callFor[8]) {
    this.textContent = "CPL/CAD";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[9]) {
    this.textContent = "CPL/CID";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[10]) {
    this.textContent = "CPL/CNT";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[11]) {
    this.textContent = "CPL/MPC";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[12]) {
    this.textContent = "CPL/NOC";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[13]) {
    this.textContent = "CPL/RPC";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[14]) {
    this.textContent = "CPL/TIS";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[15]) {
    this.textContent = "CPL/TOD";
    timeframe.textContent = "Completed within 1-2 business days";
  }

  if (this.textContent === callFor[16]) {
    this.textContent = "ENV/DUS";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[17]) {
    this.textContent = "ENV/LIT";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[18]) {
    this.textContent = "ENV/MUD";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[19]) {
    this.textContent = "ENV/NOI";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[20]) {
    this.textContent = "ENV/ODR";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[21]) {
    this.textContent = "ENV/OEI";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[22]) {
    this.textContent = "ENV/PES";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[23]) {
    this.textContent = "ENV/SPL";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[24]) {
    this.textContent = "OPS/OPS";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[25]) {
    this.textContent = "OPS/RTE";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[26]) {
    this.textContent = "SAF/SEQ";
    timeframe.textContent = "Completed within 1-2 business days";
  }
  if (this.textContent === callFor[27]) {
    this.textContent = "SAL/INC";
  }
  if (this.textContent === callFor[28]) {
    this.textContent = "SAL/CAN";
  }
  if (this.textContent === callFor[29]) {
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