import logo from '../media/images/logo.svg'
const Description = () => {
    return (
        <div className='description'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="header">
                <h4>
                    Оставьте заявку и станьте частью нашей команды
                </h4>
            </div>
            <div className="text">
                <p>Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных дизайнеров, архитекторов и декораторов, дизайн-бюро и интерьерные студии — все, кто дизайн интерьера сделали своим призванием.</p>
                <p>Партнерство мы видим как доверительные отношения, основанные на честности реализации бизнес идей в сфере создания и продаж современной, качественной, удобной, функциональной и эксклюзивной мебели.</p>
                    <p>Ознакомиться с проектами можете в нашем портфолио. Если Вы оформляете интерьеры жилых или коммерческих помещений — мы с радостью поможем Вам: составим уникальные условия сотрудничества, предоставим 3D модели (уточняйте у менеджеров) и разработаем коммерческое предложение к Вашему проекту или изображениям.</p>
            </div>
        </div>
    )
}

export default Description