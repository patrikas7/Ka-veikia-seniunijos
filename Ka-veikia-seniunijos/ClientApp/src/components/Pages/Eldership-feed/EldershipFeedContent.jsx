﻿import React, { useContext } from 'react';
import Button from '../../Button/Button';
import Popup from '../../Popup/Popup';
import MessageForm from '../../MessageForm/MessageForm';
import Post from '../../Post/Post';
import { GlobalContext } from './Context/GlobalState';
import eldershipPhoto from '../../../images/Vilnius.png';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';
import './_eldership-style.scss';
import '../../Utils/_base.scss';

export default function EldershipFeedContent({ photo, eldershipName }) {
    const { state, toggleMessageForm } = useContext(GlobalContext);

    return (
        <div className='eldership__content'>
            <div className='eldership__photo-container'>
                <img
                    src={eldershipPhoto}
                    alt={'Vilnius'}
                    className='eldership__photo' />
            </div>

            <div className='eldership__header--content'>
                <h1 className='header__primary eldership__header'>Vilniaus seniūnija</h1>

                <div className='eldership__header--buttons'>
                    <Button
                        text={<FontAwesomeIcon icon={faEnvelope} />}
                        styling='btn btn--icon'
                        onClick={toggleMessageForm}
                    />

                    <Button
                        text={<FontAwesomeIcon icon={faMap} />}
                        styling='btn btn--icon'
                    />
                </div>
            </div>

            {state.isMessageFormOpen &&
                <Popup>
                    <MessageForm onClose={toggleMessageForm}/>
                </Popup>
            }

            <div className='eldership__feed'>
                <Post
                    eldershipName={'Vilniaus seniūnija'}
                    pictureSource={eldershipPhoto}
                    content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                    date={"2022-03-19"}
                />

                <Post
                    eldershipName={'Vilniaus seniūnija'}
                    pictureSource={eldershipPhoto}
                    content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                    date={"2022-03-19"}
                />

                <Post
                    eldershipName={'Vilniaus seniūnija'}
                    pictureSource={eldershipPhoto}
                    content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                    date={"2022-03-19"}
                />


                <Post
                    eldershipName={'Vilniaus seniūnija'}
                    pictureSource={eldershipPhoto}
                    content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                    date={"2022-03-19"}
                />

                <Post
                    eldershipName={'Vilniaus seniūnija'}
                    pictureSource={eldershipPhoto}
                    content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                    date={"2022-03-19"}
                />

                <Post
                    eldershipName={'Vilniaus seniūnija'}
                    pictureSource={eldershipPhoto}
                    content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                    date={"2022-03-19"}
                />

                <Post
                    eldershipName={'Vilniaus seniūnija'}
                    pictureSource={eldershipPhoto}
                    content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                    date={"2022-03-19"}
                />

                <Post
                    eldershipName={'Vilniaus seniūnija'}
                    pictureSource={eldershipPhoto}
                    content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                    date={"2022-03-19"}
                />

                <Post
                    eldershipName={'Vilniaus seniūnija'}
                    pictureSource={eldershipPhoto}
                    content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                    date={"2022-03-19"}
                />

                <Post
                    eldershipName={'Vilniaus seniūnija'}
                    pictureSource={eldershipPhoto}
                    content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                    date={"2022-03-19"}
                />

                <Post
                    eldershipName={'Vilniaus seniūnija'}
                    pictureSource={eldershipPhoto}
                    content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                    date={"2022-03-19"}
                />
            </div>
        </div>
    );
}

EldershipFeedContent.prototype = {
    photo: PropTypes.string.isRequired,
    eldershipName: PropTypes.string.isRequired
}