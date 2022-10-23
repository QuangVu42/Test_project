import classNames from 'classnames/bind'
import Styles from './FormJob.module.scss'
import {useEffect} from 'react'
import WOW from 'wowjs'

const cx = classNames.bind(Styles)

function FormJob(){
    // set wow
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
    return(
        <div className={cx('wrapper')}>
            <div className={cx('FormJob','container')}>
                <h1 className={cx('title','animate__animated animate__fadeInUp  animate__slow animate__delay-5s')}>Nộp hồ sơ ứng tuyển</h1>
                <form className={cx('form','animate__animated animate__fadeInUp  animate__slow animate__delay-5.5s')}>
                    <div className={cx('form_input')}>
                        <label htmlFor='name' className={cx('label')}>Họ & tên bạn (Fullname)*</label><br />
                        <input className={cx('name')} placeholder="Họ & tên" id='name' type="text"  />
                    </div>
                    <div className={cx('form_input')}>
                        <label htmlFor='email' className={cx('label')}>Địa chỉ email*</label><br />
                        <input className={cx('email')} placeholder="Nhập địa chỉ email" id="email" type="text" />
                    </div>
                    <div className={cx('form_input')}>
                        <label htmlFor='phone' className={cx('label')}>Số điện thoại(Phone number)*</label><br />
                        <input className={cx('phone')}  placeholder="Nhập số điện thoại" id="phone" type="text" />
                    </div>
                    <div className={cx('form_input-file')}>
                        <input className={cx('file')} title=" d" type="file" />
                    </div>
                    <button className={cx('submit')} >Nộp hồ sơ ứng tuyển</button>
                </form>
            </div>
        </div>
    )
}
export default FormJob