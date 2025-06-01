import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FocusNode, useSetFocus } from '@please/lrud';
import 'src/tv/Pages/Settings/style.scss';
import ProfileSettings from './ProfileSettings';
import DeviceSettings from './DeviceSettings';

const Settings = () => {
  const navigate = useNavigate();
  const setFocus = useSetFocus();

  useEffect(() => {
    setFocus('subscribe-btn');
  }, [setFocus]);

  const handleSubscribe = () => {
    navigate('/plans');
  };

  return (
    <div className="settings-container">

      {/* Subscription Details */}
      <div className="settings-card subscription-card">
        <div className="subscription-row">
          <div className="subscription-left">
            <h2 className="card-title">Upgrade to Enjoy Mena Tv</h2>
            <div className="user-phone-number">+91 983******0 </div>
            <div className="plan-info">(Basic Plan - Renews on 10th June 2025)</div>
          </div>
          <div className="subscription-right">
            <FocusNode onSelected={handleSubscribe} focusedClass="subscribe-btn-focused" focusId="subscribe-btn">
              <button className="subscribe-btn">Upgrade</button>
            </FocusNode>
            <div className="renewal-status">Plan starts at $10.99/month</div>
          </div>
        </div>
      </div>

      {/* Profile Settings */}
      <ProfileSettings />

      {/* Device Settings */}
      <DeviceSettings />
    </div>
  );
};

export default Settings;
