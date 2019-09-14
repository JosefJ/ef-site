// This file only serves as an aggregate of all of the team data jsons form this folder

const req = require.context('../data/', true, /\.json$/);
const cache = {};

function importAll(r) {
  r.keys().forEach(
    (key) => {
      cache[r(key).project.name] = r(key);
    },
  );
}

importAll(req);

export default cache;

// "person3": {
//   "name": "",
//     "pic": "",
//     "pic2": "",
//     "role": "",
//     "bio": "",
//     "github": "",
//     "twitter": "",
//     "linkedin": "",
//     "keybase": ""
// }
