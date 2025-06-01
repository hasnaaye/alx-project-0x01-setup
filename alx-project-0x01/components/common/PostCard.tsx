const PostCard: React.FC<PostCardProps> = ({ text, onClick }) => {
  return (
    <div 
      className="px-4 py-2 bg-blue-500 text-white rounded" 
      onClick={onClick}>
      {text}
    </div>
  );
};
