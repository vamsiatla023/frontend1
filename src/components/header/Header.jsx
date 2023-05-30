import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">FOOD & TASTE</span>
        <span className="headerTitleLg">TASTE_BUDS</span>
      </div>
      <img
        className="headerImg"
        src="https://media-cdn.tripadvisor.com/media/photo-p/1b/e6/f4/6b/the-foodie-works-dishes.jpg"
        alt=""
      />
    </div>
  );
}
