import { db } from './firebase-config.js';
import { collection, addDoc, getDocs } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const form = document.getElementById("registrationForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const teamName = teamName.value.trim();
  const leaderName = leaderName.value.trim();
  const leaderID = leaderID.value.trim();
  const contact = contact.value.trim();
  const email = email.value.trim();

  if(!teamName || !leaderName || !leaderID || !contact || !email){
    alert("All fields required!");
    return;
  }

  try{
    await addDoc(collection(db, "teams"), {
      teamName,
      leaderName,
      leaderID,
      contact,
      email,
      createdAt: new Date()
    });

    // WhatsApp Auto Message
    const message = `Hello ${leaderName}, Your team ${teamName} is registered for Elite BGMI Scrims!`;
    window.open(`https://wa.me/${contact}?text=${encodeURIComponent(message)}`);

    alert("Registration Successful!");
    form.reset();
  }
  catch(err){
    alert("Error saving data");
    console.log(err);
  }
  tsParticles.load("tsparticles", {
  background: { color: "#000" },
  particles: {
    number: { value: 60 },
    color: { value: "#00f2ff" },
    links: { enable: true, color: "#6a00ff" },
    move: { enable: true, speed: 2 }
  }
});
});