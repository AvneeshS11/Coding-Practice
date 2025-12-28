import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Happy Kiss miss");
  console.log(text);
}

doStuff();
