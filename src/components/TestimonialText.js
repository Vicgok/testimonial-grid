import classes from '../styles/TestimonialText.module.scss'

const TestimonialText = props => {
  return (
    <div className={classes.testimonial__text}>
      <h2 className={`${classes.testimonial__title} ${classes.spacer}`}>
        {props.testimonial.title}
      </h2>
      <p className={`${classes.testimonial__description} ${classes.spacer}`}>
        {props.testimonial.description}
      </p>
    </div>
  )
}

export default TestimonialText
