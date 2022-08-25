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

export const getAllDocFromCollection = async (collection, setter) => {
  const data = await firestore().collection(collection).get();
  const collData = data.docs.map(doc => {
    return {...doc.data(), id: doc.id};
  });
  setter(collData);
};

export const updateById = (collection, id, data, fn) => {
  firestore()
    .collection(collection)
    .doc(id)
    .update(data)
    .then(() => {
      fn();
    });
};
