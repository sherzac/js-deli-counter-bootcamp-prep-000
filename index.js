function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ${katzDeliLine}. You are number ${katzDeliLine.length + 1} in line.';
}