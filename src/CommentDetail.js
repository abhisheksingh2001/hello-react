import React from 'react';
import faker from 'faker';

function CommentDetail(props) {
    return (
        <div className="comment">
            <a className="avatar" href="/">
                <img className="ui avatar image" src={faker.image.avatar()} alt="Image"/>
            </a>
            <div className="content">
                <a className="header" href="/">{props.author}</a>
                <div className="description">Last seen watching <a href="/"><b>{props.movie}</b></a> </div>
                <div>{props.time}</div>
            </div>
        </div>
    );
}

export default CommentDetail;