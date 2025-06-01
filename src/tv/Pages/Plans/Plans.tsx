import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FocusNode, useSetFocus } from '@please/lrud';
import './style.scss';
import { ORIENTATION } from "src/tv/Constants/Contants";

const plans = [
  {
    name: 'Super',
    color: '#000000',
    features: [
      { label: '2', desc: '2 devices' },
      { label: 'Ads', desc: 'With Ads' },
      { label: 'FHD', desc: 'Full HD\n1080p' },
      { label: <><i className="icon-tv" /></>, desc: ' TV, Laptop & Mobile' },
      { label: <><i className="icon-dolby" /></>, desc: ' Dolby Atmos' },
    ],
    prices: [
      { label: '3 Months', price: '$299', sub: '$100 per month' },
    ],
  },
  {
    name: 'Premium',
    color: '#222',
    features: [
      { label: '4', desc: '4 devices' },
      { label: 'No Ads', desc: 'No Ads\n(except live)' },
      { label: '4K', desc: '4K 2160p +\nDolby Vision' },
      { label: <><i className="icon-tv" /></>, desc: ' TV, Laptop & Mobile' },
      { label: <><i className="icon-dolby" /></>, desc: ' Dolby Atmos' },
    ],
    prices: [
      { label: '3 Months', price: '$499', sub: '$166 per month' },
    ],
  },
];

const Plans = () => {
  const setFocus = useSetFocus();
  const navigate = useNavigate();

  useEffect(() => {
    setFocus("plan-3months");
  }, [setFocus]);



  return (
    <div className="plans-container">
      <h1 className="plans-title">Subscribe & unlock exclusive entertainment</h1>
      <div className="plans-list">
        {plans.map((plan, idx) => (
          <div className={`plan-card plan-${plan.name.toLowerCase()}`} style={{ background: plan.color }} key={plan.name}>
            <div className="plan-header">
              <span className="plan-name">{plan.name}</span>
              {plan.name === 'Premium' && <span className="ads-free">ADS FREE</span>}
            </div>
            <div className="plan-content">
              <div className="plan-features">
                {plan.features.map((f, i) => (
                  <div className="plan-feature" key={i}>
                    <div className="feature-label">{f.label}</div>
                    <div className="feature-desc">{f.desc}</div>
                  </div>
                ))}
              </div>
              <div className="plan-prices">
                {plan.prices.map((p, i) => {
                  const isFirst = i === 0 && idx === 0;
                  return (
                    <FocusNode
                      key={i}
                      {...(isFirst ? { focusId: "plan-3months" } : {} as any)}
                      focusedClass="plan-price-focused"
                      orientation={ORIENTATION.VERTICAL}
                    >
                      <div className="plan-price">
                        <div className="price-label">{p.label}</div>
                        <div className="price-value">{p.price}</div>
                        <div className="price-sub">{p.sub}</div>
                      </div>
                    </FocusNode>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;