function updateLight(current) {
  const options = {
    green: 'yellow',
    yellow: 'red',
    red: 'green'
  };

  return options[current];
}