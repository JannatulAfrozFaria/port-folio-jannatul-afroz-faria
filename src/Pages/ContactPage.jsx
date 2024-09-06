import { useState } from "react";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const handleEmailClick = () => {
    var params ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    const serviceID = "service_6aw8wve";
    const templateID = "template_kvh696y";
    emailjs.send(serviceID,templateID,params)
    .then((res)=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");
    })
    .catch((err)=>console.log(err));
  };
  
    return (
        <div>
             <Helmet>
                <title>Contact | Jannatul Afroz Faria</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {/* Email----- */}
                <div className="card bg-base-100 shadow-xl border-2 border-yellow-500">
                    <div className="">
                        {/* Email */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Full Name : </span>
                            </div>
                            <input id="name" type="text" placeholder="Full Name" className="input input-bordered w-full" required />
                        </label>
                        {/* Email */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Email : </span>
                            </div>
                            <input id="email" type="email" placeholder="Email Id" className="input input-bordered w-full" required />
                        </label>
                        {/* Subject */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Subject : </span>
                            </div>
                            <input id="subject" type="text" placeholder="Type here" className="input input-bordered w-full" required  />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Message : </span>
                            </div>
                            <textarea id="message" className="textarea textarea-bordered" placeholder="Your message . . ."  required ></textarea>
                        </label>
                        <button className=" btn btn-base w-full mt-4" onClick={handleEmailClick}>Send Email</button>
                    </div>
                </div>
               <div className="grid grid-cols-1 gap-6">
                    {/* Social Kinks------ */}
                    <div className="card bg-base-100  shadow-xl border-2 border-yellow-500">
                        <div className="card-body">
                            <h2 className="card-title text-yellow-600">Social Links</h2>
                            <div className="grid grid-cols-4 gap-3 mt-6 items-center">
                                {/* github----Profile */}
                                <a className="hover:cursor-pointer" href="https://github.com/JannatulAfrozFaria">
                                    <img className="w-[60px]" src='https://i.ibb.co/09mGkV2/github-green.png'alt="" />
                                </a>
                                {/* LINKED---IN */}
                                <a className="hover:cursor-pointer" href="https://www.linkedin.com/in/jannatul-afroz-faria-a61086318/">
                                    <img className="w-[50px]" src='https://i.ibb.co/5GBLJZZ/linkedin2.png'alt="" />
                                </a>
                                {/* insta---gram */}
                                <a className="hover:cursor-pointer" href="https://www.instagram.com/afroz_faria03/">
                                    <img className="w-[60px]" src='https://i.ibb.co/DLXLW91/insta.png'alt="" />
                                </a>
                                {/* FACE--BOOK */}
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
                                <p className="text-left text-yellow-400 border-2 border-yellow-500 rounded-xl bg-green-900 p-3">+8801846442222</p>
                                </div>
                        </div>
                    </div>
               </div>
            </div>
             
        </div>
    );
};

export default ContactPage;