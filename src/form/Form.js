import React from "react";

export const Form = () => {
  return (
    <form>
      <div>
        お名前: <input name="text" />
      </div>
      <div>
        <textarea name="body" />
      </div>
      <button type="submit" onClick={() => {} } >
        Send
      </button>
    </form>
  );
};
