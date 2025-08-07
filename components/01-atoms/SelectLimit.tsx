interface SelectLimitProps {
  onLimitChange: (value: number) => void;
}

const SelectLimit = ({ onLimitChange }: SelectLimitProps) => {
  return (
    <div className="flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-2  ">
      <span>Select table limit</span>
      <select
        name="form"
        id="form"
        className="rounded-lg px-4 py-2"
        onChange={(e) => onLimitChange(Number(e.target.value))}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
  );
};

export default SelectLimit;
