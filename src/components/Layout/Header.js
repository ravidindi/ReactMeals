import mealsImage from '../../assests/meals.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = props => {
    return <>
        <header className={styles.header}>
            <h2>React Meals</h2>
            <HeaderCartButton onClick={props.onSetCart}/>
        </header>
        <div className={styles['main-image']}>

            <img src={mealsImage} alt="a table of delicious meals!" />
        </div>

    </>
}
export default Header;