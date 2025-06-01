import React, { useState } from "react";
import { FocusNode } from '@please/lrud';
import './ProfileSettings.scss';

const profiles = [
    { key: "profile-current", name: "Pushkar", img: require('src/Assets/currentUserAvatar.svg'), isKids: false },
    { key: "profile-kids", name: "Kids", img: require('src/assets/kidsUserAvatar.svg'), isKids: true },
    { key: "profile-add", name: "Add", img: null, isKids: false }
];

const ProfileSettings = () => {
    const [selected, setSelected] = useState("profile-current");

    return (
        <div className="settings-card profile-card">
            <h2 className="card-title">Profiles</h2>
            <FocusNode orientation="horizontal" className="profiles-row">
                {profiles.map(profile => (
                    <FocusNode
                        key={profile.key}
                        focusId={profile.key}
                        focusedClass="profile-focused"
                        onSelected={() => {
                            if (profile.key !== "profile-add") setSelected(profile.key);
                        }}
                    >
                        <div className="profile-avatar-wrapper">
                            {profile.img ? (
                                <img src={profile.img} alt={profile.name} className="profile-avatar-img" />
                            ) : (
                                <span className="add-icon add-profile">+</span>
                            )}
                            <div className="profile-name">{profile.name}</div>
                            {selected === profile.key && !profile.isKids && <span className="profile-checkmark">✔</span>}
                            {selected === profile.key && profile.isKids && <span className="profile-checkmark">✔</span>}
                        </div>
                    </FocusNode>
                ))}
            </FocusNode>
        </div>
    );
};

export default ProfileSettings; 