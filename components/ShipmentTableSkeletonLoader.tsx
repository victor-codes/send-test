const ShipmentTableSkeletonLoader = () => {
  return (
    <div className="sli-loading">
      <div className="sli-loading-row">
        <div>
          <div className="round" />
          <div className="header">
            <div className="rectangle rectangle--long" />
            <div className="rectangle rectangle--short" />
          </div>
        </div>
        <div>
          <div className="header">
            <div className="rectangle rectangle--long" />
            <div className="rectangle rectangle--short" />
          </div>
        </div>
        <div>
          <div className="header">
            <div className="rectangle rectangle--long" />
            <div className="rectangle rectangle--short" />
          </div>
        </div>
        <div>
          <div className="rectangle rectangle--short" />
        </div>
        <div>
          <div className="rectangle rectangle--short" />
        </div>
        <div>
          <div className="rectangle rectangle--short" />
        </div>
      </div>
    </div>
  );
};

export default ShipmentTableSkeletonLoader;
