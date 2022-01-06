import styled from "styled-components";

export const ShotContainer = styled.div`
    & section {
        padding: 180px var(--side-pad);
        padding-right: 0;

        @media (max-width: 1000px) {
            padding: 160px var(--side-pad);
            padding-right: 0;
        }

        @media (max-width: 480px) {
            padding: 130px var(--mob-side-pad);
            padding-right: 0;
        }

        div.shots {
            padding-right: var(--side-pad);
            margin-top: 8em;

            @media (max-width: 1000px) {
                padding-right: var(--side-pad);
            }

            @media (max-width: 480px) {
                padding-right: var(--mob-side-pad);
            }

            img {
                width: 100%;
                margin-bottom: 8em;
                /* border-radius: 16px; */
            }

            @media (max-width: 1024px) {
                margin-top: 6em;

                img {
                    margin-bottom: 4em;
                }
            }

            @media (max-width: 700px) {
                margin-top: 4em;

                img {
                    margin-bottom: 3em;
                }
            }
        }
        p.end {
            text-align: center;
            color: #5d5663;
        }

        h1 {
            /* transform: translateY(-80px); */
            animation: animateBg 14s linear infinite;
            background-image: linear-gradient(
                0deg,
                #c2bdeb,
                #dee25d,
                #b2aed5,
                #c4c56a,
                #bab8cc,
                #c2bdeb,
                #e7e987
            );
            color: transparent;
            background-clip: text;
            background-size: 100% 600%;

            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 3.5em;
            line-height: 150%;

            font-family: Oswald;

            font-weight: 500;

            @media (max-width: 480px) {
                font-size: 3em;
            }

            @media (max-width: 340px) {
                font-size: 2.6em;
            }

            @media (max-width: 300px) {
                font-size: 2.4em;
            }
        }
        @keyframes animateBg {
            0% {
                background-position: 0% 0%;
            }
            100% {
                background-position: 100% 100%;
            }
        }

        p {
            margin-top: 40px;
            @media (max-width: 480px) {
                margin-top: 24px;
            }
            color: white;
            font-size: 18px;
            line-height: 250%;

            a {
                color: var(--secondary);
                position: relative;
                display: inline-block;

                span {
                    background-color: var(--secondary);
                    width: 0%;
                    position: absolute;
                    bottom: 0;
                    height: 2px;
                    left: 0;
                    transition: width 1s;
                }
                &:hover {
                    span {
                        width: 100%;
                    }
                }
            }
        }

        div.flex-side {
            display: flex;
            justify-content: space-between;
            min-height: 2px;
            align-items: center;

            img {
                height: 500px;
                width: 100%;
                object-fit: cover;
                background-size: cover;
                background-position: 50%;
                object-position: top left;
                display: flex;

                @media (max-width: 1100px) {
                    height: 360px;
                }
                @media (max-width: 900px) {
                    height: 280px;
                }
                @media (max-width: 700px) {
                    display: none;
                }
            }
        }
    }
`;
