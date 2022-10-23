import {useEffect} from 'react'
import classNames from "classnames/bind"
import Box from '@mui/material/box'
import Grid from '@mui/material/grid'
import WOW from 'wowjs'

import Styles from './LoveRocket.module.scss'
import icon1 from '../../../Assets/Svg/icon1.svg'
import icon2 from '../../../Assets/Svg/icon2.svg'
import icon4 from '../../../Assets/Svg/icon3.svg'
import icon3 from '../../../Assets/Svg/icon4.svg'
import icon5 from '../../../Assets/Svg/icon5.svg'
import icon6 from '../../../Assets/Svg/icon6.svg'

const cx = classNames.bind(Styles)

function LoveRocket(){
    const Contents = [
        {
            id:1,
            img: icon1,
            title: 'Work with giants in the field',
            content: 'Facebook, Google, Unity… are our strategic partners'
        },
        {
            id: 2,
            img: icon2,
            title: 'Professional training process',
            content: 'Mentors with years of experience in million-dollar projects'
        },
        {
            id: 3,
            img: icon3,
            title: 'Attractive salary with limitless benefits',
            content: 'Incentives from successful projects, tea break every day, gifts on official holidays, and more.'
        },
        {
            id: 4,
            img: icon4,
            title: 'Generous vacations, at least 3 times a year',
            content: 'Rocket-ers go round the world'
        },
        {
            id: 5,
            img: icon5,
            title: 'Work-life balance with 100% support',
            content: 'Football team, Swimming club, Billiards contests, Dancing club, etc.'
        },
        {
            id: 6,
            img: icon6,
            title: 'Awesome working environment',
            content: 'All necessity are provided to push creativity and inspiration'
        }
    ]

    // set wow
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])

    return(
        <div className= {cx('wrapper')}>
            <div className={cx('LoveRocket','container')}>
                <h1 className={cx('title','animate__animated animate__fadeInUp  animate__slow animate__delay-1.5s')} >What makes you love Rocket</h1>
                <div className={cx('content')}>
                    <Box sx={{flexGrow:2}} className={cx('box')}>
                        <Grid container >
                            {Contents.map((content, i) => (
                                <Grid item xs={6} lg={4} key={i} className={cx('grid')}>
                                    <span className={cx('animate__animated animate__fadeInUp animate__slow  animate__delay-2s')}>
                                        <div className={cx('header')}>
                                            <img src={content.img} alt={content.title} className={cx('img')} />
                                            <p className={cx('header_title')}>{content.title}</p>
                                        </div>
                                        <p className={cx('content')}>{content.content}</p>
                                    </span>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </div>
        </div>
    )
}
export default LoveRocket