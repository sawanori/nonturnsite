export default `

.splash{
    position: fixed;
    tip: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #000;
    z-index: 10000;
    color: #fff;
    text-align: center;
    line-height: 90vh;
}

.splash h1{
 font-size:80px;
}

.splash.display-none{
    position: fixed;

    tip: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #000;
    z-index: -100;
    color: #fff;
    text-align: center;
    line-height: 90vh;
    transition:all 1s;
}
@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

.fadeIn {
    opacity: 0;
    animation: fadeIn .8s ease-in forwards;
}
`;