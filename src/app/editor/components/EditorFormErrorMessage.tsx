export const EditorFormMessageError = ({ message }: { message?: string }) => {
  if (!message) return null;
  return <span className="text-xs text-red-500">{message}</span>;
};
