import React, { useEffect, useState } from "react";
import { FocusNode } from '@please/lrud';
import './DeviceSettings.scss';

const DEFAULT_DEVICES = [
    { name: "Smart TV - Living Room" },
    { name: "Phone - John's iPhone" },
];

const STORAGE_KEY = "ott_devices";

const DeviceSettings = () => {
    const [devices, setDevices] = useState(DEFAULT_DEVICES);
    const [toast, setToast] = useState<string | null>(null);

    // Load from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            setDevices(JSON.parse(stored));
        }
    }, []);

    // Save to localStorage whenever devices change
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(devices));
    }, [devices]);

    // Hide toast after 2 seconds
    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => setToast(null), 2000);
            return () => clearTimeout(timer);
        }
        return undefined;
    }, [toast]);

    const handleRemove = (idx: number) => {
        setDevices(devices => devices.filter((_, i) => i !== idx));
        setToast("Device successfully removed");
    };

    const handleRename = (idx: number) => {
        const newName = prompt("Enter new device name:", devices[idx].name);
        if (newName && newName.trim()) {
            setDevices(devices => devices.map((d, i) => i === idx ? { ...d, name: newName } : d));
        }
    };

    return (
        <div className="settings-card device-card">
            <h2 className="card-title">Device Settings</h2>
            <div className="device-list">
                {devices.length === 0 ? (
                    <div className="no-device-msg">No active device.</div>
                ) : (
                    devices.map((device, idx) => (
                        <div className="device-item" key={idx}>
                            <div className="device-info">
                                <span className="device-name">{device.name}</span>
                                <div className="device-status">
                                    {idx === 0 ? 'This device' : 'Active 2 days ago'}
                                </div>
                            </div>
                            <FocusNode orientation="horizontal" className="device-actions">
                                <FocusNode
                                    focusId={`rename-device-${idx}`}
                                    focusedClass="subscribe-btn-focused"
                                    onSelected={() => handleRename(idx)}
                                >
                                    <button className="remove-btn">Rename</button>
                                </FocusNode>
                                <FocusNode
                                    focusId={`logout-device-${idx}`}
                                    focusedClass="subscribe-btn-focused"
                                    onSelected={() => handleRemove(idx)}
                                >
                                    <button className="remove-btn">Remove</button>
                                </FocusNode>
                            </FocusNode>
                        </div>
                    ))
                )}
            </div>
            {toast && (
                <div className="device-toast">
                    {toast}
                </div>
            )}
        </div>
    );
};

export default DeviceSettings; 