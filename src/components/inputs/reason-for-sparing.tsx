type Props = {
  reasonForSparing: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const ReasonForSparing: React.FC<Props> = ({
  reasonForSparing,
  handleInputChange,
}) => {
  return (
    <div>
      <label htmlFor='reason-for-sparing'>Reason for sparing</label>
      <textarea
        id='reason-for-sparing'
        name='reasonForSparing'
        value={reasonForSparing}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
};

export default ReasonForSparing;
