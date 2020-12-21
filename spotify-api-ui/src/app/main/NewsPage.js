import './LandingPage.css';
import React, {useState} from 'react';

function Title(props) {
    return (
        <h1 className={"title"} onClick={props.handlerClick}>
            {props.text}
        </h1>
    );
}

function TagLine(props) {
    return (
        <p className={"tagLine"}>
            {props.text}
        </p>
    );
}

function TextLeft(props) {
    return (
        <p style={{
            textAlign: 'left',
            color: 'whitesmoke', fontSize: props.fontSize,
            marginBottom: '1em',
            fontWeight: props.fontWeight
        }}>
            {props.text}
        </p>
    );
}

function Text(props) {
    return (
        <p style={{
            textAlign: 'center',
            color: 'whitesmoke', fontSize: props.fontSize,
            fontWeight: props.fontWeight
        }}>
            {props.text}
        </p>
    );
}

function TextPrice(props) {

    return (
        <div style={{display: 'block', margin: '0 auto', textAlign: 'center'}}>
            <Text text={props.textTitle} fontSize={'350%'} fontWeight={'bold'}/>
            <div style={{display: 'flex'}}>
                <div style={{width: '50%'}}>
                    <Text text={props.textLeft} fontSize={'150%'} fontWeight={'bold'}/><br/>
                    <div>
                        <Text text={props.textSubLeft} fontSize={'125%'} fontWeight={'normal'}/>
                    </div>
                </div>
                <div style={{width: '50%'}}>
                    <Text text={props.textRight} fontSize={'150%'} fontWeight={'bold'}/><br/>
                    <div>
                        <Text text={props.textSubRight} fontSize={'125%'} fontWeight={'normal'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TextBlock(props) {
    return (
        <div style={{marginBottom: '20%'}}>
            <TextLeft text={props.textTitle} fontSize={'240%'} fontWeight={'bold'}/>
            <div style={{display: 'flex'}}>
                <div style={{width: '50%'}}>
                    <TextLeft text={props.textLeft} fontSize={'115%'} fontWeight={'normal'}/>
                </div>
                <div style={{width: '50%'}}>
                    <TextLeft text={props.textRight} fontSize={'115%'} fontWeight={'normal'}/>
                </div>
            </div>
        </div>
    );
}

function NewsPage(props) {

    let textTitle1 = "Spotify — платформа," +
        " призванная упростить" +
        " взаимодействие людей" +
        " с музыкой. ";
    let text1 = "Запишитесь онлайн —" +
        "никаких звонков. " +
        "Опишите проблему с помощью" +
        "наших подобранных специалистов" +
        "и это упростит ваше общение с" +
        "другими.";
    let text2 = "Долой бумажные журналы" +
        "записи — храните данные о" +
        "своих друзьях на наших " +
        "программах. При этом ваши" +
        "клиенты останутся только" +
        "вашими.";
    let textTitle2 = "Так как же это работает?";
    let text3 = "Пока в работе";
    let text4 = "Пока в работе";

    let textTitle3 = "Стоимость";
    let text5 = "Для парней";
    let text6 = "Бесплатно";
    let text7 = "Для девушек";
    let text8 = "Тоже бесплатно";

    return (
        <div>
            <div className={'background-text'}>
                <Title text={'Spotify'}/>
                <TagLine text={'Музыка всем и всегда.'}/>
                <div style={{margin: '5em 0 10% 5%', width: '40%'}}>
                    <TextBlock textTitle={textTitle1} textLeft={text1} textRight={text2}/>
                    <TextBlock textTitle={textTitle2} textLeft={text3} textRight={text4}/>
                </div>
                <TextPrice textTitle={textTitle3} textLeft={text5} textSubLeft={text6}
                           textRight={text7} textSubRight={text8}/>
            </div>
        </div>
    );
}

export default NewsPage
