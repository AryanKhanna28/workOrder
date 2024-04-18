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
              {"name": "Work Item 4", "total": "₹3,000"},
              {"name": "Work Item 5", "total": "₹5,000"},
              {"name": "Work Item 6", "total": "₹7,000"}
            ]
          },
        ]
      },
      // Additional Packages...
    ]
  };

  // Work Item Component
  const WorkItem = ({ item, isSelected, onSelect }) => {
    const [isChecked, setIsChecked] = useState(isSelected);

    const handleSelect = () => {
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      onSelect(newChecked);
    };

    return (
      <div>
        <input type="checkbox" checked={isChecked} onChange={handleSelect} />
        <span>{item.name}</span>
        <span style={{ marginLeft: '20px' }}>{item.total}</span>
      </div>
    );
  };

  // Activity Component
  const Activity = ({ activity, isSelected, onSelect }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const [activitySelection, setActivitySelection] = useState(
      activity.workItems.map(() => isSelected)
    );

    const handleWorkItemSelect = (index, isChecked) => {
      const newActivitySelection = [...activitySelection];
      newActivitySelection[index] = isChecked;
      setActivitySelection(newActivitySelection);
      onSelect(newActivitySelection.every((item) => item));
    };

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" checked={isSelected} onChange={onSelect} />
          <strong>{activity.name}</strong>
          <span style={{ marginLeft: '20px' }}>{activity.rate}</span>
          <span style={{ marginLeft: '20px' }}>{activity.total}</span>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? '▲' : '▼'}
          </button>
        </div>
        {isExpanded &&
          activity.workItems.map((item, index) => (
            <WorkItem
              key={index}
              item={item}
              isSelected={activitySelection[index]}
              onSelect={(isChecked) => handleWorkItemSelect(index, isChecked)}
            />
          ))}
      </div>
    );
  };

  // Package Component
  const Package = ({ pkg }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [activitySelection, setActivitySelection] = useState({});

    const handleSelect = () => {
      const newSelected = !isSelected;
      setIsSelected(newSelected);

      // Select all activities
      const newActivitySelection = {};
      pkg.activities.forEach((_, index) => {
        newActivitySelection[index] = newSelected;
      });
      setActivitySelection(newActivitySelection);
    };

    const handleActivitySelect = (index) => {
      const newActivitySelection = { ...activitySelection };
      newActivitySelection[index] = !newActivitySelection[index];
      setActivitySelection(newActivitySelection);
      setIsSelected(Object.values(newActivitySelection).every((value) => value));
    };

    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" checked={isSelected} onChange={handleSelect} />
          <strong>{pkg.name}</strong>
          <div style={{ marginLeft: '20px' }}>
            {pkg.rate}
          </div>
          <div style={{ marginLeft: '20px' }}>
            {pkg.total}
          </div>
          <button onClick={toggleExpand}>
            {isExpanded ? '▲' : '▼'}
          </button>
        </div>
        {isExpanded && (
          <div style={{ paddingLeft: '20px' }}>
            {pkg.activities.map((activity, index) => (
              <div key={index}>
                <Activity
                  activity={activity}
                  isSelected={activitySelection[index]}
                  onSelect={() => handleActivitySelect(index)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Main App Component
  const App = ({ data }) => (
    <div>
      <div style={{ paddingRight: '10px' }}>
        <strong>Packages</strong>
        <strong>Rates</strong><span>(in sqft)</span>
        <strong>Total</strong>
      </div>
      {data.Packages.map((pkg, index) => (
        <Package key={index} pkg={pkg} />
      ))}
    </div>
  );

  return <App data={data} />;
};

export default Try;
