import React from 'react';
import ContactInfo from './ContactInfo';

export default function Contact() {
    return (
        <section className="pt-5 mt-5" id="contact">
            <h1 className="text-center pt-5 mt-5">My Details</h1>
            <div className="row">
                <div className="col-8 mx-auto col-md-4 mt-3">
                    <ContactInfo />
                </div>
                <div className="col-8 mx-auto col-md-4 my-3">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-title">contact me</h2>
                            <div className="title-underline" />
                        </div>
                    </div>
                    <form className="mt-3" action="https://formspree.io/f/xyybwpwe" method="POST">
                        <div className="form-group">
                            <input type="text" name="firstName"
                                className="form-control"
                                placeholder="Olawale Otubu"
                            />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email"
                                className="form-control"
                                placeholder="email@email.com"
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" name="subject"
                                className="form-control"
                                placeholder="important!!!"
                            />
                        </div>
                        <div className="form">
                            <textarea name="message"
                                className="form-control" rows="6"
                                placeholder="your message here"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <input type="submit" value="Send"
                                className="form-control bg-primary text-white" />
                        </div>

                    </form>

                </div>

            </div>

        </section>
    )
}
