function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}


function nowServing(x) {
  if (x.length === 0) {
    return "The line is empty"
  }
}