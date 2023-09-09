import React from 'react';
import "./styles/education.css";
export default function Education(){
    return(
        <div className='education' id='education'>
            <h5 className='heading'>My<span>Education</span>Journey</h5>
            <div className='education-row'>
                <div className='education-column'>
                    <div className='education-box'>
                        <div className='education-content'>
                            <div className='content'>
                                <div className='year'><i className='bx bxs-calender'></i>2020-2024</div>
                                <h3>Bachelor's Degree - GITAM University</h3>
                                <p>Bachelor of Technology in Computer Science and Engineering</p>
                            </div>
                        </div>
                        <div className='education-content'>
                            <div className='content'>
                                <div className='year'><i className='bx bxs-calender'></i>2019-2020</div>
                                <h3>Higher Secondary School - Happy Valley School</h3>
                                <p>Completed my Higher Secondary Schooling in CBSE Board</p>
                            </div>
                        </div>
                        <div className='education-content'>
                            <div className='content'>
                                <div className='year'><i className='bx bxs-calender'></i>2017-2018</div>
                                <h3>Secondary School - St Teresa's School</h3>
                                <p>Completed my Secondary Schooling in ICSE Board</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}