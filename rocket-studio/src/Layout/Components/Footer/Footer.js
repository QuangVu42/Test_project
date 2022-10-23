import classNames from 'classnames/bind'
import Box from '@mui/material/box'
import Grid from '@mui/material/grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faTiktok,faYoutube } from '@fortawesome/free-brands-svg-icons'

import Styles from './Footer.module.scss'
import Logo from '../../../Assets/Svg/logoROCKET.svg'

const cx = classNames.bind(Styles)
function Footer(){
    return(
        <div className={cx('wrapper')}>
            <div className={cx('Footer','container')}>
                <Box sx={{flexGrow:2}} className={cx('box')}>
                    <Grid container >
                        <Grid item xs={4} lg={3}  className={cx('grid')}>
                            <img src={Logo} alt='not'  className={cx('img')} />
                        </Grid>
                        <Grid item xs={4} lg={3}  className={cx('grid')}>
                            <ul className={cx('content', 'right')}>
                                <li className={cx('item')}>
                                    <a href="./#">ABOUT</a>
                                </li>
                                <li className={cx('item')}>
                                    <a href="./#">OUR GAMES</a>
                                </li>
                                <li className={cx('item')}>
                                    <a href="./#">SUBMIT YOUR GAMES</a>
                                </li>
                                <li className={cx('item')}>
                                    <a href="./#">NEWS</a>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={4} lg={3}  className={cx('grid')}>
                            <ul className={cx('content')}>
                                <li className={cx('item')}>
                                    <div className={cx('item_box')}>
                                    <FontAwesomeIcon icon={faEnvelope}  className={cx('icon')} />
                                        <a href="./#">SUPPORT</a>
                                    </div>
                                </li>
                                <li className={cx('item')}>
                                    <div className={cx('item_box')}>
                                        <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                                        <a href="./#">GENERAL ENQUIRIES</a>
                                    </div>
                                </li>
                                <li className={cx('item')}>
                                    <div className={cx('item_box')}>
                                        <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                                        <a href="./#">JOIN OUR TEAM</a>
                                    </div>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} lg={3} className={cx('grid','icon_link-grid')}>
                            <div className={cx('grid_content')}>
                                <div className={cx('grid_icon')}><FontAwesomeIcon icon={faFacebook} className={cx('icon_link')} /></div>
                                <div className={cx('grid_icon')}><FontAwesomeIcon icon={faYoutube} className={cx('icon_link')} /></div>
                                <div className={cx('grid_icon')}><FontAwesomeIcon icon={faTiktok} className={cx('icon_link')} /></div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default Footer