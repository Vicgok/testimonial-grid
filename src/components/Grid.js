import classes from '../styles/Grid.module.scss'

const Grid = props => {
  return <main className={classes.testimonial_container}>{props.children}</main>
}

export default Grid
