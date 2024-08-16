interface TextProps {
  header?: string;
  text: string;
}

export const TextBlock: React.FC<TextProps> = ({ header, text }) => {
  return (
    <div className="flex flex-col justify-center p-40 bg-yellow-50">
      <h1 className="text-center pb-20 text-5xl font-medium">{header}</h1>
      <p className="text-4xl px-[450px] font-medium">{text}</p>
    </div>
  );
};
