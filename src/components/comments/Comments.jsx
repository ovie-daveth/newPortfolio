import React, { useState, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { GrEmoji } from 'react-icons/gr';

const Comments = () => {
  const [show, setShow] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [commentText, setCommentText] = useState('');
  const textAreaRef = useRef(null);

  const onEmojiClick = (event, emojiObject) => {
    if (emojiObject && emojiObject.emoji) {
      setChosenEmoji(emojiObject);
      insertEmoji()
    }
  };

  const showEmojis = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const insertEmoji = () => {
    if (chosenEmoji && chosenEmoji.emoji && textAreaRef.current) {
      const { selectionStart, selectionEnd } = textAreaRef.current;
      const emoji = chosenEmoji.emoji;
      setCommentText((prevText) => {
        const before = prevText.substring(0, selectionStart);
        const after = prevText.substring(selectionEnd);
        return before + emoji + after;
      });
    }
  };
  return (
    <div className="">
      <h1 className="text-gray-400 font-bold mb-2">Send in your comment</h1>
      <form className="relative">
        <textarea
          ref={textAreaRef}
          rows="7"
          className="w-[100%] bg-transparent border-[1px] border-gray-400 text-white placeholder:text-white"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
        <button onClick={showEmojis} className="absolute bottom-0 right-0 md:text-3xl text-xl text-yellow-500">
          <GrEmoji />
        </button>
        <div className={`${show ? 'block' : 'hidden'} absolute bottom-10 -right-32`}>
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
        <button
          className="bg-[brown] text-white px-10 py-2 font-semibold border-[1.3px] border-transparent hover:border-white hover:bg-transparent"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Comments;
