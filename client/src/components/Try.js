import React, { useState } from 'react';

const Try = () => {
  const data = {
    "Packages": [
      {
        "name": "Civil 1",
        "rate": "100",
        "total": "₹50,000",
        "activities": [
          {
            "name": "Activity 1",
            "rate": "200",
            "total": "₹20,000",
            "workItems": [
              {"name": "Work Item 1", "total": "₹5,000"},
              {"name": "Work Item 2", "total": "₹7,000"},
              {"name": "Work Item 3", "total": "₹8,000"}
            ]
          },
          {
            "name": "Activity 2",
            "rate": "150",
            "total": "₹15,000",
            "workItems": [
              {"name": "Work Item 1", "total": "₹3,000"},
              {"name": "Work Item 2", "total": "₹5,000"},
              {"name": "Work Item 3", "total": "₹7,000"}
            ]
          },
        ]
      },
      {
        "name": "Civil 1",
        "rate": "100",
        "total": "₹50,000",
        "activities": [
          {
            "name": "Activity 1",
            "rate": "200",
            "total": "₹20,000",
            "workItems": [
              {"name": "Work Item 1", "total": "₹5,000"},
              {"name": "Work Item 2", "total": "₹7,000"},
              {"name": "Work Item 3", "total": "₹8,000"}
            ]
          },
          {
            "name": "Activity 2",
            "rate": "150",
            "total": "₹15,000",
            "workItems": [
              {"name": "Work Item 1", "total": "₹3,000"},
              {"name": "Work Item 2", "total": "₹5,000"},
              {"name": "Work Item 3", "total": "₹7,000"}
            ]
          },
        ]
      },
      {
        "name": "Civil 1",
        "rate": "100",
        "total": "₹50,000",
        "activities": [
          {
            "name": "Activity 1",
            "rate": "200",
            "total": "₹20,000",
            "workItems": [
              {"name": "Work Item 1", "total": "₹5,000"},
              {"name": "Work Item 2", "total": "₹7,000"},
              {"name": "Work Item 3", "total": "₹8,000"}
            ]
          },
          {
            "name": "Activity 2",
            "rate": "150",
            "total": "₹15,000",
            "workItems": [
              {"name": "Work Item 1", "total": "₹3,000"},
              {"name": "Work Item 2", "total": "₹5,000"},
              {"name": "Work Item 3", "total": "₹7,000"}
            ]
          },
        ]
      }
    ]
  };

  // Work Item Component
  const WorkItem = ({ item }) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
      <div>
        <input type="checkbox" checked={isSelected} onChange={() => setIsSelected(!isSelected)} />
        <span>{item.name}</span>
        <span style={{ marginLeft: '20px' }}>{item.total}</span>
      </div>
    );
  };

  // Activity Component
  const Activity = ({ activity }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ paddingRight: '10px' }}>
            <input type="checkbox" />
          </div>
          <strong>{activity.name}</strong>
          <span style={{ marginLeft: '20px' }}>{activity.rate}</span>
          <span style={{ marginLeft: '20px' }}>{activity.total}</span>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? '▲' : '▼'}
          </button>
        </div>
        {isExpanded && activity.workItems.map((item, index) => <WorkItem key={index} item={item} />)}
      </div>
    );
  };

  // Package Component
  const Package = ({ pkg }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ paddingRight: '10px' }}>
            <input type="checkbox" />
          </div>
          
          <strong>{pkg.name}</strong>
          <div style={{ marginLeft: '20px' }}>
             {pkg.rate}
          </div>
          <div style={{ marginLeft: '20px' }}>
             {pkg.total}
          </div>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? '▲' : '▼'}
          </button>
        </div>
        
        {isExpanded &&
          pkg.activities.map((activity, index) => (
            <div key={index} style={{ paddingLeft: '20px' }}>
              <Activity activity={activity} />
            </div>
          ))}
          
      </div>
    );
  };

  // Main App Component
  const App = ({ data }) => (
    <div>
    <div style={{ paddingRight: '10px' }}>
            <input type="checkbox" />
            <strong>Packages</strong>
    <strong>Rates</strong><span>(in sqft)</span>
    <strong>Toatal</strong>
    </div>
    
    {data.Packages.map((pkg, index) => (
      <Package key={index} pkg={pkg} />
    ))}
  </div>
  );

  return <App data={data} />;
};

export default Try;
