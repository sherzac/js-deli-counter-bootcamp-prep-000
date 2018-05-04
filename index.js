function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ${katzDeliLine[-1]}. You are number ${katzDeliLine.length + 1} in line.';
}