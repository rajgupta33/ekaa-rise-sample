import http from "http";

http.get("http://localhost:3000/", (res) => {
  let data = "";
  res.on("data", (c) => (data += c));
  res.on("end", () => {
    console.log("Status:", res.statusCode);
    console.log("Has orbit-anim-ring-1:", data.includes("orbit-anim-ring-1"));
    console.log("Has beam-spark:", data.includes("beam-spark"));
    console.log("Has 01 · Overview:", data.includes("01 · Overview"));
    console.log("Has you. in orbit:", data.includes("you."));
    console.log("Has 440 viewBox:", data.includes("0 0 440 440"));
    console.log("Has Auto-Tour Active:", data.includes("Auto-Tour Active"));
  });
});
