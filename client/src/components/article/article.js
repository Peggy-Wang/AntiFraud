import React from 'react';
import {Divider} from 'antd'
import './article.min.css'
const Article = () => {



    const dataList = [
        {   id:"1",
            imgsrc:"https://www.vvhan.com/headImg/thumb/www.vvhan.com[32]-img.jpg",
            time:"2022-04-5",
            title:"电信诈骗",
            describe:"点击诈骗短信不明链接，填写个人信息，银行卡账户余额被转移,点击诈骗短信不明链接，填写个人信息，银行卡账户余额被转移,点击诈骗短信不明链接，填写个人信息，银行卡账户余额被转移",
            caseState:"completed",

        },
        {   id:"2",
            imgsrc:"https://www.vvhan.com/headImg/thumb/www.vvhan.com[32]-img.jpg",
            time:"2022-04-5",
            title:"电信诈骗",
            describe:"点击诈骗短信不明链接，填写个人信息，银行卡账户余额被转移,点击诈骗短信不明链接，填写个人信息，银行卡账户余额被转移,点击诈骗短信不明链接，填写个人信息，银行卡账户余额被转移",
            caseState:"review",

        },
        {   id:"3",
            imgsrc:"https://www.vvhan.com/headImg/thumb/www.vvhan.com[32]-img.jpg",
            time:"2022-04-5",
            title:"电信诈骗",
            describe:"点击诈骗短信不明链接，填写个人信息，银行卡账户余额被转移,点击诈骗短信不明链接，填写个人信息，银行卡账户余额被转移,点击诈骗短信不明链接，填写个人信息，银行卡账户余额被转移",
            caseState:"completed",

        },  
        {   id:"4",
            imgsrc:"https://www.vvhan.com/headImg/thumb/www.vvhan.com[32]-img.jpg",
            time:"2022-04-5",
            title:"电信诈骗",
            describe:"点击诈骗短信不明链接，填写个人信息，银行卡账户余额被转移,点击诈骗短信不明链接，填写个人信息，银行卡账户余额被转移,点击诈骗短信不明链接，填写个人信息，银行卡账户余额被转移",
            caseState:"review",

        },
        {   id:"5",
            imgsrc:"https://www.vvhan.com/headImg/thumb/www.vvhan.com[32]-img.jpg",
            time:"2022-04-5",
            title:"电信诈骗",
            describe:"点击诈骗短信不明链接，填写个人信息，银行卡账户余额被转移,点击诈骗短信不明链接，填写个人信息，银行卡账户余额被转移,点击诈骗短信不明链接，填写个人信息，银行卡账户余额被转移",
            caseState:"completed",

        },
    ]
    return (
        <div className='article'>
            <div className='article_bg'>
                <div className='article_all'>
                    {
                        dataList.map((item)=>{//箭头函数
                            return(
                                <div key={item.id}>
                                     <div className='article_item'>
                        <div className='line'></div>
                        <div className='article_left'>
                            <a href={`/admin/article_about/${item.id}`}>
                                <img src={item.imgsrc} alt='图片'>
                                </img>
                                <time dateTime="2022-04-5">{item.time}</time>
                            </a>
                            
                        </div>
                        <div className='article_right'>
                            <div className='right_title'>
                                <a href={`/admin/article_about/${item.id}`}><span>{item.title}</span></a>
                            </div>
                            <div className='right_describe'>
                            <a href={`/admin/article_about/${item.id}`}><span>{item.describe}</span></a>
                            </div>
                            <div className='right_bottom'>
                                <div className='time'>{item.time}</div>
                                
                                <div className='classification'>
                                    <span style={item.caseState === "completed"?{color:'green'}:{color:'#f5d000'}}>{item.caseState === "completed" ? "已完成":"审核中"}</span>
                                     </div>
                                
                            </div>
                           
                        </div>
                    </div>
                    <Divider dashed />
                                </div>
                            )
                        })
                    }
                    <div className='article_item'>
                    <div className='line'></div>
                        <div className='article_left'>
                            <a href="/admin/article_about/index">
                                <img src='https://www.vvhan.com/headImg/thumb/www.vvhan.com[32]-img.jpg' alt='图片'>

                                </img>
                                <time dateTime="2022-04-5">2022-04-5</time>
                            </a>
                        </div>
                        <div className='article_right'>
                            <div className='right_title'>
                                <a href='/admin/article_about/index'><span>电信网络诈骗</span></a>
                            </div>
                            <div className='right_describe'>
                            <a href='/admin/article_about/index'><span>点击诈骗短信不明链接，填写个人信息，银行卡账户余额被转移,点击诈骗短信不明链接，填写个人信息，银行卡账户余额被转移,点击诈骗短信不明链接，填写个人信息，银行卡账户余额被转移</span></a>
                            </div>
                            <div className='right_bottom'>
                                <div className='time'>2020年4月5日</div>
                                
                                <div className='classification'>
                                    <svg className="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                                        <path d="M512.2 564.743a76.818 76.818 0 0 1-30.973-6.508L108.224 393.877c-26.105-11.508-42.56-35.755-42.927-63.272-.384-27.44 15.356-52.053 41.042-64.232l373.004-176.74c20.591-9.737 45.16-9.755 65.75.017L917.68 266.39c25.668 12.188 41.39 36.792 41.024 64.231-.384 27.5-16.821 51.73-42.908 63.237l-372.57 164.377a77.18 77.18 0 0 1-31.025 6.508zM139.843 329.592l370.213 163.241c1.291.56 3.018.567 4.345-.009l369.758-163.128-369.706-175.464v-.01c-1.326-.628-3.158-.636-4.502 0l-370.108 175.37zm748.015 1.858h.175-.175zM512.376 941.674c-10.348 0-20.8-2.32-30.537-6.997L121.05 778.624c-18.113-7.834-26.454-28.87-18.62-46.983 7.835-18.112 28.862-26.488 46.993-18.61l362.08 156.629 345.26-156.366c17.939-8.166 39.14-.253 47.324 17.746 8.166 17.964.227 39.157-17.729 47.324l-344.51 156.61c-9.196 4.449-19.281 6.7-29.471 6.7z" fill="#444">
                                            </path><path d="M871.563 515.449L511.81 671.775 152.358 515.787v73.578a34.248 34.248 0 0 0 20.76 31.48l301.518 129.19c11.806 5.703 24.499 8.546 37.175 8.546s25.367-2.843 37.174-8.546L850.82 620.534a34.248 34.248 0 0 0 20.744-31.474V515.45z" fill="#ff6a18">
                                                </path>
                                                </svg><span style={{color:'green'}}>已完成</span>
                                                </div>
                                
                            </div>
                           
                        </div>
                    </div>
                    <Divider dashed />
                </div>
                
            </div>
        </div>
        
    );
};

export default Article;