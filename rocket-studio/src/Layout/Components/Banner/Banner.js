import {useEffect} from 'react'
import classNames from "classnames/bind"
import WOW from 'wowjs'
import Styles from './Banner.module.scss'
const cx = classNames.bind(Styles)
function Banner (){
    // set wow
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner','container')}>
                <div className={cx('content')}>
                    <h1 className={cx('animate__animated animate__fadeInUp  animate__slow animate__delay-0.5s')}>succeed together!</h1>
                    <p className={cx('animate__animated animate__fadeInUp  animate__slow animate__delay-1s')}>Thinking big is good. But without a supportive team, one can hardly do big. Rocket has everything you need to develop your ability and nurture your passion. So why hesitate?</p>
                    <button className={cx('content_btn','animate__animated animate__fadeInUp  animate__slow animate__delay-1.5s')}>job list</button>
                </div>
            </div>
            <span className={cx('span')}></span>
        </div>
    )
}
export default Banner