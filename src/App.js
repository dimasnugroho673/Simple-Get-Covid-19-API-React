import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DataProvince from './components/DataProvince';

class App extends Component {



  render() {

    function Carousel() {
      return (

        <section class="lead-landing-section pb-0">
          <div class="row">
            <div class="col-md-6 col-lg-5 offset-lg-1">
              <img src="template/demo/assets/images/content_section/img_5.png" alt="content" class="img-fluid" />
            </div>
            <div class="col-md-6 col-lg-5 d-flex flex-column justify-content-center">
              <h1 class="text-center mb-3">Change the way you build wesites. Forever.</h1>
              <p class="text-gray mb-3">Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                        book.</p>
              <div><button class="btn btn-danger">Page examples</button></div>
            </div>
          </div>
        </section>

      );
    }

    return (
      <div>
        <Navbar />
        <main>
          <Carousel />

          <DataProvince />

        </main>
        <Footer />
      </div>
    );
  }
}



export default App;
