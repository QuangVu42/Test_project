import classNames from "classnames/bind"
import {useEffect} from 'react'
import WOW from 'wowjs'
import Styles from './BannerHome.module.scss'
const cx = classNames.bind(Styles)

function BannerHome(){
     // set wow
     useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
    return(
        <div className={cx('wrapper')}>
            <div className={cx('BannerHome','container')}>
                <h1 className={cx('title','animate__animated animate__fadeInUp  animate__slow animate__delay-0.5s')}>Work With Us</h1>
            </div>
        </div>
    )
}
export default BannerHome