interface LinkActionProps {
  className?: string;
}

const LinkAction: React.FC<LinkActionProps> = ({ className = '' }) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      <button>Copy</button>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}
 
export default LinkAction;