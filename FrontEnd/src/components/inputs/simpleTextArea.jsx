
import { Label, Textarea } from "flowbite-react";
const SimpleTextArea =({label ,value , onchange , placeholder="Leave a comment..."}) => {
  return (
    <div className="w-full">
      <div className="mb-2 block">
        <Label htmlFor="comment">{label}</Label>
      </div>
      <Textarea value={value} onChange={onchange} id="comment" placeholder={placeholder} required rows={5} />
    </div>
  );
}
export default SimpleTextArea
