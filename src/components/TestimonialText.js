import classes from '../styles/TestimonialText.module.scss'

const TestimonialText = props => {
  return (
    <div className={classes.testimonial__text}>
      <p className={`${classes.testimonial__title} ${classes.spacer}`}>
        {props.testimonial.title}
      </p>
      <p className={`${classes.testimonial__description} ${classes.spacer}`}>
        {props.testimonial.description}
      </p>
    </div>
  )
}

export default TestimonialText
