export const EditorFormLabel: React.FC<{
  htmlFor?: string;
  text: string;
}> = ({ htmlFor, text }) => {
  return (
    <>
      <label className="text-xs font-medium text-gray-700" htmlFor={htmlFor}>
        {text}
      </label>
    </>
  );
};
