"use client";

import "@/app/globals.css";

import styles from "./details.module.css";
import { useEffect, useReducer, useRef, useState } from "react";

function ImgStyled({ src, mobile = false }) {
    return (
        <img
            onClick={() => {
                window.open(src);
            }}
            className={styles.imgStyled}
            src={src}
            style={{
                width: mobile ? "100%" : "300px",
            }}
        />
    );
}

function VideosStyled({ src, mobile = false }) {
    return (
        <iframe
            className={styles.imgStyled}
            src={src}
            style={{
                border: "none",
                width: mobile ? "100%" : "300px",
            }}
        />
    );
}

function TechBubble({ name }) {
    return (
        <div className={styles.techBubble}>
            <p className={styles.techName}>{name}</p>
        </div>
    );
}

export default function Details({ project = {}, onClose = () => {} }) {

    const { company, title, description, technologies, image, additionalInfo } =
    project;

    const ref = useRef(null);
    const imageSizeRef = useRef(null);

    const [mobile, setMobile] = useState(false);

    const [closing, setClosing] = useState(false);

    const [opacity, reduceOpacity] = useReducer((state, action) => {
        return state - 0.025;
    }, 1);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setMobile(globalThis?.window.innerWidth < 700);
        });
        setMobile(globalThis?.window.innerWidth < 700);
    }, []);

    useEffect(() => {

        if (!closing) {
            return;
        }

        setInterval(() => {

            if (opacity <= 0) {
                clearInterval();
                return;
            }

            reduceOpacity();
        }, 2);
    }, [closing]);

    useEffect(() => {
        console.log("refresh")
    }, [project])

    const getParagraphWithLinks = (paragraph) => {
        //if exists [asdf](asdf)
        const regex = /\[(.*?)\]\((.*?)\)/g;
        //split at these regex matches
        const split = paragraph.split(regex);
        //if no matches, return paragraph
        const result = [];

        if (split.length == 1) {
            return <p className={styles.description}>{paragraph}</p>;
        }

        for (let i = 0; i < split.length; i++) {
            if (i % 3 == 0) {
                result.push(<span key={i} className={styles.description}>{split[i]}</span>);
            } else {

                console.log(split)

                result.push(
                    <a
                        key={i}
                        target="_blank"
                        className={styles.linkedDescription}
                        href={split[i + 1]}
                    >
                        {split[i]}
                    </a>
                );

                i++;
            }
        }
        return <p className={styles.description}>
            {result}
        </p>;
    }

    return (
        // <div className={closing ? styles.animOutContainer : ""}>
            <div className={styles.detailsBackground} style={{
                opacity: opacity
            }}>
                <div
                    ref={ref}
                    className={styles.detailsContainer}
                    style={{
                        borderRadius: mobile ? "0px" : "50px",
                        // ref.current?.offsetHeight > globalThis?.window.innerHeight ? "0px" : "50px",
                        padding: mobile ? "50px" : "100px",
                        transform: `scaleY(${opacity})`,
                        opacity: opacity,
                        maxWidth: mobile ? "100vw" : Math.min(1250, globalThis?.window.innerWidth * .8)
                    }}
                >
                    <div
                        onClick={() => {
                            globalThis.window.history.pushState(null, null, 
                                window.location.href.split("?")[0]    
                            )
                            setClosing(true);
                            setTimeout(() => {
                                onClose();
                            }, 500);
                        }}
                        className={styles.closeContainer}
                        style={{
                            top: mobile ? 0 : 100,
                            right: mobile ? 0 : 100,
                            position: mobile ? "relative" : "absolute",
                            marginBottom: mobile ? 30 : 0,
                            zIndex: 100,
                        }}
                    >
                        <img
                            src="./images/details/close.svg"
                            className={styles.close}
                        />
                    </div>
                    <div className={styles.companyContainer}>
                        <p className={styles.company}>{company}</p>
                    </div>
                    <div className={styles.titleContainer}>
                        <p className={styles.title}>{title}</p>
                        {
                            description.map((section, index) => {

                                let heading = "";
                                let paragraph = "";

                                if (typeof section == "string")
                                {
                                    paragraph = section;
                                }
                                else {
                                    heading = section[0];
                                    paragraph = section[1];
                                }

                                return <>
                                    {heading != "" && <><h4 key={index} className={styles.descriptionHeader}>{heading}</h4></>}
                                    {
                                        getParagraphWithLinks(paragraph)
                                        // <p key={index} className={styles.description}>{paragraph}</p>
                                    }
                                </>
                            })
                        }

                        <div className={styles.technologiesContainer}>
                            {technologies && technologies.map((technology, index) => {
                                return (
                                    <TechBubble key={index} name={technology} />
                                );
                            })}
                        </div>

                        {additionalInfo && <>

                            <div className={styles.imageContainer} ref={imageSizeRef} style={{
                                flexWrap: mobile ? "wrap" : "nowrap",
                            }}>
                                {additionalInfo.videos &&
                                    additionalInfo.videos.map((src, index) => {
                                        return (
                                            <VideosStyled
                                                key={index}
                                                src={src}
                                                mobile={mobile}
                                            />
                                        );
                                    })
                                }
                                {additionalInfo.images &&
                                    additionalInfo.images.map((src, index) => {
                                        return (
                                            <ImgStyled
                                                key={index}
                                                src={src}
                                                mobile={mobile}
                                            />
                                        );
                                    })
                                }
                            </div>

                            {additionalInfo.images && additionalInfo.images.length != 0 && <p className={styles.clickImage}>{"Click Image To Enlarge" + (!mobile ? " | Side Scroll (Shift + Scroll) To View More" : "")}</p>}

                            {additionalInfo.link && (
                                <div
                                    className={styles.linkContainer}
                                    style={{
                                        justifyContent: mobile
                                            ? "center"
                                            : "flex-end",
                                    }}
                                >
                                    <div className={styles.linkOutline}>
                                        <a
                                            className={styles.link}
                                            target="_blank"
                                            href={additionalInfo.link}
                                        >
                                            VIEW
                                        </a>
                                    </div>
                                </div>
                            )}

                        </>}
                    </div>
                </div>
            </div>
        // </div>
    );
}
