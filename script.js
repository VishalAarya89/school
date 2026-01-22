function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("show");
  });
});
  
  // Admission form message
  document.getElementById("admissionForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("formMsg").innerText = "✅ Your application has been submitted successfully!";
    this.reset();
  });

  // Career form
document.getElementById("careerForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("careerMsg").innerText = "✅ Your job application has been submitted successfully!";
  this.reset();
});

// Contact form
document.getElementById("contactForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("contactMsg").innerText = "✅ Thank you! Your message has been sent.";
  this.reset();
});

function sendMessage(e){
  e.preventDefault(); // page reload stop

  // Get form values
  let name = document.querySelector('#contactForm input[type="text"]').value;
  let mobile = document.querySelector('#contactForm input[type="tel"]').value;
  let email = document.querySelector('#contactForm input[type="email"]').value;
  let msg = document.querySelector('#contactForm textarea').value;

  // --------- WhatsApp ---------
  let waNumber = "918102375744"; // 91 + school mobile 
  let waText = `New Enquiry%0AName: ${name}%0AMobile: ${mobile}%0AEmail: ${email}%0AMessage: ${msg}`;
  let waURL = `https://wa.me/${waNumber}?text=${waText}`;

  // --------- Email ---------
  let emailTo = "vishalaarya81023@gmail.com"; 
  let emailSub = encodeURIComponent("New Enquiry from Website");
  let emailBody = encodeURIComponent(`Name: ${name}\nMobile: ${mobile}\nEmail: ${email}\nMessage: ${msg}`);
  let mailURL = `mailto:${emailTo}?subject=${emailSub}&body=${emailBody}`;

  // Show sending message
  document.getElementById("contactMsg").innerText = "✅ Sending message...";

  // Open WhatsApp and Email in new tabs
  window.open(waURL, "_blank");
  window.open(mailURL, "_blank");

  // Clear form
  document.getElementById("contactForm").reset();
}


// Demo student result data
const results = [
  {
    roll: "101",
    name: "Amit Kumar",
    class: "V",
    subjects: [
      ["Hindi", 75],
      ["English", 68],
      ["Math", 82],
      ["Science", 70],
      ["Social Science", 74]
    ]
  },
  {
    roll: "102",
    name: "Riya Kumari",
    class: "V",
    subjects: [
      ["Hindi", 85],
      ["English", 78],
      ["Math", 88],
      ["Science", 80],
      ["Social Science", 84]
    ]
  }
];

function searchResult(){
  const roll = document.getElementById("rollInput").value;
  const box = document.getElementById("resultBox");

  const student = results.find(s => s.roll === roll);

  if(!student){
    box.innerHTML = "<p style='color:red;'>❌ Result not found</p>";
    return;
  }

  let total = 0;
  let rows = student.subjects.map(sub => {
    total += sub[1];
    return `<tr><td>${sub[0]}</td><td>${sub[1]}</td></tr>`;
  }).join("");

  box.innerHTML = `
    <div class="result-card">
      <h3>Student Name: ${student.name}</h3>
      <p>Class: ${student.class} | Roll No: ${student.roll}</p>

      <table class="result-table">
        <tr><th>Subject</th><th>Marks</th></tr>
        ${rows}
        <tr><th>Total</th><th>${total}</th></tr>
      </table>
    </div>
  `;
}

// Demo attendance data
const attendance = [
  {
    roll: "101",
    name: "Amit Kumar",
    class: "V",
    present: 22,
    total: 26
  },
  {
    roll: "102",
    name: "Riya Kumari",
    class: "V",
    present: 24,
    total: 26
  }
];

function checkAttendance(){
  const roll = document.getElementById("attRoll").value;
  const box = document.getElementById("attendanceBox");

  const student = attendance.find(s => s.roll === roll);

  if(!student){
    box.innerHTML = "<p style='color:red;'>❌ Attendance record not found</p>";
    return;
  }

  const percent = ((student.present / student.total) * 100).toFixed(2);

  box.innerHTML = `
    <div class="att-card">
      <h3>Student Name: ${student.name}</h3>
      <p>Class: ${student.class} | Roll No: ${student.roll}</p>

      <table class="att-table">
        <tr><th>Total Days</th><th>Present Days</th><th>Attendance %</th></tr>
        <tr><td>${student.total}</td><td>${student.present}</td><td>${percent}%</td></tr>
      </table>
    </div>
  `;
}

// Demo fee data
const feeData = [
  {
    roll: "101",
    name: "Amit Kumar",
    class: "V",
    totalFee: 12000,
    paid: 8000
  },
  {
    roll: "102",
    name: "Riya Kumari",
    class: "V",
    totalFee: 12000,
    paid: 12000
  }
];

function checkFee(){
  const roll = document.getElementById("feeRoll").value;
  const box = document.getElementById("feeBox");

  const student = feeData.find(s => s.roll === roll);

  if(!student){
    box.innerHTML = "<p style='color:red;'>❌ Student record not found</p>";
    return;
  }

  const pending = student.totalFee - student.paid;
  const status = pending > 0 ? "Pending" : "Paid";

  box.innerHTML = `
    <div class="fee-card">
      <h3>Student Name: ${student.name}</h3>
      <p>Class: ${student.class} | Roll No: ${student.roll}</p>

      <table class="fee-table">
        <tr><th>Total Fee</th><th>Paid</th><th>Pending</th><th>Status</th></tr>
        <tr>
          <td>₹${student.totalFee}</td>
          <td>₹${student.paid}</td>
          <td>₹${pending}</td>
          <td class="${pending>0?'pending':'paid'}">${status}</td>
        </tr>
      </table>
    </div>
  `;
}



