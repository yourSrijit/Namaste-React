import Search from "./Search";
const CardShimmer = () => {
    return (
      <div className="shimmer-card">
        <div className="shimmer-img stroke animate"></div>
        <div className="shimmer-title stroke animate"></div>
        <div className="shimmer-tags stroke animate "></div>
        <div className="shimmer-details stroke animate "></div>
      </div>
    );
  };
  
  const Shimmer = () => {
    return (
      <div> 
      <Search/>
      <div className="shimmer-container">
        {new Array(20).fill(0).map((element, index) => {
          return <CardShimmer key={index} />;
        })}
      </div>
      </div>
    );
  };
  export default Shimmer;