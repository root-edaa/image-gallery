import "../styles/style.css";

const Picture = ({ pht, src }) => {
  return (
    <div className="photographer">
        <div className="image-container">
          <img className="image" src={src} alt="img" />
        </div>
        <div className="pht">{pht}</div>
      </div>
  );
};
export default Picture;
