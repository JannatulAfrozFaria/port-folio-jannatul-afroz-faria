import { useState } from "react";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
    const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleEmailClick = () => {
    const mailtoLink = `mailto:afroz_faria03@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
    return (
        <div>
             <Helmet>
                <title>Contact | Jannatul Afroz Faria</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                {/* Email----- */}
                <div className="card bg-base-100 shadow-xl border-2 border-yellow-500">
                    <div className="">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Subject : </span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" value={subject} 
                                onChange={(e) => setSubject(e.target.value)}  />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Body : </span>
                            </div>
                            <textarea className="textarea textarea-bordered" placeholder="Your message . . ."  value={body} 
                                onChange={(e) => setBody(e.target.value)} ></textarea>
                        </label>
                        <button className=" btn btn-base w-full mt-4" onClick={handleEmailClick}>Send Email</button>
                    </div>
                </div>

                {/* Social Kinks------ */}
                <div className="card bg-base-100  shadow-xl border-2 border-yellow-500">
                    <div className="card-body">
                        <h2 className="card-title text-yellow-600">Social Links</h2>
                        <div className="grid grid-cols-3 gap-3 mt-6">
                            <a className="hover:cursor-pointer" href="https://github.com/JannatulAfrozFaria">
                                <img className="w-[60px]" src='https://i.ibb.co/09mGkV2/github-green.png'alt="" />
                            </a>
                            <a className="hover:cursor-pointer" href="https://www.instagram.com/afroz_faria03/">
                                <img className="w-[60px]" src='https://i.ibb.co/DLXLW91/insta.png'alt="" />
                            </a>
                            <a className="hover:cursor-pointer" href="https://www.facebook.com/profile.php?id=100000633748736">
                                <img className="w-[60px]" src='https://i.ibb.co/BsQ9x2V/fb-removebg-preview.png'alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Whatsapp-------- */}
                <div className="card bg-base-100  shadow-xl border-2 border-yellow-500">
                    <div className="card-body">
                            <h2 className="card-title text-yellow-600">Whatsapp</h2>
                            <div className="mt-6">
                               <p className="text-left text-yellow-400 border-2 border-yellow-500 bg-green-900 p-3">+8801301003006</p>
                            </div>
                    </div>
                </div>
            </div>
             
        </div>
    );
};

export default ContactPage;