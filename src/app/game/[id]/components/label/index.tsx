interface LabelProps {
  name: string;
}

export const Label = ({ name }: LabelProps) => {
  return (
    <div className="flex-grow sm:flex-grow-0 py-1 px-3 bg-slate-200 text-black rounded-lg hover:font-bold duration-200">
      {name}
    </div>
  );
};
