import classes from '../styles/Testimonial.module.scss'
import TestimonialProfile from './TestimonialProfile'
import TestimonialText from './TestimonialText'

const Testimonial = props => {
  return (
    <article
      className={`${classes.testimonial} ${classes[props.profile_class]}`}
      key={props.testimonial.id}>
      <TestimonialProfile testimonial={props.testimonial} />
      <TestimonialText testimonial={props.testimonial} />
    </article>
  )
}

export default Testimonial
