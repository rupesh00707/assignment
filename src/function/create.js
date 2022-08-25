/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import firestore from '@react-native-firebase/firestore';

export const create = (collection, data, message) => {
  firestore()
    .collection(`${collection}`)
    .add(data)
    .then(() => {
      alert(message);
    });
};
