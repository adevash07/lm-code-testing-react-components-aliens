export type TwoPlusTwoProps = {
  twoPlusTwo: string;
  handleInputChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const TwoPlusTwo: React.FC<TwoPlusTwoProps> = ({
  twoPlusTwo,
  handleInputChange,
}) => {
  return (
    <div>
      <label htmlFor='two-plus-two'>2 + 2</label>
      <select
        id='two-plus-two'
        name='twoPlusTwo'
        value={twoPlusTwo}
        onChange={(e) => handleInputChange(e)}
      >
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
  );
};

export default TwoPlusTwo;
