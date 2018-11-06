import React, { Component } from 'react';
import PhotoAPI from '../api/PhotoAPI';
// import Gallery from 'react-photo-gallery';
// import Lightbox from 'react-images';
// import { render } from 'react-dom';

class HomePage extends Component {
state = {photos: [], 
  currentPhoto: 0}

// _________________________
componentDidMount(){
  PhotoAPI.fetchPhotos()
    .then((apiResponseJSON) => {
      this.setState({
        photos: apiResponseJSON
      })
    }
  )
}


// displayTest = () => {
//   if (this.state.photos.length > 0) {
//     return this.state.photos.map((item, index) => <div><img src={item.url}></img></div>);
//   }
// }
  render() {
    // let gallery = this.state.photos
    // let display = this.displayTest()

    return (
      <div>
        <h1> Headshots with Han </h1>
        <h2> {console.log(this.state.photos)}  </h2>
        <PhotoGridWrapper photos={this.state.photos}></PhotoGridWrapper>
      </div>

      // <Gallery photos={photos} onClick={this.openLightbox} />
      // <Lightbox images={photos}
      //   onClose={this.closeLightbox}
      //   onClickPrev={this.gotoPrevious}
      //   onClickNext={this.gotoNext}
      //   currentImage={this.state.currentImage}
      //   isOpen={this.state.lightboxIsOpen}
      // />

        )

  }
}

export default HomePage;

const PhotoGridWrapper = ({photos}) => <div style={{display: 'flex', flexWrap:'wrap', overflow:'none'}}><PhotoGrid photos={photos}></PhotoGrid></div>
const PhotoGrid = ({photos}) =>  photos.map((photo, index) => <div style={{width:'40%', marginLeft:'15px', paddingLeft: '10px'}}><img src={photo.url}></img></div>);