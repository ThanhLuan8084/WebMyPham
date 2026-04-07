import React, { Fragment } from 'react'

import { StartSlider } from '../../until/slideshow';

export default function Silde() {
 StartSlider();

  return (
    <Fragment>
       <section class="homepage-banner">
            <section>
                <div class="banner-slide"> 
                    <img  class="slide-img" src="../Images/banner1.jpg" alt="slide" />
                    <img  class="slide-img" src="../Images/banner2.jpg" alt="slide"/>
                    <img  class="slide-img" src="../Images/banner3_upscayl_2x_ultrasharp.png" alt="slide"/>

                </div>
            </section>
        </section>
    </Fragment>
  )
}

