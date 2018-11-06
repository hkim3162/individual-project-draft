
const fetchPhotoByID = (photoID) => {
  return fetch(`http://localhost:3001/v1/photos/${photoID}`, {mode: 'cors'})
    .then((response) => response.json());
}

const fetchPhotos = () => {
  return fetch(`http://localhost:3001/v1/photos`, {mode: 'cors'})
    .then((response) => response.json())
}

export default {
  fetchPhotoByID: fetchPhotoByID,
  fetchPhotos: fetchPhotos
}