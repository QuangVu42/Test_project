import classNames from 'classnames/bind'

import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Styles from './DefaultLayout.module.scss'

const cx = classNames.bind(Styles)
function DefaultLayout ({childern}){
    return(
        <div className={cx('wrapper')}>
            <Header />
                <div>{childern}</div>
            <Footer />
        </div>
    )
}

export default DefaultLayout