import Picture from "../components/Picture";
import data from "../helper/data";

const Homepage = () => {
  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="container">
      {data.map((data) => {
        const { photographer, src } = data;
        return (
          <>
            <Picture pht={photographer} src={src.large} />
          </>
        );
      })}
      </div>
   
    </div>
  );
};

export default Homepage;
