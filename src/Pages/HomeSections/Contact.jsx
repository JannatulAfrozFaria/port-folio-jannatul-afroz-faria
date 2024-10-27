import { Link } from "react-router-dom";
import Title from "../../Components/Title";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div>
            <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="2000">
                <Title heading={'contact'}></Title>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="2000" className="card bg-base-100 shadow-xl border-2 border-yellow-500">
                    <div className="card-body">
                        <h2 className="card-title text-yellow-600">Social Links</h2>
                        <div className="grid grid-cols-4 gap-3 mt-6 items-center">
                            <a className="hover:cursor-pointer" href="https://github.com/JannatulAfrozFaria">
                                <img className="w-[60px]" src='https://i.ibb.co/09mGkV2/github-green.png'alt="" />
                            </a>
                            {/* linked----in */}
                            <a className="hover:cursor-pointer" href="https://www.linkedin.com/in/jannatul-afroz-faria-a61086318/">
                                <img className="w-[50px]" src='https://i.ibb.co/5GBLJZZ/linkedin2.png'alt="" />
                            </a>
                            {/* INSTA___GRAM */}
                            <a className="hover:cursor-pointer" href="https://www.instagram.com/afroz_faria03/">
                                <img className="w-[60px]" src='https://i.ibb.co/DLXLW91/insta.png'alt="" />
                            </a>
                            {/* FACEBOOK---Link */}
                            <a className="hover:cursor-pointer" href="https://www.facebook.com/profile.php?id=100000633748736">
                                <img className="w-[60px]" src='https://i.ibb.co/BsQ9x2V/fb-removebg-preview.png'alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* EMail -------*/}
                <div data-aos="fade-up" data-aos-delay="1500" data-aos-duration="2000" className="card bg-base-100 shadow-xl border-2 border-yellow-500">
                    <div className="card-body">
                            <h2 className="card-title text-yellow-600">Email</h2>
                            <div className="mt-6">
                                <button className="btn btn-base w-full text-lg"> 
                                    {/* <Link className="flex gap-1 justify-center items-center" to={'/contactPage'}>
                                        <MdEmail className="mr-1" />Contact me
                                    </Link> */}
                                    <a className='text-theme hover:underline' href="mailto:afroz_faria03@yahoo.com">afroz_faria03@yahoo.com</a>
                                </button>
                            </div>
                    </div>
                </div>
                {/* Phone Number------ */}
                <div data-aos="fade-left" data-aos-delay="2000" data-aos-duration="2000" className="card bg-base-100 shadow-xl border-2 border-yellow-500">
                    <div className="card-body">
                            <h2 className="card-title text-yellow-600">Whatsapp</h2>
                            <div className="mt-6">
                               <p className="text-left text-yellow-400 border-2 border-yellow-500 rounded-xl bg-green-900 p-3">+8801846442222</p>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Contact;