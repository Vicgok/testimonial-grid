import Grid from './components/Grid'
import Testimonial from './components/Testimonial'

import { testimonials_data } from './components/data/TestimonialData'
import Attribution from './components/Attributtion'

function App() {
  return (
    <>
      <Grid>
        <Testimonial
          testimonial={testimonials_data[0]}
          profile_class={'daniel'}
        />
        <Testimonial
          testimonial={testimonials_data[1]}
          profile_class={'jonathan'}
        />
        <Testimonial
          testimonial={testimonials_data[2]}
          profile_class={'jeanette'}
        />
        <Testimonial
          testimonial={testimonials_data[3]}
          profile_class={'patrick'}
        />
        <Testimonial
          testimonial={testimonials_data[4]}
          profile_class={'kira'}
        />
      </Grid>
      <Attribution />
    </>
  )
}

export default App
