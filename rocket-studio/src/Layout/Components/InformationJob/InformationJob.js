import classNames from "classnames/bind"
import Box from '@mui/material/box'
import Grid from '@mui/material/grid'
import {useEffect} from 'react'
import WOW from 'wowjs'

import Styles from './InformationJob.module.scss'
const cx = classNames.bind(Styles)

function InformationJob (){
     // set wow
     useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
    return(
        <div className={cx('wrapper')}>
            <div className={cx('InformationJob','container')}>
                <Box sx={{flexGrow:2}} className={cx('box')}>
                    <Grid container >
                        <Grid item xs={12} lg={9}  className={cx('grid','animate__animated animate__fadeInUp  animate__slow animate__delay-1s')}>
                            <h1 className={cx('title')}>intern blockchain developer</h1>
                            <p className={cx('content')}>số lượng: 6</p>
                            <p className={cx('content')}>mức lương: $1000 - $2000</p>
                            <p className={cx('content')}>Nơi làm việc: Hà Nội</p>
                            <ul className={cx('item','animate__animated animate__fadeInUp  animate__slow animate__delay-1.5s')}>
                                <p className={cx('item_title')}>Mô tả công việc</p>
                                <li className={cx('item_content')}>- Thực hiện lập trình web cơ bản</li>
                                <li className={cx('item_content')}>- Viết code theo yêu cầu </li>
                                <li className={cx('item_content')}>- Thực hiện công việc hỗ trợ team theo yêu cầu của quản lý</li>
                            </ul>
                            <ul className={cx('item','animate__animated animate__fadeInUp  animate__slow animate__delay-2s')}>
                                <p className={cx('item_title')}>Yêu cầu ứng viên</p>
                                <li className={cx('item_content')}>- Sinh viên năm 3,4 các trường Đại học có thể làm tối thiểu 5 nửa buổi/tuần</li>
                                <li className={cx('item_content')}>- Yêu thích Game </li>
                                <li className={cx('item_content')}>- Tư duy logic và có kiến thức cơ bản về lập trình hướng đối tượng, cấu trúc dữ liệu và giải thuật.</li>
                                <li className={cx('item_content')}>- Năng động, nhiệt huyết sáng tạo phát triển game.</li>
                                <li className={cx('item_content')}>- Có tinh thần tự giác, cầu tiến, ham học hỏi.</li>
                                <li className={cx('item_content')}>- Đã tìm hiểu căn bản về Blockchain.</li>
                            </ul>
                            <ul className={cx('item','animate__animated animate__fadeInUp  animate__slow animate__delay-2.5s')}>
                                <p className={cx('item_title')}>Quyền lợi</p>
                                <li className={cx('item_content')}>- Được đào tạo các kiến thức về Blockchain Developer.</li>
                                <li className={cx('item_content')}>- Được tham gia vào dự án game Global của công ty. </li>
                                <li className={cx('item_content')}>- Được làm việc trong môi trường trẻ trung, năng động & đội ngũ đồng nghiệp luôn hỗ trợ nhiệt tình.</li>
                                <li className={cx('item_content')}>- Được training từ đầu nhứ cách viết email, cách nói chuyện với ứng viên, đăng tin tuyển dụng ...</li>
                                <li className={cx('item_content')}>- Mức lương 2.000.000 - 4.000.000 VNĐ</li>
                                <li className={cx('item_content')}>- Hỗ trợ cơm trưa 50k/ngày.</li>
                                <li className={cx('item_content')}>- Có cơ hội trở thành nhân viên chính thức của Công ty.</li>
                                <li className={cx('item_content')}>- Làm việc từ thứ 2 đến thứ 6, nghỉ t7 và CN.</li>
                                <li className={cx('item_content')}>- Hưởng các chế độ, phúc lợi như: Thưởng lễ tết, thưởng dự án; Phúc lợi và phụ cấp khác.</li>
                                <li className={cx('item_content')}>- Tea break vào các buổi chiều.</li>
                                <li className={cx('item_content')}>- Du lịch và team building 04 lần/năm.</li>
                                <li className={cx('item_content')}>- Tham gia đào tạo tiếng Anh và các kỹ năng mềm.</li>
                                <li className={cx('item_content')}>- Tham gia các hoạt động công ty: đá bóng, chơi game, team building.</li>
                            </ul>
                            <button className={cx('btn','animate__animated animate__fadeInUp  animate__slow animate__delay-3s')}>Ứng tuyển</button>
                        </Grid>
                        <Grid item xs={0} lg={3}  className={cx('grid','grid_job-post')}>
                            <div className={cx('job_post','animate__animated animate__fadeInUp  animate__slow animate__delay-1s')}>
                                <div className={cx('job_post-date')}>08/08/2021</div>
                                <h3 className={cx('job_post-title')}>Intern Blockchain Developer</h3>
                                <p className={cx('job_post-number')}>Số lượng: 02</p>
                            </div>
                            <div className={cx('job_post','animate__animated animate__fadeInUp  animate__slow animate__delay-2s')}>
                                <div className={cx('job_post-date')}>08/08/2021</div>
                                <h3 className={cx('job_post-title')}>Intern Blockchain Developer</h3>
                                <p className={cx('job_post-number')}>Số lượng: 02</p>
                            </div>
                            <div className={cx('job_post','animate__animated animate__fadeInUp  animate__slow animate__delay-3s')}>
                                <div className={cx('job_post-date')}>08/08/2021</div>
                                <h3 className={cx('job_post-title')}>Intern Blockchain Developer</h3>
                                <p className={cx('job_post-number')}>Số lượng: 02</p>
                            </div>
                            <div className={cx('job_post','animate__animated animate__fadeInUp  animate__slow animate__delay-4s')}>
                                <div className={cx('job_post-date')}>08/08/2021</div>
                                <h3 className={cx('job_post-title')}>Intern Blockchain Developer</h3>
                                <p className={cx('job_post-number')}>Số lượng: 02</p>
                            </div>
                            <div className={cx('job_post','animate__animated animate__fadeInUp  animate__slow animate__delay-5s')}>
                                <div className={cx('job_post-date')}>08/08/2021</div>
                                <h3 className={cx('job_post-title')}>Intern Blockchain Developer</h3>
                                <p className={cx('job_post-number')}>Số lượng: 02</p>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default InformationJob