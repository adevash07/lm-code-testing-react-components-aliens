export type NumberOfBeingsProps = {
  numberOfBeings: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numberOfBeings,
  handleInputChange,
}) => {
  return (
    <div>
      <label htmlFor='number-of-beings'>Number of Beings</label>
      <input
        type='number'
        id='number-of-beings'
        name='numberOfBeings'
        value={numberOfBeings}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
};

export default NumberOfBeings;
