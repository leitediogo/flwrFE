//arrow functions test
const a = [
  "obi",
  "ani",
  "luke",
  "leia"
];
const alen = a.map(function (each) { return each + 'sa' });
const alenarrow = a.map(each => each + 'aa\n');
