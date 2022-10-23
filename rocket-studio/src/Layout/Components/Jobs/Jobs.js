import classNames from 'classnames/bind'
import Box from '@mui/material/box'
import Grid from '@mui/material/grid'
import {useEffect} from 'react'
import WOW from 'wowjs'

import Styles from './Jobs.module.scss'
const cx = classNames.bind(Styles)
function Jobs(){
    const ContentJobs = [
        {
            id: 1,
            content: 'Unity Developer',
            number: 5,
        },
        {
            id: 2,
            content: 'HTML5/Cocos2dx Developer',
            number: 5,
        },
        {
            id: 3,
            content: 'Game Designer',
            number: 1,
        },
        {
            id: 4,
            content: '2D/3D Artist',
            number: 2,
        },
        {
            id: 5,
            content: 'UA Marketing',
            number: 2,
        },
        {
            id: 6,
            content: 'Video Creative',
            number: 1,
        },
    ]
     // set wow
     useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
    return(
        <div className={cx('wrapper')}>
            <div className={cx('Jobs','container')}>
                <h1 className={cx('title','animate__animated animate__fadeInUp  animate__slow animate__delay-4s')}>Are you ready to succeed together?</h1>
                <div className={cx('content')}>
                    <Box sx={{flexGrow:2}} className={cx('box','animate__animated animate__fadeInUp  animate__slow animate__delay-4.5s')}>
                        {ContentJobs.map(job=>(
                            <Grid container key={job.id} className={cx('grid')}>
                                <Grid item xs={7} className={cx('content')} >{job.content}</Grid>
                                <Grid item xs={3}  className={cx('number')}>Số lượng: {job.number}</Grid>
                                <Grid item xs={2} ><a href="/#" className={cx('span')}>Chi tiết</a></Grid>
                            </Grid>
                        ))}
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Jobs