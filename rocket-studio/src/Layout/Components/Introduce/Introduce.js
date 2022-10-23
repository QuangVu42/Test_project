import classNames from 'classnames/bind'
import Box from '@mui/material/box'
import Grid from '@mui/material/grid'
import {useEffect} from 'react'
import WOW from 'wowjs'

import Styles from './Introduce.module.scss'
import background1 from '../../../Assets/Images/work_demo.png'
import background2 from '../../../Assets/Images/work-demo_1.png'
import background3 from '../../../Assets/Images/work_demo-2.png'

const cx = classNames.bind(Styles)
function Introduce (){
    const Introduces = [
        {
            id: 1,
            content: "Rocket’s people are experts in many fields, from Marketing to IT, from an artist to a video creator, but all share a single passion: Gaming. We are working toward the best games to share that passion with millions of players around the world.",
            background: background1
        },
        {
            id: 2,
            content: 'In Rocket, there is no boss-worker boundary. Everyone has a voice, and no one is left behind. Constant communication and mutual learning are how we keep a dynamic, active environment for all.',
            background: background2
        },
        {
            id: 3,
            content: 'We believe that success will come automatically when we help others gain success. For that reason, we always work as teams and value people’s contributions even the slightest. Sometimes, a small idea can make an outstanding result.',
            background: background3
        }
    ]
     // set wow
     useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
    return(
        <div className={cx('wrapper')}>
            <div className={cx('Intriduce','container')}>
               <Box sx={{flexGrow:2}} className={cx('box')}>
                        {Introduces.map(introduce=>(
                            <Grid container key={introduce.id}>
                                <Grid item xs={12} md={6} className={introduce.id %2 ===0 ? cx('grid','animate__animated animate__fadeInUp  animate__slow animate__delay-3s') : cx('active')}>
                                    <img className={cx('img')} src={introduce.background} alt='not' />
                                </Grid>
                                <Grid item xs={12} md={6} className={cx('grid','animate__animated animate__fadeInUp  animate__slow animate__delay-3.5s')} id="id_remove2">
                                    <div className={cx('title')}>{introduce.content}</div>
                                </Grid>
                                <Grid item xs={12} md={6} className={introduce.id %2 !==0 ? cx('grid','animate__animated animate__fadeInUp  animate__slow animate__delay-3s') : cx('active')}>
                                   <img className={cx('img')} src={introduce.background} alt='not' />
                                </Grid>
                                <Grid item xs={12} md={6} className={cx('grid','animate__animated animate__fadeInUp  animate__slow animate__delay-3.5s')} id="id_remove1">
                                    <div className={cx('title')}>{introduce.content}</div>
                                </Grid>
                            </Grid>
                        ))}

               </Box>
            </div>
        </div>
    )
}
export default Introduce