import React from "react";


const contactText = [
    {
        link: "https://open.kakao.com/o/gM7YLzwf",
        title: "KAKAO : webstupids",
    },
    {
        link: "mailto:yesul_park@naver.com",
        title: "mail : yesul_park@naver.com",
    },
];

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact__inner">
                <h2 className="contact__title">Contact</h2>
                <div className="contact__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="contact__text">
                    <div className="text">
                        {contactText.map((contact, key)=> (
                            <div key={key}>
                                <a
                                href={Contact.link}
                                rel="noopener noreferrer"
                                target="_blank"> {contact.title}
                                </a>
                                </div>
                        ))}
                    </div>
                </div>
                <div className="contact__lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    );
};

export default Contact;

//export default Contact; : Contact 컴포넌트를 외부에서 재사용할 수 있도록 
//내보내기(export) 설정을 하고 있습니다. 이렇게 다른 파일에서 해당 컴포넌트를 불러와 사용할 수 있습니다.