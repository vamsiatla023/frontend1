import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://media.istockphoto.com/id/498015636/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=JCM6aJlJLRFtai7KAza3sVQtKmxHTwGt81timhKPrJo=" />
      <Post img="https://hyderabadiruchulu.com/wp-content/uploads/2020/03/Chicken-Gravy-500x375.jpg" />
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxGxHNfgdXSml-9T7qY_cSSWfUd2By0XyBg&usqp=CAU"/>
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKWLHakS5zV_wq5GCLLQzEe7WbPD6UXgsGw&usqp=CAU"/>
      <Post img="https://c8.alamy.com/comp/TRN9R6/indian-chicken-curry-close-up-view-hot-delicious-indian-homemade-chicken-served-in-authentic-copper-bowl-TRN9R6.jpg"/>
    </div>
  );
}
