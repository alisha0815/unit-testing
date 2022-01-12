function capitalizedGreeting(name) {
  name = name.toUpperCase();
  const greet = `Hello ${name}`;
  return greet;
}

module.exports = capitalizedGreeting;
