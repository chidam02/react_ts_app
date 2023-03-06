import user1 from "../../images/unsplash_user1.png";
import favIcon from "../../images/bookmark.png";
import cardImg1 from "../../images/blog-card-img.png";
import arrowUpRight from "../../images/arrow-up-right.svg";
import axios from "axios"

export default function BlogCard(){

    const handleBlog = async() => {
        const res = await axios.get('http://localhost:5000/blogs',{headers: {
            Authorization: sessionStorage.getItem('accessToken')
        }});

        alert(res.data.message)
    }


    return <>
    <div className="blog-card py-3 rounded-3 bg-white" style={{minHeight:"608px", width:"356px",boxShadow: "0px 4px 16px rgba(141, 223, 214, 0.2)", marginBottom:"80px"}}>

        <div className="blog-card-header d-flex justify-content-between py-0 px-3">
            <img src={user1} alt="profile-mini" height="48px" width="48px" className="rounded-circle"/>

            <div className="d-flex flex-column justify-content-between">
                <div className="bold">Dhrajee Dabhi</div>
                <div className="text-muted fs-sm">22 Dec . 3 min read</div>
            </div>

            <img src={favIcon} alt="fav-icon" height="24px" width="24px"/>

        </div>


        <img src={cardImg1} alt='card-img' height="240px" width="100%" className="my-4"/>

        <div className="px-3">
            <p className="fs-4 bold text-black">How to Overcome from your stress?</p>

            <p className="bold my-4">
                CrossVal provides you some great blogs that can make you financial independent. Apply these blogs into your daily life and see the changes.
            </p>

            <button onClick={handleBlog} className="ps-0 ms-0 btn btn-link gradient-text">Read more <img src={arrowUpRight} height="24px" width="24px" alt="up-arrow" className="ms-1"/></button>
        </div>
    </div>
    </>
}